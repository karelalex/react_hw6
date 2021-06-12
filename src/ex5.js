import React, {useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";

export const TaskList = () => {
    const [tasks, setTasks] = useState(['Задача 1'])
    const [newTask, setNewTask] = useState('')
    const handleAdd = () => {
        if (newTask) {
            setTasks([...tasks, newTask])
            setNewTask('')
        }
    }
    const handleRemove = () => setTasks(tasks.slice(0, -1))
    return (
        <>
            <ul>
                {tasks.map((task) => <Task key={task} name={task}/>)}
            </ul>
            <Form.Group as={Row} controlId="newtask">
                <Col sm="5">
                    <Form.Control placeholder="Новая задача" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
                </Col>
                <Col sm={1}>
                    <Button variant="success" onClick={handleAdd} disabled={tasks.includes(newTask)}>Добавить</Button>
                </Col>
                <Col sm={1}>
                    <Button variant="danger" onClick={handleRemove}>Удалить</Button>
                </Col>
            </Form.Group>
        </>
    )
}

export const Task = ({name}) => {
    const [done, setDone] = useState(false)
    return (
        <li>
            {done ? <s>{name}</s> : name} <Button variant="info" onClick={() => setDone(true)}>Доне</Button>
        </li>
    )
}
