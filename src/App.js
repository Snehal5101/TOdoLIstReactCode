import logo from './logo.svg';
import './App.css';
import { TaskContext } from './Context/TaskContext';
import { useState } from 'react';
import axios from "axios";
import TaskList from './Component/TaskList';
import AddTask from './Component/AddTask';



function App() {
 const[data, setData] = useState([]);
 const[obj, setObj]  = useState({_id:"",taskName:""});

//  GetData function
 const getData = async ()=>{
  try {
    const res = await axios.get("https://todolistshreyas.herokuapp.com/api/task/");
    const data = res.data;
    setData(data);
  } catch (error) {
    console.log(error)
  }
 }


//  PostData function
const postData = async (task)=>{
  try {
    const res = await axios.post("https://todolistshreyas.herokuapp.com/api/task/",task);
    const data = res.data;
    console.log(data)
   getData();
  } catch (error) {
    console.log(error)
  }
 }


  return (
<TaskContext.Provider value = {{data, getData, obj, setObj, postData}}>
<AddTask/>
<TaskList/>

</TaskContext.Provider>
  );
}

export default App;
