import React from "react";
import {useState, useEffect} from "react";
import Axios from "axios"; 
let User =()=>{
    let [user, setUser] = useState({contacts: []});

   useEffect (()=>{
       console.log("Testing");
       Axios.get("https://jsonplaceholder.typicode.com/users")
       .then((response)=>{
        setUser({ ...user, contacts: response.data});
       })
       .catch((err)=>{
        console.log(err)
       });
   }, []);
    return (<>
   <div className="container mt-4">
       <div className="row">
           <div className="col-md-10">
               <table className="table table-info stripped-">
                   <thead>
                       <tr>
                           <th>Id</th>
                           <th>Name</th>
                           <th>Email</th>
                           <th>Location</th>
                       </tr>
                   </thead>
                   <tbody>
                   {user.contacts.length > 0 ? (
                  <>
                    {user.contacts.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.address.city}</td>
                        </tr>
                      );
                    })}
                  </>
                ) : (
                  ""
                )}
                   </tbody>
               </table>
           </div>
       </div>
   </div>
    </>);
}
export default User;