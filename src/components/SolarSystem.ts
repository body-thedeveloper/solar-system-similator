import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { planetData, PlanetData } from '../data/planetData';

// Set up global variable for access from outside
declare global {
  interface Window {
    solarSystem?: {
      updateSimulationSpeed: (speed: number) => void;
    };
  }
}

export function setupSolarSystem(
  container: HTMLDivElement,
  onPlanetClick: (planet: PlanetData | { id: 'sun', [key: string]: any }) => void,
  options?: { hideMoons?: boolean; showLabels?: boolean; planetScale?: number; tFunc?: (key: any) => string; currentLanguage?: 'en' | 'ar' }
) {
  // Scene & renderer
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowShadowMap;
  container.appendChild(renderer.domElement);

  // Camera & controls
  const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 200000);
  camera.position.set(0, 50, 100);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.minDistance = 20;
  controls.maxDistance = 100000;

  // Lighting & background
  scene.add(new THREE.AmbientLight(0x111111));
  const sunLight = new THREE.PointLight(0xffffff, 2, 1000, 0.5);
  sunLight.position.set(0, 0, 0);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.width = 2048;
  sunLight.shadow.mapSize.height = 2048;
  sunLight.shadow.radius = 2;
  scene.add(sunLight);

  // Loaders & textures
  const loader = new THREE.TextureLoader();
  const sunTexture = loader.load(`${import.meta.env.BASE_URL}images/sun.jpg`);
  const moonTexture = loader.load(`${import.meta.env.BASE_URL}images/moon.jpg`);
  const saturnRingTexture = loader.load(`${import.meta.env.BASE_URL}images/saturn_ring1.png`);

  // Configuration constants
  const ORBIT_DISTANCE_SCALE = 1.8;    // spread planetary orbits
  // Keep authoritative km->visual scale small so moons stay small visually (matches original look)
  const MOON_SIZE_SCALE = 1.0;
  const AUTH_MOON_VISUAL_SCALE = 0.35 // scale applied when converting km ratios -> visual units
  const MOON_ORBIT_BASE = 3.5;         // base orbit radius multiplier for moons
  let simulationSpeed = 0.6;           // default as requested
  let currentPlanetScale = options?.planetScale ?? 1;

  // Real planet radii (km) for ratio calculations
  const PLANET_REAL_RADII_KM: Record<string, number> = {
    mercury: 2439.7, venus: 6051.8, earth: 6371.0, mars: 3389.5,
    jupiter: 69911, saturn: 58232, uranus: 25362, neptune: 24622, pluto: 1188.3
  };

  // Authoritative major moons (name + radius in km).
  const AUTHORITATIVE_MOONS: Record<string, { name: string; radius: number }[]> = {
    mercury: [], venus: [],
    earth: [{ name: 'Moon', radius: 1737.1 }],
    mars: [{ name: 'Phobos', radius: 11.267 }, { name: 'Deimos', radius: 6.2 }],
    jupiter: [
      { name: 'Io', radius: 1821.6 }, { name: 'Europa', radius: 1560.8 },
      { name: 'Ganymede', radius: 2634.1 }, { name: 'Callisto', radius: 2410.3 }
    ],
    saturn: [
      { name: 'Titan', radius: 2574.7 }, { name: 'Rhea', radius: 763.8 }, { name: 'Iapetus', radius: 734.5 },
      { name: 'Dione', radius: 561.4 }, { name: 'Tethys', radius: 533.1 }, { name: 'Enceladus', radius: 252.1 }, { name: 'Mimas', radius: 198.2 }
    ],
    uranus: [
      { name: 'Titania', radius: 788.9 }, { name: 'Oberon', radius: 761.4 }, { name: 'Umbriel', radius: 584.7 },
      { name: 'Ariel', radius: 578.9 }, { name: 'Miranda', radius: 235.8 }
    ],
    neptune: [{ name: 'Triton', radius: 1353.4 }, { name: 'Proteus', radius: 210.0 }, { name: 'Nereid', radius: 170.0 }],
    pluto: [{ name: 'Charon', radius: 606.0 }, { name: 'Nix', radius: 49.0 }, { name: 'Hydra', radius: 51.0 }]
  };

  // Extra moon info to populate moon cards (diameter/mass/fun facts where known)
  const MOON_DETAILS: Record<string, {
    description?: string;
    funFact?: string;
    mass?: string;
    dayLength?: string;
    yearLength?: string;
    avgTemp?: string;
    diameterKm?: number;
  }> = {
    moon: {
      description: 'Earth’s Moon is the only place beyond Earth where humans have set foot.',
      funFact: 'The Moon influences Earth\'s tides and stabilizes its axial tilt.',
      diameterKm: 3474.2,
      avgTemp: '-20°C (lunar day average)'
    },
    phobos: {
      description: 'Phobos is the larger and closer of Mars’s two moons. It orbits very close to Mars.',
      funFact: 'Phobos is slowly spiraling inward and will either crash into Mars or break apart into a ring.',
      diameterKm: 22.533,
      avgTemp: '-40°C'
    },
    deimos: {
      description: 'Deimos is the smaller, outer moon of Mars.',
      funFact: 'Deimos is likely a captured asteroid.',
      diameterKm: 12.4,
      avgTemp: '-40°C'
    },
    io: { description: 'Io is the most volcanically active body in the Solar System.', funFact: 'Io has hundreds of volcanoes.' , diameterKm: 3643.2 },
    europa: { description: 'Europa likely has a subsurface salty ocean under its ice.', funFact: 'Europa is a prime target for ocean-world exploration.', diameterKm: 3121.6 },
    ganymede: { description: 'Ganymede is the largest moon in the Solar System.', funFact: 'Ganymede is larger than Mercury.', diameterKm: 5268.2 },
    callisto: { description: 'Callisto is heavily cratered and ancient.', funFact: 'Callisto\'s surface is one of the oldest landscapes in the Solar System.', diameterKm: 4820.6 },
    titan: { description: 'Titan is Saturn’s largest moon with a thick atmosphere.', funFact: 'Titan has lakes of liquid methane and ethane.', diameterKm: 5149.4 },
    enceladus: { description: 'Enceladus has cryovolcanic plumes that spray water vapor.', funFact: 'Enceladus ejects water vapor into space from its south polar region.', diameterKm: 504.2 },
    mimas: { description: 'Mimas is known for a large impact crater that gives it a "Death Star" look.', funFact: 'The crater Herschel makes Mimas look like the Death Star.', diameterKm: 396.4 },
    triton: { description: 'Triton is Neptune’s largest moon and is geologically active.', funFact: 'Triton orbits retrograde and may be a captured Kuiper belt object.', diameterKm: 2706.8 },
    charon: { description: 'Charon is Pluto’s largest moon and is large relative to Pluto.', funFact: 'Pluto–Charon are sometimes considered a binary dwarf-planet system.', diameterKm: 1212.0 }
  };

  // Containers & lookups
  const planets: THREE.Group[] = [];
  const planetMeshes: Record<string, THREE.Mesh> = {};
  const planetOrbits: { line: THREE.Line, planetId: string, points: THREE.Vector3[] }[] = [];
  const moonGroups: Record<string, THREE.Group> = {};
  const moonMeshes: Record<string, THREE.Mesh> = {};
  const labelSprites: Record<string, THREE.Sprite> = {};
  // Orbit hover state
  let hoveredOrbit: THREE.Line | null = null;
  let hoveredOrbitId: string | null = null;
  let orbitLabelSprite: THREE.Sprite | null = null;
  let lastMouseN = new THREE.Vector2(0, 0);

  // Helper: add starfield background using texture
  function addStarfieldBackground() {
    // Create a large sphere to act as skybox
    const starfieldGeometry = new THREE.SphereGeometry(19000, 32, 32);
    
    // Load starfield texture
    const starfieldTexture = loader.load(`${import.meta.env.BASE_URL}images/stars.jpg`);
    
    // Create material and flip it so stars are visible from inside
    const starfieldMaterial = new THREE.MeshBasicMaterial({
      map: starfieldTexture,
      side: THREE.BackSide
    });
    
    const starfieldMesh = new THREE.Mesh(starfieldGeometry, starfieldMaterial);
    scene.add(starfieldMesh);
  }
  
  // Call starfield instead of procedural stars
  addStarfieldBackground();

  // Sun mesh
  const sun = new THREE.Mesh(new THREE.SphereGeometry(8.5, 32, 32), new THREE.MeshBasicMaterial({ map: sunTexture }));
  sun.name = 'sun';
  sun.userData = { isSun: true };
  scene.add(sun);

  // Create planets and moons
  planetData.forEach((planet) => {
    const planetGroup = new THREE.Group();
    // Orbit (visual)
    const segments = 256;
    const scaledDistance = planet.distanceFromSun * ORBIT_DISTANCE_SCALE;
    const orbitPts: THREE.Vector3[] = [];
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      orbitPts.push(new THREE.Vector3(Math.cos(theta) * scaledDistance, 0, Math.sin(theta) * scaledDistance));
    }
    const orbitGeom = new THREE.BufferGeometry().setFromPoints(orbitPts);
    // Use black orbits by default; keep them slightly translucent
    const orbitMat = new THREE.LineBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.33 });
    const orbit = new THREE.Line(orbitGeom, orbitMat);
    orbit.userData = { planetId: planet.id };
    scene.add(orbit);
    planetOrbits.push({ line: orbit, planetId: planet.id, points: orbitPts });

    // Planet mesh
    const planetGeo = new THREE.SphereGeometry(planet.radius, 32, 32);
    const planetMat = new THREE.MeshBasicMaterial({ toneMapped: false });
    planetMat.emissiveIntensity = 0.1;
    loader.load(`${import.meta.env.BASE_URL}images/${planet.texture}`, (t) => { planetMat.map = t; planetMat.needsUpdate = true; });
    const planetMesh = new THREE.Mesh(planetGeo, planetMat);
    planetMesh.castShadow = true;
    planetMesh.receiveShadow = true;
    planetMesh.name = planet.id;
    planetGroup.add(planetMesh);
    planetMeshes[planet.id] = planetMesh;

    // Initial planet position on scaled orbit
    const initialAngle = Math.random() * Math.PI * 2;
    planetGroup.position.x = Math.cos(initialAngle) * scaledDistance;
    planetGroup.position.z = Math.sin(initialAngle) * scaledDistance;

    // Saturn rings
    if (planet.id === 'saturn') {
      const ringInnerRadius = planet.radius * 1.5;
      const ringOuterRadius = planet.radius * 2.5;

      const ringGeometry = new THREE.LatheGeometry(
        [
          new THREE.Vector2(ringInnerRadius, 0),
          new THREE.Vector2(ringOuterRadius, 0),
          new THREE.Vector2(ringOuterRadius, 0.1),
          new THREE.Vector2(ringInnerRadius, 0.1)
        ],
        64
      );

      // Use the preloaded saturnRingTexture, make it repeat around the ring (U direction)
      saturnRingTexture.wrapS = THREE.RepeatWrapping;
      saturnRingTexture.wrapT = THREE.RepeatWrapping;
      // repeat U (around circumference) more than V (radial) — tweak the first value to change banding density
      saturnRingTexture.repeat.set(6, 1);

      const ringMaterial = new THREE.MeshBasicMaterial({
        map: saturnRingTexture,
        transparent: true,
        side: THREE.DoubleSide,
        alphaTest: 0.05
      });
      ringMaterial.emissiveIntensity = 0.3;

      const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
      ringMesh.castShadow = true;
      ringMesh.receiveShadow = true;
      // Make the ring horizontal (no axial tilt)
      ringMesh.rotation.x = 0;
      // Slight offset to avoid z-fighting with the planet
      ringMesh.position.y = 0.02;
      ringMesh.renderOrder = 1;
      planetGroup.add(ringMesh);
    }

    // Moon creation: prefer authoritative list when available
    const authoritative = AUTHORITATIVE_MOONS[planet.id];
    let moonsToUse: { name?: string; radius: number }[] = [];
    // Prefer visual sizes provided in planetData (these are already small relative to planet)
    if (planet.moons && planet.moons.length > 0) {
      moonsToUse = planet.moons.map(m => ({ name: m.name, radius: m.radius }));
    } else if (Array.isArray(authoritative) && authoritative.length > 0) {
      // fallback to authoritative (km) list only when planetData has no moons
      moonsToUse = authoritative.map(m => ({ name: m.name, radius: m.radius }));
    }

    if (moonsToUse.length > 0) {
      const moonGroup = new THREE.Group();
      moonsToUse.forEach((moon, idx) => {
        // If moon.radius looks like a small visual value (from planetData) use it directly.
        // If it's a km value (large >50) convert using real ratio but keep it small via AUTH_MOON_VISUAL_SCALE.
        let visualMoonRadius: number;
        const moonVal = moon.radius;
        const planetRealKm = PLANET_REAL_RADII_KM[planet.id];
        if (typeof moonVal === 'number' && moonVal > 50 && planetRealKm) {
          const ratio = moonVal / planetRealKm;
          visualMoonRadius = planet.radius * ratio * AUTH_MOON_VISUAL_SCALE;
        } else if (typeof moonVal === 'number') {
          // assume already visual units (these are the "small" originals)
          visualMoonRadius = Math.max(0.08, moonVal);
        } else {
          visualMoonRadius = Math.max(planet.radius * 0.06, 0.08);
        }
        // Ensure moon remains clearly smaller than planet (clamp conservatively)
        visualMoonRadius = Math.min(visualMoonRadius, Math.max(planet.radius * 0.6, planet.radius * 0.08));

        const moonGeo = new THREE.SphereGeometry(visualMoonRadius, 16, 16);
        const moonMat = new THREE.MeshBasicMaterial({ map: moonTexture });
        moonMat.emissiveIntensity = 0.3;
        const moonMesh = new THREE.Mesh(moonGeo, moonMat);
        moonMesh.castShadow = true;
        moonMesh.receiveShadow = true;

        // Orbit radius around planet (local to planetGroup)
        let moonDistance = planet.radius * MOON_ORBIT_BASE + (idx * planet.radius * 1.1);
        moonDistance = Math.max(moonDistance, planet.radius + visualMoonRadius + 0.5);

        const moonAngle = Math.random() * Math.PI * 2;
        moonMesh.position.x = Math.cos(moonAngle) * moonDistance;
        moonMesh.position.z = Math.sin(moonAngle) * moonDistance;

        moonMesh.userData = {
          name: moon.name || `moon-${idx}`,
          parentId: planet.id,
          realRadiusKm: (typeof moon.radius === 'number' && moon.radius > 50) ? moon.radius : undefined,
          orbitRadius: moonDistance,
          orbitSpeed: 0.02 + (Math.random() * 0.02),
          angle: moonAngle,
          isMoon: true
        };

        const moonKey = `${planet.id}:${moonMesh.userData.name}`;
        moonMeshes[moonKey] = moonMesh;
        moonGroup.add(moonMesh);
      });

      planetGroup.add(moonGroup);
      moonGroups[planet.id] = moonGroup;
    }

    // Store orbit speed & angle on group
    planetGroup.userData = { orbitSpeed: planet.orbitSpeed, angle: initialAngle, planetId: planet.id };
    scene.add(planetGroup);
    planets.push(planetGroup);
  });

  // --- ORBIT HOVER & LABELS ---
  function showOrbitLabel(planetId: string, mouseN: THREE.Vector2) {
    if (orbitLabelSprite) {
      scene.remove(orbitLabelSprite);
      orbitLabelSprite = null;
    }
    const planet = planetData.find(p => p.id === planetId);
    if (!planet) return;
    const radiusKm = (planet.distanceFromSun * ORBIT_DISTANCE_SCALE) * 0.1; // million km units
    const radiusLabel = options?.tFunc ? options.tFunc('radius') : 'Radius';
    const millionKmLabel = options?.tFunc ? options.tFunc('millionKm') : 'million km';
    const text = `${radiusLabel}: ${radiusKm.toFixed(1)} ${millionKmLabel}`;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    const scale = 4;
    const fontFamily = options?.currentLanguage === 'ar' ? 'Cairo' : 'Inter';
    ctx.font = `bold ${36 * scale}px ${fontFamily}, Arial`;
    const padding = 20 * scale;
    const textWidth = Math.ceil(ctx.measureText(text).width);
    const textHeight = Math.ceil(36 * scale * 1.4);
    canvas.width = Math.max(textWidth + padding * 2, 280);
    canvas.height = textHeight + padding * 2.5;

    // rounded translucent background
    const r = 6 * scale;
    ctx.fillStyle = 'rgba(0,0,0,0.75)';
    ctx.beginPath();
    ctx.moveTo(r, 0);
    ctx.lineTo(canvas.width - r, 0);
    ctx.quadraticCurveTo(canvas.width, 0, canvas.width, r);
    ctx.lineTo(canvas.width, canvas.height - r);
    ctx.quadraticCurveTo(canvas.width, canvas.height, canvas.width - r, canvas.height);
    ctx.lineTo(r, canvas.height);
    ctx.quadraticCurveTo(0, canvas.height, 0, canvas.height - r);
    ctx.lineTo(0, r);
    ctx.quadraticCurveTo(0, 0, r, 0);
    ctx.closePath();
    ctx.fill();

    // stroke + fill text for clarity
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.lineWidth = 1 * scale;
    ctx.strokeStyle = 'rgba(0,0,0,0.65)';
    // Use white text when hovering so the label is clearly visible
    ctx.fillStyle = '#ffffff';
    ctx.strokeText(text, canvas.width / 2, canvas.height / 2);
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    const tex = new THREE.CanvasTexture(canvas);
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0 });
    orbitLabelSprite = new THREE.Sprite(mat);

    // size and position: scale based on orbit distance, positioned following mouse direction
    const scaledDist = planet.distanceFromSun * ORBIT_DISTANCE_SCALE;
    const w = scaledDist * 0.32;
    const h = w * (canvas.height / canvas.width) * 0.75;
    orbitLabelSprite.scale.set(w, h, 1);
    
    // Position label along the raycaster direction from camera
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouseN, camera);
    // Find intersection with orbit plane (y=0) and place label there, offset outward
    const planeIntersection = new THREE.Vector3();
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    raycaster.ray.intersectPlane(plane, planeIntersection);
    
    // Normalize to orbit radius and add offset for visibility
    const dir = planeIntersection.normalize();
    const offsetDist = scaledDist * 1.15; // offset 15% beyond orbit
    orbitLabelSprite.position.copy(dir.multiplyScalar(offsetDist));
    orbitLabelSprite.position.y = 8; // height above plane
    scene.add(orbitLabelSprite);

    // fade-in quickly
    let op = 0;
    const fadeIn = () => {
      op = Math.min(1, op + 0.15);
      (orbitLabelSprite!.material as THREE.SpriteMaterial).opacity = op;
      if (op < 1) requestAnimationFrame(fadeIn);
    };
    fadeIn();
  }

  function hideOrbitLabel() {
    if (!orbitLabelSprite) return;
    // fade-out then remove
    let op = (orbitLabelSprite.material as THREE.SpriteMaterial).opacity || 1;
    const fadeOut = () => {
      op = Math.max(0, op - 0.12);
      (orbitLabelSprite!.material as THREE.SpriteMaterial).opacity = op;
      if (op > 0) requestAnimationFrame(fadeOut);
      else {
        scene.remove(orbitLabelSprite!);
        orbitLabelSprite = null;
      }
    };
    fadeOut();
  }

  // Robust orbit hover: find closest orbit to mouse ray in 3D
  container.addEventListener('mousemove', (event) => {
    const rect = container.getBoundingClientRect();
    const mouseN = new THREE.Vector2(
      ((event.clientX - rect.left) / rect.width) * 2 - 1,
      -((event.clientY - rect.top) / rect.height) * 2 + 1
    );
    const rc = new THREE.Raycaster();
    rc.setFromCamera(mouseN, camera);

    let minDist = Infinity;
    let foundOrbit: typeof planetOrbits[0] | null = null;
    for (const orbitObj of planetOrbits) {
      for (const pt of orbitObj.points) {
        const dist = rc.ray.distanceToPoint(pt);
        if (dist < minDist) {
          minDist = dist;
          foundOrbit = orbitObj;
        }
      }
    }

    // Update last mouse position for label positioning
    lastMouseN.copy(mouseN);
    
    if (foundOrbit && minDist < 3) {
      if (hoveredOrbit !== foundOrbit.line) {
        // restore previous (set back to default black + low opacity)
        if (hoveredOrbit) {
          (hoveredOrbit.material as THREE.LineBasicMaterial).color.set(0x000000);
          (hoveredOrbit.material as THREE.LineBasicMaterial).opacity = 0.33;
        }
        hoveredOrbit = foundOrbit.line;
        hoveredOrbitId = foundOrbit.planetId;
        // highlight hovered orbit (bright and more opaque)
        (hoveredOrbit.material as THREE.LineBasicMaterial).color.set(0xffffff);
        (hoveredOrbit.material as THREE.LineBasicMaterial).opacity = 0.9;
        showOrbitLabel(foundOrbit.planetId, mouseN);
      } else if (orbitLabelSprite && hoveredOrbitId === foundOrbit.planetId) {
        // Update label position as mouse moves
        const planet = planetData.find(p => p.id === hoveredOrbitId);
        if (planet) {
          const raycaster = new THREE.Raycaster();
          raycaster.setFromCamera(mouseN, camera);
          const planeIntersection = new THREE.Vector3();
          const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
          raycaster.ray.intersectPlane(plane, planeIntersection);
          const dir = planeIntersection.normalize();
          const scaledDist = planet.distanceFromSun * ORBIT_DISTANCE_SCALE;
          const offsetDist = scaledDist * 1.15;
          orbitLabelSprite.position.copy(dir.multiplyScalar(offsetDist));
          orbitLabelSprite.position.y = 8;
        }
      }
    } else if (hoveredOrbit) {
      // restore to default black + low opacity
      (hoveredOrbit.material as THREE.LineBasicMaterial).color.set(0x000000);
      (hoveredOrbit.material as THREE.LineBasicMaterial).opacity = 0.33;
      hoveredOrbit = null;
      hoveredOrbitId = null;
      hideOrbitLabel();
    }
  });

  container.addEventListener('mouseleave', () => {
    if (hoveredOrbit) {
      (hoveredOrbit.material as THREE.LineBasicMaterial).color.set(0x000000);
      (hoveredOrbit.material as THREE.LineBasicMaterial).opacity = 0.33;
      hoveredOrbit = null;
      hoveredOrbitId = null;
    }
    hideOrbitLabel();
  });

  // Raycaster for clicks
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  container.addEventListener('click', (event) => {
    const rect = container.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);

    const pickables = [...Object.values(planetMeshes), ...Object.values(moonMeshes), sun];
    const intersects = raycaster.intersectObjects(pickables);
    if (intersects.length === 0) return;
    const clicked = intersects[0].object as THREE.Mesh;

    // Sun clicked
    if ((clicked.userData && clicked.userData.isSun) || clicked === sun) {
      onPlanetClick({
        id: 'sun',
        name: 'Sun',
        radius: 8.5,
        distanceFromSun: 0,
        orbitSpeed: 0,
        texture: 'sun.jpg',
        description: 'The Sun is the star at the center of the Solar System.',
        diameter: 1391400,
        mass: '1.989 × 10^30 kg',
        dayLength: '25 days (equator)',
        yearLength: '—',
        avgTemp: '5,505°C (surface)',
        funFact: 'The Sun contains 99.86% of the mass in the Solar System!',
        moons: []
      });
      return;
    }

    // Planet clicked
    const planetKey = Object.keys(planetMeshes).find(k => planetMeshes[k] === clicked);
    if (planetKey) {
      const pd = planetData.find(p => p.id === planetKey);
      if (pd) {
        // focus camera (simple) and dispatch
        focusCameraOnPlanet(pd);
        onPlanetClick(pd);
      }
      return;
    }

    // Moon clicked
    const moonKey = Object.keys(moonMeshes).find(k => moonMeshes[k] === clicked);
    if (moonKey) {
      const md = moonMeshes[moonKey].userData;
      const parent = planetData.find(p => p.id === md.parentId);
      // build a PlanetData-like payload so InfoPanel shows
      const visualRadius = (clicked.geometry as THREE.SphereGeometry).parameters.radius;
      const moonPayload: PlanetData = {
        id: `${md.parentId}-${md.name}`,
        name: md.name,
        radius: visualRadius,
        distanceFromSun: parent ? parent.distanceFromSun : 0,
        orbitSpeed: md.orbitSpeed ?? 0,
        texture: 'moon.jpg',
        description: `Moon of ${parent ? parent.name : md.parentId}.`,
        diameter: md.realRadiusKm ? Math.round(md.realRadiusKm * 2) : Math.round(visualRadius * 1000),
        mass: '—',
        dayLength: '—',
        yearLength: '—',
        avgTemp: '—',
        funFact: `Click Learn More to search NASA.`,
        moons: []
      };
      // Mark this as a moon for InfoPanel
      (moonPayload as any).isMoon = true;
      (moonPayload as any).parentId = parent?.id;
      // focus on parent planet first for context
      if (parent) focusCameraOnPlanet(parent);
      onPlanetClick(moonPayload);
      return;
    }
  });

  // Focus helper (simple animated lerp)
  function focusCameraOnPlanet(planet: PlanetData) {
    const mesh = planetMeshes[planet.id];
    if (!mesh) return;
    const worldPos = new THREE.Vector3();
    mesh.getWorldPosition(worldPos);
    const targetPos = worldPos.clone().add(new THREE.Vector3(planet.radius * 6, planet.radius * 3, planet.radius * 6));
    const startPos = camera.position.clone();
    const startTarget = controls.target.clone();
    const duration = 900;
    const t0 = Date.now();
    function step() {
      const t = Math.min(1, (Date.now() - t0) / duration);
      camera.position.lerpVectors(startPos, targetPos, t);
      controls.target.lerpVectors(startTarget, worldPos, t);
      controls.update();
      if (t < 1) requestAnimationFrame(step);
    }
    step();
  }

  // Update simulation speed externally
  function updateSimulationSpeed(speed: number) {
    simulationSpeed = speed;
  }

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    // Update planets
    planets.forEach((pg) => {
      const speed = (pg.userData.orbitSpeed ?? 0) * simulationSpeed;
      pg.userData.angle += speed;
      const dist = pg.position.length();
      pg.position.x = Math.cos(pg.userData.angle) * dist;
      pg.position.z = Math.sin(pg.userData.angle) * dist;
      // Rotate planet mesh
      const pid = pg.userData.planetId;
      const pm = planetMeshes[pid];
      if (pm) pm.rotation.y += 0.01 * simulationSpeed;
      // Moons
      const mg = moonGroups[pid];
      if (mg) {
        mg.children.forEach((m: any) => {
          m.userData.angle += (m.userData.orbitSpeed ?? 0) * simulationSpeed;
          m.position.x = Math.cos(m.userData.angle) * m.userData.orbitRadius;
          m.position.z = Math.sin(m.userData.angle) * m.userData.orbitRadius;
        });
      }
    });

    controls.update();
    renderer.render(scene, camera);
  }
  animate();

  // Resize handler
  function handleResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  }
  window.addEventListener('resize', handleResize);

  // Visibility & scale controls
  function setMoonsVisible(visible: boolean) {
    Object.values(moonGroups).forEach(g => g.visible = visible);
  }
  setMoonsVisible(!(options?.hideMoons ?? false));

  function setLabelsVisible(_: boolean) {
    // labels not implemented in this trimmed version
  }

  function setPlanetScale(scale: number) {
    currentPlanetScale = scale;
    Object.values(planetMeshes).forEach((m) => m.scale.set(scale, scale, scale));
  }
  setPlanetScale(options?.planetScale ?? 1);

  // Zoom helpers (simple)
  function getCameraDistance() { return camera.position.length(); }
  let zoomTarget: number | null = null;
  function setCameraDistance(distance: number) { zoomTarget = distance; }
  function zoomIn() { setCameraDistance(Math.max(30, getCameraDistance() * 0.7)); }
  function zoomOut() { setCameraDistance(Math.min(controls.maxDistance - 10, getCameraDistance() * 1.4)); }

  // Smooth zoom step integrated into animate via controls update
  // (cheap approach: update camera toward zoomTarget)
  const origAnimate = animate;
  // Already animating; add a simple interval to lerp camera if zoomTarget set
  (function smoothZoomStep() {
    requestAnimationFrame(smoothZoomStep);
    if (zoomTarget !== null) {
      const cur = getCameraDistance();
      if (Math.abs(cur - zoomTarget) > 0.5) {
        const dir = camera.position.clone().normalize();
        const newDist = THREE.MathUtils.lerp(cur, zoomTarget, 0.12);
        camera.position.copy(dir.multiplyScalar(newDist));
        controls.update();
      } else zoomTarget = null;
    }
  })();

  // Cleanup
  function cleanupScene() {
    window.removeEventListener('resize', handleResize);
    renderer.dispose();
    container.innerHTML = '';
    delete (window as any).solarSystem;
  }

  // Expose API
  (window as any).solarSystem = { updateSimulationSpeed };
  return {
    selectPlanet: (planetId: string) => {
      const p = planetData.find(p => p.id === planetId);
      if (p) focusCameraOnPlanet(p);
    },
    updateSimulationSpeed,
    cleanupScene,
    setMoonsVisible,
    setLabelsVisible,
    setPlanetScale,
    zoomIn,
    zoomOut,
    getCameraDistance,
    isGalaxyVisible: () => false
  };
}