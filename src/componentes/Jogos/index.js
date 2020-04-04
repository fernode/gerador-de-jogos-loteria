import React from 'react';
import {Li, Span} from './styles';

const Jogos = props => {
  return (
    <div className="mt-4">
      <h2>Jogos</h2>
      <ol className="list-group">
        {props.jogos.map((jogo, index) => (
          <Li key={index} className="list-group-item">
            {jogo.map(n => (
              <Span>{n}</Span>
            ))}
          </Li>
        ))}
      </ol>
    </div>
  );
};

export default Jogos;
