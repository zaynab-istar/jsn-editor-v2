import React from 'react';

function JsonViewer({ data }) {
  return (
    <div style={{ flex: 1, padding: '10px', overflowX: 'auto', backgroundColor: 'lightgray' }}>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default JsonViewer;
