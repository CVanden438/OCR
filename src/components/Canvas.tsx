import React, { useRef, useEffect, useState } from 'react';
import styles from './Canvas.module.css';
let canvas;
let ctx;
const Canvas = ({ setUrl }: any) => {
  const [isDrawing, setisDrawing] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    canvas = canvasRef.current;
    //@ts-ignore
    ctx = canvas.getContext('2d');
    // ctx.lineWidth = 5;
    // ctx.lineCap = 'round';
    // ctx.strokeStyle = 'red';
    setLoaded(true);
  }, []);

  const handleMouseDown = (e) => {
    setisDrawing(true);
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const handleMouseUp = (e) => {
    setisDrawing(false);
  };

  const handleMouseMove = (e) => {
    if (isDrawing) {
      ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      ctx.stroke();
    }
  };

  const clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
  return (
    <>
      <canvas
        height={500}
        width={500}
        className={styles.canvas}
        ref={canvasRef}
        onMouseDown={(e) => handleMouseDown(e)}
        onMouseUp={(e) => handleMouseUp(e)}
        onMouseMove={(e) => handleMouseMove(e)}
      />
      <button onClick={clearCanvas}>Clear</button>
      <button onClick={() => setUrl(canvas.toDataURL())}>Get URL</button>
    </>
  );
};

export default Canvas;
