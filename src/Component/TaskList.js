import React, { useContext, useEffect } from 'react'
import { TaskContext } from '../Context/TaskContext'

function TaskList() {
    const { data, getData,obj, setObj } = useContext(TaskContext)
    useEffect(() => { getData() }, []);

    function handleEdit(_id, taskName) {
        setObj({_id:_id, taskName:taskName})
        
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>TaskName</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(i => (<tr key={i._id}>
                        <td>{i.taskName}</td>
                        <td><button onClick={handleEdit(i._id,i.taskName)}>Edit</button></td>
                        <td><button>Delete</button></td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    )
}

export default TaskList
