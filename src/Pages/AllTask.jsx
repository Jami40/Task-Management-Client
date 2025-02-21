import React, { useState, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { FaTrash, FaEdit, FaPlus } from 'react-icons/fa';
import axios from 'axios';

const ItemType = {
    TASK: 'task',
};

const Task = ({ task, index, moveTask, editTask, deleteTask }) => {
    const [, ref] = useDrag({
        type: ItemType.TASK,
        item: { index },
    });

    const [, drop] = useDrop({
        accept: ItemType.TASK,
        hover(item) {
            if (item.index !== index) {
                moveTask(item.index, index);
                item.index = index; // Update the index for the dragged item
            }
        },
    });

    return (
        <div ref={(node) => ref(drop(node))} style={{ border: '1px solid #ccc', padding: '8px', margin: '4px' }}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => editTask(task._id, { ...task, title: 'Updated Title' })}><FaEdit /></button>
            <button onClick={() => deleteTask(task._id)}><FaTrash /></button>
        </div>
    );
};

const AllTask = () => {
    const [tasks, setTasks] = useState(null);
    const [newTask, setNewTask] = useState({ title: '', description: '' });

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await axios.get('/api/tasks');
        setTasks(response.data);
    };

    const moveTask = async (fromIndex, toIndex) => {
        const reorderedTasks = Array.from(tasks);
        const [movedTask] = reorderedTasks.splice(fromIndex, 1);
        reorderedTasks.splice(toIndex, 0, movedTask);
        setTasks(reorderedTasks);
        await axios.put('/api/tasks/reorder', reorderedTasks);
    };

    const addTask = async () => {
        if (newTask.title.length > 50) return; // Title validation
        const response = await axios.post('/api/tasks', { ...newTask, timestamp: Date.now(), category: 'To-Do' });
        setTasks([...tasks, response.data]);
        setNewTask({ title: '', description: '' });
    };

    const editTask = async (id, updatedTask) => {
        await axios.put(`/api/tasks/${id}`, updatedTask);
        fetchTasks();
    };

    const deleteTask = async (id) => {
        await axios.delete(`/api/tasks/${id}`);
        fetchTasks();
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div>
                <h2 className='text-red-500 text-5xl mt-16'>All Task</h2>
                <input
                    type="text"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    placeholder="Task Title"
                    maxLength="50"
                />
                <textarea
                    value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                    placeholder="Task Description"
                    maxLength="200"
                />
                <button onClick={addTask}><FaPlus /> Add Task</button>

                <div>
                    {tasks.map((task, index) => (
                        <Task
                            key={task._id}
                            index={index}
                            task={task}
                            moveTask={moveTask}
                            editTask={editTask}
                            deleteTask={deleteTask}
                        />
                    ))}
                </div>
            </div>
        </DndProvider>
    );
};

export default AllTask;