import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import React, { useState } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Info from "./components/Main/Info";
import Dane from "./components/Main/Dane";
import Mapa from "./components/Main/Mapa";

function App() {
  const user = localStorage.getItem("token");
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("data");
    return storedData ? JSON.parse(storedData) : [];
  });
  const [dane, setDane] = useState(() => {
    const storedDane = localStorage.getItem("dane");
    return storedDane ? JSON.parse(storedDane) : [];
  });
  const [message, setMessage] = useState(() => {
    const storedMessage = localStorage.getItem("message");
    return storedMessage ? storedMessage : "";
  });

  const handleSetData = (data) => {
    setData(data);
    localStorage.setItem("data", JSON.stringify(data));
  }
  const handleSetDane = (dane) => {
    setDane(dane);
    localStorage.setItem("dane", JSON.stringify(dane));
  }
  const handleSetMessage = (message) => {
    setMessage(message);
    localStorage.setItem("message", JSON.stringify(message));
  }
  return (
    <Routes>
      {user &&
        <Route
          path="/"
          element={<Main setData={handleSetData} setDane={handleSetDane} setMessage={handleSetMessage} />}
        />
      }
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
      {user && <Route
        path="/info"
        element={
          <div>
            <Main setData={handleSetData} setDane={handleSetDane} setMessage={handleSetMessage} />
            <Info user={data} message={message} />
          </div>
        }
      />
      }
      
      {user && <Route
        path="/mapa"
        element={
          <div><Main setDane={handleSetDane} setData={handleSetData}/>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>

                <Mapa />
              </div>
              <div>
                <Dane dane={dane} />
              </div>
            </div>
          </div>
        }
      />
      }
      <Route path="/mapa" element={<Navigate replace to="/login" />} />
      <Route path="/info" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;

