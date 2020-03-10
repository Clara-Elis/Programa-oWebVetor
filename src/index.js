// 1# IMPORTAR BIBLIOTECAS
// 2# CRIAR COMPONENTES
// 3# MOSTRAR COMPONENTES NA TELA

import React from 'react';
//interface de programação para documentos HTML e XML
import ReactDOM from 'react-dom';
//Importando arquivos de PlayerDetails
import PlayerDetails2 from './PlayerDetails2';
import 'bootstrap/dist/css/bootstrap.css'

//Passando de Função para class
class App extends  React.Component {  
      
      Vetor = [
            {
                  nome : 'Jogador1',
                  pais : 'Pais1',
                  time : 'time1'
                  },
            {
                  nome : 'Camila',
                  pais : 'Anapolis',
                  time : 'xxxxxx'
                  },
            {
                  nome : 'Bianca',
                  pais : 'Br',
                  time : 'ssss'
                  }
      ]


      constructor(props){
            //Busca na clase pai o props
            super(props);

            console.log(this);

            this.state = {
                  indice: 0
            }

      }

      incrementarIndice = (event) => {
        if (this.state.indice<=this.Vetor.length-2)
        {
            this.setState({
                  indice: this.state.indice+1
            })
        }
      }

      decrementarIndice = (event) => {
            
        if (this.state.indice!==0) {
            this.setState({
                      indice: this.state.indice-1  
            })
        }
        
      }
      
      render(){
             return(
                   <div className="container">

                        <br/>
                        <PlayerDetails2 nome="Clara Elis" Vetor={this.Vetor[this.state.indice]}>
                        </PlayerDetails2>
                        <br/>

                        <button type="button" className ="btn btn-primary" onClick = {this.decrementarIndice} >Anterior</button>
                            
                        <button type="button" className ="btn btn-primary"  onClick = {this.incrementarIndice} >Proximo</button>

                   </div>    
            );      
      }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
