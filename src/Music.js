import React from 'react';

class Music extends React.Component{
    render(){
        return(
            <div className='music' style={styles.screen}>
                <img alt="MUSIC" style={styles.image} src="https://image.flaticon.com/icons/svg/2111/2111627.svg"/>
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
        background:'#4CAF50',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:'50%',
        height:'100%'
    }
}

export default Music;
