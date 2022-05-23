

import { Route, Routes } from "react-router-dom";
import SignIn from "./components/login/Login";
import Overview from "./components/login/liste_client";
import PrivateRoute from './components/privateroute/privateroute';

function App() {

  return (
    <div >
   <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route element={<PrivateRoute/>}>
            <Route exact path='/overview' element={<Overview />}/>
        </Route>      
      </Routes>
    </div>
  );
}

export default App;
