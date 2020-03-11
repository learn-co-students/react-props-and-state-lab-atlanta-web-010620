import React from 'react'

class Pet extends React.Component {
  genderSign = () =>{
    if (this.props.pet.gender === 'male'){
      return '♂';
    }else{
      return'♀';
    };
  }

  adoptionButton = () => {
    if (this.props.pet.isAdopted){
      return this.disabledButton()
    }else{
      return this.enabledButton()
    }
  }
  
  disabledButton = () => {
    return (
      <button className="ui disabled button">Already adopted</button> 
      )
    }
    
    enabledButton = () => {
      return (
        <button className="ui primary button" 
        onClick = {event => this.props.onAdoptPet(this.props.pet.id)} 
        >Adopt pet</button>
    )
  }



  render() {

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.genderSign()}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.adoptionButton()}
    {/* {this.props.pet.isAdopted ? <button className="ui disabled button">Already adopted</button> : (
      <button className="ui primary button" onClick={event => this.props.onAdoptPet(this.props.pet.id)}  >
        Adopt pet
        </button>) } */}

          {/* <button className="ui disabled button">Already adopted</button>
          <button 
          className="ui primary button"
          onClick = {event => this.props.onAdoptPet(this.props.pet.id)}
          >Adopt pet</button> */}
        </div>
      </div>
    )
  }
}

export default Pet
