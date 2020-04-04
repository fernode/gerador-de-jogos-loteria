import React, { Component } from 'react';
import { Form, Select } from './styles';
import Jogos from '../Jogos';

class Escolha extends Component {
  constructor(props) {
    super(props);
    this.state = { jogo: 'lotofacil', nJogos: 1, jogos: [] };
  }

  handleChange(event) {
    this.setState({ jogo: event.target.value });
  }

  handleNumber(event) {
    this.setState({ nJogos: event.target.value });
  }

  generateNumbers(loteria, quantidade, dezenas) {
    let randomNumber;
    let jogo = [];
    let jogos = [];

    for (let i = 0; i < quantidade; i++) {
      jogo = [];
      while (jogo.length < loteria) {
        randomNumber = Math.floor(Math.random() * (dezenas - 1)) + 1;
        if (jogo.indexOf(randomNumber) < 0) {
          jogo.push(randomNumber);
        }else{
          continue;
        }
      }

      jogos.push(jogo.sort((a,b) => a - b));
    }

    return jogos;
  }

  getGame(jogo, quantidade) {
    let jogos = [];
  
    switch (jogo) {
      case 'lotofacil':
        jogos = this.generateNumbers(15, quantidade, 25);
        this.setState({ jogos: jogos });
        break;
      case 'megasena':
        jogos = this.generateNumbers(6, quantidade, 60);
        this.setState({ jogos: jogos });
        break;
      case 'quina':
        jogos = this.generateNumbers(5, quantidade, 80);
        this.setState({ jogos: jogos });
        break;
      case 'lotomania':
        jogos = this.generateNumbers(50, quantidade, 99);
        this.setState({ jogos: jogos });
        break;
      default:
        break;
    }
  }

  handleSubmit(event) {
    const { jogo, nJogos } = this.state;
    this.getGame(jogo, nJogos);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Form onSubmit={e => this.handleSubmit(e)}>
          <div className="input-group">
            <label>
              Escolha um jogo:
              <Select
                className="custom-select"
                value={this.state.jogo}
                onChange={e => this.handleChange(e)}
              >
                <option value="lotofacil">Lotofácil</option>
                <option value="megasena">Megasena</option>
                <option value="quina">Quina</option>
                <option value="lotomania">LotoMania</option>
              </Select>
            </label>
          </div>

          <div className="input-group">
            <label>
              <input
                className="form-control"
                type="number"
                min="1"
                placeholder="Número de jogos"
                onChange={e => this.handleNumber(e)}
              />
              <input
                type="submit"
                value="Gerar jogo"
                className="btn btn-success mt-3"
              />
            </label>
          </div>
        </Form>

        <Jogos jogos={this.state.jogos}/>
      </div>
    );
  }
}

export default Escolha;
