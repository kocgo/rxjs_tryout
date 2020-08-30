import { Observable } from "rxjs";

const observable = Observable.create((observer: any) => {
  observer.next("hey people!");

  setTimeout(() => observer.next("hey people! 1"), 1000);
  setTimeout(() => observer.next("hey people! 2"), 2000);
  setTimeout(() => observer.next("hey people! 3"), 3000);
  setTimeout(() => observer.next("hey people! 4"), 4000);
});

observable.subscribe((x: any) => console.log(x));
