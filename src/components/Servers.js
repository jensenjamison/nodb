import React, {Component} from "react";
import "./Servers.css";
import axios from "axios";


export default class Servers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Servers: []
        }

    }

    componentDidMount(){
        axios 
            .get("./api/servers")
    }








}
