import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import "../App.css";
export default class NewTraining extends Component {
  state = {
    email: "",
    place: "",
    genre: "Masculino",
  };
  async componentDidMount(){
    localStorage.removeItem("user")
  }
  onSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      place: this.state.place,
      email: this.state.email,
      name: this.state.name, 
      lastname: this.state.lastname,
      age: this.state.age,
      genre: this.state.genre,
      city: this.state.city,
      state: this.state.local_state
    };
    console.log(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    this.props.history.push("/instructions");
  };
  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };
  render() {
    return (
      <div className="container col-lg-3 col-md-6 col-sm-12">
        <div
          class="d-flex justify-content-center"
          style={{ paddingTop: 75, marginBottom: 50 }}
        >
          <Breadcrumbs
            aria-label="breadcrumb"
            separator=">"
            style={{ fontSize: "20px" }}
          >
            <Typography style={{ fontSize: "20px" }} color="textPrimary">
              Registro de capacitación
            </Typography>
          </Breadcrumbs>
        </div>
        <div>
          <form className="LoginContainer" onSubmit={this.onSubmit} style={{ alignContent: "center" }}>
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
              <label>Nombre(s)</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre(s)"
                name="name"
                required
                onChange={this.onInputChange}
                value={this.state.name}
              />
            </div>
            <div className="form-group">
              <label>Apellido(s)</label>
              <input
                type="text"
                className="form-control"
                placeholder="Apellido(s)"
                name="lastname"
                required
                onChange={this.onInputChange}
                value={this.state.lastname}
              />
            </div>
            <div className="form-group">
              <label>Edad</label>
              <input
                type="number"
                className="form-control"
                placeholder="Edad"
                name="age"
                required
                onChange={this.onInputChange}
                value={this.state.age}
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlSelect1">Sexo</label>
              <select
                name="genre"
                className="form-control"
                id="genre"
                onChange={this.onInputChange}
              >
                <option selected={this.state.genre == "Masculino"}>
                  Masculino
                </option>
                <option selected={this.state.genre == "Femenino"}>
                  Femenino
                </option>
                <option selected={this.state.genre == "Otros"}>Otros</option>
              </select>
            </div>
            <div className="form-group">
              <label>Ciudad</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ciudad"
                name="city"
                required
                onChange={this.onInputChange}
                value={this.state.city}
              />
            </div>
            <div className="form-group">
              <label>Estado</label>
              <input
                type="text"
                className="form-control"
                placeholder="Estado"
                name="local_state"
                required
                onChange={this.onInputChange}
                value={this.state.local_state}
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

            <button type="submit" className="btn btn-dark btn-block col-lg-8 col-md-12 col-sm-12 container">Comenzar capacitación</button>
          </form>
        </div>
      </div>
    );
  }
}
