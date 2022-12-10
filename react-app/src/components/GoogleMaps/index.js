import React from "react";
import GoogleMapReact from 'google-map-react';
import "./GoogleMaps.css"

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap({ lat, lng }) {
    const defaultProps = {
        center: {
            lat: lat,
            lng: lng
        },
        zoom: 13
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '254px', width: '315px' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyC5YnHJV-7xZqnbUUDAezXw3jnxw5lP3xU" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={lat}
                    lng={lng}
                    text={<i class="fa-solid fa-location-dot"></i>}
                />
            </GoogleMapReact>
        </div>
    );
}
