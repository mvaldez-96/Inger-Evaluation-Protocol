import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import "../App.css";

export default class Instructions extends Component {
  render() {
    return (
      <div className="container col-lg-3 col-md-6 col-sm-12">
        <div class="d-flex justify-content-center" style={{ paddingTop: 75, marginBottom: 50 }}>
          <Breadcrumbs
            aria-label="breadcrumb"
            separator=">"
            style={{ fontSize: "20px" }}
          >
            <Link color="inherit">
              {" "}
              Registro de capacitación{" "}
            </Link>
            <Typography style={{ fontSize: "20px" }} color="textPrimary">
              Instrucciones
            </Typography>
          </Breadcrumbs>
        </div>
        <div class="card text-center">
          <div class="card-body">
            <h5 class="card-title">Instrucciones</h5>
            <p class="card-text">
              A continuación se le mostrarán una serie de acciones las cuáles se pueden realizar en el sistema CLP-COVID-MX.
            </p>
            <Link href="/"class="btn btn-light" style={{borderColor:"black", marginRight:5}} > Cancelar</Link>
            
            <Link href="/q1"class="btn btn-dark"  style={{color:"white"}}> Continuar  </Link>
          </div>
        </div>
      </div>
    );
  }
}
