import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (value) => {
    this.setState({
      filters: {
        ...this.state.filters, 
        type: value
      }
    })
  }

  onFindPetsClick = (event) =>{
    if(this.state.filters.type === "all"){
      fetch('/api/pets')  
      .then(resp => resp.json())
    }else{
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(resp => resp.json())
      .then(json => {
        this.setState({pets:json})
        console.log(json)
      })
      }
  }

  onAdoptPet = (id) =>{
    // console.log(this.state.pets)
    const newPetsArray = this.state.pets.map((pet) =>{
      if (pet.id === id){
        console.log(pet.isAdopted)
        pet.isAdopted = true; 
        console.log(pet.isAdopted)
        return pet;
      }else{
        return pet; 
      }
    })
      this.setState({
        pets:newPetsArray
      })
    // this.setState({
    //   pets.map(pet => 
    //     if (pet.id === id){
    //       pet.isAdopted = true; 
    //       return pet;
    //     }else{
    //       return pet;
    //     })
    // })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
              onChangeType={this.onChangeType}
              onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
              pets={this.state.pets}
              onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
