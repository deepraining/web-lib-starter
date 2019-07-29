export default text => {
  const div = document.createElement('div');
  div.innerHTML = `<div class="starter-welcome">Welcome ${text}!</div>`;
  document.body.append(div);
};
