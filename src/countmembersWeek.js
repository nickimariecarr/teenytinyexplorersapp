import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CountMemberWeek(props) {
    const [members, setMembers] = useState([]);

  const getMembers = () => {
    axios.get("https://teenytinyexplorers.herokuapp.com/membertotalweek").then((res) => {
      setMembers(res.data);
    });
  };

  useEffect(() => {
    getMembers();
  }, [members]);

  return (
    <div className="CountMember">
      <header className="CountMember-header">
      </header>
      <div className="members">
        {members.map((item) => {
          return (
            <div className="members">
              <p>{item.totalmembersWeek}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}




