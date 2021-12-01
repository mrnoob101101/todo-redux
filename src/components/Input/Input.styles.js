import styled from "styled-components";

export const StyledInput = styled.input`
  background: #fcfff5;
  box-sizing: border-box;
  width: 500px;
  max-width: 80%;
  height: 50px;
  font-size: 23px;
  font-weight: normal;
  padding-left: 15px;
  border: 5px solid #b04337;
  border-radius: 12px;
  color: gray;
  font-family: "Raleway", sans-serif;
  margin-bottom: 14px;

  :focus {
    outline: 0;
    border: 5px solid #b04337ff;
    background-color: #eae4cc;
    transition: 0.7s linear;
    font-size: 23px;
    color: rgb(32, 32, 32);
  }
`;

export const AddButtonStyled = styled.button`
  background-color: #e15546;
  border: 2px none;
  color: white;
  padding: 8px 20px 16px 15px;
  height: 40px;
  width: 15.5%;
  border-radius: 7px;
  margin: 5px 0 5px 0.5em;
  font-size: 20px;
  text-align: center;

  :hover {
    background-color: #eeaf9d;
  }
`;
