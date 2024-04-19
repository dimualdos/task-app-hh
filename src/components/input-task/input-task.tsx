import React, { FC } from "react"
import styled from "styled-components";

interface IAddTask {
    addTask: (task: string) => void;
}

export const InputTask: FC<IAddTask> = ({ addTask }) => {
    const [task, setTask] = React.useState("");
    const onSetTask = () => {
        addTask(task);
        setTimeout(
            () => { setTask("") },
            100);
    };

    return (
        <section>
            <h2>Введите задачу</h2>
            <InputFild
                type="text"
                placeholder="Введите задачу"
                value={task}
                onChange={(e) => setTask(e.target.value)} />
            <button
                onClick={() => onSetTask()}
                style={{ outline: "none", border: "none" }}>
                Создать
            </button>
        </section>
    )
}

const InputFild = styled.input`
align-items: center;
border-radius: 5px;
width: 350px;
margin-bottom: 10px;
padding: 0 5px;
height: 30px;
outline: none;
border: none;
`;
