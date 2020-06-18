import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import "../App.css";
export default class NewTraining extends Component {

    state = {
        email: "",
        place:""
      };
 
      onSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
          place: this.state.place,
          email: this.state.email,
        };
        console.log(newUser)
        localStorage.setItem('user', JSON.stringify(newUser));
        this.props.history.push('/q1');
    }
  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div className="container col-lg-3 col-md-6 col-sm-12">
        <div
          class="d-flex justify-content-center"
          style={{ paddingTop: 75, marginBottom: 100 }}
        >
          <Breadcrumbs
            aria-label="breadcrumb"
            separator=">"
            style={{ fontSize: "20px" }}
          >
            {/* <Link color="inherit" href="/" onClick={handleClick}>
            Material-UI
          </Link>
          <Link
            color="inherit" href="/getting-started/installation/"onClick={handleClick}>
            Core
          </Link> */}
            <Typography style={{ fontSize: "20px" }} color="textPrimary">
              Registro de capacitación
            </Typography>
          </Breadcrumbs>
        </div>
        <div>
          <form
            className="LoginContainer"
            onSubmit={this.onSubmit}
            style={{ alignContent: "center" }}
          >
            <div className="form-group">
              <label>Correo Electronico</label>
              <input
                type="email"
                className="form-control"
                placeholder="Correo Electronico"
                name="email"
                required
                autoFocus
                onChange={this.onInputChange}
                value={this.state.email}
              />
            </div>

            <div className="form-group">
              <label>Nombre de la estancia geriátrica</label>
              <input
                type="text"
                className="form-control"
                placeholder="Estancia geriátrica"
                name="place"
                required
                onChange={this.onInputChange}
                value={this.state.place}
              />
            </div>

            <button
              type="submit"
              className="btn btn-dark btn-block col-lg-8 col-md-12 col-sm-12 container"
            >
              Comenzar capacitación
            </button>
          </form>
        </div>
      </div>
    );
  }
}
