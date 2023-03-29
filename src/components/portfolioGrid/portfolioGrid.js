document.addEventListener('DOMContentLoaded', () => {
  const textMain = document.querySelector('.portfolioGrid__headerRest')
  const firstRow = document.querySelector('.portfolioGrid__headerFirstRow')

  if (window.innerWidth <= 820) {
    textMain.innerHTML = 'Browse our portfolio of previous works ranging from indie to AAA projects with world-class <span class="yellowText">commercial quality</span>'
    firstRow.setAttribute('style', 'display: none')
  } else {
    textMain.innerHTML = 'ranging from indie to AAA projects with world-class <span class="yellowText">commercial quality</span>'
    firstRow.removeAttribute('style')
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 820) {
      textMain.innerHTML = 'Browse our portfolio of previous works ranging from indie to AAA projects with world-class <span class="yellowText">commercial quality</span>'
      firstRow.setAttribute('style', 'display: none')
    } else {
      textMain.innerHTML = 'ranging from indie to AAA projects with world-class <span class="yellowText">commercial quality</span>'
      firstRow.removeAttribute('style')
    }
  })

})