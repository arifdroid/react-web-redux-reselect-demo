import React,{  } from 'react';

const FormInput = (props)=>{

    const { handleChange, label} = props;
    
    return(
        <div
         style={{display:'flex', flexDirection:'row', margin:30, justifyContent:'center'}}>
             {label? (
                 <label
                 style={{alignSelf:'center',flex:1}}
                
                >
                    {label}
                </label>
             ):null}
             <input onChange={handleChange} {...props}
             style={{backgroundColor:'white', color:'grey', fontSize:'18px', padding:'10px', paddingBottom:'5px',  marginLeft:'20px', flex:1}}
             ></input>
             

        </div>
    )

}
export default FormInput;