import dayjs from "dayjs";
import {useDispatch, useSelector} from "react-redux";
import {TaskContainer} from "../Task/StyledNewTask.styles";
import {NewTask} from "../Task/NewTask";
import {ListWrapper, MainBlock} from "./List.styles";
import {AddButton, Input} from "../Input/Input";
import {nanoid} from "@reduxjs/toolkit";
import {useState} from "react";
import {SortingDiv} from "../Sorting/SortingBlock.styles";
import {addToDoDefaultByAlphabet, addToDoInOrder} from "../../redux/actions/actions";
import {
    ButtonDeleteAll,
    ButtonDeleteChecked,
    AlphabeticallyOrderToggle, SortButton,
} from "../Sorting/SortingBlock";


export const List = () => {
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.tasks);
    const sortingToggle = useSelector((state) => state.isSortON);
    const addTodo = (text) => {
        const id = nanoid();
        const isCompleted = false;
        const isSorted = false;
        const date = dayjs().format("DD/MM/YYYY, HH:mm ");
        const oneMoreTask = {id, text, isCompleted, isSorted, date};

        sortingToggle
            ? dispatch(addToDoDefaultByAlphabet(oneMoreTask))
            : dispatch(addToDoInOrder(oneMoreTask));
    };

    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        if (e.keyCode === 13 && value.trim()) {
            addTodo(value.trim());
            setValue("");
        }
    };

    const handleChangeValue = (e) => setValue(e.target.value);

    const addTaskByButton = () => {
        if (value.trim()) {
            addTodo(value);
            setValue("");
        }
    };

    return (
        <MainBlock>
            <ListWrapper>
                <Input
                    addTodo={addTodo}
                    handleSubmit={handleSubmit}
                    handleChangeValue={handleChangeValue}
                    value={value}
                />
                <AddButton addTaskByButton={addTaskByButton}/>
                <TaskContainer>
                    {todoList.map((item) => (
                        <NewTask task={item} key={item.id}/>
                    ))}
                </TaskContainer>
                <SortingDiv>
                    <AlphabeticallyOrderToggle sortingToggle={sortingToggle}/>
                    <SortButton/>
                    <ButtonDeleteAll/>
                    <ButtonDeleteChecked/>
                </SortingDiv>
            </ListWrapper>
        </MainBlock>
    );
};
