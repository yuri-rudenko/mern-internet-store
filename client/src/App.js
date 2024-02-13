import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
  <div className="App">
    <BrowserRouter>
      <NavBar/>
      <AppRouter/>
    </BrowserRouter>
  </div>
  );
}

export default App;
