/*
We have:
n disks of different sizes on a source rod (A).

Goal: move all disks to a target rod (C).

Constraint:

Only one disk can be moved at a time.
A larger disk cannot be placed on top of a smaller one.
We also have an auxiliary rod (B) to help.

Number of moves = 2^n - 1

*/

function towerOfHanoi(n, source, target, helper, moves = []) {
  // base : only 1 disk left
  if (n === 1) {
    moves.push(`Move disk 1 from ${source} -> ${target}`);
    return moves;
  }
  // move n-1 disks from source to helper
  towerOfHanoi(n - 1, source, helper, target, moves);

  // move nth disk from source to target
  moves.push(`Move disk ${n} from ${source} -> ${target}`);

  // move n-1 disks from helper to target
  towerOfHanoi(n - 1, helper, target, source, moves);

  return moves;
}

// Test
console.log(towerOfHanoi(3, 'A', 'C', 'B').join('\n'));
