import React from 'react';
import ReactFooter from '../components/footer';
import ReactHeader from '../components/header';

const MainLayout = (props) => {
    return(
        <div>
            <ReactHeader/>
            {props.children}
            <br/>
            <ReactFooter/>
        </div>
    )
}

export default MainLayout;