import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter.jsx";

function App() {
  return (
  <div className="App">

    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>

  </div>
  );
}

export default App;
