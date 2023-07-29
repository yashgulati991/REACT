import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
const User = () => {
    const { fname,lname } = useParams();
    const location = useLocation();
    return (<>
        <h1>hello this is {fname}{lname}</h1>
        <p>My current location is {location.pathname}</p>
    </>);
};
export default User;