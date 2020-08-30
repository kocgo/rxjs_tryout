import { Subject } from "rxjs";

// Track changes in an Array
export const trackArrayChanges = () => {
  const myArray = [];
  const arraySubject: any = new Subject();

  console.log(arraySubject);

  const pushToArray = function (item: any) {
    myArray.push(item);
    arraySubject.next(item);
  };

  arraySubject.subscribe(console.log);

  pushToArray(2);
  setTimeout(() => pushToArray("hello again"), 2000);
};
