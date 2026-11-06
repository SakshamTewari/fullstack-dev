/*
CPU scheduling algorithm 
    used in operating systems.

It picks the process with the shortest burst time (execution time) first.

SJF is greedy because:
It always picks the process with the minimum burst time (locally optimal) —
leading to minimum average waiting time (globally optimal).

Goal → minimize the average waiting time.
*/

function SJF(processes) {
  // sort by arrival
  processes.sort((a, b) => a.arrival - b.arrival);

  let time = 0;
  let completed = [];
  let remaining = [...processes];

  while (remaining.length > 0) {
    const available = remaining.filter((p) => p.arrival <= time);
  }
}
