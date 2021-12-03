

import React from 'react';
import { MDBDataTable } from 'mdbreact';
import {Container, Row, Col, Button} from 'react-bootstrap'
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchGroups from "./tableSearch";
import Delete from "./deleteGroup.js";
import SearchBar from './searchBar';

function AdminGroups() {
  const [groups, setGroups] = useState([]);
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  const [input, setInput] = useState('');

  const getGroups = () => {
    axios.get("http://localhost:3000/group").then((res) => {
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
           <center> <button>Search</button>
            <SearchBar
            input={input}
            onChange={updateInput}/>
            </center>
        </div>
        <div>
        <center>
          <table className="search-table" style={{alignItems:"center", width:"100", border:"3px"}}>
            
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