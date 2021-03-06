import React from "react";
let ContactList =(props)=>{
    return(<>
    <pre>{JSON.stringify(props.contact)}</pre>
    <div className="container">
        <div className="row">
            <div className="col">
                <table className="table table-hover stripped">
                    <thead className="table bg-danger">
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Email</th>
                            <th>Location</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody className="table bg-warning">
                        {props.contacts.length > 0 ? (
                        <>
                        {props.contacts.map((contact)=>{
                            return(
                                <tr>
                                    <td>{contact.name.first}</td>
                                    <td><img src={contact.picture.medium}/></td>
                                    <td>{contact.email}</td>
                                    <td>{contact.location.city}</td>
                                    <td>{contact.dob.age}</td>
                                </tr>
                            )

                        })}
                        </>): null}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    
    </>);
}
export default ContactList;