import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { useState } from "react";

function MainPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    age: "",
  });

  function postUser(e) {
    setLoading(true);
    e.preventDefault();
    const promise = api.post("/", user);
    console.log(user);
    console.log(promise);
    promise.then((res) => {
      setLoading(false);
      navigate("/users");
    });
    promise.catch((e) => {
      const message = e.response.data;
      setLoading(false);
      alert(`Dados inválidos: ${message}`);
    });
  }

  function Button() {
    if (!loading) {
      return <button type="submit">Cadastre-se</button>;
    }
    if (loading) {
      return (
        <button>
          <div className="loading" />
        </button>
      );
    }
  }

  return (
    <Main>
      <a></a>
      <div className="form-box">
        <form onSubmit={postUser}>
          <h1>Login</h1>
          <Input>
            <input
              type="text"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              value={user.name}
              required
            ></input>
            <label>Nome</label>
          </Input>
          <Input>
            <input
              type="text"
              onChange={(e) => setUser({ ...user, age: e.target.value })}
              value={user.age}
              required
            ></input>
            <label>Idade</label>
          </Input>
          <Button />
        </form>
      </div>
    </Main>
  );
}

export default MainPage;

const Main = styled.main`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  .form-box {
    height: 100%;
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    h1 {
      color: #000000;
      font-size: 36px;
      font-family: "Roboto", sans-serif;
      position: absolute;
      top: 150px;
      left: 220px;
    }
    form {
      display: flex;
      margin-top: 30px;
      margin-right: 18px;
      flex-direction: column;
    }
    button {
      color: #ffffff;
      background-color: #6e62ec;
      border: none;
      width: 429px;
      height: 65px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      text-transform: uppercase;
      cursor: pointer;
    }
    .loading {
      animation: is-rotating 1s infinite;
      width: 25px;
      height: 25px;
      border: 4px solid #1877f2;
      border-top-color: #ffffff;
      border-radius: 50%;
      margin: 15px;
    }
    @keyframes is-rotating {
      to {
        transform: rotate(1turn);
      }
    }
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    .form-box {
      position: relative;
      width: 100%;
      align-items: baseline;
      form {
        margin-top: 250px;
      }
      button {
        width: 330px;
        height: 55px;
        font-size: 18px;
      }
    }
  }
`;

const Input = styled.div`
  width: 429px;
  height: 65px;
  margin-bottom: 40px;
  position: relative;
  input {
    border: solid 1px #707070;
    border-radius: 10px;
    padding-left: 15px;
    outline: none;
    transition: 0.3s ease-in-out;
  }
  label {
    position: absolute;
    color: #999;
    top: 0;
    left: 15px;
    pointer-events: none;
    display: flex;
    align-items: center;
    transition: 0.3s ease-in-out;
    cursor: text;
  }
  input,
  label {
    font-size: 22px;
    width: 100%;
    height: 65px;
  }
  input:focus + label {
    top: -45px;
    left: 8px;
    color: #222222;
    font-size: 18px;
    pointer-events: none;
  }
    input:valid + label {
    top: -45px;
    left: 8px;
    color: #222222;
    font-size: 18px;
    pointer-events: none;
    }
  
  @media (max-width: 1000px) {
    width: 330px;
    height: 55px;
    input {
      width: 330px;
      height: 55px;
      font-size: 22px;
    }
    label {
        font-size: 20px;
        top: -5px;
      }
  }
`;
