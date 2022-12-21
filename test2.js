import React from "react";
import GoogleMapReact from 'google-map-react';
import "./GoogleMaps.css"

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap({ lat, lng }) {
    const apiKey = process.env.REACT_APP_MAPS_KEY
    const defaultProps = {
        center: {
            lat: lat,
            lng: lng
        },
        zoom: 13
    };

    const dotstyle = {
        color: "#d32323",
        fontSize: "36px"
    }

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '254px', width: '315px' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: { apiKey } }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={lat}
                    lng={lng}
                    text={<i class="fa-solid fa-location-dot" style={dotstyle}></i>}
                />
            </GoogleMapReact>
        </div>
    );
}
