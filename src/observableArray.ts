import { from } from "rxjs";

export const observableArray = () => {
  // Observable
  const myArray: Array<number> = [1, 2, 3, 4, 5];
  const arraySource = from(myArray);

  const subscribe = arraySource.subscribe(console.log);
};
