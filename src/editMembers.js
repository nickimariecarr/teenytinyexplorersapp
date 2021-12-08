import "./App.css";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function EditMember(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    data["id"] = props.id;
    updateMember(data);
  };

  const updateMember = (data) => {
    axios.put("http://localhost:3000/members", data).then((res) => {
      props.setMember(
        props.member.map((item) => {
          return item.id === props.id
            ? {
                id: item.id,
                mbrfirstname: item.mbrfirstname,
                mbrlastname: item.mbrlastname,
                username: item.username,
              }
            : item;
        })
      );
    });
  };

  return (
    <form className="add-review" onSubmit={handleSubmit(onSubmit)}>
      <h4>Edit Review</h4>
    <label >
        <input {...register("mbrfirstname", { required: true })} placeholder="First name" /></label>
        <label ><input {...register("mbrlastname", { required: true })} placeholder="Last name" /></label>
        <label ><input {...register("username", { required: true })} placeholder="Username"/></label>
    <input id="btn" type="submit" />
    </form>
  );
}