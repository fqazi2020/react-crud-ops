import React from 'react';
import {useState,useEffect,useRef} from 'react';
import 'axios';
import Alert from './alert';
import Modal from './Modal';

const ViewUser = (props) => {
    const Success = (e) =>{
        console.log("Success Called!");
        DeleteUser();
        return false;
        }
        const Cancel = (e) =>{
            console.log("Success Called!");
            return false;
            }
                    
    const alertref=useRef();
    const axios =require("axios").default;
    const [user,setUser]= useState([{id:"",name:"",username:"",phone:"",email:"",phone:""}])
    const id= props.match.params.id;
    useEffect(()=>{
        LoadUser();    
        },[])
   const updateUser = () =>{
       const d = 
       setUser()
   }
   const DeleteUser = () =>{
       axios.delete('http://localhost:3003/users/'+id).then(function(r){          
        
       alertref.current.ShowAlert("User has been deleted successfully.")
        window.location.href="/users";
       });
   }
    const LoadUser = () =>{
        
        axios.get("http://localhost:3003/users/"+id).then(function(r){
            console.log(r);    
        const d = r.data;
            setUser(r.data);
        });
    }
    const changeHandler = (e)=>{
        console.log(e);
    }
    return (
        <div class="container">
         <Alert ref={alertref}   color="primary" msg="user successfully updated" show="alert alert-primary fade hide" ></Alert>
        <h1>View User</h1>

        <form>
  <div class="form-group">
    <label for="formGroupExampleInput">Name:</label>
    {user.name}
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Username:</label>
    {user.username}
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Phone:</label>
    {user.phone}
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">email:</label>
    {user.email}
  </div>

  <a  class="btn btn-primary" href={'/users/'+id}>Edit</a>&nbsp;
  <a  class="btn btn-success" href='/users'>back</a>&nbsp;
  <button type="button"  class="btn btn-danger" data-toggle="modal" data-target="#myModal" >Delete</button>

    <Modal Title="Confirmation" successtxt="Delete" canceltxt="Cancel" msg="Are you sure you want to delete this user?" successhandler={Success} cancelhandler={Cancel}></Modal>
</form>
</div>
    
    
    )
    
            

    }



export default ViewUser;