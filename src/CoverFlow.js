import React from 'react';

class CoverFlow extends React.Component{
    render(){
        return(
            <div className='cover-flow' style={styles.screen} >
                <h1>COVER FLOW</h1>
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
        background:'#0A90E2',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        color:'white'
    }
}

export default CoverFlow;