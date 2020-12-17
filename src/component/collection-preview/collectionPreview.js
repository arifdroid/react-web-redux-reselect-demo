import React,{  } from 'react';
import CollectionItem from '../collection-item/collectionItem';

const CollectionPreview = (props)=>{
    const {title, items} = props;

    return(
        <div style={{display:'flex', flexDirection:'column', marginBottom:30}}>
            <h1 style={{fontSize:28, marginBottom:25}}>{title.toUpperCase()}</h1>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                {items?.filter((item,idx)=>idx<4).map(({...props})=>(
                    <CollectionItem key={props.id} {...props}></CollectionItem>
                ))}
            </div>
        </div>
    )
}



export default CollectionPreview;