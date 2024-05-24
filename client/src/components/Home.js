import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Home() {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const generateRoomId = (e) => {
    e.preventDefault();
    const Id = uuid();
    setRoomId(Id);
    toast.success("Room Id is generated");
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("Both fields are required")
      return
    }

    // redirect
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    })
    toast.success("Room is created")
  }

  // Join room on Enter key press
  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom()
    }
  }

  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-12 col-md-6">
          <div className="card shadow-sm p-2 mb-5 bg-secondary rounded">
            <div className="card-body text-center bg-dark ">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottom: "2px solid grey",
                  width: "180px",
                  margin: "auto",
                }}
              >
                <div style={{ marginBottom: "10px" }}>
                  <img
                    src="/team.png"
                    alt="Logo"
                    className="img-fluid mx-auto d-block"
                    style={{
                      maxWidth: "50px",
                      backgroundColor: "white",
                      borderRadius: "25px",
                      padding: "2px",
                    }}
                  />
                </div>
                <h3 style={{ color: "white", margin: "0" }}>CodeSYNC</h3>
              </div>

              <h6 className="card-title text-light mt-4">Enter the ROOM ID</h6>

              <div className="form-group">
                <input
                  type="text"
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  className="form-control mb-2"
                  placeholder="ROOM ID"
                  onKeyUp={handleInputEnter}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control mb-2"
                  placeholder="USERNAME"
                  onKeyUp={handleInputEnter}
                />
              </div>
              <button
                onClick={joinRoom}
                className="btn btn-success btn-lg btn-block mb-3"
              >
                JOIN
              </button>
              <p className="text-light mb-0">
                Don't have a room ID? Create a
                <span
                  onClick={generateRoomId}
                  className="text-success ml-1"
                  style={{
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  New Room
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="text-center mt-5 bg-dark py-3 text-white">
        <p className="mb-0">
          Made with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by Saurav
        </p>
        <p className="mb-0">© 2024 CodeSYNC. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home;
