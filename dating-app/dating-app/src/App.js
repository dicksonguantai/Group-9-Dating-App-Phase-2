import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import ProfileList from "./Components/ProfileList";
import Profile from "./Components/Profile";
import Search from "./Components/Search";
import Error from "./Components/Error";
import Login from "./Components/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import SharedProfileLayout from "./Components/SharedProfileLayout";
import SingleProfile from "./Components/SingleProfile";
import Dashboard from "./Components/Dashboard";
import SharedLayout from "./Components/SharedLayout";
import CreateAccount from "./Components/CreateAccount";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <SharedLayout>
                <Route index element={<Home />} />
                <Route path="profile" element={<SharedProfileLayout />}>
                  <Route index element={<ProfileList />} />
                  <Route path=":profileId" element={<SingleProfile />} />
                </Route>
                <Route path="/users/:id" element={<Profile />} />
                <Route
                  path="dashboard"
                  element={
                    <ProtectedRoute user={user}>
                      <Dashboard user={user} onLogout={handleLogout} />
                    </ProtectedRoute>
                  }
                />
                <Route path="/search" element={<Search />} />
                <Route path="*" element={<Error />} />
              </SharedLayout>
            ) : (
              <Navigate to="/login" replace={true} />
            )
          }
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/profilelist" element={<ProfileList />} />
        <Route path="CreateAccount" element={<CreateAccount/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
