// components/BlurEffect.jsx

import React from 'react';

// Array containing the unique styles for each of the 8 layers
const blurLayers = [
  {
    zIndex: 1,
    maskImage: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0) 37.5%)',
    backdropFilter: 'blur(0.0625px)',
  },
  {
    zIndex: 2,
    maskImage: 'linear-gradient(rgba(0, 0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgba(0, 0, 0, 0) 50%)',
    backdropFilter: 'blur(0.125px)',
  },
  {
    zIndex: 3,
    maskImage: 'linear-gradient(rgba(0, 0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 62.5%)',
    backdropFilter: 'blur(0.25px)',
  },
  {
    zIndex: 4,
    maskImage: 'linear-gradient(rgba(0, 0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgba(0, 0, 0, 0) 75%)',
    backdropFilter: 'blur(0.5px)',
  },
  {
    zIndex: 5,
    maskImage: 'linear-gradient(rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0) 87.5%)',
    backdropFilter: 'blur(1px)',
  },
  {
    zIndex: 6,
    maskImage: 'linear-gradient(rgba(0, 0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)',
    backdropFilter: 'blur(2px)',
  },
  {
    zIndex: 7,
    maskImage: 'linear-gradient(rgba(0, 0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgb(0, 0, 0) 100%)',
    backdropFilter: 'blur(4px)',
  },
  {
    zIndex: 8,
    maskImage: 'linear-gradient(rgba(0, 0, 0, 0) 87.5%, rgb(0, 0, 0) 100%)',
    backdropFilter: 'blur(8px)',
  },
];

// Styles from the original .blurContainer class
const containerStyle: React.CSSProperties = {
  position: 'absolute',
  inset: '0',
  overflow: 'hidden',
};

// Shared styles from the original .blurLayer class
const sharedLayerStyle: React.CSSProperties = {
  opacity: 1,
  position: 'absolute',
  inset: '0px',
  borderRadius: '0px',
  pointerEvents: 'none' as React.CSSProperties['pointerEvents'],
  willChange: 'auto',
};

const BlurEffect = () => {
  return (
    <div style={containerStyle}>
      {blurLayers.map((layer) => (
        <div
          key={layer.zIndex}
          style={{
            // 1. Apply the shared layer styles
            ...sharedLayerStyle,
            
            // 2. Apply the unique, dynamic styles for this layer
            zIndex: layer.zIndex,
            maskImage: layer.maskImage,
            WebkitMaskImage: layer.maskImage, // Safari compatibility
            backdropFilter: layer.backdropFilter,
            WebkitBackdropFilter: layer.backdropFilter, // Safari compatibility
          }}
        />
      ))}
    </div>
  );
};

export default BlurEffect;