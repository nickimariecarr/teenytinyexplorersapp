//deleteGroups.js provides the user in the admin dashboard area the ability to delete groups in the database


import axios from "axios";
export default function Delete(props) {
  // 2.
  const deleteGroup = () => {
    axios.delete(`https://teenytinyexplorers.herokuapp.com/group/${props.id}`).then((res) => {
      // 3.
      props.setGroups(props.groups.filter((item) => {
          return item.id !== props.id;
        })
      );
    });
  };

    // 4.
return (
    <button className="del-btn" onClick={deleteGroup}>
      Delete
    </button>
  );
}