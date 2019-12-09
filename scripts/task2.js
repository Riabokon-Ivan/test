// Function which hide each 3-th mail
const tableRow = document.querySelectorAll('#:2s>tbody>tr');

tableRow.forEach((item, index) => {
  if ( ( index + 1 ) % 3 === 0 && index !== 0 ) {
    item.style.display = 'none';
  }
});
