import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CountGroups(props) {
    const [groups, setGroups] = useState([]);

  const getGroups = () => {
    axios.get("https://teenytinyexplorers.herokuapp.com/grouptotal").then((res) => {
      setGroups(res.data);
    });
  };

  useEffect(() => {
    getGroups();
  }, [groups]);

  return (
    <div className="CountMember">
      <header className="CountMember-header">
      </header>
      <div className="groups">
        {groups.map((item) => {
          return (
            <div className="groups">
              <h4>{item.totalgroups}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}


