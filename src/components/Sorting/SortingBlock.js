import {
    ButtonDeleteAllStyled, ButtonDeleteCheckedStyled, SortButtonStyled, ToggleButtonStyled,
} from "./SortingBlock.styles";
import {useDispatch} from "react-redux";
import {
    deleteAll, deleteChecked, sortTasks, toggleAlphabeticallyOrder,
} from "../../redux/actions/actions";
import {useState} from "react";

export const AlphabeticallyOrderToggle = ({sortingToggle}) => {

    const [buttonText, setButtonText] = useState("ON");
    const dispatch = useDispatch();

    const handlerOnclick = () => {
        sortingToggle ? setButtonText("OFF") : setButtonText("ON")
        dispatch(toggleAlphabeticallyOrder());
    };

    return (<ToggleButtonStyled
        onClick={() => {
            handlerOnclick();
        }}
    >
        Adding tasks in alphabetical order {buttonText}
    </ToggleButtonStyled>);
};

export const SortButton = () => {
    const dispatch = useDispatch();

    return (<SortButtonStyled onClick={() => dispatch(sortTasks())}>Sort
        </SortButtonStyled>

    )
}

export const ButtonDeleteChecked = () => {
    const dispatch = useDispatch();

    return (<ButtonDeleteCheckedStyled onClick={() => dispatch(deleteChecked())}>
        Delete checked
    </ButtonDeleteCheckedStyled>);
};

export const ButtonDeleteAll = () => {
    const dispatch = useDispatch();
    return (<ButtonDeleteAllStyled onClick={() => dispatch(deleteAll())}>
        Delete all
    </ButtonDeleteAllStyled>);
};
