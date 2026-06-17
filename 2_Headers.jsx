import { useState, useEffect } from "react";
import Header from "./Header";
import StudentCard from "./StudentCard";

function App() {

  const [name, setName] = useState("");
  const [course, setCourse] = useState("B.Tech CSE");
  const [cgpa, setCgpa] = useState("");

  const [students, setStudents] = useState([
    {
      name: "Anitha",
      course: "B.Tech CSE",
      cgpa: 8.5,
    },
    {
      name: "Ravi",
      course: "B.Tech ECE",
      cgpa: 6.2,
    },
  ]);

  useEffect(() => {
    alert("Welcome to DriveReady Placement Registration Portal");
  }, []);

  const registerStudent = () => {

    if (name.trim() === "" || cgpa.trim() === "") {
      alert("Please fill all fields");
      return;
    }

    const newStudent = {
      name: name,
      course: course,
      cgpa: Number(cgpa),
    };

    setStudents([...students, newStudent]);

    setName("");
    setCourse("B.Tech CSE");
    setCgpa("");
  };

  return (
    <div>

      <Header />

      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
        }}
      >

        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: "10px",
            marginRight: "10px",
          }}
        />

        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          style={{
            padding: "10px",
            marginRight: "10px",
          }}
        >
          <option>B.Tech CSE</option>
          <option>B.Tech ECE</option>
          <option>B.Tech AIML</option>
          <option>B.Tech IT</option>
        </select>

        <input
          type="number"
          placeholder="CGPA"
          value={cgpa}
          onChange={(e) => setCgpa(e.target.value)}
          style={{
            padding: "10px",
            marginRight: "10px",
            width: "100px",
          }}
        />

        <button
          onClick={registerStudent}
          style={{
            padding: "10px 20px",
          }}
        >
          Register
        </button>

        <h2>
          Total Registered Students: {students.length}
        </h2>

      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >

        {
          students.map((student, index) => (
            <StudentCard
              key={index}
              name={student.name}
              course={student.course}
              cgpa={student.cgpa}
            />
          ))
        }

      </div>

    </div>
  );
}

export default App;



header
---------
function Header() {
  return (
    <div
      style={{
        backgroundColor: "#1e40af",
        color: "white",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1>DriveReady Placement Registration Portal</h1>
      <p>React Day 1 + Day 2 Mini Project</p>
    </div>
  );
}

export default Header;
