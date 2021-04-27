import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  state ={
    id:151,
    name:'',
    hp:'',
    sprites:{
      front:'',
      back:'',
    }
  }

  handleName=(event)=>{
    this.setState({
      name: event.target.value
    })
  }

  handleHp=(event)=>{
    this.setState({
      hp: event.target.value
    })
  }

  handleFrontUrl=(event)=>{
    this.setState({
      sprites:{
        ...this.state.sprites,
        front: event.target.value
      }
    })
  }

  handleBackUrl=(event)=>{
    this.setState({
      sprites:{
        ...this.state.sprites,
        back: event.target.value
      }
    })
  }

  handleSubmitForm= (event) =>{
    event.preventDefault()
    this.props.handleSubmit(this.state)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={event => this.handleSubmitForm(event)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleName}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleHp}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleFrontUrl}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleBackUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
