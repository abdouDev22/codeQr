// src/QRScanner.jsx
import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';

const QRScanner = () => {
  const [scanResult, setScanResult] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setScanResult(data);
      window.location.href = data.text; // Ouvre le lien scanné
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  const videoConstraints = {
    facingMode: { exact: "environment" } // Utiliser la caméra arrière
  };

  return (
    <div>
      <h1>Scanner le QR Code</h1>
      <QrScanner
        delay={300}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
        constraints={videoConstraints} // Ajouter les contraintes vidéo
      />
      {scanResult && (
        <p>Résultat du scan : <a href={scanResult.text}>{scanResult.text}</a></p>
      )}
    </div>
  );
};

export default QRScanner;
