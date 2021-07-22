/* eslint-disable */
import "aframe";
import { Entity, Scene } from "aframe-react";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
require("aframe-event-set-component");

AFRAME.registerComponent('hover-label', {
  init: function () {
    var el = this.el;  // <a-box>
    el.addEventListener('mouseenter', function () {
      console.log(`Hovering over ${el}`)
    });
    el.addEventListener('mouseleave', function () {
      //setState({Label: ""});
    });
  }
});

class App extends React.Component {
  render() {
    return (
      <a-scene
        renderer="antialias: true;
      colorManagement: true;
      sortObjects: true;
      physicallyCorrectLights: true;
      maxCanvasWidth: 1920;
      maxCanvasHeight: 1920;"
      >
        <h1></h1>/* Pripravený nadpis pre hover-label TODO: useState */
        <a-sky material="src: basement/bg.png" geometry=""></a-sky>
        <a-entity light="type: ambient; intensity: 0.5;"></a-entity>
        <a-entity light="angle: 90; intensity: 1"></a-entity>
        <a-camera position="0 7 0.55">
          <a-cursor></a-cursor>
        </a-camera>
        <a-entity daydream-controls></a-entity>
        <a-entity gltf-model="basement/floor_2.gltf" hover-label></a-entity>
        <a-entity gltf-model="basement/lightbulbs.gltf" hover-label></a-entity>
        <a-entity gltf-model="basement/sofa.gltf" hover-label></a-entity>
        <a-entity gltf-model="basement/ceiling.gltf" hover-label></a-entity>
        <a-entity gltf-model="basement/walls.gltf" hover-label></a-entity>
        <a-entity gltf-model="basement/glass.gltf" hover-label></a-entity>
      </a-scene>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
