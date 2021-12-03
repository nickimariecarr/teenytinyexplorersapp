import axios from "axios";
export default function Delete(props) {
  // 2.
  const deleteGroup = () => {
    axios.delete(`http://localhost:3000/group/${props.id}`).then((res) => {
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
      Delete Review
    </button>
  );
}