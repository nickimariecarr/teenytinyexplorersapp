import emailjs from 'emailjs-com'
import { Link } from "react-router-dom"; 


const Contact = () => {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm(
        "teenytinyexplorers",
        "template_3u24m3f", 
        e.target, 
        "user_a5jwzuX6kSAOK7KdHVqVM"
    ).then(res=>{
        console.log(res);
    }).catch(err=>console.log(err));

    }
    return (
        <div className="container border" style={{marginTop:"50px",width:"50%", background:"#6D7A69"}}>
            <center><h1 style={{marginTop: "25px"}} > Contact Form </h1></center>
            <form className="row" style={{margin: "25px 85px 75px 100px"}} onSubmit={sendEmail}>
                <label>First Name</label>
                <input type ="text" name="first_name" className="form-control"/>

                <label>Last Name</label>
                <input type ="text" name="last_name" className="form-control"/>

                <label> Email </label>
                <input type="email" name="user_email" className="form-control"/>
                
                <label> Phone Number </label>
                <input type="phone" name="phone" className="form-control"/>

                <label> Best Time To Contact You</label>
                <input type="text" name="time" className="form-control"/>

                <label> Message </label>
                <textarea name="message" rows="4" className="form-control"/>
                <Link to="/Thankyouone">

                <input type="submit" value="Send" className="form-control btn btn-primary" style={{marginTop: "30px",background:"white", color:"black"}} />
                </Link>
            </form>
        </div>
    );
};

export default Contact;