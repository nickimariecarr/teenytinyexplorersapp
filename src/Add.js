import { useForm } from "react-hook-form";
import axios from "axios";

export default function AddUser () {
    // 1.
    const { register, handleSubmit } = useForm();
    // 2.
    const onSubmit = (data) =>  {alert(JSON.stringify(data));
      console.log(data);
      addMember(data);
    };
  
    // function to make a POST req to the server to insert data to MySQL db
    const addMember = (data) => {
      axios.post("http://localhost:3000/members", data).then(() => {
        // 4.
        console.log(data);

      });
    };
        return (
            <div className="add-member" style={{marginTop: "25px", marginBottom: "25px", marginLeft:"130px", width:"80%", background:"#6D7A69", padding:"1px"}} onSubmit={handleSubmit(onSubmit)}>
                        <center><h1 style={{marginTop: "25px", marginBottom: "10px"}} > Signup </h1></center>
                <form className="row" style={{margin: "25px 85px 75px 100px"}}>
                    <label>First Name</label>
                        <input {...register("mbrfirstname", { required: true })} placeholder="First name"  />
                    <label> Last Name </label>
                        <input {...register("mbrlastname", { required: true })} placeholder="Last name" className="form-control" />
                    <label>Username </label>
                        <input {...register("username", { required: true })} placeholder="Username" className="form-control" />
                    <label> Password </label>
                        <input {...register("password", { required: true })} placeholder="Password" className="form-control" />
                    <label> Email </label>
                        <input {...register("email", { required: true })} placeholder="Email" className="form-control" />
                    <label> Address </label>
                        <input {...register("address", { required: true })} placeholder="Address"className="form-control" />
                    <label> City </label>
                        <input {...register("city", { required: true })} placeholder="City" className="form-control"/>
                    <label> State </label>
                        <input {...register("state",{ required: true})} placeholder = "State" className="form-control"/>
                    <label>Zip</label>
                        <input {...register("zip",{ required: true})} placeholder = "Zip"className="form-control" />
                    <input id="btn" type="submit" style={{marginTop:"25px"}} />
                </form>
            </div>
        );
  }