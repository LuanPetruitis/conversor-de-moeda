import React, {Component} from 'react';
import './Conversor.css'

export default class Conversor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      moedaA_valor: "",
      moedaB_valor: 0,
    }

    this.converter = this.converter.bind(this);
  }

  converter() {
    let de_para = `${this.props.moedaA}_${this.props.moedaB}`
    let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=9677229832cd30e40acc`
  
    fetch(url)
    .then(res=>{

      return res.json()
    })
    .then(json=>{
      let cotacao = json[de_para];
      console.log(cotacao)
      let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2)
      // console.log(moedaB_valor)
      /* Nome da chave igual da variavel com valor moedaB_valor*/ 
      this.setState({ moedaB_valor })
    })
  }

  render() {
    return (
      <div className="conversor">
        <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
        {/* Nome da chave diferente da variavel com valor moedaA_valor:event.target.value*/} 
        <input type="text" onChange={(event) => {this.setState({moedaA_valor:event.target.value})}} />
        <input type="button" value="Converter" onClick={this.converter} />
        <h2>{this.state.moedaB_valor}</h2>
      </div>
    )
  }

}