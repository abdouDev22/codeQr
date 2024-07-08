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

  return (
    <div>
      <h1>Scanner de QR Code</h1>
      <QrScanner
        delay={300}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      {scanResult && (
        <p>Résultat du scan : <a href={scanResult.text}>{scanResult.text}</a></p>
      )}
    </div>
  );
};

export default QRScanner;
