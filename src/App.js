import "./App.css";
import Description from "./components/Description";
import Header from "./components/Header";
import Register from "./components/Register";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <Users />
      <Register />
    </div>  
  );
}

export default App;
