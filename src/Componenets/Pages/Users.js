import React from 'react';
import {useEffect,useState} from 'react';

import 'axios';
import Modal from './Modal';
const Success = (e) =>{
console.log("Success Called!");
return false;
}
const redirect = (id) =>{
    window.location.href = "/ViewUser/"+id;
}
const Cancel =  () =>{
    console.log("cancelled");
    return false;
}
const Users = () => {
    const axios =require("axios").default;
    const [allusers,setUser]= useState([{id:"",name:"",username:"",email:"",phone:""}]);
    useEffect(()=>{
        axios.get("http://localhost:3003/users").then(function(r){

            setUser(r.data.reverse());

        });
        
    },[]);    
 return(
    <div>
    <table class="table table-stripped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
      {allusers.map(function(u,i){
          return(
    <tr>
      <td>{i+1}.</td>
      <td>{u.name}</td>
      <td>{u.username}</td>
      <td>{u.phone}</td>
      <td><a class="btn btn-success" href={'/users/View/'+u.id}>View</a>&nbsp;
      <a class="btn btn-primary" href={'/users/'+u.id}>Edit</a>&nbsp;
      <button class="btn btn-danger" data-toggle="modal" data-target="#myModal" >Delete</button>
      </td>
    </tr>
          );
        })}
    

    </tbody>
    </table>
    <Modal Title="Confirmation" successtxt="Delete" canceltxt="Cancel" msg="Are you sure you want to delete this user?" successhandler={Success} cancelhandler={Cancel}></Modal>
    </div>
)
    }
export default Users;

