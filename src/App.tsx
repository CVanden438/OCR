import { useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';
import Canvas from './components/Canvas';

function App() {
  const [url, setUrl] = useState('');
  const [text, setText] = useState('');
  const [progress, setProgress] = useState(0);
  const test = (url) => {
    Tesseract.recognize(url, 'eng', {
      logger: (m) => {
        console.log(m);
        if (m.status === 'recognizing text') {
          setProgress(m.progress);
        }
      },
    }).then(({ data: { text } }) => {
      console.log(text);
      setText(text);
    });
  };
  useEffect(() => {
    console.log(url);
  }, [url]);
  const magic = () => test(url);
  return (
    <>
      <Canvas setUrl={setUrl} />
      <button onClick={magic}>Get Text</button>
      <div className=''>{progress}</div>
      <p>{text}</p>
    </>
  );
}

export default App;
