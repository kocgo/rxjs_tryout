import { Observable } from "rxjs";

export const multipleObservers = () => {
  const myObservable$ = Observable.create((observer: any) => {
    setInterval(() => observer.next("hey"), 2000);
  });

  const observer1 = myObservable$.subscribe(
    // Next
    (val: any) => addItem("I am observer 1 " + val),
    // Error
    (error: any) => console.log(error),
    // Complete
    () => addItem("completed, no more iterations")
  );

  // For Child Observer
  // observer1.add(observer2);

  const observer2 = myObservable$.subscribe(
    // Next
    (val: any) => addItem("I am observer 2 " + val)
  );

  // Unsubscribe after 10 seconds
  setTimeout(() => {
    observer1.unsubscribe();
    observer2.unsubscribe();
  }, 10000);

  function addItem(val: any) {
    const node = document.createElement("li");
    const textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById("output").appendChild(node);
  }
};
