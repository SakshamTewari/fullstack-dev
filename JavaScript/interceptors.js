/* 
Request and Response Interceptors

    - Add a req/res interceptor method to fetch that can be used to monitor each request and response
    - Axios comes with axios.interceptor.request and axios.interceptor.response

    Create 2 methods on the window object (so it is globally available), requestInterceptor and responseInterceptor.
    Before each request, pass the arguments to requestInterceptor and modify the request as needed.
    After each response, pass the response to responseInterceptor and modify the response as needed.

*/

const originalFetch = window.fetch;

window.requestInterceptor = (args) => {
  args[0] = args[0] + `${Math.floor(Math.random() * 10) + 1}`;
  return args;
};

window.responseInterceptor = (response) => {
  return response.json(); //convert to json to avoid parsing every time
};

const fetchRequest = async () => {
  try {
    const json = await fetch('https://jsonplaceholder.typicode.com/todos/');
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

document.getElementById('btn').addEventListener('click', fetchRequest);
