/* 
Async filter

*/

const filter = (arr, fn) => {
  return new Promise((resolve, reject) => {
    //Promise – wraps the whole logic so we can use await
    const output = [];
    let track = 0;

    arr.forEach((ele, index) => {
      fn(ele, (error, result) => {
        if (error) {
          reject(error);
        }
        track++;
        if (result) {
          output[index] = ele;
        }
        if (index >= arr.length) {
          resolve(output.filter(Boolean)); //.filter(Boolean) – removes undefined values.
        }
      });
    });
  });
};
