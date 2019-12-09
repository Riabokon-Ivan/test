const textarea = document.querySelector('#textarea');
textarea.addEventListener('keyup', function countChar() {
  const len = textarea.value.length;
  if (len >= 350) {
    textarea.value = textarea.value.substring(0, 350);
  } else {
    const div = document.querySelector('#charNum');
    div.innerText = `${(350 - len)} / 350`;
  }
}
);
