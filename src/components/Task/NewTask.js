import {
    Date,
    ImgCheckBoxStyled,
    ImgDeleteStyled,
    StyledNewTask,
    Text,
} from "./StyledNewTask.styles";
import {useDispatch} from "react-redux";
import {completeTask, deleteTask} from "../../redux/actions/actions";
import {EditText} from "react-edit-text";
import "react-edit-text/dist/index.css";

export const NewTask = ({task}) => {
    return (
        <StyledNewTask>
            <ImgCheckBox task={task}/>
            <ImgDelete task={task}/>
            <Text isCompleted={task.isCompleted}>
                <EditText
                    defaultValue={task.text}
                    className={"customInput"}
                    style={{
                        fontSize: "30px",
                        color: "white",
                        backgroundColor: "linear-gradient(#182335, #e15546)",
                        borderRadius: "7px",
                        marginRight: "10px",
                        skipHover: true,
                        focus: {
                            backgroundColor: "#fcfff5",
                        },
                    }}
                >
                    {" "}
                </EditText>
            </Text>
            <Date>Created:{task.date}</Date>
        </StyledNewTask>
    );
};

export const ImgDelete = ({task}) => {
    const dispatch = useDispatch();
    return (
        <ImgDeleteStyled
            onClick={() => dispatch(deleteTask(task.id))}
            height="36px"
            src="trash.svg"
            alt="trash"
        />
    );
};

export const ImgCheckBox = ({task}) => {
    const dispatch = useDispatch();
    return (
        <ImgCheckBoxStyled
            onClick={() => dispatch(completeTask(task.id))}
            height="36px"
            src="check.svg"
            alt="checkbox"
        />
    );
};
