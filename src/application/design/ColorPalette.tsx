import React from 'react';

const ColorPalette: React.FC = () => {
  const colorData = [
    {
      name: 'Deep Forest Green',
      hex: '#004338',
      usage: 'Logo, headers, call-to-action buttons, accent elements',
    },
    {
      name: 'Warm Gray',
      hex: '#757575',
      usage: 'Body text, section dividers, backgrounds for CTAs',
    },
    {
      name: 'Natural Beige',
      hex: '#E8E2D5',
      usage: 'Backgrounds, alternating sections with white',
    },
    {
      name: 'Sky Blue',
      hex: '#CAEBF2',
      usage: 'Links, icons, highlighting key information',
    },
    {
      name: 'Off-White',
      hex: '#F8F8F7',
      usage: 'Main background, whitespace',
    },
  ];

  return (
    <div>
      <h2>Evergreen Construction Color Palette</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {colorData.map((color) => (
          <div
            key={color.hex}
            style={{
              width: '200px',
              margin: '10px',
              padding: '20px',
              backgroundColor: color.hex,
              color: color.hex === '#004338' ? 'white' : 'black', // White text for dark green
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3>{color.name}</h3>
            <p style={{ fontSize: '14px' }}>{color.hex}</p>
            <p style={{ fontSize: '12px' }}>{color.usage}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;