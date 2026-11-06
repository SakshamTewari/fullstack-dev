/* HTML to JSON

    - takes DOM node as input and converts to javascript object
    - object should have type of node, attributes, children

*/

//helper function
const getAllAttributes = (node) => {
  let obj = {};
  for (let att, i = 0, atts = node.attributes, n = atts.length; i < n; i++) {
    att = atts[i];
    obj[att.nodeName] = att.nodeValue;
  }

  return obj;
};

const HTMLtoJSON = (node) => {
  const result = {};

  const type = node.localName; // get the node name;

  let children = node.innerText; // set the children to innerText by default

  // if node has children
  if (node.children.length > 0) {
    children = [];

    for (let child of node.children) {
      children.push(HTMLtoJSON(child));
    }
  }

  const props = getAllAttributes(node); // get all the properties of node

  if (Object.keys(props).length) {
    // if properties exist, set them
    result['props'] = props;
  }

  result['children'] = children;
  result['type'] = type;

  return result;
};
