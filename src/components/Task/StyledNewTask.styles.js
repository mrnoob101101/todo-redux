import styled from "styled-components";

export const StyledNewTask = styled.div`
  font-size: 23px;
  padding-left: 15px;
  margin: 10px;
  background: #d0c08aff;
  border-radius: 12px;

  :hover {
    background-color: #eeaf9d;
  }
`;

export const TaskContainer = styled.div``;

export const Text = styled.span`
  ${(props) =>
          props.isCompleted
                  ? "text-decoration: line-through;\n" +
                  "  color: gray;\n" +
                  "  transition: 1s;"
                  : "none"};
  display: flex;
  margin-top: 0;
  line-height: 1.2;
  font-family: "Raleway", sans-serif;
  margin-block-end: 0.1em;
`;

export const Date = styled.p`
  font-size: 15px;
  text-align: right;
  margin: 0 5px 5px 5px;
  padding: 3px;
  font-family: "Roboto", sans-serif;
`;

export const ImgCheckBoxStyled = styled.img`
  margin: 10px 3px 5px 3px;

  :hover {
    transform: scale(1.2);
    transition: 0.4s;
`;

export const ImgDeleteStyled = styled.img`
  margin: 10px 3px 5px 3px;
  padding-bottom: 2px;

  :hover {
    transform: scale(1.2);
    transition: 0.4s;
`;
