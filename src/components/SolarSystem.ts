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
  options?: { hideMoons?: boolean; showLabels?: boolean; planetScale?: number }
) {
  // Scene setup
  const scene = new THREE.Scene();
  
  // Create a renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  // Create a camera with increased far plane
  const camera = new THREE.PerspectiveCamera(
    45, 
    container.clientWidth / container.clientHeight, 
    0.1, 
    200000  // Increased far plane
  );
  camera.position.set(0, 50, 100);
  
  // Create controls with adjusted maxDistance
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.minDistance = 20;
  controls.maxDistance = 100000;  // Allow very far zoom

  // Add ambient light
  const ambientLight = new THREE.AmbientLight(0x111111);
  scene.add(ambientLight);
  
  // Add stars background
  addStarsBackground(scene);
  
  // Add a point light at the center (sun)
  const sunLight = new THREE.PointLight(0xffffff, 2, 1000, 0.5);
  sunLight.position.set(0, 0, 0);
  scene.add(sunLight);
  
  // Create the texture loader ONCE here
  const textureLoader = new THREE.TextureLoader();
  const sunTexture = textureLoader.load(`${import.meta.env.BASE_URL}images/sun.jpg`);
  const moonTexture = textureLoader.load(`${import.meta.env.BASE_URL}images/moon.jpg`);
 
  // Create planets
  const planets: THREE.Group[] = [];
  const planetMeshes: Record<string, THREE.Mesh> = {};
  const planetOrbits: { line: THREE.Line, planetId: string, points: THREE.Vector3[] }[] = [];
  const moonGroups: Record<string, THREE.Group> = {};
  const labelSprites: Record<string, THREE.Sprite> = {};
  let simulationSpeed = 0.5;
  let currentPlanetScale = options?.planetScale ?? 1;
  
  // Update simulation speed
  function updateSimulationSpeed(speed: number) {
    simulationSpeed = speed;
  }
  
  // --- GALAXY BACKGROUND ---
  let galaxyPoints: THREE.Points | null = null;
  const GALAXY_LAYERS = {
    CLOSE: { START: 2000, END: 3500, SIZE: 5000 },
    MID: { START: 3500, END: 20000, SIZE: 50000 },
    FAR: { START: 20000, END: 100000, SIZE: 200000 }
  };
  let galaxyVisible = false;

  function createMultiLayerGalaxy() {
    const geometry = new THREE.BufferGeometry();
    const totalStars = 5000; // Reduced from 150000
    const positions = [];
    const colors = [];
    const sizes = [];

    // Adjust proportions for fewer stars
    const mainGalaxyStars = Math.floor(totalStars * 0.4);  // ~2000 stars
    const midStars = Math.floor(totalStars * 0.3);         // ~1500 stars
    const farStars = totalStars - mainGalaxyStars - midStars; // ~1500 stars

    // Helper function to generate star color
    const getStarColor = (layer: 'core' | 'arm' | 'distant', bright = false) => {
      const r = Math.random();
      switch (layer) {
        case 'core':
          return [
            1.0,                    // R
            0.9 + 0.1 * r,         // G
            0.7 + 0.3 * r          // B
          ];
        case 'arm':
          return bright ? [
            0.7 + 0.3 * r,         // R
            0.8 + 0.2 * r,         // G
            1.0                     // B
          ] : [
            0.6 + 0.4 * r,         // R
            0.6 + 0.4 * r,         // G
            0.8 + 0.2 * r          // B
          ];
        case 'distant':
          return [
            0.8 + 0.2 * r,         // R
            0.8 + 0.2 * r,         // G
            0.9 + 0.1 * r          // B
          ];
      }
    };

    // Create main galaxy (close layer)
    for (let i = 0; i < mainGalaxyStars; i++) {
      const isCore = i < mainGalaxyStars * 0.3;
      if (isCore) {
        // Dense core stars
        const r = Math.pow(Math.random(), 2) * 100;
        const theta = Math.random() * Math.PI * 2;
        const phi = (Math.random() - 0.5) * 0.3;
        positions.push(
          r * Math.cos(theta),
          r * Math.sin(phi),
          r * Math.sin(theta)
        );
        const color = getStarColor('core');
        colors.push(...color);
        sizes.push(2.5 + Math.random());
      } else {
        // Spiral arms (4 arms for Milky Way)
        const arm = Math.floor(Math.random() * 4);
        const r = 100 + Math.pow(Math.random(), 2) * 400;
        let theta = (Math.random() * Math.PI * 2) + (arm * (Math.PI * 2) / 4);
        theta += (r / 200) * 0.25; // Spiral factor
        
        const spread = (1 - Math.pow(Math.random(), 3)) * 50;
        const spreadTheta = Math.random() * Math.PI * 2;
        positions.push(
          (r * Math.cos(theta)) + (spread * Math.cos(spreadTheta)),
          (Math.random() - 0.5) * 15 * Math.exp(-r / 400),
          (r * Math.sin(theta)) + (spread * Math.sin(spreadTheta))
        );
        const color = getStarColor('arm', Math.random() < 0.2);
        colors.push(...color);
        sizes.push(1.5 + Math.random());
      }
    }

    // Add mid-distance star clusters
    for (let i = 0; i < midStars; i++) {
      const phi = Math.random() * Math.PI * 2;
      const cosTheta = Math.random() * 2 - 1;
      const theta = Math.acos(cosTheta);
      const r = GALAXY_LAYERS.MID.SIZE * (0.3 + 0.7 * Math.random());
      
      positions.push(
        r * Math.sin(theta) * Math.cos(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(theta)
      );
      const color = getStarColor('distant');
      colors.push(...color);
      sizes.push(1 + Math.random());
    }

    // Add far background stars
    for (let i = 0; i < farStars; i++) {
      const phi = Math.random() * Math.PI * 2;
      const cosTheta = Math.random() * 2 - 1;
      const theta = Math.acos(cosTheta);
      const r = GALAXY_LAYERS.FAR.SIZE * (0.5 + 0.5 * Math.random());
      
      positions.push(
        r * Math.sin(theta) * Math.cos(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(theta)
      );
      const color = getStarColor('distant');
      colors.push(...color);
      sizes.push(0.8 + Math.random() * 0.4);
    }

    return {
      positions: new Float32Array(positions),
      colors: new Float32Array(colors),
      sizes: new Float32Array(sizes)
    };
  }

  function addGalaxyBackground() {
    if (galaxyPoints) return;

    const { positions, colors, sizes } = createMultiLayerGalaxy();
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Enhanced star shader for better appearance
    const material = new THREE.ShaderMaterial({
      uniforms: {
        opacity: { value: 0 },
        cameraDist: { value: 0 }
      },
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        uniform float cameraDist;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          float dist = length(mvPosition.xyz);
          float scale = cameraDist > 5000.0 ? 1.5 : 1.0;
          gl_PointSize = size * (300.0 / dist) * scale;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform float opacity;
        varying vec3 vColor;
        void main() {
          vec2 xy = gl_PointCoord.xy - vec2(0.5);
          float ll = length(xy);
          if (ll > 0.5) discard;
          float alpha = (0.5 - ll) * 2.0 * opacity;
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    galaxyPoints = new THREE.Points(geometry, material);
    galaxyPoints.rotation.x = Math.PI / 5.5;
    scene.add(galaxyPoints);
  }
  addGalaxyBackground();

  // Create the sun
  const sunGeometry = new THREE.SphereGeometry(8.5, 32, 32);
  const sunMaterial = new THREE.MeshBasicMaterial({ 
      map: sunTexture
  });
  const sun = new THREE.Mesh(sunGeometry, sunMaterial);
  sun.name = 'sun';
  sun.userData = { isSun: true };
  scene.add(sun);
  
  // Create all planets
  planetData.forEach((planet) => {
    const planetGroup = new THREE.Group();
    
    // Create orbit path
    const orbitGeometry = new THREE.BufferGeometry();
    const orbitMaterial = new THREE.LineBasicMaterial({ 
      color: 0x22272a,
      transparent: true,
      opacity: 0.33,
      linewidth: 1
    });
    
    // Generate orbit points
    const orbitPoints: THREE.Vector3[] = [];
    const segments = 256;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      orbitPoints.push(
        new THREE.Vector3(
          Math.cos(theta) * planet.distanceFromSun,
          0,
          Math.sin(theta) * planet.distanceFromSun
        )
      );
    }
    
    orbitGeometry.setFromPoints(orbitPoints);
    const orbit = new THREE.Line(orbitGeometry, orbitMaterial);
    orbit.userData = { planetId: planet.id };
    scene.add(orbit);
    planetOrbits.push({ line: orbit, planetId: planet.id, points: orbitPoints });
    
    // Create the planet
    const planetGeometry = new THREE.SphereGeometry(planet.radius, 32, 32);
    
    // Create planet material based on texture
    const planetMaterial = new THREE.MeshStandardMaterial({
      map: null,
      roughness: 0.7,
      metalness: 0.0
    });
    
    // Load texture asynchronously (this is fine, but loader is now shared)
    textureLoader.load(`${import.meta.env.BASE_URL}images/${planet.texture}`, (texture) => {
      planetMaterial.map = texture;
      planetMaterial.needsUpdate = true;
    });
    
    const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);
    planetMesh.name = planet.id;
    planetGroup.add(planetMesh);
    planetMeshes[planet.id] = planetMesh;
    
    // Calculate initial position
    const initialAngle = Math.random() * Math.PI * 2;
    planetGroup.position.x = Math.cos(initialAngle) * planet.distanceFromSun;
    planetGroup.position.z = Math.sin(initialAngle) * planet.distanceFromSun;
    
    // Add rings for Saturn
    if (planet.id === 'saturn') {
      const ringGeometry = new THREE.RingGeometry(
        planet.radius * 1.4, 
        planet.radius * 2.2, 
        64
      );
      
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0xc9a97c,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8
      });
      
      const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
      ringMesh.rotation.x = Math.PI / 2;
      planetGroup.add(ringMesh);
    }
    
    // Add moons if the planet has them
    if (planet.moons && planet.moons.length > 0) {
      const moonGroup = new THREE.Group();
      
      planet.moons.forEach((moon, index) => {
        const moonGeometry = new THREE.SphereGeometry(moon.radius, 32, 32);
        const moonMaterial = new THREE.MeshPhongMaterial({ 
            map: moonTexture
        });
        
        const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);
        
        // Calculate initial position for the moon
        const moonDistance = planet.radius * 2 + (index * planet.radius * 0.7);
        const moonAngle = Math.random() * Math.PI * 2;
        moonMesh.position.x = Math.cos(moonAngle) * moonDistance;
        moonMesh.position.z = Math.sin(moonAngle) * moonDistance;
        
        // Store the moon's orbital info
        moonMesh.userData = { 
          orbitRadius: moonDistance,
          orbitSpeed: 0.02 + (Math.random() * 0.01),
          angle: moonAngle
        };
        
        moonGroup.add(moonMesh);
      });
      
      planetGroup.add(moonGroup);
      moonGroups[planet.id] = moonGroup;
    }
    
    // --- LABELS ---
    const makeLabel = (text: string) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d')!;
      const scale = 2; // Increase resolution
      ctx.font = `bold ${32 * scale}px Inter, Arial`;
      const textWidth = ctx.measureText(text).width;
      canvas.width = (textWidth + 32) * scale;
      canvas.height = 48 * scale;
      
      // Set high-quality text rendering
      ctx.textBaseline = 'middle';
      ctx.font = `bold ${32 * scale}px Inter, Arial`;
      ctx.textAlign = 'center';
      
      // Multiple shadow passes for better visibility
      ctx.shadowColor = 'rgba(0,0,0,0.8)';
      ctx.shadowBlur = 6 * scale;
      ctx.fillStyle = '#fff';
      
      // Draw text at center of canvas
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);
      
      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      const spriteMaterial = new THREE.SpriteMaterial({ 
        map: texture,
        transparent: true
      });
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.scale.set(text.length * 1.2, 1.2, 1);
      sprite.position.set(0, planet.radius * 2.2, 0);
      sprite.visible = !!options?.showLabels;
      return sprite;
    };
    const labelSprite = makeLabel(planet.name);
    planetGroup.add(labelSprite);
    labelSprites[planet.id] = labelSprite;

    // Store orbital information in the planet group
    planetGroup.userData = { 
      orbitSpeed: planet.orbitSpeed,
      angle: initialAngle,
      planetId: planet.id
    };
    
    scene.add(planetGroup);
    planets.push(planetGroup);
  });
  
  // --- SUN LABEL ---
  const makeSunLabel = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    ctx.font = 'bold 28px Arial';
    const textWidth = ctx.measureText('Sun').width;
    canvas.width = textWidth + 24;
    canvas.height = 38;
    ctx.font = 'bold 28px Arial';
    ctx.fillStyle = '#fff';
    ctx.shadowColor = '#000';
    ctx.shadowBlur = 8;
    ctx.fillText('Sun', 12, 30);
    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(10, 3.5, 1); // smaller than before
    sprite.position.set(0, 10, 0);
    sprite.visible = !!options?.showLabels;
    return sprite;
  };
  const sunLabel = makeSunLabel();
  sun.add(sunLabel);

  // --- ORBIT HOVER LOGIC ---
  let hoveredOrbit: THREE.Line | null = null;
  let hoveredOrbitId: string | null = null;
  let orbitLabelSprite: THREE.Sprite | null = null;
  let orbitHoverAnim = 0; // 0 = not hovered, 1 = fully hovered

  function showOrbitLabel(planetId: string) {
    if (orbitLabelSprite) {
      scene.remove(orbitLabelSprite);
      orbitLabelSprite = null;
    }
    const planet = planetData.find(p => p.id === planetId);
    if (!planet) return;
    const length = 2 * Math.PI * planet.distanceFromSun;
    const text = `Orbit: ${(length * 0.1).toFixed(1)} million km`;
    
    // Create high-resolution canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    const scale = 2; // Increase resolution
    ctx.font = `bold ${22 * scale}px Inter, Arial`;
    const textWidth = ctx.measureText(text).width;
    canvas.width = (textWidth + 32) * scale;
    canvas.height = 38 * scale;
    
    // Set high-quality text rendering
    ctx.textBaseline = 'middle';
    ctx.font = `bold ${22 * scale}px Inter, Arial`;
    ctx.textAlign = 'center';
    
    // Add shadow for better visibility
    ctx.shadowColor = 'rgba(0,0,0,0.8)';
    ctx.shadowBlur = 4 * scale;
    ctx.fillStyle = '#fff';
    
    // Draw text at center of canvas
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    const spriteMaterial = new THREE.SpriteMaterial({ 
      map: texture,
      transparent: true,
      opacity: 0
    });
    orbitLabelSprite = new THREE.Sprite(spriteMaterial);
    orbitLabelSprite.scale.set(planet.distanceFromSun * 0.38, 6, 1);
    orbitLabelSprite.position.set(planet.distanceFromSun, 8, 0);
    scene.add(orbitLabelSprite);
  }

  function hideOrbitLabel() {
    if (orbitLabelSprite) {
      scene.remove(orbitLabelSprite);
      orbitLabelSprite = null;
    }
  }

  // Robust orbit hover: find closest orbit to mouse ray in 3D
  container.addEventListener('mousemove', (event) => {
    const rect = container.getBoundingClientRect();
    const mouse = new THREE.Vector2(
      ((event.clientX - rect.left) / rect.width) * 2 - 1,
      -((event.clientY - rect.top) / rect.height) * 2 + 1
    );
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    let minDist = Infinity;
    let foundOrbit: typeof planetOrbits[0] | null = null;
    let foundPoint: THREE.Vector3 | null = null;

    for (const orbitObj of planetOrbits) {
      // Find closest point on orbit to ray
      for (const pt of orbitObj.points) {
        const dist = raycaster.ray.distanceToPoint(pt);
        if (dist < minDist) {
          minDist = dist;
          foundOrbit = orbitObj;
          foundPoint = pt;
        }
      }
    }

    if (foundOrbit && minDist < 2.5) {
      if (hoveredOrbit !== foundOrbit.line) {
        if (hoveredOrbit) {
          (hoveredOrbit.material as THREE.LineBasicMaterial).color.set(0x22272a);
          (hoveredOrbit.material as THREE.LineBasicMaterial).opacity = 0.33;
        }
        hoveredOrbit = foundOrbit.line;
        hoveredOrbitId = foundOrbit.planetId;
        (hoveredOrbit.material as THREE.LineBasicMaterial).color.set(0xffffff);
        (hoveredOrbit.material as THREE.LineBasicMaterial).opacity = 0.85;
        orbitHoverAnim = 0;
        showOrbitLabel(foundOrbit.planetId);
      }
    } else if (hoveredOrbit) {
      (hoveredOrbit.material as THREE.LineBasicMaterial).color.set(0x22272a);
      (hoveredOrbit.material as THREE.LineBasicMaterial).opacity = 0.33;
      hoveredOrbit = null;
      hoveredOrbitId = null;
      orbitHoverAnim = 0;
      hideOrbitLabel();
    }
  });

  container.addEventListener('mouseleave', () => {
    if (hoveredOrbit) {
      (hoveredOrbit.material as THREE.LineBasicMaterial).color.set(0x22272a);
      (hoveredOrbit.material as THREE.LineBasicMaterial).opacity = 0.33;
      hoveredOrbit = null;
      hoveredOrbitId = null;
      orbitHoverAnim = 0;
    }
    hideOrbitLabel();
  });

  // Set up raycaster for planet clicking
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  
  // Mouse event listener for clicking planets
  container.addEventListener('click', (event) => {
    // Convert mouse position to normalized device coordinates
    mouse.x = (event.clientX / container.clientWidth) * 2 - 1;
    mouse.y = -(event.clientY / container.clientHeight) * 2 + 1;
    
    // Set up the raycaster
    raycaster.setFromCamera(mouse, camera);
    
    // Get all the planet meshes to check for intersections
    const planetMeshList = [...Object.values(planetMeshes), sun];
    const intersects = raycaster.intersectObjects(planetMeshList);
    
    if (intersects.length > 0) {
      // Get the first intersected object
      const clickedMesh = intersects[0].object as THREE.Mesh;
      
      if (clickedMesh.userData.isSun) {
        onPlanetClick({ id: 'sun' });
        return;
      }

      // Find which planet this is
      const clickedPlanetId = Object.keys(planetMeshes).find(
        key => planetMeshes[key] === clickedMesh
      );
      
      if (clickedPlanetId) {
        const clickedPlanet = planetData.find(p => p.id === clickedPlanetId);
        if (clickedPlanet) {
          // Focus camera on the planet
          focusCameraOnPlanet(clickedPlanet);
          
          // Call the click handler
          onPlanetClick(clickedPlanet);
        }
      }
    }
  });
  
  // Focus camera on a specific planet with animation
  function focusCameraOnPlanet(planet: PlanetData) {
    const planetMesh = planetMeshes[planet.id];
    if (!planetMesh) return;
    
    // Get planet world position
    const planetPosition = new THREE.Vector3();
    planetMesh.getWorldPosition(planetPosition);
    
    // Calculate target position for camera (slightly offset from planet)
    const targetPosition = planetPosition.clone().add(
      new THREE.Vector3(planet.radius * 5, planet.radius * 3, planet.radius * 5)
    );
    
    // Calculate distance from camera to planet for zoom level
    const distance = planet.radius * 10;
    
    // Animate camera position
    animateCameraMove(targetPosition, planetPosition, distance);
  }
  
  // Animate the camera movement to focus on a planet
  function animateCameraMove(
    targetPosition: THREE.Vector3,
    lookAtPosition: THREE.Vector3,
    distance: number
  ) {
    const startPosition = camera.position.clone();
    const startLookAt = controls.target.clone();
    const duration = 1500; // ms
    const startTime = Date.now();
    
    function updateCamera() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease in/out function
      const easedProgress = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      
      // Update camera position
      camera.position.lerpVectors(startPosition, targetPosition, easedProgress);
      
      // Update controls target (what the camera looks at)
      controls.target.lerpVectors(startLookAt, lookAtPosition, easedProgress);
      controls.update();
      
      if (progress < 1) {
        requestAnimationFrame(updateCamera);
      }
    }
    
    updateCamera();
  }
  
  // Add stars to the background
  function addStarsBackground(scene: THREE.Scene) {
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.7,
      transparent: true
    });
    
    const starsVertices = [];
    for (let i = 0; i < 3000; i++) {
      const x = THREE.MathUtils.randFloatSpread(1000);
      const y = THREE.MathUtils.randFloatSpread(1000);
      const z = THREE.MathUtils.randFloatSpread(1000);
      starsVertices.push(x, y, z);
    }
    
    starsGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(starsVertices, 3)
    );
    
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);
  }
  
  // --- CONTROL MOONS VISIBILITY ---
  function setMoonsVisible(visible: boolean) {
    Object.values(moonGroups).forEach(group => {
      group.visible = visible;
    });
  }
  setMoonsVisible(!(options?.hideMoons ?? false));

  // --- CONTROL LABELS VISIBILITY ---
  function setLabelsVisible(visible: boolean) {
    Object.values(labelSprites).forEach(sprite => {
      sprite.visible = visible;
    });
    sunLabel.visible = visible;
  }
  setLabelsVisible(!!options?.showLabels);

  // --- CONTROL PLANET SCALE ---
  function setPlanetScale(scale: number) {
    currentPlanetScale = scale;
    Object.entries(planetMeshes).forEach(([id, mesh]) => {
      const baseRadius = planetData.find(p => p.id === id)?.radius ?? 1;
      mesh.scale.set(scale, scale, scale);
      // Also update label position and scale
      const label = labelSprites[id];
      if (label) {
        label.position.set(0, baseRadius * 2.2 * scale, 0);
        label.scale.set(baseRadius * 3 * scale, baseRadius * 1 * scale, 1);
      }
    });
  }
  setPlanetScale(options?.planetScale ?? 1);

  // --- CAMERA ZOOM CONTROL WITH SMOOTH MOTION ---
  let zoomTargetDistance: number | null = null;
  let zoomLerpAlpha = 0.12; // Smoothness

  function getCameraDistance() {
    return camera.position.length();
  }
  function setCameraDistance(distance: number) {
    zoomTargetDistance = distance;
  }
  function zoomIn() {
    const dist = getCameraDistance();
    const factor = dist > 1000 ? 0.8 : 0.7; // Gentler zoom at far distances
    setCameraDistance(Math.max(30, dist * factor));
  }
  function zoomOut() {
    const dist = getCameraDistance();
    const factor = dist > 1000 ? 1.2 : 1.4; // Gentler zoom at far distances
    setCameraDistance(Math.min(controls.maxDistance - 10, dist * factor));
  }

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    
    // --- Smooth camera zoom ---
    if (zoomTargetDistance !== null) {
      const current = getCameraDistance();
      const target = zoomTargetDistance;
      if (Math.abs(current - target) > 0.5) {
        const dir = camera.position.clone().normalize();
        const newDist = THREE.MathUtils.lerp(current, target, zoomLerpAlpha);
        camera.position.copy(dir.multiplyScalar(newDist));
        camera.updateProjectionMatrix();
        controls.update();
      } else {
        zoomTargetDistance = null;
      }
    }

    // Update planets position based on orbit
    planets.forEach((planet) => {
      // Update planet position
      const speed = planet.userData.orbitSpeed * simulationSpeed;
      planet.userData.angle += speed;
      
      const distance = planet.position.length();
      planet.position.x = Math.cos(planet.userData.angle) * distance;
      planet.position.z = Math.sin(planet.userData.angle) * distance;
      
      // Rotate the planet
      const planetId = planet.userData.planetId;
      const planetObj = planetMeshes[planetId];
      if (planetObj) {
        planetObj.rotation.y += 0.01 * simulationSpeed;
      }
      
      // Apply scale if changed
      planet.scale.set(currentPlanetScale, currentPlanetScale, currentPlanetScale);

      // Update moons if this planet has any
      const moonGroup = moonGroups[planetId];
      if (moonGroup) {
        moonGroup.children.forEach((moon) => {
          const moonData = moon.userData;
          moonData.angle += moonData.orbitSpeed * simulationSpeed;
          
          moon.position.x = Math.cos(moonData.angle) * moonData.orbitRadius;
          moon.position.z = Math.sin(moonData.angle) * moonData.orbitRadius;
        });
      }
    });

    // Animate orbit hover (boldness and label fade)
    if (hoveredOrbit) {
      orbitHoverAnim = Math.min(1, orbitHoverAnim + 0.08);
      (hoveredOrbit.material as THREE.LineBasicMaterial).linewidth = 2 + 2 * orbitHoverAnim;
      if (orbitLabelSprite) {
        orbitLabelSprite.material.opacity = orbitHoverAnim;
        orbitLabelSprite.scale.y = 6 + 2 * Math.sin(orbitHoverAnim * Math.PI) * 0.5;
      }
    } else {
      orbitHoverAnim = Math.max(0, orbitHoverAnim - 0.08);
      if (orbitLabelSprite) {
        orbitLabelSprite.material.opacity = orbitHoverAnim;
        orbitLabelSprite.scale.y = 6 + 2 * Math.sin(orbitHoverAnim * Math.PI) * 0.5;
        if (orbitHoverAnim === 0) hideOrbitLabel();
      }
    }

    // --- GALAXY VISIBILITY & STAR MORPHING ---
    if (galaxyPoints) {
      const camDist = getCameraDistance();
      let opacity = 0;
      
      // Progressive fade-in based on distance
      if (camDist > GALAXY_LAYERS.CLOSE.START) {
        if (camDist < GALAXY_LAYERS.CLOSE.END) {
          opacity = (camDist - GALAXY_LAYERS.CLOSE.START) / 
                   (GALAXY_LAYERS.CLOSE.END - GALAXY_LAYERS.CLOSE.START);
        } else if (camDist < GALAXY_LAYERS.MID.END) {
          opacity = 1;
        } else {
          opacity = 1 - Math.min(1, (camDist - GALAXY_LAYERS.MID.END) / 
                   (GALAXY_LAYERS.FAR.END - GALAXY_LAYERS.MID.END));
        }
      }

      const material = galaxyPoints.material as THREE.ShaderMaterial;
      material.uniforms.opacity.value += (opacity - material.uniforms.opacity.value) * 0.05;
      material.uniforms.cameraDist.value = camDist;
      
      galaxyPoints.rotation.y += 0.0001;
      galaxyVisible = material.uniforms.opacity.value > 0.05;
    }
    
    // Update controls
    controls.update();
    
    // Render scene
    renderer.render(scene, camera);
  }
  
  // Handle window resize
  function handleResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  }
  
  window.addEventListener('resize', handleResize);
  
  // Select planet by ID
  function selectPlanet(planetId: string) {
    const planet = planetData.find(p => p.id === planetId);
    if (planet) {
      focusCameraOnPlanet(planet);
    }
  }
  
  // Cleanup function
  function cleanupScene() {
    window.removeEventListener('resize', handleResize);
    renderer.dispose();
    
    // Remove all event listeners
    container.innerHTML = '';
    
    // Remove global reference
    delete window.solarSystem;
  }
  
  // Start animation
  animate();
  
  // Expose API for external access
  window.solarSystem = {
    updateSimulationSpeed
  };
  
  return {
    selectPlanet,
    updateSimulationSpeed,
    cleanupScene,
    setMoonsVisible,
    setLabelsVisible,
    setPlanetScale,
    zoomIn,
    zoomOut,
    getCameraDistance,
    isGalaxyVisible: () => galaxyVisible
  };
}