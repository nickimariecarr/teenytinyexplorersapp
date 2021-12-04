import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CountGroups(props) {
    const [groups, setGroups] = useState([]);

  const getGroups = () => {
    axios.get("http://localhost:3000/grouptotal").then((res) => {
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
              <h4>Total Groups: {item.totalgroups}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

