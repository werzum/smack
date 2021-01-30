import './App.css';
import {Grid, Slider, Typography} from "@material-ui/core"
import { Component } from 'react';
import RangeSlider from "./Components/custom_slider.js";
import CustomGridList from './Components/custom_grid_list';
import MusicPlayer from './Components/music_player';
import CustomAppBar from './Components/custom_appbar';
import TextCard from './Components/custom_textcard';
import { withStyles } from "@material-ui/core/styles";

const {Howl} = require('howler');

const styles = theme => ({
  musicPlayer: {
    background: "black"
  },
  text:{
    maxWidth:"600px"
  },
  app:{
    height: '90vh'
  },
  item:{
    margin: "20px"
  }
});


function getRandomInt(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max-min)+min);
}

class App extends Component{

  constructor(){
    super();
    this.punch1= new Howl({
      src:["Sounds/left.mp3"]
    });
    this.punch2= new Howl({
      src:["Sounds/right.mp3"]
    });
    this.punch3= new Howl({
      src:["Sounds/hook.mp3"]
    });
    this.kick1= new Howl({
      src:["Sounds/heel_kick.mp3"]
    });
    this.kick2= new Howl({
      src:["Sounds/high_kick.mp3"]
    });
    this.kick3= new Howl({
      src:["Sounds/low_kick.mp3"]
    });
    this.evade1= new Howl({
      src:["Sounds/duck.mp3"]
    });
    this.countdown= new Howl({
      src:["Sounds/beep_countdown.mp3"]
    });
    this.state ={
      punchCounter : 10,
      soundArray : [{index:0,name:"Left",sound:this.punch1,active:true},
        {index:1,name:"Right",sound:this.punch2,active:true},
        {index:2,name:"Hook",sound:this.punch3,active:true},
        {index:3,name:"Heel Kick",sound:this.kick1,active:true},
        {index:4,name:"High Kick",sound:this.kick2,active:true},
        {index:5,name:"Low Kick",sound:this.kick3,active:true}],
      soundQueue:[],
      playing:false
    }
    this.handler = this.handler.bind(this)
    this.arrayHandler = this.arrayHandler.bind(this)
    this.toggleActive = this.toggleActive.bind(this)
    this.startLoop = this.startLoop.bind(this)
    this.handlePunchCounterChange = this.handlePunchCounterChange.bind(this)
  }
  
  //toggle the active sounds in the grid
  toggleActive(index){
    const newSoundArray = this.state.soundArray.slice();
    newSoundArray[index].active = !newSoundArray[index].active;
    this.setState({
      soundArray: newSoundArray
    });
  }

  async startLoop(){
    //lets get started
    this.countdown.play();
    await this.setState({playing:true})
    let newQueue = []
    let prevTimeOut = 0;
    let activeSounds = this.state.soundArray.filter((item)=>(item.active===true));
    if(activeSounds.length<1){
      console.log("no active sounds, show snackbar");
      this.setState({playing:false})
      return
    }
    for (let i = 0; i < this.state.punchCounter; i++) {
      //generate random time between intervals (*10 to get to seconds), taking the countdown above into account
      let timeOut = getRandomInt(prevTimeOut+this.state.slider_1_min*10,prevTimeOut+this.state.slider_1_max*10);
      //add this to the old timeout
      prevTimeOut = timeOut;
      //and throw a randomly selected sound in the timeline
      newQueue.push(setTimeout(() => {
        activeSounds[getRandomInt(0,activeSounds.length)].sound.play();
      }, 3500+timeOut));
    }
    this.setState({soundQueue:newQueue})
    await this.setState({playing:false})
  }

  stopLoop = () =>{
    //clear all the set timeOuts via their id and then reset the queue-state
    let newQueue = this.state.soundQueue
    for(let i = 0; i<newQueue.length; i++){
      clearTimeout(newQueue[i]);
    }
    this.setState({soundQueue:[]});
  }

  handler(min,max) {
    this.setState({
      slider_1_min : min,
      slider_1_max : max
    })
  }

  arrayHandler(array) {
    this.setState({
      selectedSounds : array
    })
  }

  handlePunchCounterChange(event, newValue){
    this.setState({punchCounter:newValue});
  }

  render(){

    const { classes } = this.props;

    return (
        <div className="App">
            <CustomAppBar/>
            <header className="App-header">
            
            <Grid container direction="column" alignContent="center" spacing={0}>
              <Grid item xs={12} className={classes.text}>
                <TextCard></TextCard>
              </Grid>
              <Grid item>
                <Typography>Which moves should be active?</Typography>
                <CustomGridList handler={this.arrayHandler} soundArray={this.state.soundArray} toggleActive={this.toggleActive}/>
              </Grid>
              <Grid item className={classes.item}>
                <Typography>Set the time between punches</Typography>
                <RangeSlider handler={this.handler}/>
              </Grid>
              <Grid item className={classes.item}>
                <Typography>How many punches do you want to throw?</Typography>
                <Slider value={this.state.punchCounter} onChange={this.handlePunchCounterChange} defaultValue={this.state.punchCounter} valueLabelDisplay="auto" min={10} max={1000}/>
              </Grid>
              <Grid item >
                <MusicPlayer className={classes.musicPlayer} start={this.startLoop} stop={this.stopLoop} playing={this.state.playing}/>
              </Grid>
            </Grid>
            </header>
        </div>
      );
    }
  }


export default withStyles(styles)(App);
