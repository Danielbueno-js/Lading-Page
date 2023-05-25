import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Título da Página</h1>
        <h2 className="subtitle">Subtítulo da Página</h2>
        <div className="content">
          <div className="left-section">
            <img className="image" src="caminho/para/imagem.jpg" alt="Imagem" />
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Cras scelerisque tortor vel sapien eleifend, eget condimentum est fermentum. 
              Nullam consectetur metus in justo tristique luctus. 
              Quisque pretium nibh id nisi bibendum, nec pharetra velit vulputate. 
              Integer faucibus massa nec ligula faucibus, et tempor ipsum ultrices. 
              Sed nec orci dictum, scelerisque ligula in, euismod purus. 
              Suspendisse potenti. Ut ac purus eget massa consectetur venenatis. 
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
              Aliquam in tristique dolor. Suspendisse dapibus tellus non elementum vestibulum.
            </p>
          </div>
          <div className="right-section">
            <div className="form-box">
              <form className="form" action="#">
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="nome">Nome:</label>
                  <input type="text" id="nome" required />
                </div>
                <div className="form-group">
                  <div className="terms-container">
                    <input type="checkbox" id="termos" required />
                    <label htmlFor="termos">Eu concordo com os termos de envio para este email.</label>
                  </div>
                </div>
                <button className="submit-button" type="submit">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
