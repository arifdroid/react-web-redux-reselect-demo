import { Button } from '@material-ui/core';
import React, { } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/action/cart/cart.action';


const CollectionItem = (props) => {

    const { id, name, price, imageUrl, addItem_This, } = props;

    

    const addItem =()=>{
        // console.log('\n\n====item click', item, '\n')
        let item = {id,name, price,imageUrl}
        addItem_This(item)
    }

    return (
        <div style={{ width: "22%", display: 'flex', flexDirection: 'column', height: 550, alignItems: 'center', backgroundColor:'honeydew'}}>
            <div style={{ backgroundImage: `url(${imageUrl})`, width: '100%', height: '95%', backgroundSize: "cover", backgroundPosition: 'center', marginBottom: 10 }}></div>
            <div style={{ width: "100%", display: 'flex', justifyContent: 'space-between',flexDirection:'row',  fontSize: 18 ,marginBottom:20}}>

                <span style={{flex:1 }}>{name}</span>
                <span style={{ flex:1 }}>RM {price}</span>
            </div>
            {/* <button>check</button> */}
            <Button variant="contained" color="secondary"  style={{marginTop:0}} onClick={addItem}>
                Add to Cart
            </Button>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    addItem_This: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);