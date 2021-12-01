import { useState, useRef } from "react";
import Geocode from 'react-geocode';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'; 
import { Container } from "react-bootstrap";
//mport { GoogleMap ,withScriptjs, withGoogleMap } from 'react-google-maps';
//import { Wrapper, Status } from "@googlemaps/react-wrapper";

import './verification.css';

export default function Verification(){
    let data = JSON.parse(sessionStorage.getItem('Form'));
    const fullName = data.firstname + ' ' + data.lastname;
    const address = data.address + ' ' + data.city + ', '  + data.state + ' ' + data.zipcode;

    Geocode.setApiKey('AIzaSyBNZdfrybA4otLM4lnkOE_rVkVcRcSEE2E');
    //let latitude; let longitude; 
    const [location,setLocation] = useState({
        lat: null,
        lng: null,
    });

    const containerStyle = {
        width: '400px',
        height: '400px'
      };    

      const defaultCenter = {
        lat: 41.3851, lng: 2.1734
      }

      const render = (status) => {
        return <h1>{status}</h1>;
      };

    //Get latitude & longitude from address.
    Geocode.fromAddress(address).then(
        (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLocation({lat,lng});
        },
        (error) => {
        console.error(error);
        }
    );

    const onLoad = marker => {
        console.log('marker: ', marker)
      }      
    
    return(
        <div>
            <h2>Results verification page Alfonso Duarte-Sarabia</h2><br/><br/>
            <div  className='verification-container'>
                <h3>{fullName}</h3>
                <h3>{data.email}</h3>
                <h2>{address}</h2>
                <h2>{data.title}</h2>
                <div className='maps'>
                <LoadScript googleMapsApiKey='AIzaSyBNZdfrybA4otLM4lnkOE_rVkVcRcSEE2E'>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={location}
                        zoom={10}
                    >
                        <Marker
                            onLoad={onLoad}
                            position={location}
                        />
                    </GoogleMap>
                </LoadScript>
                </div>
            </div>
        </div>
    );
}