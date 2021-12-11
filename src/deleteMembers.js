//deleteMembers.js provides the user in the admin dashboard area the ability to delete members in the database

import axios from "axios";
export default function RemoveMember(props) {
  // 2.
  const deleteMembers = () => {
    axios.delete(`https://teenytinyexplorers.herokuapp.com/members/${props.id}`).then((res) => {
      // 3.
      props.setMember(props.member.filter((item) => {
          return item.id !== props.id;
        })
      );
    });
  };

    // 4.
return (
    <button className="del-btn" onClick={deleteMembers}>
      Delete
    </button>
  );
}