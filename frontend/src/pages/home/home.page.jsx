import React from 'react';
// Import models
import Banner from '../../components/banner/banner.component';
import Productlist from '../../components/productlist/productlist.component';

function Home() {
    return (
        <div>
            <div style={{height: '130px'}}></div>
            <Banner></Banner>
            <Productlist num={3} name={'Featured Products'}/>
        </div>
    )
}

export default Home;
