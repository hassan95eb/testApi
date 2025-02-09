import { BrowserRouter, Route, Routes } from "react-router";
import Dashbord from "./Components/Dashbord";
import Login from "./Components/Login";
import { AuthProvider } from "./Components/AuthContext";

const App = () => {
  return <div>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashbord />} />
          <Route path="/login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </div>;
};

export default App;

