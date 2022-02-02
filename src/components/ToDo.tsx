import React from "react";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";


function ToDo({ text, category, id }: IToDo) {
    const [ToDos,setToDos] = useRecoilState(toDoState);
    const useToDos = useRecoilValue(toDoState);
    const deleteClick = (event: React.MouseEvent<HTMLButtonElement>) => {

    }
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
     
      const {
        currentTarget: { name },
      } = event;
      setToDos((oldToDos) => {
        const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
        const newToDo = { text, id, category: name as any };//내가 수정한 카테고리로
        //category : name as any로 설정 
     //   console.log(useToDos);
        const change = [
          ...oldToDos.slice(0, targetIndex),
          newToDo,
          ...oldToDos.slice(targetIndex + 1),
        ];
        localStorage.setItem("record",JSON.stringify(change));
       return change;
       //newToDo를 생성하여 사이에 둔 배열을 만들고 return

      });
     
   
    };
    return (
        <li>
          <span>{text}</span>
          {category !== Categories.DOING && (
            <button name={Categories.DOING} onClick={onClick}>
              Doing
            </button>
          )}
          {category !== Categories.TO_DO && (
            <button name={Categories.TO_DO} onClick={onClick}>
              To Do
            </button>
          )}
          {category !== Categories.DONE && (
            <button name={Categories.DONE} onClick={onClick}>
              Done
            </button>
          )}
           
        </li>
      );
}

export default ToDo;