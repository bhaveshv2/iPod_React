import React from 'react';
import Screen from './Screen';
import Controls from './Controls';
// import './App.css';

function App() {
    return (
        <div className="App">
            <div className="main" style={styles.main}>
                <Screen />
                <Controls />
            </div>
        </div>
    );
}

const styles = {
  main:{
    background:'rgb(216, 216, 207)',
    width:300,
    height:500,
    padding:10,
    borderRadius:10,
    position:'relative',
    top:200,
    left:500,
    WebkitBoxReflect: 'below 1px -webkit-gradient(linear, right top, right bottom, from(transparent), color-stop(40%,transparent), to(rgba(255, 255, 255, 0.5))'
  }
}

export default App;
