import React from 'react';
import './App.css';
import Home from "./components/Home";
import Servers from "./components/Servers"
import Add from "./components/Add"
import Axios from 'axios';
import Contact from "./components/Contact"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: "home",
      add: false,
      servers: [],
      delete: false,
      editData: {}

    };

    this.updateAdd = this.updateAdd.bind(this);
    this.updateServers = this.updateServers.bind(this)
    this.updateDelete = this.updateDelete.bind(this)
    this.updateEdit = this.updateEdit.bind(this)
  }

  componentDidMount(){
    Axios
    .get("/api/servers").then((response) => {
      this.updateServers(response.data)
    })
  }

  updateAdd(){
    this.setState({add: !this.state.add})
  }

  updateServers(servers){
    this.setState({servers: servers })
  }

  updateDelete(servers){
    this.setState({delete: !this.state.delete, servers })
  }

  updateEdit(editData){
    console.log(editData);
    this.setState({editData: editData})
  }

  render() {
    let {servers, section, add} = this.state
    return (
      <div>
        <nav className="nav-bar">
            <button onClick={() => this.setState({ section: "home" })} className="home-button">Home</button>
          <div className="nav-right">
            <button onClick={() => this.setState({ section: "servers" })} className="servers-button">Server's</button>
            <button className="kits-button">Kit's</button>
            <button onClick={() => this.setState({ section: "contact" })} className="contact-button">Contact</button>
          </div>
        </nav>
          {section === "servers" ? <Servers updateDelete = {this.updateDelete} updateAdd = {this.updateAdd} servers = {servers} editData={this.state.editData}  updateServers={this.updateServers}/> : null}
          {section === "home" ? (
          <Home changeSection={() => this.setState({ section: "servers" })} /> ) : null} 
            {section === "contact" ? (
            <Contact changeSection={() => this.setState({section: "contact"})} />) : null}
          {add === true ? <Add updateServers = {this.updateServers} updateEdit={this.updateEdit}/> : null}
          
      </div>
      
      
    );
  }
}

  
export default App;
 