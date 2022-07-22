import React, { Component } from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends Component {
  render() {
    return (
      <section className="content">
      {conteudos.map(({ conteudo, bloco, status }) => (
        <article key={conteudo} className='carta'>
          <h4>O conteudo é: {conteudo}</h4>
          <p>status: {status}</p>
          <p>bloco: {bloco}</p>
        </article>
      ))}
      </section>
    )
  }
}

export default Content
