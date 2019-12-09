const textarea = document.querySelector('#textarea');
textarea.addEventListener('keyup', function countChar() {
  const len = textarea.value.length;
  if (len >= 300) {
    textarea.value = textarea.value.substring(0, 300);
  } else {
    const div = document.querySelector('#charNum');
    div.innerText = `${(300 - len)} / 300`;
  }
}
);
