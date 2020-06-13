import React from 'react';
import Screen from './Screen';
import Controls from './Controls';
import CoverFlow from './CoverFlow';
import Music from './Music';
import Games from './Games';
import Settings from './Settings';
import ZingTouch from 'zingtouch';
// import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      screen:true,
      cf:false,
      music:false,
      games:false,
      settings:false,
    }
  }

  handleRotate=()=>{
    let angle = 0;
    const rotateArea = document.getElementById('controls');
    const rotateRegion = new ZingTouch.Region(rotateArea);
  
    rotateRegion.bind(rotateArea,'rotate',(e)=>{
      //whenever we rotate on the circle, the angle addup or decrease
      angle+=e.detail.distanceFromLast;

      //Rotating the wheel
      if(Math.abs(angle)>0 && Math.abs(angle)<15){
        this.setState({
          cf:true,
          screen:false,
          music:false,
          games:false,
          settings:false,
          id:0
        });
      }
      else if(Math.abs(angle)>15 && Math.abs(angle)<30){
        this.setState({
          cf:false,
          screen:false,
          music:true,
          games:false,
          settings:false,
        });
      }
      else if(Math.abs(angle)>30 && Math.abs(angle)<45){
        this.setState({
          cf:false,
          screen:false,
          music:false,
          games:true,
          settings:false,
        });
      }
      else if(Math.abs(angle)>45 && Math.abs(angle)<60){
        this.setState({
          cf:false,
          screen:false,
          music:false,
          games:false,
          settings:true,
        });       
      }
    });
  }

  handelMenu=()=>{
    this.setState({
      screen:true,
      cf:false,
      music:false,
      games:false,
      settings:false,
      id:0
    });
  }

  handelOtherScreens=()=>{
    
    if(this.state.cf){
      this.setState({
        screen:false,
        cf:true,
        id:1
      });
    }else if(this.state.music){
      this.setState({
        screen:false,
        music:true,
        id:2
      });
    }else if(this.state.games){
      this.setState({
        screen:false,
        games:true,
        id:3
      });
    }else if(this.state.settings){
      this.setState({
        screen:false,
        settings:true,
        id:4
      });
    }
  }

  render(){
    const {screen,cf,music,games,settings,id} = this.state;
    return (
        <div className="App">
            <div className="main" style={styles.main}>
              {
                (id===1)?<CoverFlow/>:
                (id===2)?<Music/>:
                (id===3)?<Games/>:
                (id===4)?<Settings/>:<Screen screen={screen} cf={cf} music={music} games={games} settings={settings}/>
              }
              <Controls rotate={this.handleRotate} menu={this.handelMenu} otherScreen={this.handelOtherScreens}/>
            </div>
        </div>
    );
  }
}

const styles = {
  main:{
    background:'grey',
    width:250,
    height:500,
    padding:10,
    borderRadius:20,
    position:'relative',
    top:200,
    left:500,
    WebkitBoxReflect: 'below 1px -webkit-gradient(linear, right top, right bottom, from(transparent), color-stop(40%,transparent), to(rgba(255, 255, 255, 0.5))',
    boxShadow:'0px 0px 20px 10px #ccc'
  }
}

export default App;
