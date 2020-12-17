import React, { } from "react";
import {  withRouter} from 'react-router-dom';

const MenuItem = (props) => {

    const { title, imageUrl, size, history, linkUrl, match } = props;


    return (
        <div style={{ minWidth: '30%', height: 240, flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', borderColor: 'grey', borderWidth: 1, marginLeft: 2, marginRight: 2, marginTop: 14, overflow: 'hidden' }}
            onClick={()=>history.push(`${match.url}${linkUrl}`)}
        >

            <div
                style={{ width: '100%', height: "100%", backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(${imageUrl})` }}></div>

            <div style={{ height: 90, paddingRight: 25, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'black', backgroundColor: 'white', opacity: 0.7, position: 'absolute', alignSelf: 'center' }}>

                <h1 style={{ fontWeight: 'bold', marginRight: 6, fontSize: 22, color: '#4a4a4a' }}>{title.toUpperCase()}</h1>
                <span style={{ fontWeight: 'lighter', fontSize: 16 }}>SHOP NOW</span>

            </div>


        </div>)
}

export default withRouter(MenuItem);