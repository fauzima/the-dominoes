export const source = [
  [6, 1],
  [4, 3],
  [5, 1],
  [3, 4],
  [1, 1],
  [3, 4],
  [1, 2],
];

function sum(arr: number[]) {
  return arr.reduce((a, b) => a + b, 0);
}

export function Double(src: number[][]) {
  let res: number = 0;
  src.forEach((item) => {
    if (item[0] == item[1]) res++;
  });
  return res;
}

// const doublenums: number[][] = [[], [], [], [], [], []];
// double.forEach((item) => {
//   for (let i = 0; i < 6; i++) {
//     if (item[0] == i + 1) doublenums[i].push(item[0]);
//   }
// });

export function SortAsc(src: number[][]) {
  const sums: number[][][] = [[], [], [], [], [], [], [], [], [], [], []];
  const res: number[][] = [];

  for (let i = 0; i <= 10; i++) {
    src.forEach((item) => {
      if (sum(item) == i + 2) sums[i].push(item);
    });
    sums[i].sort((a, b) => a[0] - b[0]);
    res.push(...sums[i]);
  }
  return res;
}

export function SortDesc(src: number[][]) {
  return SortAsc(src).reverse();
}

export function RemoveDupes(src: number[][]) {
  const res: number[][] = [...src];
  const deleted: number[] = [];
  for (let i = 0; i < src.length; i++) {
    for (let j = i + 1; j < src.length; j++) {
      if (
        (src[i][0] == src[j][0] && src[i][1] == src[j][1]) ||
        (src[i][0] == src[j][1] && src[i][1] == src[j][0])
      ) {
        deleted.push(i);
        deleted.push(j);
      }
    }
  }
  [...new Set(deleted)]
    .sort((a, b) => a - b)
    .forEach((item, idx) => {
      res.splice(item - idx, 1);
    });
  return res;
}

export function Flip(src: number[][]) {
  const res: number[][] = [];
  src.forEach((item) => {
    res.push([item[1], item[0]]);
  });
  return res;
}

export function RemovebyTotal(src: number[][], numInput: string) {
  const res: number[][] = [];
  const num: number = parseInt(numInput);
  src.forEach((item) => {
    if (sum(item) !== num) res.push(item);
  });
  return res;
}

// console.log(double);
// console.log(double.length);
// console.log(doublenums);
// console.log(doublenums[0].length);
// console.log(doublenums[1].length);
// console.log(doublenums[2].length);
// console.log(doublenums[3].length);
// console.log(doublenums[4].length);
// console.log(doublenums[5].length);

// console.log(SortAsc(source));
// console.log(SortDesc(source));

// console.log(RemoveDupes(source));

// console.log(Flip(source));

// console.log(RemovebyTotal(source, "2"));
