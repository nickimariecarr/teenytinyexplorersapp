import emailjs from 'emailjs-com'
import { Link } from "react-router-dom"; 
import App from "./App";


const BecomeaHost = () => {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm(
        "teenytinyexplorers",
        "template_kxw5tph", 
        e.target, 
        "user_a5jwzuX6kSAOK7KdHVqVM"
    ).then(res=>{
        console.log(res);
    }).catch(err=>console.log(err));

    }
    return (
        <div>

        
        <div className="container border" style={{marginTop:"50px",width:"80%", background:"#6D7A69"}}>
            <center><h1 style={{marginTop: "25px"}} > Contact Form </h1></center>
            <form className="row" style={{margin: "25px 85px 75px 100px"}} onSubmit={sendEmail}>
                    <label>First Name</label>
                    <input type="text" name="firstname"  className="form-control" />

                    <label>Last Name</label>
                    <input type="text" name="lastname" className="form-control" />
                
                    <label>Email</label>
                    <input type="email" name="email" className="form-control"/>

                    <label>Phone Number</label>
                    <input type="phone" name="phonenumber" className="form-control"/>

                    <label>Address</label>
                    <input type="text" name="address1" className="form-control"/>

                    <label>Address 2</label>
                    <input type="text" name="address2" className="form-control" />


                <center>
                    <label >City.</label>
                    <input type="text" name="city" className="form-control"/>

                    <label>County</label>
                    <input type="text" name="county" className="form-control" />

                    <label>State</label>
                    <select type="select"  name="state" className="form-control" defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>AL</option>
                      <option>AK</option>
                      <option>AZ</option>
                      <option>AR</option>
                      <option>CA</option>
                      <option>CO</option>
                      <option>CT</option>
                      <option>FL</option>
                      <option>GA</option>
                      <option>HI</option>
                      <option>ID</option>
                      <option>IL</option>
                      <option>IN</option>
                      <option>IA</option>
                      <option>KS</option>
                      <option>KY</option>
                      <option>LA</option>
                      <option>ME</option>
                      <option>MD</option>
                      <option>MA</option>
                      <option>MI</option>
                      <option>MN</option>
                      <option>MS</option>
                      <option>MO</option>
                      <option>MT</option>
                      <option>NE</option>
                      <option>NV</option>
                      <option>NH</option>
                      <option>NJ</option>
                      <option>NM</option>
                      <option>NY</option>
                      <option>NC</option>
                      <option>ND</option>
                      <option>OH</option>
                      <option>OK</option>
                      <option>OR</option>
                      <option>PA</option>
                      <option>RI</option>
                      <option>SC</option>
                      <option>SD</option>
                      <option>TN</option>
                      <option>TX</option>
                      <option>UT</option>
                      <option>VT</option>
                      <option>VA</option>
                      <option>WA</option>
                      <option>WV</option>
                      <option>WI</option>
                      <option>WY</option>
                    </select>

                    <label>Zip</label>
                    <input type="text" name="zip" className="form-control"/>
                </center>


              <center> Please indicate your preferred contact method below message </center>
                <label controlId="floatingTextarea2" >
                  <input type="text" name="preferred" as="textarea" placeholder="Leave a comment here"
                    style={{ height: '100px', width: "100%" }} className="form-control"/>
                </label>
                 <Link to="/Thankyoutwo">
                <input type="submit" value="Submit" className="form-control btn btn-primary" style={{marginTop: "30px",background:"white", color:"black"}} />
                </Link>
            </form>
        </div>
    </div>
    );
};

export default BecomeaHost;