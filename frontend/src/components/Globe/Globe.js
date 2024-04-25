import * as THREE from 'three';
import { useEffect, useState } from 'react'
import './Globe.css'
import ThreeGlobe from 'three-globe'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import countries from "./custom.geo.json"


const newGlobe = () => {
    // useEffect(() => {
    let renderer, scene, camera, controls;
    let mouseX = 0;
    let mouseY = 0;
    let windowHalfX = window.innerWidth/2;
    let windowHalfY = window.innerHeight/2;

    // useEffect(() => {
        init();
        initGlobe();
        animate();

    // useEffect(() => {
    //     cleanup()
    // }, [])
    //     return cleanup;
    // }, []);


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

        // window.addEventListener("resize", onWindowResize, false);
        // document.addEventListener("mousemove", onMouseMove);
    }

    function initGlobe() {
     
        const Globe = new ThreeGlobe({
            waitforGlobeReady: true, // whether to wait until the globe wrapping image has been fully loaded before rendering the globe or any of the data layers.
            animateIn: true, // whether to animate the globe initialization, by scaling and rotating the globe into its inital position.
        })
        // .hexPolygonUseDots(true) // DOTS or HEXAGONS
        .hexPolygonAltitude(0.001)
        .hexPolygonColor(0xffffff) // old yellow color 0xf8ff00
        // .hexPolygonsData(countries.features)  // Dots that are shown creating the shapes of the countries
        
    //     .hexPolygonGeoJsonGeometry(d => {
    //         // Check if the polygon belongs to Africa
    //         if (d.properties.name === "Africa") {
    //             // Return the GeoJSON geometry of Africa
    //             console.log("hi")
    // }})
        // .hexPolygonsData(map.features)
        .hexPolygonResolution(3) // 3 default
        .hexPolygonMargin(0.2) // 0.7 default
        .hexPolygonsData(countries.features)
        // Add a single dot data point
        // .pointsData([
        //     { lat: 37.94473839523154, lng: -98.39589896115403, labelText: "North America" }, // North America
        //     { lat: 9.733334005343849, lng: 20.565433340457837, labelText: "Africa" }, // Africa
        //     { lat: 50.949853817789965, lng: 89.10086333001446 }, // Asia (Russia)
        //     { lat: -15.728307335891495, lng: -59.29560821837691 }, // South America
        //     { lat: -24.999521047400123, lng: 135.5948694010283 }, // Australia
        //     { lat: 51.4035271609263, lng: 15.353853121272373 }, // Europe
        //     { lat: -76.74626412977844, lng: 10.581677628573393 } // Antarctica
        //   ])
        // .pointColor(0xff0000)
        // .pointRadius(1)
        // .labelsData([
        //     { lat: 37.86774960055474, lng: -121.55149239728406, labelText: "North America", labelSize: 2, labelColor: 'red' }, // North America
        //     { lat: 9.733334005343849, lng: 20.565433340457837, labelText: "Africa" } // Africa
        // ])

        
        // .labelText(d => d.labelText) // Accessor function for label text
        // .labelColor(0x000000) // Black color for label text
        // .labelSize(0.5) // Adjust the size of the label text
        // .labelAltitude(0.5) // Set the altitude of the labels
        
    //    Globe.pointsData.forEach('click', (point) => {
    //     console.log("Hey what's up bro")
    //    })
        
        Globe.rotateY(-Math.PI*(5/9))
        Globe.rotateZ(-Math.PI/6);
        const globeMaterial = Globe.globeMaterial()   // Yellow hex color 0xe7d952
        globeMaterial.color = new THREE.Color(0x238bf0) // Dark Green 0x13a113
        globeMaterial.emissive = new THREE.Color(0x13a113)
        globeMaterial.emissiveIntensity = 0.1;
        globeMaterial.shininess = 0.7

        scene.add(Globe)
        }

        

    function onMouseMove(event) {
        mouseX = event.ClientX - windowHalfX;
        mouseY = event.ClientY - windowHalfY;
    }

    // function onWindowResize() {
    //     camera.aspect = window.innerWidth/ window.innerHeight
    //     camera.updateProjectionMatrix()
    //     windowHalfX = window.innerWidth/1.5;
    //     windowHalfY = window.innerHeight/1.5;
    //     renderer.setSize*(window.innerWidth, window.innerHeight)
    // }

    function animate() {
        camera.lookAt(scene.position)
        controls.update()
        renderer.render(scene, camera)
        requestAnimationFrame(animate)
    }
        // }, [])
        // const cleanup = () => {
        //     document.body.removeChild(renderer.domElement);
        // };
    // return cleanup()

let mouse = new THREE.Vector2(0,0);
let raygun = new THREE.Raycaster();
let useRaycast = true;

function onClick(event) {
    // Get mouse position in screen space
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    // Only raycast if not panning (optimization)
    // var hits;
    // if (useRaycast) {
    //     raygun.setFromCamera(mouse, camera);

    //     // Raycast to single object
    //     hits = raygun.intersectObjects(scene.children, true);
    // }

    // Run if we have intersections
    // if (hits.length > 0) {
    //     for (var i = 0; i < hits.length; i++ ) {
    //         // Check if the clicked object is one of the points
    //         if (hits[i].object.userData.isPoint) {
    //             // Navigate to the profile page
    //             window.location.href = 'http://localhost:5173/profile'; // Change '/profile' to the URL of your profile page
    //             break; // Exit the loop
    //         }
    //     }
    // }
}

// window.addEventListener('click', onClick, false);
}

export default newGlobe

export const removeGlobe = () => {
    const globeContainer = document.getElementById('globe-container');
    if (globeContainer) {
        document.body.removeChild(globeContainer);
    }
}
