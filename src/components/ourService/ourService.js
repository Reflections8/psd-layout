document.addEventListener('DOMContentLoaded', () => {
  const gridRow = document.querySelector('.ourService__gridRow')
  window.addEventListener('scroll', () => {
    const offset = window.innerHeight - gridRow.getBoundingClientRect().top
    if (scrollY > 0 && offset >= 100) {
      gridRow.classList.add('ourService__gridRowActive')
    }
  })
})