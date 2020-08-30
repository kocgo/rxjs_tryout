import { Subject } from "rxjs";

// Track changes in an Array
export const trackArrayChanges = () => {
  const myArray = [];
  const arraySubject: any = new Subject();

  const pushToArray = function (item: any) {
    myArray.push(item);
    arraySubject.next(item);
  };

  arraySubject.subscribe(console.log);

  setTimeout(() => pushToArray("hello"), 1000);
  setTimeout(() => pushToArray("hello again"), 2000);
  setTimeout(() => pushToArray("hello again"), 4000);
};
