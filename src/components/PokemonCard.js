import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    pokemonPic: this.props.pokemon.sprites.front
  }

  handleClick= () => {
    if(this.state.pokemonPic === this.props.pokemon.sprites.front){
      this.setState({
        pokemonPic: this.props.pokemon.sprites.back
      })
    }else{
      this.setState({
        pokemonPic: this.props.pokemon.sprites.front
      })
    }
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img onClick={this.handleClick} src={this.state.pokemonPic} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard