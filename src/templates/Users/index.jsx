import { useState, useEffect } from "react";
import api from "../../services/api";
import styled from "styled-components";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const promise = api.get(`/users`);

    promise.then((response) => {
      const { data } = response;
      setUsers(data);
    });
    promise.catch((err) => console.log(err.response));
  }, []);

  return (
    <Main>
      <DivInfo>
        <h1>Aqui estão os usuários cadastrados</h1>
        {users?.map((user, index) => {
          const { name, age } = user;
          return (
            <UserDiv key={index}>
              <h1>Nome: {name}</h1>
              <h2>Idade: {age}</h2>
            </UserDiv>
          );
        })}
      </DivInfo>
    </Main>
  );
}

export default Users;

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  margin-bottom: 80px;
  margin-left: 150px;
`;

export const DivInfo = styled.div`
  width: 500px;
  height: 810px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 80px;
  margin-left: 7px;
  margin-top: 40px;
  margin-right: 80px;

  h1 {
    font-family: brisa-sans;
    font-size: 21px;
    margin-bottom: 40px;
  }
  @media (max-width: 1000px) {
    margin-left: -10px;
  }
`;

export const UserDiv = styled.div`
  width: 600px;
  height: 50px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #ffffff;
  border: solid 1px gray;
  border-radius: 6px;
  margin-bottom: 20px;
  position: relative;

  h1 {
    font-family: oswald;
    font-size: 20px;
    font-weight: 500;
    position: absolute;
    top: 11px;
    left: 22px;
  }
  h2 {
    font-family: oswald;
    font-size: 18px;
    position: absolute;
    top: 12px;
    left: 250px;
  }
  @media (max-width: 1000px) {
    width: 400px;
    margin-left: -40px;
  }
`;