import React from 'react';
import { Button } from 'react-bootstrap';
import ReactJson from 'react-json-view';

function EditableJsonArea({ data, setData, fetched, fetchData }) {
  
  const handleEdit = (edit) => {
    setData(edit.updated_src);
  };

  const handleAdd = (add) => {
    setData(add.updated_src);
  };

  const handleDelete = (del) => {
    setData(del.updated_src);
  };

  return (
    <div style={{ flex: 1, padding: '10px' }}>
      {!fetched ? (
        <Button onClick={fetchData} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>Fetch Json</Button>
      ) : (
        <ReactJson 
          src={data} 
          name={null} 
          displayDataTypes={false}
          onEdit={handleEdit}
          onAdd={handleAdd}
          onDelete={handleDelete}
          theme="solarized"
          style={{ fontSize: '16px', padding: '10px', backgroundColor: 'white' }}
          enableClipboard={false}
        />
      )}
    </div>
  );
}

export default EditableJsonArea;
