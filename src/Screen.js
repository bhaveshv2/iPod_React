import React from 'react';

class Screen extends React.Component{
    render(){
        return(
            <div className="screen" style={styles.screen}>
                <div className="left-block" style={styles.blocks}>
                    <h2 style={{marginLeft:10}}>iPod.js</h2>
                    <div className="menu-list">

                    </div>
                </div>
                <div className="right-block" style={styles.blocks}>
                    <img style={{width:'100%',height:'100%'}} alt="backgound" src="https://images.unsplash.com/photo-1551008475-4533d141425b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80"/>
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
    }
}

export default Screen;