export default text => {
  const div = document.createElement('div');
  div.innerHTML = `<div class="starter-hello">Hello ${text}!</div>`;
  document.body.append(div);
};
