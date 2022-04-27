import './App.css';
import axios from 'axios';
import Uploads from "./components/Uploads"
import { useEffect, useState } from 'react';
import NewForm from './components/NewForm';

const API_URL = "http://localhost:3000/api/v1/uploads"

function getUploadData() {
  return axios.get(API_URL).then((response) => response.data)
}

function App() {
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    let mounted = true;
    getUploadData().then((items) => {
      if (mounted) {
        setUploads(items);
      }
    });
    return () => (mounted = false);
  }, []);


  return (
    <div className="App">
      <NewForm />

      <h1>Uploads</h1>
      <Uploads uploads={uploads} />
    </div>
  );
}

export default App;
