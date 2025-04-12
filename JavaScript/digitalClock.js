/* Digital clock

    - show time in HH:MM:SS format

*/

const clock = () => {
  const time = new Date();
  hours = time.getHours();
  minutes = time.getMinutes();
  seconds = time.getSeconds();

  return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
};

const pad = (input) => {
  return String(input).length == 1 ? '0' + input : input;
};

console.log(clock());
