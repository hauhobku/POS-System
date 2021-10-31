import React from 'react';
import {
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import Home from './home/home.page';
import Menu from './menu/menu.page';
import User from './user/user.page';
import Login from './login/login.page';
import Header from '../components/header/header.component';
import Footer from '../components/footer/footer.component';
import SignUp from './signup/signup.page';

function Client() {
    return (
        <>
            <Header/>
            <Switch>
                <Route path="/user" exact component={User}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/signup" exact component={SignUp}/>
                <Route path="/menu" exact component={Menu}/>
                <Route path="/" exact component={Home}/>
                <Route path="">
                    <Redirect/>
                </Route>
            </Switch>
            <Footer/>
        </>
    )
}

export default Client;
