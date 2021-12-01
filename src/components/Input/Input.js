import {AddButtonStyled, StyledInput} from "./Input.styles";

export const Input = ({handleSubmit, handleChangeValue, value}) => {
    return (
        <StyledInput
            type="text"
            value={value}
            placeholder={"Enter your task"}
            onChange={handleChangeValue}
            onKeyDown={handleSubmit}
        />
    );
};

export const AddButton = ({addTaskByButton}) => {
    return <AddButtonStyled onClick={addTaskByButton}>Add</AddButtonStyled>;
};
