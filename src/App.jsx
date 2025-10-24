import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Social from "./components/Social";
import Footer from "./components/Footer";
// src/App.jsx
import Card from './components/Card'; // Importamos el componente
import './App.css'; // Asegúrate de tener un CSS base

function App() {
  return (
    <div className="dashboard-container">
      <h2>📊 Panel de Administración</h2>

      {/* 1. Card de Usuarios */}
      <Card 
        title="Usuarios Registrados" 
        value="1.250" 
        icon="👤" 
      />
      
      {/* 2. Card de Ventas */}
      <Card 
        title="Ventas del Mes" 
        value="$45.300" 
        icon="💰" 
      />
      
      {/* 3. Card de Pedidos Pendientes */}
      <Card 
        title="Pedidos Pendientes" 
        value="12" 
        icon="📦" 
      />
      
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
      <Social />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
