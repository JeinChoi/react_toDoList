import { atom, selector } from "recoil";

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}
export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});
const record = localStorage.getItem("record");
export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: record === null ? [] : JSON.parse(record as any),
});
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },//toDos중에서 지금 현재 recoil로 설정된 category와 같은 값들만 내보내기 
  //select로 변경됨.
});
// let local = JSON.parse(localStorage.getItem("record") as any);
// export const toRecord=atom({
//   key:"toDo",
//   default:local,
// })
