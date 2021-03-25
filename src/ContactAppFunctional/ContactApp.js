import React from "react";
import {useState, useEffect} from "react";
import Axios from "axios";
import ContactList from "./ContactList";

let ContactApp=()=>{
    let [contact, setContact] = useState({
        contacts:[],
        errorMessage:"",
    })
    useEffect(()=>{
        Axios.get("https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist")
        .then((response)=>{
            setContact({...contact, contacts: response.data});
        })
        .catch(()=>{})
    },[]);
    return(<>
    <div className="container mt-4">
        <div className="row">
            <div className="col-md-8">
            {contact.contacts.length > 0 ? (
            <>
            <ContactList contacts={contact.contacts}/>
            </>) : null}
            </div>
        </div>
    </div>
     
    </>);
}
export default ContactApp;