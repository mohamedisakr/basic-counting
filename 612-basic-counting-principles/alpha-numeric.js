/*
EXAMPLE 2 pp 406
The chairs of an auditorium are to be labeled with an uppercase English letter 
followed by a positive integer not exceeding 100. What is the largest number of chairs 
that can be labeled differently?
*/

const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let count = 0;
for (let i = 0; i < alpha.length; i++) {
  for (let j = 1; j <= 100; j++) {
    count++;
  }
}

console.log(count);
