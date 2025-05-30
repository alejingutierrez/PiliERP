import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const Carousel = ({ items }) => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + items.length) % items.length);
  const next = () => setIndex((index + 1) % items.length);

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <Box sx={{ display: 'flex', transition: 'transform 0.3s', transform: `translateX(-${index * 100}%)` }}>
        {items.map((item, i) => (
          <Box key={i} sx={{ minWidth: '100%' }}>
            {item}
          </Box>
        ))}
      </Box>
      {items.length > 1 && (
        <>
          <IconButton size="small" onClick={prev} sx={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)' }}>
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" onClick={next} sx={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)' }}>
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
          <Box sx={{ display: 'flex', justifyContent: 'center', position: 'absolute', bottom: 8, left: 0, right: 0 }}>
            {items.map((_, i) => (
              i === index ? (
                <RadioButtonCheckedIcon key={i} fontSize="small" sx={{ mx: 0.25 }} />
              ) : (
                <RadioButtonUncheckedIcon
                  key={i}
                  fontSize="small"
                  sx={{ mx: 0.25, cursor: 'pointer' }}
                  onClick={() => setIndex(i)}
                />
              )
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default Carousel;
