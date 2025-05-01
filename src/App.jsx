import React from 'react';
import './App.css';
import seguridad1 from './imgs/seguridad1.jpg';
import seguridadmovil from './imgs/seguridadmovil.jpg';
import tapo from './imgs/tapo.jpg';
import camaras from './imgs/camaras.png';


const App = () => {
  return (
    <div>
      <header>
        <h1>AgroNet Security</h1>
        <h3 className="tagline">Instalación rápida.<br />Seguridad total.<br />Desde tu celular.</h3>
      </header>
      <section className="hero">
      <img src={seguridad1} alt="Seguridad en casa" />
        <h2>Protección en minutos, tranquilidad para siempre</h2>
      </section>

      <section className="features">
        <div className="feature">
          <img src={seguridadmovil} alt="Vigilancia remota"
          />
          <p>Todo bajo control, desde tu celular.</p>
        </div>
        <div className="feature">
          <img
            src={tapo}
            alt="Cámara exterior"
          />
          <p>Nosotros lo instalamos, tú solo miras.</p>
        </div>
        <div className="feature">
          <img
            src={camaras}
            alt="Tecnología confiable"
          />
          <p>Fácil, rápido y seguro. Como debe ser.</p>
        </div>
      </section>

      <footer>
        <p>Escríbenos por WhatsApp o E-Mail</p>
        <a href="https://wa.me/524499282413" target="_blank" rel="noopener noreferrer">
          <img
            className="whatsapp-icon"
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt="WhatsApp"
          />
          <span>449-928-24-13</span>
        </a>
        <br />
        <a href="mailto:contacto@agronetsecurity.com" target="_blank" rel="noopener noreferrer">
          <img 
            className="email-icon"
            src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
            alt="Correo electrónico"
          />
          <span>contacto@agronetsecurity.com</span>
          </a>
      </footer>
    </div>
    
  );
};

export default App;
