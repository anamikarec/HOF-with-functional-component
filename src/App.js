import A from "./Component/A";
import B from "./Component/B";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>HOC with Functional Components</h1>
      <A name="A" />
      <B name="B" />
    </div>
  );
}
