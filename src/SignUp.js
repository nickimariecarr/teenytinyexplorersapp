import React from 'react';
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import AddUser from "./Add";

function SignUp() {
const [member, setMember] = useState([]);


const getMember = () => {
  axios.get("http://localhost:3000/members").then((res) => {
    setMember(res.data);
  });
};



  return (
    <div className="App">
      <AddUser member={member} setMember={setMember} />
        <div className="member">
            {member.map((item) => {
                return (
                  <div className="member" >
                    <h3>first name: {item.mbrfirstname}</h3>
                    <h3>last name: {item.mbrlastname}</h3>
                    <h3>username: {item.username}</h3>
                    <h3>password: {item.password}</h3>
                    <h3>email: {item.email}</h3>
                    <h3>address: {item.address}</h3>
                    <h3>city: {item.city}</h3>
                    <h3>state: {item.state}</h3>
                    <h3>zip: {item.zip}</h3>
                  </div>
                );
            })}
          
      </div>
  </div>
   
  );
} 

export default SignUp;
