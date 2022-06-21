import React from "react";
import "./style.css";
import { generateGuid } from "./utils";

const initialState = [];
const ACTION = {
    ADD: "ADD",
    COMPLETE: "COMPLETE",
    REMOVE: "REMOVE",
};

export const reducer = (state, action) => {
    switch (action.type) {
        case ACTION.ADD:
            return [action.todo, ...state];

        case ACTION.COMPLETE:
            return state.map((todo) => {
                if (action.id === todo.id) {
                    return { ...todo, is_completed: !todo.is_completed };
                } else {
                    return todo;
                }
            });

        case ACTION.REMOVE:
            return state.filter((todo) => todo.id !== action.id);

        default:
            return state;
    }
};

export default function App() {
    const [todos, dispatch] = React.useReducer(reducer, initialState);
    const [text, setText] = React.useState("");

    const add = () => {
        dispatch({
            type: ACTION.ADD,
            todo: {
                text: text,
                is_completed: false,
                id: generateGuid(),
            },
        });
        setText("");
    };

    const completed = (id) => {
        dispatch({
            type: ACTION.COMPLETE,
            id: id,
        });
    };

    const remove = (id) => {
        dispatch({
            type: ACTION.REMOVE,
            id: id,
        });
    };

    return (
        <div>
            <div>
                <input type="text" onChange={(e) => setText(e.target.value)} id="todoInput" data-testid="todoInput" value={text} />
                <button onClick={add} id="todoAddBtn" data-testid="todoAddBtn">
                    Add
                </button>
            </div>
            <h4 style={{ marginBottom: 0 }}>Todo:</h4>
            {todos?.map?.((todo) => {
                return (
                    <div key={todo.id} className="todo-wrapper">
                        <div onClick={() => completed(todo.id)} className={todo.is_completed ? "strike todo" : "todo"}>
                            {todo.text}
                        </div>
                        <div onClick={() => remove(todo.id)} className="remove">X</div>
                    </div>
                );
            })}
        </div>
    );
}
