import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import "../App.css";
import  {Collapse, UnmountClosed} from "react-collapse"

export default class Question1 extends Component {
  state={
    isOpened : false
  }
  
  OnChange = () =>{
    if(this.state.isOpened == false){
      this.setState({isOpened: true})
    }else if(this.state.isOpened== true){
      this.setState({isOpened: false})
    }
    
  }
  
  render() {
    return (
      <div className="container col-lg-3 col-md-6 col-sm-12">
        <div
          className="d-flex justify-content-center"
          style={{ paddingTop: 75, marginBottom: 100 }}
        >
          <Breadcrumbs
            aria-label="breadcrumb"
            separator=">"
            style={{ fontSize: "20px" }}
          >
            <Link color="inherit" to="">
              {" "}
              Registro de capacitación{" "}
            </Link>
            <Link color="inherit" to="">
              {" "}
              Instrucciones{" "}
            </Link>
            <Typography style={{ fontSize: "20px" }} color="textPrimary">
              1
            </Typography>
          </Breadcrumbs>
        </div>
        <div className="card text-center">
          <div className="card-body">
            <h3 className="card-title">Inicio de sesión</h3>
            <p className="card-text">
              Ingrese al sistema con las credenciales que se le proporcionaron
              previamente.
            </p>
            <div>
          
           <form onSubmit={this.onSubmit} style={{ alignContent: "center" }}>
              <Link className="btn btn-light" style={{borderColor:"black", marginRight:5}} onClick={this.OnChange}> Ver pista</Link>
              <button type="submit" className="btn btn-dark" >
                Siguiente
              </button>

            </form>
          {/* <label className="label">
            Ver Pista
            <input className="input" type="checkbox" checked={this.state.isOpened} onChange={({target: {checked}}) => this.OnChange(checked)} />
          </label> */}
           <Collapse isOpened={this.state.isOpened}>
          <div className="text"> <p>Ver Pista</p>
          </div>
        </Collapse>
      
           
            </div>
          </div>
        </div>
      </div>
    );
  }
}
