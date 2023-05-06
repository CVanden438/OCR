import React, { useRef, useEffect, useState } from 'react';
import styles from './Canvas.module.scss';
import Tesseract from 'tesseract.js';
import Button from './ui/Button';
import GameInstructions from './GameInstructions';
let canvas;
let ctx;
const Canvas = ({ submitAnswer }: any) => {
  const [isDrawing, setisDrawing] = useState(false);
  const [instructions, setInstructions] = useState(true);
  const canvasRef = useRef(null);

  useEffect(() => {
    canvas = canvasRef.current;
    //@ts-ignore
    ctx = canvas.getContext('2d');
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    // ctx.strokeStyle = 'red';
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
  const readText = () => {
    const url = canvas.toDataURL();
    Tesseract.recognize(url, 'eng', {
      logger: (m) => {
        // console.log(m);
        // if (m.status === 'recognizing text') {
        //   setProgress(m.progress);
        // }
      },
    }).then(({ data: { text } }) => {
      console.log(text);
      submitAnswer(text);
      clearCanvas();
    });
  };
  return (
    <div className={styles.canvasContainer}>
      <canvas
        height={600}
        width={900}
        className={styles.canvas}
        ref={canvasRef}
        onMouseDown={(e) => handleMouseDown(e)}
        onMouseUp={(e) => handleMouseUp(e)}
        onMouseMove={(e) => handleMouseMove(e)}
      />
      <div className={styles.canvasButtons}>
        <Button onClick={clearCanvas} colour='red'>
          Clear
        </Button>
        <Button onClick={readText} colour='green'>
          Submit
        </Button>
      </div>
      {instructions && <GameInstructions setInstructions={setInstructions} />}
    </div>
  );
};

export default Canvas;
