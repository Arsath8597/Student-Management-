import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Shedule from "./pages/Shedule";
import NoPageFound from "./pages/NoPageFound";
import AuthContext from "./AuthContext";
import ProtectedWrapper from "./ProtectedWrapper";
import { useEffect, useState } from "react";
import Post from "./pages/Post";
import Grade from "./pages/Grade";
import Adashboard from "./Admin/Dashboard";
import Auser from "./Admin/User";
import Mdashboard from "./Moderator/Dashboard";
import Feedback from "./pages/Feedback";
import Amoderate from "./Admin/Moderator";
import Profile from "./pages/profile";
import Adminlogin from "./Admin/Login";
import Assingment from "./pages/Assingment";
import Moderator from "./Moderator/Login";
import Mprofile from "./Moderator/profile";
import Aprofile from "./Admin/profile";

import Massignment from "./Moderator/Assignment";
import MFeedback from "./Moderator/Feedback";

const App = () => {
  const [user, setUser] = useState("");
  const [loader, setLoader] = useState(true);
  let myLoginUser = JSON.parse(localStorage.getItem("user"));
  // console.log("USER: ",user)

  useEffect(() => {
    if (myLoginUser) {
      setUser(myLoginUser._id);
      setLoader(false);
      // console.log("inside effect", myLoginUser)
    } else {
      setUser("");
      setLoader(false);
    }
  }, [myLoginUser]);

  const signin = (newUser, callback) => {
    setUser(newUser);
    callback();
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  let value = { user, signin, signout };

  if (loader)
    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>LOADING...</h1>
      </div>
    );

  return (
    <AuthContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/auser" element={<Auser />} />
          
          <Route path="/amoderate" element={<Amoderate />} />
          <Route path="/register" element={<Register />} />
          <Route path="/adashboard" element={<Adashboard />} />
          <Route path="/mdashboard" element={<Mdashboard />} />
          <Route path="/adminlogin" element={<Adminlogin />} />
          <Route path="/mlogin" element={<Moderator />} />
          <Route path="/massignment" element={<Massignment />} />
          <Route path="/mfeedback" element={<MFeedback/>} />
          <Route path="/mprofile" element={<Mprofile/>} />
          <Route path="/aprofile" element={<Aprofile/>} />
          <Route
            path="/"
            element={
              <ProtectedWrapper>
                <Layout />
              </ProtectedWrapper>
            }
          >
            <Route index element={<Home/>} />
            <Route path="/shedule" element={<Shedule />} />
            <Route path="/feedback" element={<Feedback />} />
        
            <Route path="/grade" element={<Grade />} />
            <Route path="/post" element={<Post />} />
            <Route path="/profile" element={<Profile />} />
         
            <Route path="/assingment" element={<Assingment />} />
          </Route>
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
