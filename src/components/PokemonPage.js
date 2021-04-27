import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  
  state= {
    allPokemon: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(response => response.json())
    .then(pokemonData => this.setState({
      allPokemon: pokemonData
    }))
  }

  handleSearch = (event) => {
    const searchValue = event.target.value 
    const pokemonResult = this.state.allPokemon.filter(pokemon => pokemon.name.startsWith(searchValue))
    this.setState({
      allPokemon: pokemonResult
    })
  }

  handleSubmit= (formState) => {
    this.state.allPokemon.push(formState)
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit}/>
        <br />
        <Search handleSearch={this.handleSearch}/>
        <br />
        <PokemonCollection allPokemon={this.state.allPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage