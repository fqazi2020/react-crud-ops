import React,{useState,useRef} from 'react';
import Alert from './alert';
import 'axios';
const AddUser = () =>{
  const axios =require("axios").default;
    const [user,setUser]= useState([{id:"",name:"",username:"",phone:"",email:"",phone:""}])
    
    const alertref=useRef();
    const SaveUser = () =>{
      setUser(user);
      axios.post("http://localhost:3003/users",user).then(function(r){
        alertref.current.ShowAlert();
      });

    }

    const { id,name, username, email, phone, website } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
    
    return(
        <div class="container">
        <Alert ref={alertref}   color="success" msg="user successfully Created" show="alert alert-primary fade hide" ></Alert>

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
  <button type="button" onClick={SaveUser} class="btn btn-success">Create</button>&nbsp;
  <a  class="btn btn-danger" href="/users">Cancel</a>
</form>
</div>

    );
}
export default AddUser;