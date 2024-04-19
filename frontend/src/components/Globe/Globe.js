import * as THREE from 'three';
import { useEffect, useState } from 'react'
import './Globe.css'
import ThreeGlobe from 'three-globe'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import countries from "./custom.geo.json"
import map from "./map.json"


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
        document.body.appendChild(renderer.domElement)

        scene = new THREE.Scene()

        const ambientLight = new THREE.AmbientLight(0xbbbbbbb, 0.3) //0xbbbbbbb, 0.3
        scene.add(ambientLight)
        scene.background = new THREE.Color(0xffffff) //0x040d21

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
        controls.minDistance = 200;
        controls.maxDistance = 500;
        controls.rotateSpeed = 0.8
        controls.zoomSpeed = 1
        controls. autoRotate = false

        controls.minPolarAngle = Math.PI/3.5
        controls.maxPolarAngle = Math.PI - Math.PI/3 

        // window.addEventListener("resize", onWindowResize, false);
        // document.addEventListener("mousemove", onMouseMove);
    }

    function initGlobe() {
        // const [isHovering, setIsHovering] = useState(false)

        // const handleMouseEnter = () => {
        //     setIsHovering(true)        
        // }
        
        // const handleMouseLeave = () => {
        //     setIsHovering(false)
        // }
        const Globe = new ThreeGlobe({
            waitforGlobeReady: true, // whether to wait until the globe wrapping image has been fully loaded before rendering the globe or any of the data layers.
            animateIn: true, // whether to animate the globe initialization, by scaling and rotating the globe into its inital position.
        })
        // .hexPolygonUseDots(true) // DOTS or HEXAGONS
        .hexPolygonAltitude(0)
        .hexPolygonColor(0xf8ff00)
        .hexPolygonsData(countries.features)  // Dots that are shown creating the shapes of the countries
        // .hexPolygonsData(map.features)
        .hexPolygonResolution(2) // 3 default
        .hexPolygonMargin(0.2) // 0.7 default
        // .pointLat(22.770113005430577)
        // .pointLng(79.64590852119045)
        .tileLat(22.770113005430577)
        .tileLng(79.64590852119045)
        .tileWidth(2)
        
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
}

export default newGlobe






// import * as THREE from 'three';
// import { useEffect, useState } from 'react'
// import './Globe.css'
// import ThreeGlobe from 'three-globe'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// import countries from "./custom.geo.json"
// import map from "./map.json"


// const Globe = () => {
// console.log("Globe")
// console.log("hi")
// // useEffect(() => {
// let renderer, scene, camera, controls;
// let mouseX = 0;
// let mouseY = 0;
// let windowHalfX = window.innerWidth/2;
// let windowHalfY = window.innerHeight/2;

// init()
// initGlobe()
// // onWindowResize()
// animate()
// // loadBackground()


// function init() {
    
//     // scene.background = new THREE.Color(0x6bb1e5);

//     renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setPixelRatio(window.devicePixelRatio)
//     renderer.setSize(window.innerWidth, window.innerHeight)
//     document.body.appendChild(renderer.domElement)

//     scene = new THREE.Scene()

//     const ambientLight = new THREE.AmbientLight(0xbbbbbbb, 0.3) //0xbbbbbbb, 0.3
//     scene.add(ambientLight)
//     scene.background = new THREE.Color(0xffffff) //0x040d21

//     camera = new THREE.PerspectiveCamera();
//     camera.aspect = window.innerWidth/ window.innerHeight;
//     camera.updateProjectionMatrix()

//     const dLight = new THREE.DirectionalLight(0xffffff, 0.8);
//     dLight.position.set(800, 2000, 400);
//     camera.add(dLight)

//     camera.position.z = 400;
//     camera.position.x = 0;
//     camera.position.y = 0;

//     scene.add(camera)

//     scene.fog = new THREE.Fog(0x535ef3, 400, 2000)

//     controls = new OrbitControls(camera, renderer.domElement)
//     controls.enableDamping = true;
//     controls.dynamicDampingFactor = 0.01;
//     controls.enablePen = false
//     controls.minDistance = 200;
//     controls.maxDistance = 500;
//     controls.rotateSpeed = 0.8
//     controls.zoomSpeed = 1
//     controls. autoRotate = false

//     controls.minPolarAngle = Math.PI/3.5
//     controls.maxPolarAngle = Math.PI - Math.PI/3 

//     // window.addEventListener("resize", onWindowResize, false);
//     // document.addEventListener("mousemove", onMouseMove);
// }

// function initGlobe() {
//     // const [isHovering, setIsHovering] = useState(false)

//     // const handleMouseEnter = () => {
//     //     setIsHovering(true)        
//     // }
    
//     // const handleMouseLeave = () => {
//     //     setIsHovering(false)
//     // }


//     const Globe = new ThreeGlobe({
//         waitforGlobeReady: true, // whether to wait until the globe wrapping image has been fully loaded before rendering the globe or any of the data layers.
//         animateIn: true, // whether to animate the globe initialization, by scaling and rotating the globe into its inital position.
//     })
//     .hexPolygonUseDots(true) // DOTS or HEXAGONS
//     .hexPolygonAltitude(0)
//     .hexPolygonColor(0xf8ff00)
//     .hexPolygonsData(countries.features)  // Dots that are shown creating the shapes of the countries
//     // .hexPolygonsData(map.features)
//     .hexPolygonResolution(2) // 3 default
//     .hexPolygonMargin(0.2) // 0.7 default
//     // .pointLat(22.770113005430577)
//     // .pointLng(79.64590852119045)
//     .tileLat(22.770113005430577)
//     .tileLng(79.64590852119045)
//     .tileWidth(2)
    
// Globe.rotateY(-Math.PI*(5/9))
// Globe.rotateZ(-Math.PI/6);
// const globeMaterial = Globe.globeMaterial()   // Yellow hex color 0xe7d952
// globeMaterial.color = new THREE.Color(0x238bf0) // Dark Green 0x13a113
// globeMaterial.emissive = new THREE.Color(0x13a113)
// globeMaterial.emissiveIntensity = 0.1;
// globeMaterial.shininess = 0.7

// scene.add(Globe)
// }

// // function loadBackground() {
// //     const loader = new THREE.TextureLoader();
// //     const texture = loader.load('../../../.././assets/world-map.png');
// //     scene.background = texture;
// // }

// function onMouseMove(event) {
//     mouseX = event.ClientX - windowHalfX;
//     mouseY = event.ClientY - windowHalfY;
// }

// // function onWindowResize() {
// //     camera.aspect = window.innerWidth/ window.innerHeight
// //     camera.updateProjectionMatrix()
// //     windowHalfX = window.innerWidth/1.5;
// //     windowHalfY = window.innerHeight/1.5;
// //     renderer.setSize*(window.innerWidth, window.innerHeight)
// // }

// function animate() {
//     // camera.position.x += Math.abs(mouseX) <= windowHalfX / 2 // If i comment this line and 2 lines below it, world stops zooming in when i turn it
//     // ? (mouseX/2 - camera.position.x) * 0.005 : 0;
//     // camera.position.y += (-mouseY/2 - camera.position.y)*0.005
//     camera.lookAt(scene.position)
//     controls.update()
//     renderer.render(scene, camera)
//     requestAnimationFrame(animate)
// }
//     // }, [])
// }

// export default Globe