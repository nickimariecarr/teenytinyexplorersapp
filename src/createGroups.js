import "./App.css";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function CreateGroups(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    addGroups(data);
  };

  
  const addGroups = (data) => {
      axios.post("http://localhost:3000/group", data).then(() => {
        // 4.
        console.log(data);

      });
    };
        return (
            <div className="add-groups" style={{marginTop: "10x", marginBottom: "10px", width:"100%", background:"#6D7A69", padding:"1px"}} onSubmit={handleSubmit(onSubmit)}>
                        <center><h1 style={{marginTop: "25px", marginBottom: "10px"}} > Create Groups </h1></center>
                <form style={{width:"100%"}}>
                
                    <div className="column">
                        <label ><input {...register("county", { required: true })} placeholder="County" /></label>
                        <label ><input {...register("contact", { required: true })} placeholder="Contact" /></label>
                    </div>
                    <div className="column">
                        <label ><input {...register("email", { required: true })} placeholder="Email"/></label>
                        <label><input {...register("state", { required: true })} placeholder="State"/></label>
                    </div>
                    <center><input id="btn" type="submit" style={{marginTop:"25px", width:"50%"}} /></center>
                </form>
            </div>
        );
  }