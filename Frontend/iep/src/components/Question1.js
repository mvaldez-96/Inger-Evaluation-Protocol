import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import "../App.css";
import { Collapse, UnmountClosed } from "react-collapse";
import ReactPlayer from "react-player";
import axios from "axios"



export default class Question1 extends Component {
  state = {
    isOpened: false,
    clickstutorial: 0,
    count : 0,
    startime: "",
    endtime: "",
    nquestion: 1,
    username: ""
  };
  async componentDidMount(){
    var newDate = new Date();
    var user = localStorage.getItem("user")
    if(user == null){
      this.props.history.push("/");
    }else{
      var userJson = JSON.parse(user)
    this.setState({startime: newDate.toString(),
                   username: userJson.username})
    }
    
  }
  onSubmit= async (e) => {
    e.preventDefault();
    console.log(this.state.clickstutorial)
    var endtime = new Date()
    this.state.endtime = endtime.toString()

    /*PREGUNTAS POST*/
    const newQuestion = {
      username: this.state.username,
      nquestion: this.state.nquestion,
      startime: this.state.startime,
      endtime: this.state.endtime,
      response: "NA",
      clickstutorial: this.state.clickstutorial,
      time: 0
    } 
    axios.post("https://ingerciceseback.herokuapp.com/preguntas", newQuestion)

    /*VIDEO POST*/
    for (let video = 1; video <= this.state.clickstutorial; video++) {
        var newVideo = {
          username: this.state.username, 
          nquestion: this.state.nquestion
        }
        if(video < this.state.clickstutorial){
          newVideo.viewtime = this.state.duration;
        }else if(video == this.state.clickstutorial){
          newVideo.viewtime = this.state.playedSeconds;
        }
        axios.post("https://ingerciceseback.herokuapp.com/videos", newVideo)
    }
    this.props.history.push("/");

  }

  OnChange = () => {
    if (this.state.isOpened == false) {
      this.setState({ isOpened: true });
    } else if (this.state.isOpened == true) {
      this.setState({ isOpened: false });
    }
  };

  handleProgress = state => {
    console.log('onProgress', state)
    this.setState(state)
    if(this.state.count != 0){ 
      if(this.state.playedSeconds<1){
        this.handleStart()
      }
    }
    this.state.count = this.state.count +1;
    // We only want to update time slider if we are not currently seeking
    
    
  }
  handleStart = () =>{
    console.log(this.state.playedSeconds)
    // if(this.state.playedSeconds < 1){
      var clicks = this.state.clickstutorial + 1
      this.setState({clickstutorial: clicks})
    // }
  }

  handleEnded = () => {
    console.log("TIME",this.state)
  }
  handleDuration = (duration) => {
    console.log('onDuration', duration)
    this.setState({ duration })
  }



  render() {
    return (
      <div className="container col-lg-5 col-md-6 col-sm-12">
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
        <div className="card text-center"  style={{ alignContent: "center", width:"auto"}}>
          <div className="card-body">
            <h3 className="card-title">Inicio de sesión</h3>
            <p className="card-text">
              Ingrese al sistema con las credenciales que se le proporcionaron
              previamente.
            </p>
            <div>
              <form onSubmit={this.onSubmit} style={{ alignContent: "center"}}>
                <Link
                  className="btn btn-light"
                  style={{ borderColor: "black", marginRight: 5, marginBottom:40 }}
                  onClick={this.OnChange}
                >
                  {" "}
                  Ver pista
                </Link>
                <button type="submit" className="btn btn-dark" style={{marginRight: 5, marginBottom:40 }}>
                  Siguiente
                </button>
              </form>
              {/* <label className="label">
            Ver Pista
            <input className="input" type="checkbox" checked={this.state.isOpened} onChange={({target: {checked}}) => this.OnChange(checked)} />
          </label> */}
          <div style={{display:"block ruby"}}>
              <Collapse isOpened={this.state.isOpened} >
                <ReactPlayer 
                             onProgress={this.handleProgress}
                             onPause={this.handleEnded} 
                             onDuration = {this.handleDuration}
                             url="https://www.youtube.com/watch?v=UM-JoRwK44A" />
              </Collapse>   
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
