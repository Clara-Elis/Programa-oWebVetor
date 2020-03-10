import React from 'react'

class PlayerDetails2 extends React.Component {

    render(props){
        return(
            <div>
                <h1>{this.props.Vetor.nome}</h1>
                <h2>{this.props.Vetor.pais}</h2>
                <h3>{this.props.Vetor.time}</h3>
            </div>
        )
    }
}

export default PlayerDetails2