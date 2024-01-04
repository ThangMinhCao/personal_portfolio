import React, { useState, useLayoutEffect } from 'react';
import "./VinylPlayer.css";

/* Resource: https://stackoverflow.com/a/19014495 */
function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

/* Copyright (c) 2024 by Rob Rehrig (https://codepen.io/robrehrig/pen/AooLxK) */
const VinylPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [width] = useWindowSize();

  const handlePlayClicked = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{flex: 1}}>
      <div id="turntable" style={{transform: `scale(${Math.max(0.4, width / 1344)})`}}>
        <div id="table-shadow"></div>
        <div id="table-feet"></div>
        <div id="wood">
          <div id="grain1"></div>
          <div id="grain2"></div>
          <div id="grain3"></div>
          <div id="grain4"></div>
          <div id="grain5"></div>
          <div id="grain6"></div>
        </div>
        <div id="wood2">
          <div id="grain7"></div>
          <div id="grain8"></div>
          <div id="grain9"></div>
          <div id="grain10"></div>
          <div id="grain11"></div>
        </div>
        <div id="table"></div>
        <div id="button" onClick={handlePlayClicked}></div>
        <div id="disk">
          <div id="label"></div>
        </div>
        <div id="axis-shadow"></div>
        <div id="axis"></div>
        <div id="arm-shadow"></div>
        <div id="weight-shadow"></div>
        <div id="base">
          <div id="axle-shadow"></div>
        </div>
        <div id="lever"></div>
        <div id="weight"></div>
        <div id="axle"></div>
        <div id="arm"></div>
        <div id="head"></div>
      </div>
    </div>
  );
}

export default VinylPlayer;