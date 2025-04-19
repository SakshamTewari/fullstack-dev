/* Given a time in 24 hrs fomrat, convert it into 12 hrs format 

    - split the string on ":"
    - edge cases : >12 , == 12, == 0
*/

const formatTime = (time) => {
  const time_splitted = time.split(':');
  let ampm = 'AM';

  if (time_splitted[0] >= 12) {
    ampm = 'PM';
  }
  if (time_splitted[0] > 12) {
    time_splitted[0] = time_splitted - 12;
  }
  if (time_splitted[0] == 0) {
    time_splitted[0] = 12;
  }
  return time_splitted[0] + ':' + time_splitted[1] + '' + ampm;
};

console.log(formatTime('12:44'));
console.log(formatTime('00:33'));
