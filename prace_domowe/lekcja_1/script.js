export default function() {
  const { body } = document;
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.innerText = 'Hello World!';
  div.appendChild(h1);
  body.appendChild(div);
};
