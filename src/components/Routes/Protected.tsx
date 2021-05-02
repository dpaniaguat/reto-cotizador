import React from 'react';
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";

const Protected =({component: Component, ...rest}:any)=>{

    const userLogged = localStorage.getItem('token')

    if( !userLogged)
    {
        return <Redirect to="/login"/>
    }

    return <Route {...rest} component={Component}/>

}

export default Protected
