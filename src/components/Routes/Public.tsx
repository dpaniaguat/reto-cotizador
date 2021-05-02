import React from 'react';
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";

const Public = ({component: Component, ...rest}:any)=>{

    const userLogged = localStorage.getItem('token')

    if( userLogged )
    {
        return <Redirect to= "/"/>
    }

    return <Route {...rest} component={Component}/>

}

export default Public
