import React, { useState } from 'react';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/icon/icon.js';

const Carousel = ({ items }) => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + items.length) % items.length);
  const next = () => setIndex((index + 1) % items.length);

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', transition: 'transform 0.3s ease-in-out', transform: `translateX(-${index * 100}%)` }}>
        {items.map((item, i) => (
          <div key={i} style={{ minWidth: '100%' }}>
            {item}
          </div>
        ))}
      </div>
      {items.length > 1 && (
        <>
          <md-icon-button onClick={prev} style={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)' }}>
            <md-icon style={{'--md-icon-size': '20px'}}>arrow_back_ios</md-icon>
          </md-icon-button>
          <md-icon-button onClick={next} style={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)' }}>
            <md-icon style={{'--md-icon-size': '20px'}}>arrow_forward_ios</md-icon>
          </md-icon-button>
          <div style={{ display: 'flex', justifyContent: 'center', position: 'absolute', bottom: '8px', left: 0, right: 0 }}>
            {items.map((_, i) => (
              i === index ? (
                <md-icon key={i} style={{ margin: '0 2px', '--md-icon-size': '20px' }}>radio_button_checked</md-icon>
              ) : (
                <md-icon
                  key={i}
                  style={{ margin: '0 2px', cursor: 'pointer', '--md-icon-size': '20px' }}
                  onClick={() => setIndex(i)}
                >radio_button_unchecked</md-icon>
              )
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
