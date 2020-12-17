import React,{ useEffect, useState } from 'react';
import CollectionPreview from '../../component/collection-preview/collectionPreview';

import SHOP_DATA from './shop.data';


const ShopPage = (props)=>{

    const [collections, setCollections] = useState()


    useEffect(()=>{
        setCollections(SHOP_DATA)
    },[])


    return(
        <div style={{}}>
            {collections?.map(({id, ...props})=>(
                <CollectionPreview key={id} {...props}></CollectionPreview>
            ))}
        </div>
    )

}

export default ShopPage;