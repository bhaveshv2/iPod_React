import React from 'react';
import './Screen.css'

class Screen extends React.Component{
    render(){
        const {cf,music,games,settings} = this.props;
        return(
            <div className="screen" style={styles.screen}>
                <div className="left-block" style={styles.blocks}>
                    <h2 style={{marginLeft:10}}>iPod.js</h2>
                    <div className="menu-list" style={{marginTop:30}}>
                        <ul id="list-conatiner" style={{listStyle:'none',marginLeft:-30,width:'80%'}}>
                            <li className={`list-item ${cf ?"active":""}`} >Cover Flow</li>
                            <li className={`list-item ${music ?"active":""}`}>Music</li>
                            <li className={`list-item ${games ?"active":""}`}>Games</li>
                            <li className={`list-item ${settings ?"active":""}`}>Settings</li>
                        </ul>
                    </div>
                </div>
                <div className="right-block" style={styles.blocks}>
                    <img style={{width:'100%',height:'100%'}} alt="background" src="https://images.unsplash.com/photo-1551008475-4533d141425b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80"/>
                </div>
            </div>
        )
    }
}

const styles={
    screen:{
        width:'100%',
        height:'50%',
        border:'black 2px solid',
        borderRadius:10,
        background:'white',
        display:'flex',
        justifyContent:'space-between'
    },
    blocks:{
        width:'50%'
    },
}

export default Screen;