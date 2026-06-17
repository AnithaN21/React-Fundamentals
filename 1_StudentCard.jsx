function StudentCard(props) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      <h2>{props.name}</h2>

      <p>Course: {props.course}</p>

      {
        props.isActive
          ? <p>🟢 Active Student</p>
          : <p>🔴 Inactive Student</p>
      }
    </div>
  );
}

export default StudentCard;
