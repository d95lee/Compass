import * as THREE from 'three';
import './Globe.css'
import ThreeGlobe from 'three-globe'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import countries from "./custom.geo.json"


const newGlobe = () => {
    let renderer, scene, camera, controls;

        init();
        initGlobe();
        animate();


    function init() {

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(window.innerWidth, window.innerHeight)
        // Create a container element for the globe
    const globeContainer = document.createElement('div');
    globeContainer.id = 'globe-container';
    document.body.appendChild(globeContainer);

    // Append the renderer's DOM element to the container
    globeContainer.appendChild(renderer.domElement);

    // Set the position and size of the container using CSS
    globeContainer.style.position = 'absolute';
    globeContainer.style.backgroundColor = 'rgb(210, 221, 163)';
    globeContainer.style.top = '30';
    globeContainer.style.left = '-25%';
    globeContainer.style.width = '50%';
    globeContainer.style.height = '50%';
    globeContainer.style.minWidth = '1000px'; // Set the minimum width to 200 pixels

    globeContainer.style.zIndex = '-1'; // Ensure the container is behind other elements

        scene = new THREE.Scene()

        const ambientLight = new THREE.AmbientLight(0xbbbbbbb, 0.3) //0xbbbbbbb, 0.3
        scene.add(ambientLight)
        scene.background = new THREE.Color(0xe1eeea) //0x040d21

        camera = new THREE.PerspectiveCamera();
        camera.aspect = window.innerWidth/ window.innerHeight;
        camera.updateProjectionMatrix()

        const dLight = new THREE.DirectionalLight(0xffffff, 0.8);
        dLight.position.set(800, 2000, 400);
        camera.add(dLight)

        camera.position.z = 400;
        camera.position.x = 0;
        camera.position.y = 0;

        scene.add(camera)

        scene.fog = new THREE.Fog(0x535ef3, 400, 2000)

        controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true;
        controls.dynamicDampingFactor = 0.01;
        controls.enablePen = false
        controls.minDistance = 400;
        controls.maxDistance = 400;
        controls.rotateSpeed = 0.8
        controls.zoomSpeed = 1
        controls. autoRotate = false

        controls.minPolarAngle = Math.PI/3.5
        controls.maxPolarAngle = Math.PI - Math.PI/3
    }

    function initGlobe() {
        const Globe = new ThreeGlobe({
            waitforGlobeReady: true, // whether to wait until the globe wrapping image has been fully loaded before rendering the globe or any of the data layers.
            animateIn: true, // whether to animate the globe initialization, by scaling and rotating the globe into its inital position.
        })
        .hexPolygonAltitude(0.001)
        .hexPolygonColor(0xffffff) // old yellow color 0xf8ff00
        .hexPolygonResolution(3) // 3 default
        .hexPolygonMargin(0.2) // 0.7 default
        .hexPolygonsData(countries.features)

        Globe.rotateY(-Math.PI*(5/9))
        Globe.rotateZ(-Math.PI/6);
        const globeMaterial = Globe.globeMaterial()   // Yellow hex color 0xe7d952
        globeMaterial.color = new THREE.Color(0x238bf0) // Dark Green 0x13a113
        globeMaterial.emissive = new THREE.Color(0x13a113)
        globeMaterial.emissiveIntensity = 0.1;
        globeMaterial.shininess = 0.7

        scene.add(Globe)
        }

    function animate() {
        camera.lookAt(scene.position)
        controls.update()
        renderer.render(scene, camera)
        requestAnimationFrame(animate)
    }
}
export default newGlobe

export const removeGlobe = () => {
    const globeContainer = document.getElementById('globe-container');
    if (globeContainer) {
        document.body.removeChild(globeContainer);
    }
}