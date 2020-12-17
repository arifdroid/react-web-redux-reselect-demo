import React,{  } from 'react';
import Directory from '../../component/directory/directory';

const HomePage = (props)=>{
    return(
        <div stye={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Directory/>
        </div>
    )
}

export default HomePage;