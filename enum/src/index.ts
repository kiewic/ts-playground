export const enum Colors1 {
  Red,
  Green,
  Blue,
}

export enum Colors2 {
  Red,
  Green,
  Blue,
}

export const enum Colors3 {
  Started = 'started',
  Finished = 'finished',
  Abandoned = 'abandoned'
}

// Use Colors1
console.log(Colors1.Red);
console.log(Colors1.Red.toString());

// Use Colors2
console.log(Colors2.Red);
console.log(Colors2[Colors2.Red]);
console.log(Colors2.Red.toString());

// Use Colors3
console.log(Colors3.Finished);
