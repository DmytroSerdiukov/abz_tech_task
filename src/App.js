import "./App.css";
import Description from "./components/Description/Description";
import Header from "./components/Header";
import Register from "./components/Register/container";
import Users from "./components/Users/container";

function App() {
  return (
    <div className="App">
      <Header />
      <Users />
      <Register />
    </div>  
  );
}

export default App;
