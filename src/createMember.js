import "./App.css";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function CreateMember(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    addMember(data);
  };

  const addMember = (data) => {
      axios.post("http://localhost:3000/members", data).then(() => {
        // 4.
        console.log(data);

      });
    };
        return (
            <div className="add-member" style={{marginTop: "10x", marginBottom: "10px", width:"100%", background:"#6D7A69", padding:"1px"}} onSubmit={handleSubmit(onSubmit)}>
                        <center><h1 style={{marginTop: "25px", marginBottom: "10px"}} > Create Member </h1></center>
                <form style={{width:"100%"}}>
                
                    <div className="column">
                        <label ><input {...register("mbrfirstname", { required: true })} placeholder="First name" /></label>
                        <label ><input {...register("mbrlastname", { required: true })} placeholder="Last name" /></label>
                        <label ><input {...register("username", { required: true })} placeholder="Username"/></label>
                    </div>
                    <div className="column">
                        <label><input {...register("password", { required: true })} placeholder="Password"/></label>
                        <label><input {...register("email", { required: true })} placeholder="Email"/></label>
                        <label ><input {...register("address", { required: true })} placeholder="Address"/></label>
                    </div>
                    <div className="column">   
                        <label><input {...register("city", { required: true })} placeholder="City"/></label>
                        <label><input {...register("state",{ required: true})} placeholder ="State"/></label>
                        <label><input {...register("zip",{ required: true})} placeholder ="Zip"/></label>
                    </div>
                    <center><input id="btn" type="submit" style={{marginTop:"25px", width:"50%"}} /></center>
                </form>
            </div>
        );
  }