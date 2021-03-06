import React from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import { Component } from 'react';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

class App extends Component {
    componentDidMount() {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        this.mount.appendChild( renderer.domElement );
      
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshStandardMaterial( { color: 0x7e31eb } );
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
        const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
        scene.add( light );
        const loader = new GLTFLoader();
          loader.load('models/statue.gltf',(gltf)=>{
            scene.add( gltf.scene )
          });

        camera.position.z = 2;
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.update();
var animate = function () {
            requestAnimationFrame( animate );
            cube.rotation.y += 0.01;
            renderer.render( scene, camera );
            controls.update();
        };
        animate();
    }
    render() {
        return (
            <div ref={ref => (this.mount = ref)} />
        )
    }
}
const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement);
export default App;
