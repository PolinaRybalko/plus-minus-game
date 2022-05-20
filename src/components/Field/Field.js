import React, { useEffect, useReducer} from "react";
import Row from "./Row";
import styles from "./Field.module.css";

const changeSign = (tile) => {
  if (tile === "+") {
    return "−";
  } else {
    return "+";
  }
};

const generateNewField = (field) => {
  return field.map((row) => {
    return row.map(() => {
      let randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return "+";
      } else {
        return "−";
      }
    });
  });
};
const changeSigns = (rowNumber, columnNumber, field) => {
  return field.map((row, id) => {
    if (id === rowNumber) {
      return row.map((tile) => {
        return changeSign(tile);
      });
    } else {
      return row.map((tile, id) => {
        if (id === columnNumber) {
          return changeSign(tile);
        } else {
          return tile;
        }
      });
    }
  });
};
const fieldReducer = (field, action) => {
  switch (action.type) {
    case "CLICK":
      return changeSigns(action.row, action.column, field);
    case "NEW_FIELD":
      return action.field;
    default:
      return field;
  }
};
const emptyField = [
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
];

const isWinning = (field) => {
  const hasPlus = field
    .map((row) => {
      return row.includes("+");
    })
    .includes(true);
  const hasMinus = field
    .map((row) => {
      return row.includes("−");
    })
    .includes(true);
  return (!hasPlus && hasMinus) || (!hasMinus && hasPlus);
};
const Field = (props) => {
  const [field, dispatchFieldActions] = useReducer(fieldReducer, emptyField);
  const clickHandler = (row, column) => {
    dispatchFieldActions({ type: "CLICK", row: row, column: column });
  };
  useEffect(() => {
    if (props.isStarted) {
      const initialField = generateNewField(emptyField);

      dispatchFieldActions({
        type: "NEW_FIELD",
        field: initialField,
      });
    }
  }, [props.isStarted]);
  useEffect(() => {
    if (isWinning(field)) {
      props.onUserWins();
    }
  }, [field, props]);
  const gameField = field.map((row, id) => {
    return (
      <Row key={`r${id}`} rowNumber={id} signs={row} onClick={clickHandler} />
    );
  });
  return <div className={styles.field}>{gameField}</div>;
};

export default Field;
