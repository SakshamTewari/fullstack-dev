/* Given a time in 12 hrs format, convert it into 24 hrs format 

    - check "am" or "pm" using 'endsWith' method
    - split into hours and mins
    - check for 12

*/

const formatTime = (time) => {
  const timeLowerCased = time.toLowerCase();

  let [hours, mins] = timeLowerCased.split(':');

  if (timeLowerCased.endsWith('am')) {
    hours = hours == 12 ? '0' : hours;
  } else if (timeLowerCased.endsWith('pm')) {
    hours = hours == 12 ? hours : String(+hours + 12);
  }

  return `${hours.padStart(2, 0)}:${mins.slice(0, -2).padStart(2, 0)}`;
};

console.log(formatTime('12:10AM'));
