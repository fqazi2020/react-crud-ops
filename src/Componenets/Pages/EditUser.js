import React from 'react';
import {useState,useEffect,useRef} from 'react';
import ReactDom from 'react-dom'
import 'axios';
import Alert from './alert';
import $ from 'jquery'
const EditUser = (props) => {
    
    const axios =require("axios").default;
    const [user,setUser]= useState([{name:"",username:"",phone:"",email:"",phone:""}])
    const id= props.match.params.id;
    const alertref=useRef();
    
    useEffect(() => {
        LoadUser()
      }, []); // passing mpty array will stop infinte loop
       
   const updateUser = () =>{
    
       axios.put('http://localhost:3003/users/'+id,user).then(function(r){
           console.log("updated!");
           
       });
       console.log(alertref);
        alertref.current.ShowAlert();
       
       
       
   }
   const showalert = () =>{
       console.log(this.state);
       console.log("parent event");

   }
    const LoadUser = () =>{
        
        axios.get("http://localhost:3003/users/"+id).then(function(r){
               
        const d = r.data;
            setUser(r.data);
        });
    }
    
    const { name, username, email, phone, website } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
      
    return (
        <div class="container">
        <Alert ref={alertref}   color="primary" msg="user successfully updated" show="alert alert-primary fade hide" ></Alert>

        <h1>{user.name}</h1>

        <form>
  <div class="form-group">
    <label for="formGroupExampleInput">Name:</label>
    <input onChange={e => onInputChange(e)}
      type="text" class="form-control" id="formGroupExampleInput" placeholder="name input" name="name" value={user.name}/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Username:</label>
    <input onChange={e => onInputChange(e)} type="text" name="username" class="form-control" id="formGroupExampleInput2" value={user.username}/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Phone:</label>
    <input onChange={e => onInputChange(e)} type="text" name="phone" class="form-control" id="formGroupExampleInput2" placeholder="Another input" value={user.phone}/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">email:</label>
    <input type="text" name="email" class="form-control" id="formGroupExampleInput2" value={user.email}/>
  </div>
  <button type="button" onClick={updateUser} class="btn btn-primary">Update</button>&nbsp;
  <a  class="btn btn-danger" href="/users">Cancel</a>
</form>
</div>
    
    
    )
    
            

    }



export default EditUser;