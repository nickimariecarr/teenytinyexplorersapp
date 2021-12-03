

import React from 'react';
import { MDBDataTable } from 'mdbreact';
import {Container, Row, Col, Button} from 'react-bootstrap'
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import RemoveMember from "./deleteMembers.js";

function FindMembers() {
  const [member, setMember] = useState([]);

const getMember = () => {
  axios.get("http://localhost:3000/members").then((res) => {
    setMember(res.data);
  });
};


  useEffect(() => {
      getMember();
        }, [member]);

    return (
      <div className="Member">

        <div>
          <label> Search for Member</label>
            <input type="text" name="input" />
            <button>Search</button>
        </div>
        <div>
          <table className="search-table" style={{alignItems:"center", width:"80%", border:"3px"}}>

            <thead>
              <tr>
                <th>First Name </th>
                <th> Last Name </th>
                <th> Email </th>
                <th> Address </th>
                <th> City</th>
                <th> Zip</th>
                <th> State</th>
                <th> Username</th>
                <th> Password</th>

              </tr>
            </thead>
            <tbody>
                {member.map((item) => {
                  return (
                    <tr>
                      <td>{item.mbrfirstname}</td>
                      <td>{item.mbrlastname}</td>
                      <td>{item.username}</td>
                      <td>{item.password}</td>
                      <td>{item.email}</td>
                      <td>{item.address}</td>
                      <td>{item.city}</td>
                      <td>{item.state}</td>
                      <td>{item.zip}</td>
        <RemoveMember id={item.id} member={member} setMember={setMember} />

                    </tr>
                    
                  );

              })}
              
            </tbody>
            
        </table>
        
        </div>
    </div>
    );



  } 

export default FindMembers;