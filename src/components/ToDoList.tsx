import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Categories, categoryState, IToDo, toDoSelector, toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
const loadToDos = ()=>{
  const loadedToDos = localStorage.getItem("record");
  console.log(loadedToDos);
  if(loadedToDos===null){
    localStorage.setItem("record"," ");
  }
  else{
     const parsedToDos = JSON.parse(loadedToDos);
    // console.log("parsedToDos",parsedToDos);
    // {
    // parsedToDos?.map((toDo:IToDo)=>(
    //     <ToDo key={toDo.id} {...toDo} />
    // ));}
  //  useEffect(()=> { 
  //    setToDos(parsedToDos)
  //   });
  }
}
function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const [ToDos,setToDos] = useRecoilState(toDoState);
  const loadedData = localStorage.getItem("record");
  // useEffect(()=>{
  //   if(loadedData!==null){
  //   setToDos(JSON.parse(loadedData))}
  //   });
   
  
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };//현재 select에서 어느 category가 선택되었는지 
  //loadToDos();
//  const save = JSON.parse(localStorage.getItem("record") as any);
  // useEffect(()=> { 
  //   setToDos(save);
  //  });
  
  
  //setToDos(save);
 //UseLocal(useToDos);
  //console.log(toDos);
  // console.log(ToDos);
  //     const old = JSON.stringify(ToDos);
  //      localStorage.setItem("record",old);
  //      console.log("hi");
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      
      {
      
      toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}
export default ToDoList;