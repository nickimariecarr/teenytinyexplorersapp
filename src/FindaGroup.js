

import React from 'react';
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from './searchBar';

axios.defaults.baseURL ="http://teenytinyexplorers.herokuapp.com"

function FindaGroup() {
  const [groups, setGroups] = useState([]);
  const [input, setInput] = useState('');

  const getGroups = () => {
    axios.get("/FindaGroup").then((res) => {
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
          <table className="search-table" style={{alignItems:"center", width:"80%", border:"3px"}}>
            
            <thead>
              <tr>
                <th>County</th>
                <th>Contact</th>
                <th>Email</th>
                <th>State</th></tr>
            </thead>
            <tbody>
                {groups.map((item) => {
                  return (
                    <tr>
                      <td>{item.county}</td>
                      <td>{item.contact}</td>
                      <td>{item.email}</td>
                      <td>{item.state}</td>
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

export default FindaGroup;