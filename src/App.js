import React from 'react';
import './App.css';
import Home from "./components/Home";
import Servers from "./components/Servers"
import Add from "./components/Add"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: "home",
      add: false
    };
    this.updateAdd = this.updateAdd.bind(this);
  }
    updateAdd(){
      this.setState({add: !this.state.add})
    }

  render() {
    return (
      <div>
        <nav className="nav-bar">
            <button onClick={() => this.setState({ section: "home" })} className="home-button">Home</button>
          <div className="nav-right">
            <button onClick={() => this.setState({ section: "servers" })} className="servers-button">Server's</button>
            <button className="kits-button">Kit's</button>
            <button className="contact-button">Contact</button>
          </div>
        </nav>
          {this.state.section === "servers" ? <Servers updateAdd = {this.updateAdd} /> : null}
          {this.state.section === "home" ? (
          <Home changeSection={() => this.setState({ section: "servers" })} />
        ) : null}

          {this.state.add === true ? <Add /> : null}
          
      </div>
      
      
    );
  }
}

  
export default App;
 