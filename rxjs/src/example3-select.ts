import { Observable, of, take } from 'rxjs';

function foo(): Observable<boolean> {
  return of(false);
}

console.log(foo().pipe(take(1)).subscribe(next => console.log('Callback', next)));
