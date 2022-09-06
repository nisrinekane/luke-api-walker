import './App.css';
import React, { useState, useEffect } from 'react'
import Form from './components/Form';
import Planet from './components/Planet';
import Person from './components/Person';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [category, setCategory] = useState('people');
  const [id, setId] = useState(1);
  const [results, setResults] = useState({})

  return (
    <div>
      <Routes>
        <Route path='/' element={<Form category={category} id={id} setCategory={setCategory} setId={setId} />}>
          <Route path='/people/:id' element={<Person id={id} setResults={setResults} results={results} />} />
          <Route path='/planets/:id' element={<Planet id={id} setResults={setResults} results={results}/>} />
        </Route>
      </Routes>
      <div>
      </div>
    </div>
  );
}

export default App;
