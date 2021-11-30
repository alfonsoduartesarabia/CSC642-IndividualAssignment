import { useState } from "react";
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from "./Auth";

export default function Verification(){
    let data = JSON.parse(sessionStorage.getItem('Form'));

    return(
        <div>
            <h2>Results verification page Alfonso Duarte-Sarabia</h2>
            <h3>{data.firstname}</h3>
            <h3>{data.lastname}</h3>
            <h3>{data.address}</h3>
            <h3>{data.city}</h3>
            <h3>{data.state}</h3>
            <h3>{data.zipcode}</h3>
            <h3>{data.email}</h3>
        </div>
    );
}