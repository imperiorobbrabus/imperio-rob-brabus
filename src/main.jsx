
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";

const Home = () => (
  <div style={{padding:24, textAlign:'center'}}>
    <img src="/brasao.png" style={{height:64}} />
    <h1 style={{marginTop:12, fontFamily:'serif'}}>Império Rob Brabus – Moda e Luxo Internacional</h1>
    <p>Bem-vindo. Acesse a <Link to="/loja">loja</Link>.</p>
  </div>
);

const Loja = () => <div style={{padding:24}}>Loja pronta.</div>;
const Sucesso = () => <div style={{padding:24}}>Pagamento aprovado.</div>;
const Cancelado = () => <div style={{padding:24}}>Pagamento cancelado.</div>;

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loja" element={<Loja />} />
      <Route path="/sucesso" element={<Sucesso />} />
      <Route path="/cancelado" element={<Cancelado />} />
    </Routes>
  </Router>
);

createRoot(document.getElementById("root")).render(<App />);
