const express = require("express");
const mysql = require("mysql");
require("dotenv").config();
const cors = require("cors");
const path = require("path");


const app = express();
app.use(express.json()); 
app.use(cors());


app.use(express.static("public"));



//create connection to database
const db = mysql.createPool({
    host: process.env.DB_HOST, //localhost
    user: process.env.DB_USER, //root
    password: process.env.DB_PASSWORD, //Shivers05!
    database: process.env.DB, //teenytinyexplorer
  });

  

  const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port)
})


//********************************GROUPS TABLE*******************************************

//get groups
app.get("/group", (req, res) => {
    db.query("SELECT * FROM teenytinyexplorer.groups ORDER BY state ASC;" , (err, result) => {
     if (err) {
        console.log(err);
     } else {
      res.send(result);
      }
   });
  });

//get total of groups in system and display as totalgroups: #
app.get("/grouptotal",(req, res) => {
  db.query("SELECT COUNT(*) AS totalgroups FROM teenytinyexplorer.groups;" , (err, result) => {
   if (err) {
      console.log(err);
   } else {
    res.send(result);
    }
 });
});


//get total of groups in system and display as totalgroups: #
app.get("/grouptotalWeek",(req, res) => {
  db.query("SELECT COUNT(*) AS totalgroupsWeek FROM teenytinyexplorer.groups WHERE timestamp < now() - interval 7 day;" , (err, result) => {
   if (err) {
      console.log(err);
   } else {
    res.send(result);
    }
 });
});

//get total of groups in system and display as totalgroupsMonth: #
app.get("/grouptotalMonth",(req, res) => {
  db.query("SELECT COUNT(*) AS totalgroupsMonth FROM teenytinyexplorer.groups WHERE timestamp > now() - interval 30 day;" , (err, result) => {
   if (err) {
      console.log(err);
   } else {
    res.send(result);
    }
 });
});

//post groups
app.post("/group", (req, res) => {
  const insertQuery = "INSERT INTO teenytinyexplorer.groups SET ?;"
  db.query(insertQuery, req.body, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Group added to Database");
    }
  });
});

