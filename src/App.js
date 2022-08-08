import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Precos from './routes/Precos';
import Treinamento from './routes/Treinamento';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/precos" element={<Precos />} />
        <Route path="/treinamento" element={<Treinamento />} />
      </Routes>
    </>
  );
}

export default App;
