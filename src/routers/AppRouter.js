import { Routes, Route, BrowserRouter} from "react-router-dom";
import React from 'react';
import { Navbar } from "../components/Navbar";
import LayoutForm from "../components/LayoutForm";
import Welcome from "../components/Welcome";

const AppRouter = () => {

  /*Dado al requerimiento de  rutas dentro de la prueba, se opto por utilizar
    la libreria @React-router-dom, la cuál a través de hooks fáciles de usar, 
    podemos implementar diversas formas de navegación entre componentes.
  */ 
  
  
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route  path="/vivair" element={<LayoutForm title="Vivair"/>} />
            <Route path="/avianca" element={<LayoutForm title="Avianca" />} />
            <Route path="/latam" element={<LayoutForm  title="Latam"/>} />
            <Route path="/aercaribe" element={<LayoutForm  title="AerCaribe"/>} />
            <Route path="/sky-airline" element={<LayoutForm  title="Sky Airline"/>} />
            <Route path="/emirates-airline" element={<LayoutForm  title="Emirates Airlines"/>} />
            <Route exact path="/" element={<Welcome/>} />
        </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
