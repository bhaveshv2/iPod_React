import React from 'react';

class Games extends React.Component{
    render(){
        return(
            <div className='games' style={styles.screen}>
                <img src="https://image.flaticon.com/icons/svg/3048/3048317.svg" style={styles.image} alt="GAMES"/>
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
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:'50%',
        height:'100%'
    }
}

export default Games;
