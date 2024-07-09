// src/QRScanner.jsx
import React, { useRef, useCallback, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import jsQR from 'jsqr';

const QRScanner = () => {
  const [scanResult, setScanResult] = useState(null);
  const webcamRef = useRef(null);

  const handleScan = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (!imageSrc) return;

    const image = new Image();
    image.src = imageSrc;
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;
      const context = canvas.getContext('2d');
      context.drawImage(image, 0, 0, image.width, image.height);
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

      const code = jsQR(imageData.data, imageData.width, imageData.height);
      if (code) {
        setScanResult(code.data);
        window.location.href = code.data;
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(handleScan, 1000);
    return () => clearInterval(interval);
  }, [handleScan]);

  const videoConstraints = {
    facingMode: 'environment', // Utiliser la caméra arrière
  };

  return (
    <div>
      <h1>Scanner de QR Code</h1>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
      {scanResult && (
        <p>Résultat du scan : <a href={scanResult}>{scanResult}</a></p>
      )}
    </div>
  );
};

export default QRScanner;
