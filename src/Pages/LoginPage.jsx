import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import trello from "../assets/trello.png";
import Header from "../components/Header";
function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username && formData.password) {
      navigate("/main");
    } else {
      setError("Все поля должны быть заполнены.");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Login src={trello} alt="Trello Logo">
          Вход в Trello
        </Login>
        <Input
          type="email"
          name="username"
          placeholder="Имя пользователя"
          value={formData.username}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Пароль"
          value={formData.password}
          onChange={handleChange}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Button type="submit">Войти</Button>
      </Form>
    </Container>
  );
}

export default LoginPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;
const Login = styled.h2`
  font-size: 1.2rem;
  margin: 0;
  color: #333;
`;

const Form = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.8rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;