//put groups 
app.put("/group", (req, res) => {
  const updateQuery =
    "UPDATE teenytinyexplorer.groups SET county = ?,  contact = ?, email = ?, state = ? WHERE id = ?";
  db.query(
    updateQuery,
    [req.body.county, req.body.contact, req.body.email, req.body.state, req.body.id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//delete groups
app.delete("/group/:id", (req, res) => {
  db.query(
    "DELETE FROM teenytinyexplorer.groups WHERE id = ?",
    req.params.id,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

  
//********************************MEMBERS TABLE********************************
// get all members
app.get("/members", (req, res) => {
  db.query("SELECT * FROM teenytinyexplorer.member ORDER BY mbrfirstname ASC;" , (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});



//get total of members in system and display as totalmembers: #
app.get("/membertotal",(req, res) => {
  db.query("SELECT COUNT(*) AS totalmembers FROM teenytinyexplorer.member;" , (err, result) => {
   if (err) {
      console.log(err);
   } else {
    res.send(result);
    }
 });
});

//get total of members in system and display as totalmembersWeek: #
app.get("/membertotalWeek",(req, res) => {
  db.query("SELECT COUNT(*) AS totalmembersWeek FROM teenytinyexplorer.member WHERE timestamp < now() - interval 7 day;" , (err, result) => {
   if (err) {
      console.log(err);
   } else {
    res.send(result);
    }
 });
});

//get total of members in system and display as totalmembersMonth: #
app.get("/membertotalMonth",(req, res) => {
  db.query("SELECT COUNT(*) AS totalmembersMonth FROM teenytinyexplorer.member WHERE timestamp > now() - interval 30 day;" , (err, result) => {
   if (err) {
      console.log(err);
   } else {
    res.send(result);
    }
 });
});

//post members
app.post("/members", (req, res) => {
  const insertQuery = "INSERT INTO teenytinyexplorer.member SET ?"
  db.query(insertQuery, [req.body], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Member added !");
    }
  });
});

//put members
app.put("/members", (req, res) => {
  const updateQuery =
    "UPDATE teenytinyexplorer.member SET mbrfirstname = ?,  mbrlastname = ?, email = ?, address = ?, city = ?, zip = ?, state = ?, username = ?, password = ?, WHERE id = ?";
  db.query(
    updateQuery,
    [req.body.mbrfirstname, req.body.mbrlastname, req.body.email, req.body.address, req.body.city, req.body.zip, req.body.state, req.body.username, req.body.password, req.body.id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//delete members
app.delete("/members/:id", (req, res) => {
  db.query(
    "DELETE FROM teenytinyexplorer.member WHERE id = ?",
    req.params.id,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});


//login
app.post("/login", (req, res)=> {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM teenytinyexplorer.member WHERE username = ? AND password = ?",
    [username,password],
    (err, result) => {

      if (err) {
        res.send({ err: err });
      }
    if (result.length > 0) {
        res.send(result);
      } else {
          res.send({ message: "Wrong username/password, please try again."});
          }
        }
      );
});

//********************************COUNTY TABLE********************************
// get counties
app.get("/counties", (req, res) => {
  db.query("SELECT * FROM teenytinyexplorer.county;" , (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//post counties
app.post("/counties", (req, res) => {
  const insertQuery = "INSERT INTO teenytinyexplorer.county SET ?";
  db.query(insertQuery, req.body, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("County added !");
    }
  });
});

//put counties
app.put("/counties", (req, res) => {
  const updateQuery =
    "UPDATE teenytinyexplorer.county SET countyname = ?, WHERE idcounty = ?";
  db.query(
    updateQuery,
    [req.body.countyname, req.body.idcounty],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//delete counties
app.delete("/counties/:id", (req, res) => {
  db.query(
    "DELETE FROM teenytinyexplorer.county WHERE idcounty = ?",
    req.params.id,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});



//********************************STATE TABLE********************************
// get states
app.get("/states", (req, res) => {
  db.query("SELECT * FROM teenytinyexplorer.State;" , (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//post states
app.post("/states", (req, res) => {
  const insertQuery = "INSERT INTO teenytinyexplorer.State SET ?";
  db.query(insertQuery, req.body, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("State added !");
    }
  });
});

//put states
app.put("/states", (req, res) => {
  const updateQuery =
    "UPDATE teenytinyexplorer.State State = ? WHERE idState = ?";
  db.query(
    updateQuery,
    [req.body.State, req.body.idState],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//delete states
app.delete("/states/:id", (req, res) => {
  db.query(
    "DELETE FROM teenytinyexplorer.State WHERE idState = ?",
    req.params.id,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});



//********************************HOSTS TABLE********************************
// get hosts
app.get("/hosts", (req, res) => {
  db.query("SELECT * FROM teenytinyexplorer.host;" , (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//post hosts
app.post("/hosts", (req, res) => {
  const insertQuery = "INSERT INTO teenytinyexplorer.host SET ?";
  db.query(insertQuery, req.body, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Host added !");
    }
  });
});


//put hosts
app.put("/hosts", (req, res) => {
  const updateQuery =
    "UPDATE teenytinyexplorer.host SET hostfirstname= ?,  hostlastname = ?, hostemail = ?, hostaddress = ?, hostcity = ?, hostzip = ?, hoststate = ?, hostusername = ?, hostpassword = ?, WHERE idhost = ?";
  db.query(
    updateQuery,
    [req.body.hostfirstname, req.body.hostlastname, req.body.hostemail, req.body.hostaddress, req.body.hostcity, req.body.hostzip, req.body.hoststate, req.body.hostusername, req.body.hostpassword, req.body.idhost],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//delete hosts
app.delete("/hosts/:id", (req, res) => {
  db.query(
    "DELETE FROM teenytinyexplorer.host WHERE idhost = ?",
    req.params.id,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});


































