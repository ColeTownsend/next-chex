import React from 'react';

const PrintObject = ({ content }) => {
  const formattedContent = JSON.stringify(content, null, 2);
  return <pre>{formattedContent}</pre>;
};

export default PrintObject;
