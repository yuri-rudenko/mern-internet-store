import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter.jsx";
import NavBar from "./components/NavBar.jsx";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from "./index.js";
import { check } from "./http/userApi.js";
import { Spinner } from "react-bootstrap";

const App = observer(() => {

  const {user} = useContext(Context);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    check().then(data => {
      if(data) {
        user.setUser(true)
        user.setIsAuth(true)
      }
    })
    .finally(() => setLoading(false))

  }, [])

  if(loading) {
    return <Spinner style={{position: 'absolute', top:"50%", left:"50%"}} animation="grow"/>
  }
  
  return (
  <div className="App">
    <BrowserRouter>
      <NavBar/>
      <AppRouter/>
    </BrowserRouter>
  </div>
  );
})

export default App;
