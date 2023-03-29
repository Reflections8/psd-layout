document.addEventListener('DOMContentLoaded', () => {
  const gridRow = document.querySelector('.ourService__gridRow')
  window.addEventListener('scroll', () => {
    if (scrollY > 0) {
      gridRow.classList.add('ourService__gridRowActive')
    }
  })
})