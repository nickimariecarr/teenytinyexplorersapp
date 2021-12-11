//countgroupWeek.js provides the total count of new groups in the past 7 days this is displayed on the adminDashboard page


import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CountGroupWeek(props) {
    const [groups, setGroups] = useState([]);

  const getGroups = () => {
    axios.get("https://teenytinyexplorers.herokuapp.com/grouptotalweek").then((res) => {
      setGroups(res.data);
    });
  };

  useEffect(() => {
    getGroups();
  }, [groups]);

  return (
    <div className="CountGroup">
      <header className="CountGroup-header">
      </header>
      <div className="groups">
        {groups.map((item) => {
          return (
            <div className="groups">
              <p>{item.totalgroupsWeek}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}




