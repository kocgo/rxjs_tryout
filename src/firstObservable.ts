import { Observable } from "rxjs";

export const firstObservable = () => {
  const myObservable$ = Observable.create((observer: any) => {
    observer.next("hey");
    observer.next("hey");
    observer.next("hey");
    observer.complete();
    observer.next("hey");
  });

  myObservable$.subscribe(
    // Next
    (x: any) => addItem(x),
    // Error
    (error: any) => console.log(error),
    // Complete
    () => addItem("completed, no more iterations")
  );

  function addItem(val: any) {
    const node = document.createElement("li");
    const textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById("output").appendChild(node);
  }
};
