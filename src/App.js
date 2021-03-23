import React from "react";
import "./App.css";

export default class App extends React.Component {
  state = {
    fullName: "Rami Mhazres",
    Bio: "lorem ipsem",
    src: "/1.jpg",
    profession: "Batman",
    show: false,
    timer: 0,
  };
   
  handleClick = () => this.setState({show: !this.state.show , timer:0});

  componentDidMount(){
    setInterval( ()=> {
      this.setState({
        timer: this.state.timer +1
      })
    } ,1000  )
  }
  render() {
     return(
       
       
    <div>
   
    <div className={this.state.show ? "visible" : "hide"}>
      <h1> Greetings I'm <span>{this.state.fullName}</span></h1>
      <h2>my Bio: <span>{this.state.Bio}</span></h2>
      <img className="Img" src={this.state.src} alt="something?"/>
      <h2> <span>I'm {this.state.profession}</span></h2>
      <h2>{this.state.timer}</h2>
     
    </div>
     <div className="visible">
       <button className="Btn" onClick={this.handleClick}>Show</button>
     </div>
    </div>
    )
  }
}

