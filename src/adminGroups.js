// adminGroups page that is accessible through the adminDashboard page. Users can create new groups and delete groups

import React from 'react';
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Delete from "./deleteGroup.js";
import CreateGroups from './createGroups';

function AdminGroups() {
  const [groups, setGroups] = useState([]);
  const [input, setInput] = useState('');

  const getGroups = () => {
    axios.get("https://teenytinyexplorers.herokuapp.com/group").then((res) => {
      setGroups(res.data);
    });
  };
    const updateInput = async (input) => {
     const filtered = groups.filter(groups => {
      return groups.county.toString().toLowerCase().includes(input.toString().toLowerCase())
     })
     setInput(input);
     setGroups(filtered);
  }

  useEffect(() => {
      getGroups();
        }, [groups]);



    return (
      <div className="Group">
        <div>
        </div>

        
        <div>
        <center style={{marginTop:"10px"}}> <CreateGroups groups={groups} setGroups={setGroups} /> </center>

        <center>
          <table className="search-table" style={{alignItems:"center", width:"100%", border:"3px"}}>
            
            <thead>
              <tr>
                <th>County </th>
                <th> Contact </th>
                <th> Email </th>
                <th> State </th>
                <th> Action</th>
              </tr>
            </thead>
            <tbody>
                {groups.map((item) => {
                  return (
                    <tr>
                      <td>{item.county}</td>
                      <td>{item.contact}</td>
                      <td>{item.email}</td>
                      <td>{item.state}</td>
                    <td>
                      <Delete id={item.id} groups={groups} setGroups={setGroups} />
                    </td>
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

export default AdminGroups;