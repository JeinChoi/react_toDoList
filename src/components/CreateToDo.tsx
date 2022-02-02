import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, IToDo, toDoState } from "../atoms";

interface IForm {
  toDo: string;
}
 function UseLocal(useToDos:IToDo[]){ 
 
    localStorage.setItem("record",JSON.stringify(useToDos));
  }
  function saveLocal(ToDos:IToDo){
    const old = JSON.stringify(ToDos);
    localStorage.setItem("record",old);
    console.log("hi");
    
  }
function CreateToDo() {
  const [ToDos,setToDos] = useRecoilState(toDoState);
  const useToDos = useRecoilValue(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
 
  const handleValid = ({ toDo }: IForm) => {
    const temp = {text: toDo, id: Date.now(), category };
    
    setToDos((oldToDos) => {
      const temp1 = [temp,...oldToDos,];
      const old = JSON.stringify(temp1);
      localStorage.setItem("record",old);
      return [
      temp,
      ...oldToDos,
    ];
     
   
  });
//  console.log(ToDos);
//    const old = JSON.stringify(ToDos);
//       localStorage.setItem("record",old);
//     console.log("hi");
   // const save = JSON.parse(localStorage.getItem("record") as any);
  
  // console.log(useToDos);
 //saveLocal(temp);
 setValue("toDo", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Please write a To Do",
        })}
        placeholder="Write a to do"
      />
      <button>Add</button>
    </form>
  );
}
export default CreateToDo;