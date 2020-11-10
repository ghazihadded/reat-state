import React, {Component} from 'react';
import './App.css';
import Profil from './Profil'



class  App extends Component {

   constructor(){
      super()
     this.state={
       date:new Date(),
       fullName : 'Bill Gates',
       bio :"né le 28 octobre 1955 à Seattle (État de Washington)",
       profession :"Président-directeur général",
       show :true ,
     };
     this.clickHandler=this.clickHandler.bind(this);
   }

   clickHandler(){

    this.setState(prevState=>{

      return{
        show :!prevState.show
      }
      
    })
    console.log(this.state.show)
   }
  
   
  
  render(){
   
    return (
      <div className="container ">
        <p>{this.state.date.toLocaleTimeString()} </p>

       <div className={this.state.show?"not":"view"}>
        <Profil 
        name = {this.state.fullName}
        bio  = {this.state.bio}
        profession = {this.state.profession}   
        clickButton ={this.clickHandler}
            />
       </div>
       <button onClick={this.clickHandler} className="btn btn-primary ">click</button>
      </div>
    );

  }
}

export default App;
