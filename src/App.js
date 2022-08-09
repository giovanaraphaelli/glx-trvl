import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Precos from './routes/Precos';
import Treinamento from './routes/Treinamento';
import Contato from './routes/Contato';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/precos" element={<Precos />} />
        <Route path="/treinamento" element={<Treinamento />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </>
  );
}

export default App;
