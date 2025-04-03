import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  margin: auto;
  padding: 20px;
  text-align: center;
`;

export const Heading = styled.h1`
  font-size: 20px;
`;

export const Input = styled.input`
  width: 80%;
  padding: 5px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  border: none;
  background: lightblue;
  color: white;
  cursor: pointer;
  margin-left: 10px;
`;

export const Label = styled.label`
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
`;

export const Select = styled.select`
  width: 85%;
  padding: 5px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  cursor: pointer;
`;

export const TaskList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
  padding: 5px;
  border-radius: 5px;
`;

export const CheckCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 2px solid ${({ done }) => (done ? "green" : "#ccc")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  color: ${({ done }) => (done ? "white" : "transparent")};
  background: ${({ done }) => (done ? "green" : "transparent")};
  cursor: pointer;
  margin-right: 10px;
`;

export const TaskItem = styled.li`
  flex-grow: 1;
  padding: 5px;
  background: ${({ priority }) =>
    priority === "High" ? "#ffcccc" : priority === "Medium" ? "#fff3cd" : "#d4edda"};
  border-radius: 5px;
  text-decoration: ${({ done }) => (done ? "line-through" : "none")};
  opacity: ${({ done }) => (done ? 0.6 : 1)};
`;

export const DeleteButton = styled.button`
  padding: 3px 5px;
  cursor: pointer;
  border: none;
  background: white;
  color: white;
  border-radius: 3px;
  margin-left: 10px;
`;