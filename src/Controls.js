import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Controls=(props)=>{
        return(
            <div id="controls" style={styles.controls} onMouseOver={props.rotate} draggable='false'>
                <div className="outer-circle" style={styles.outerCircle}>
                    <div className="top-container" style={styles.topContainer}>
                        <h4 style={{color:'grey',textAlign:'center'}} id="menu" onClick={props.menu}>MENU</h4>
                    </div>
                    <div className="middle-container" style={styles.middleContainer}>
                        <div className="previous" style={styles.previous}>
                            <FontAwesomeIcon icon={['fas','backward']}/>
                        </div>
                        <div className="inner-circle" style={styles.innerCircle} onClick={props.otherScreen}></div>
                        <div className="next" style={styles.next}>
                            <FontAwesomeIcon icon={['fas','forward']}/>
                        </div>
                    </div>
                    <div className="bottom-container" style={styles.bottomContainer}>
                        <div className="play" style={styles.play}><FontAwesomeIcon icon={['fas','play']}/></div>
                        <div className="pause" style={styles.pause}><FontAwesomeIcon icon={['fas','pause']}/></div>
                    </div>
                </div>
            </div>
        )
}

const styles = {
    controls:{
        width:'100%',
        height:'50%',
    },
    outerCircle:{
        width:'70%',
        height:'70%',
        borderRadius:'50%',
        background:'white',
        position:'relative',
        top:'15%',
        left:'15%'
    },
    topContainer:{
        width:'100%',
        position:'absolute',
    },
    middleContainer:{
        width:'100%',
        height:'100%',
        position:'absolute',
        display:'flex',
        top:'32%'
    },
    previous:{
        position:'absolute',
        left:'10%',
        top:'13%',
        color:'grey'
    },
    innerCircle:{
        width:'40%',
        height:'40%',
        background:'grey',
        borderRadius:'50%',
        position:'absolute',
        left:'30%'
    },
    next:{
        position:'absolute',
        right:'13%',
        top:'13%',
        color:'grey'
    },
    bottomContainer:{
        display:'flex',
        position:'absolute',
        top:'78%',
        left:'43%',
        color:'grey'
    },
    play:{

    },
    pause:{
        
    }
}

export default Controls;