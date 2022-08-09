import React from 'react';
import './styles.css';

const Form = () => {
  return (
    <section className="form">
      <form>
        <label>Nome:</label>
        <input type="email" />
        <label>Email:</label>
        <input type="text" />
        <label>Assunto:</label>
        <input type="text" />
        <label>Detalhes:</label>
        <textarea rows="10" placeholder="Deixe sua mensagem aqui."></textarea>
        <button className="btn">Enviar</button>
      </form>
    </section>
  );
};

export default Form;
