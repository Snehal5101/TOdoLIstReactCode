import React, {useContext, useState} from 'react'
import { TaskContext } from '../Context/TaskContext'

function AddTask() {
  const{obj, setObj, postData} = useContext(TaskContext);

  function handleSave(e) {
e.preventDefault();
    try {
      console.log(obj.taskName)
      postData({taskName:obj.taskName})
      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form onSubmit={{handleSave}}>
      
      <input type="hidden" value={obj._id} />
      <input type="text" onChange={(e)=>{setObj({...obj,taskName:e.target.value})}} value={obj.taskName} placeholder='Enter TaskName' />
      <button type='submit'>Save</button>
    </form>
  )
}

export default AddTask
