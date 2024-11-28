import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Panel from './Panel';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/panel' element={<Panel/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
