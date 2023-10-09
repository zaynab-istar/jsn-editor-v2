import React, { useState } from 'react';
import EditableJsonArea from './components/EditableJsonArea';
import JsonViewer from './components/JsonViewer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState([]);
  const [fetched, setFetched] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const jsonData = await response.json();
      setData(jsonData);
      setFetched(true);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <EditableJsonArea data={data} setData={setData} fetched={fetched} fetchData={fetchData} />
      <JsonViewer data={data} />
    </div>
  );
}

export default App;
