// to let know the compiler this file needs to be render as recact 
import React from "react"

//create element to render
export default function Card({data}) {
    const {
    id,
    status,
    eta,
    parcel_id,
    sender,
    verification_required,
    location_id,
    location_name,
    location_coordinate_latitude,
    location_coordinate_longitude,
    location_status_ok,
    user_phone,
    user_name,
    notes,
    last_updated,
    } = data;
    return (
        <div className="cardcontent">
        <h2> Parsel Id: {parcel_id}</h2> 
        <p>Status: {status}</p>
        <p>sender: {sender}</p>
        <p>User name: {user_name}</p>
        <p>Estimated time of arrival: {eta} </p>
        <p>Verification required: {verification_required ? "yes" : "no" } </p>
        <p>Location: {location_name} </p>
        <p>Location coordinates: {location_coordinate_latitude}, {location_coordinate_longitude} </p>
        {notes && <p>notes:{notes}</p>}
        <p>last_updated: {last_updated} </p>
        </div>
    );

}
