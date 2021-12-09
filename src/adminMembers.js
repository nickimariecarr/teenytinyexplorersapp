

import React from 'react';
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import RemoveMember from "./deleteMembers.js";
import CreateMember from "./createMember.js";


function AdminMember() {
  const [member, setMember] = useState([]);

    const getMember = () => {
    axios.get("https://teenytinyexplorers.herokuapp.com/members").then((res) => {
        setMember(res.data);
    });
    };


  useEffect(() => {
      getMember();
        }, [member]);

    return (
      <div className="Member">

        <div>
        </div>
        <div>
        <center style={{marginTop:"10px"}}> <CreateMember member={member} setMember={setMember} /> </center>
          <center>
          <table class="searchable sortable"  style={{alignItems:"center", border:"3px", width:"100%"}}>
            <thead>
              <tr>
                <th>First Name </th>
                <th> Last Name </th>
                <th> Email</th>
                <th> Address</th>
                <th> City</th>
                <th> State</th>
                <th> Zip </th>
                <th> Delete Member </th>

              </tr>
            </thead>
            <tbody style={{width:"50%"}}>
                {member.map((item) => {
                  return (
                      
                    <tr>

                      <td>{item.mbrfirstname}</td>
                      <td>{item.mbrlastname}</td>
                      <td>{item.email}</td>
                      <td>{item.address}</td>
                      <td>{item.city}</td>
                      <td>{item.state}</td>
                      <td>{item.zip}</td>

       <td> <RemoveMember id={item.id} member={member} setMember={setMember} /></td>
                    </tr>
                  );
                  
              })}
              
            </tbody>
            
        </table>
        
      </center>
        </div>
    </div>
    );



  } 

export default AdminMember;