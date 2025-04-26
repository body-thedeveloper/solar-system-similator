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
  onPlanetClick: (planet: PlanetData) => void
) {
  // Scene setup
  const scene = new THREE.Scene();
  
  // Create a renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  // Create a camera
  const camera = new THREE.PerspectiveCamera(
    45, 
    container.clientWidth / container.clientHeight, 
    0.1, 
    2000
  );
  camera.position.set(0, 50, 100);
  
  // Create controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.minDistance = 20;
  controls.maxDistance = 500;

  // Add ambient light
  const ambientLight = new THREE.AmbientLight(0x111111);
  scene.add(ambientLight);
  
  // Add stars background
  addStarsBackground(scene);
  
  // Add a point light at the center (sun)
  const sunLight = new THREE.PointLight(0xffffff, 2, 1000, 0.5);
  sunLight.position.set(0, 0, 0);
  scene.add(sunLight);
  
  // 1. Remove the sunGlow light
// const sunGlow = new THREE.PointLight(0xffffcc, 1, 500, 0.5);
// sunGlow.position.set(0, 0, 0);
// scene.add(sunGlow);
   // Load textures first
   const textureLoader = new THREE.TextureLoader();
   const sunTexture = textureLoader.load(`${import.meta.env.BASE_URL}images/Sun.jpg`);
   const moonTexture = textureLoader.load(`${import.meta.env.BASE_URL}images/Moon.jpg`);
 
  // Create planets
  const planets: THREE.Group[] = [];
  const planetMeshes: Record<string, THREE.Mesh> = {};
  const planetOrbits: THREE.Line[] = [];
  const moonGroups: Record<string, THREE.Group> = {};
  let simulationSpeed = 0.5;
  
  // Create the sun
  const sunGeometry = new THREE.SphereGeometry(8.5, 32, 32);  // Changed from 50 to 8.5
  const sunMaterial = new THREE.MeshBasicMaterial({ 
      map: sunTexture
  });
  const sun = new THREE.Mesh(sunGeometry, sunMaterial);
  scene.add(sun);
  
  // Add sun glow effect
 // const sunGlowGeometry = new THREE.SphereGeometry(8.5, 32, 32);
// const sunGlowMaterial = new THREE.MeshBasicMaterial({
//   color: 0xffff99,
//   transparent: true,
//   opacity: 0.4,
//   side: THREE.BackSide
// });
// const sunGlowMesh = new THREE.Mesh(sunGlowGeometry, sunGlowMaterial);
// sunGlowMesh.scale.set(1.2, 1.2, 1.2);
// scene.add(sunGlowMesh);
  
  // Create all planets
  planetData.forEach((planet) => {
    const planetGroup = new THREE.Group();
    
    // Create orbit path
    const orbitGeometry = new THREE.BufferGeometry();
    const orbitMaterial = new THREE.LineBasicMaterial({ 
      color: 0x444444,
      transparent: true,
      opacity: 0.3
    });
    
    // Generate orbit points
    const orbitPoints = [];
    const segments = 128;
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
    scene.add(orbit);
    planetOrbits.push(orbit);
    
    // Create the planet
    const planetGeometry = new THREE.SphereGeometry(planet.radius, 32, 32);
    const textureLoader = new THREE.TextureLoader();
    
    // Removed unused 'materials' declaration
    
    // Create planet material based on texture
    const planetMaterial = new THREE.MeshStandardMaterial({
      map: null,
      roughness: 0.7,
      metalness: 0.0
    });
    
    // Load texture asynchronously
    textureLoader.load(`${import.meta.env.BASE_URL}images/${planet.texture}`, (texture) => {
      planetMaterial.map = texture;
      planetMaterial.needsUpdate = true;
    });
    
    const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);
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
        // Change the fixed size (4) to use moon.radius
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
    
    // Store orbital information in the planet group
    planetGroup.userData = { 
      orbitSpeed: planet.orbitSpeed,
      angle: initialAngle,
      planetId: planet.id
    };
    
    scene.add(planetGroup);
    planets.push(planetGroup);
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
    const planetMeshList = Object.values(planetMeshes);
    const intersects = raycaster.intersectObjects(planetMeshList);
    
    if (intersects.length > 0) {
      // Get the first intersected object
      const clickedMesh = intersects[0].object as THREE.Mesh;
      
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
  
  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    
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
    
    // Update sun glow effect
// sunGlowMesh.rotation.y += 0.001 * simulationSpeed;
// sunGlowMesh.rotation.z += 0.0005 * simulationSpeed;
    
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
  
  // Update simulation speed
  function updateSimulationSpeed(speed: number) {
    simulationSpeed = speed;
  }
  
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
    cleanupScene
  };
}