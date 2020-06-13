import React from 'react';

class Settings extends React.Component{
    render(){
        return(
            <div className='settings' style={styles.screen}>
                <img src="https://image.flaticon.com/icons/png/512/900/900834.png" alt="SETTINGS" style={styles.image}/>
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
        background:'#FFAF46',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:'50%',
        height:'50%'
    }
}

export default Settings;