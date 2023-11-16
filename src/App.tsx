import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      Go to <Link to="/tasks">tasks</Link>
    </div>
  );
}

export default App;
