import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import "../App.css";
export default class Question1 extends Component {
   

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
          */}
          <Link
            color="inherit" href="/getting-started/installation/">
            Registro de capacitación
          </Link> 
            <Typography style={{ fontSize: "20px" }} color="textPrimary">
              Pregunta 1
            </Typography>
          </Breadcrumbs>
        </div>
      </div>
    );
  }
}
