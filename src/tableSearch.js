import { useForm } from "react-hook-form";
import axios from "axios";
import SearchBar from './searchBar';
import React, { useState, useEffect } from 'react';


export default function SearchGroups () {
    // 1.
    const { register, handleSubmit } = useForm();
    // 2.
    const [input, setInput] = useState('');

    const onSubmit = (data) =>  {alert(JSON.stringify(data));
      console.log(data);
      searchaGroup(data);
    };
  
    // function to make a POST req to the server to insert data to MySQL db
    const searchaGroup = (data) => {
      axios.post("http://localhost:3000/group", data).then(() => {
        // 4.
        console.log(data);

      });
    };
        return (
            <div className="add-member" style={{marginTop: "25px", marginBottom: "25px", marginLeft:"50px", width:"80%", background:"#6D7A69", padding:"1px"}} onSubmit={handleSubmit(onSubmit)}>
                        <center><h1 style={{marginTop: "25px", marginBottom: "10px"}} > Signup </h1></center>
                            <table className="search-table" style={{alignItems:"center", width:"80%", border:"3px"}}>
                <thead>
                    <th>County </th>
                    <th> Contact </th>
                    <th> Email </th>
                    <th> State </th>
                </thead>
                <tbody>
                
                
                </tbody>

            </table>

            </div>
        );
  }