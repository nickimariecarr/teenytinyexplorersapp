import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CountGroupsMonth(props) {
    const [groups, setGroups] = useState([]);

  const getGroups = () => {
    axios.get("http://localhost:3000/grouptotalMonth").then((res) => {
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
              <p>{item.totalgroupsMonth}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

