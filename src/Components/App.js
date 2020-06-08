import React , {Component } from 'react';
import Table from './Table';
import Form from './Form';


class App extends Component{

state = {
  characters :[
    {
      name: 'Charlie',
      job: 'Janitor',
    },
    {
      name: 'Mac',
      job: 'Bouncer',
    },
    {
      name: 'Dee',
      job: 'Aspring actress',
    },
    {
      name: 'Dennis',
      job: 'Bartender',
    }
  ],
}
removeCharacter =  index =>{
  console.log('removeCharacter');
  console.log('index ' + index);
   const { characters } = this.state; 
   console.log(characters);
   this.setState({
    characters: characters.filter((character, i) => {
      console.log('i  ' + i );
      return i !== index
    }),
  })
}

handleSubmit = character => {
  this.setState({ characters: [...this.state.characters, character] })
}

  render(){
    
    // consumir un api mediante un JSON
    const { characters } = this.state


    return (
      <div className='container'>
        <Table  characterData = {characters}  removeCharacter = { this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
      
    )
  }
}
export default App