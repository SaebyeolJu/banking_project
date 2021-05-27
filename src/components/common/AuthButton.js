import React from "react";
import styled from "styled-components";

const AuthBtnStyled = styled.button`
  padding: 1rem;
  background: #456fda;
  color: white;
  border: none;
  border-radius: 0.3rem;
`;

const AuthButton = ({ title }) => {
  return <button>{title}</button>;
};

export default AuthButton;
