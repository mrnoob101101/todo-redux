import {
  ButtonDeleteAllStyled,
  ButtonDeleteCheckedStyled,
  SortButtonStyled,
} from "./SortingBlock.styles";
import { useDispatch } from "react-redux";
import {
  deleteAll,
  deleteChecked,
  TurnOFFAlphabeticallyOrder,
} from "../../app/actions";
import { useState } from "react";

export const SortButton = () => {
  const [buttonText, setButtonText] = useState("ON");

  const dispatch = useDispatch();

  const handlerOnclick = () => {
    setButtonText("OFF");
    dispatch(TurnOFFAlphabeticallyOrder());
  };

  return (
    <SortButtonStyled
      onClick={() => {
        handlerOnclick();
      }}
    >
      Adding tasks in alphabetical order {buttonText}
    </SortButtonStyled>
  );
};

export const ButtonDeleteChecked = () => {
  const dispatch = useDispatch();

  return (
    <ButtonDeleteCheckedStyled onClick={() => dispatch(deleteChecked())}>
      Delete checked
    </ButtonDeleteCheckedStyled>
  );
};

export const ButtonDeleteAll = () => {
  const dispatch = useDispatch();
  return (
    <ButtonDeleteAllStyled onClick={() => dispatch(deleteAll())}>
      Delete all
    </ButtonDeleteAllStyled>
  );
};
