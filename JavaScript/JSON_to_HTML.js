const JSONtoHTML = (json) => {
  const fragment = document.createDocumentFragment(); // create a fragment

  if (Array.isArray(json)) {
    for (let entry of json) {
      //convert each entry of element to DOM element
      const element = document.createElement(entry.type); // create element

      if (entry.props) {
        // if props available, set them
        for (let key in entry.props) {
          element.setAttribute(key, entry.props[key]);
        }
      }

      if (Array.isArray(entry.children)) {
        // if array of children
        for (let child of entry.children) {
          element.appendChild(JSONtoHTML(child)); // recursively convert the children to DOM and assign them
        }
      } else {
        element.innerText = entry.children; // if children is string/text
      }

      fragment.appendChild(element); // add the element back to fragment
    }
  } else {
    return JSONtoHTML([json]); // if not Array, recursively call the same function by passing the entry as array
  }
  return fragment;
};

const testJson = [
  {
    type: 'div',
    props: { id: 'container' },
    children: [
      {
        type: 'h1',
        props: {},
        children: 'Title',
      },
      {
        type: 'p',
        props: {},
        children: 'This is a paragraph',
      },
    ],
  },
];

document.getElementById('jsontohtml').appendChild(JSONtoHTML(testJson));

// console.log(JSONtoHTML(testJson));
