import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Abaout from "../Abaout/abaout";
import Axios from "axios"


export default class Todo extends Component {




  constructor(props) {
    super(props);
    this.btn = this.btn.bind(this);
    this.change = this.change.bind(this);
    this.state = { valor: "", lista: [] };
    // this.btn();
  }

  btn() {
    Axios.get("http://localhost:8080").then(data => {
      console.log(data);
      this.setState({ ...this.state, lista: data.data })

    }).catch(err => {
      console.log(err);
    })
  }



  change(e) {
    this.setState({ ...this.state, valor: e.target.value })
    console.log("cheguei")
  }



  render() {
    return (
      <div className="bar">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Title
            </Typography>
          </Toolbar>
        </AppBar>

        <Abaout lista={this.state.lista} change={this.change} valor={this.state.valor} btn={this.btn} />

      </div>
    )
  }
}