import Header from "./Header";
import StudentCard from "./StudentCard";

function App() {
  return (
    <div>
      <Header />

      <StudentCard
        name="Anitha"
        course="B.Tech CSE"
        isActive={true}
      />

      <StudentCard
        name="Saikala"
        course="B.Tech AIML"
        isActive={true}
      />

      <StudentCard
        name="pavan"
        course="B.Tech CSE"
        isActive={true}
      />

      <StudentCard
        name="Ravi"
        course="B.Tech ECE"
        isActive={false}
      />
    </div>
  );
}

export default App;
