// to let know the compiler this file needs to be render as recact 
import React from "react"

// import to parse date
import moment from 'moment'

//import react icon
import { FiSend } from 'react-icons/fi';
import {FaHourglassEnd} from 'react-icons/fa';
import {BiArchive} from 'react-icons/bi'; 
import {BiTimer} from 'react-icons/bi'; 
import {GoLocation} from 'react-icons/go'; 
import {GrLocationPin} from 'react-icons/gr'; 
import {GrUpdate} from 'react-icons/gr'; 
import {CgNotes} from 'react-icons/cg'; 


//create element to render
export default function Card({data}) {
    const {
    status,
    eta,
    parcel_id,
    sender,
    location_name,
    location_coordinate_latitude,
    location_coordinate_longitude,
    notes,
    last_updated,
    } = data;
    return (
        <div className="cardcontent">
        <p className="statusTitle"><BiArchive />Parsel Id: 
        <span className="statusDescpirtion"> {parcel_id}</span>
        </p> 
        <p className="statusTitle"><FaHourglassEnd /> Status: 
            <span className={status == 'delivered' && 'statusDescpirtionDelivered' || 'statusDescpirtion'}> {status}</span>
        </p>
        {status !== 'delivered' && <p><BiTimer /> Estimated time of arrival: <span className="statusDescpirtion">{moment(eta).format("LLL")}</span> </p>}
        <p><FiSend />Sender: 
        <span className="statusDescpirtion"> {sender} </span></p>
        <p><GrLocationPin />Name of Location : 
        <span className="statusDescpirtion"> {location_name}</span> </p>
        <p><GoLocation />Location coordinates: 
        <span className="statusDescpirtion"> {location_coordinate_latitude}, {location_coordinate_longitude} </span></p>
        {notes && <p><CgNotes />Notes: 
            <span className="statusDescpirtion"> {notes}</span></p>}
        <p><GrUpdate />Last update: 
        <span className="statusDescpirtion"> {moment(last_updated).format("LLL")} </span></p>
        </div>
    );
}
