import React, { FC, FunctionComponent, useEffect, useState } from "react";
import styled from 'styled-components';
import { IoArchiveOutline } from "react-icons/io5";

export interface Idata {
    id: number;
    task: string;
    done: boolean;
}

interface IdataArr {
    data: Idata[],
    title: string,
    icon: any,
    color: string,
    deleteTask?: (id: number) => void,
    restoreTask?: (id: number) => void,
}

export const TasksInWork: FC<IdataArr> = ({ data, title, icon, color, deleteTask, restoreTask }) => {
    return (
        <section>
            <MainDiv >
                <h2>{title && title}</h2>
                {data && data.map((item: Idata, i: React.Key) => {
                    return <TaskFild key={i} style={{ borderColor: color }}>
                        <TaskInput >
                            {/* <input type="checkbox"></input> */}
                            <PDiv>{item.task}</PDiv>
                        </TaskInput>
                        <DivIcon
                            onClick={deleteTask ? (() => deleteTask!(item.id)) : (() => restoreTask!(item.id))}
                        >
                            {icon}
                        </DivIcon>

                    </TaskFild>
                })}
            </MainDiv>

        </section>
    )
}
const MainDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const TaskFild = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
border: 1px solid ;
border-radius: 5px;
width: 350px;
margin-bottom: 10px;
padding: 0 5px;
`;
const TaskInput = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
align-items: center;
`;

const DivIcon = styled.div`
display: flex;
color: #BF4F74;
align-items: center;
:hover {
    cursor: pointer;
    color: #d0cd02;
}
` ;

const PDiv = styled.p`
    text-align: left;
    padding-bottom: 0;
`;
