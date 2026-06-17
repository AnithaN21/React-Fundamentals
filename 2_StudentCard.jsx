function StudentCard(props) {
  return (
    <div
      style={{
        width: "250px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        margin: "15px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        textAlign: "center",
      }}
    >
      <h2>{props.name}</h2>

      <p>
        Branch: {props.course}
      </p>

      <p>
        CGPA: {props.cgpa}
      </p>

      {
        props.cgpa >= 7 ? (
          <p style={{ color: "green" }}>
            🟢 Eligible for Placements
          </p>
        ) : (
          <p style={{ color: "red" }}>
            🔴 Not Eligible
          </p>
        )
      }
    </div>
  );
}

export default StudentCard;
