import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutComponent from "./components/AboutComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/#AboutSection" Component={AboutComponent} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
