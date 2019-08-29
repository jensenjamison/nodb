import React, {Component} from "react";
import "./Servers.css";
import axios from "axios";


export default class Servers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            servers: []
        }
        // this.updateServers = this.updateServers.bind(this);
    }

    updateWishes(servers) {
        this.setState({ servers: servers });
      }

    componentDidMount() {
        axios
          .get("/api/servers")
          .then(response => {
            this.setState({ servers: response.data });
          })
          .catch(err => {
            console.log(err);
          });
        }
        render(){
            return(
                <header className="background-2">
                    <section className="servers-list">
                        <div className="server-1">
                            <div className="server-title">
                            <h1>---Blanks--- Server 1</h1>
                            </div>
                            <div className="information-kits">
                            <button className="information-button">Information</button>
                            <div className="kits">
                            <button className="kits-button-2">Kits</button>
                            </div>
                            </div>
                        </div>

                        <div className="server-2">
                            <div className="server-title">
                            <h1>---Blanks--- Server 2</h1>
                            </div>
                            <div className="information-kits">
                            <button className="information-button">Information</button>
                            <div className="kits">
                            <button className="kits-button-2">Kits</button>
                            </div>
                            </div>
                        </div>

                        <div className="server-3">
                            <div className="server-title">
                            <h1>---Blanks--- Server 3</h1>
                            </div>
                            <div className="information-kits">
                            <button className="information-button">Information</button>
                            <div className="kits">
                            <button className="kits-button-2">Kits</button>
                            </div>
                            </div>
                        </div>
                    </section>

                </header>
            )
        }






}
