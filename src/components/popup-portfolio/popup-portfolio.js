document.addEventListener('DOMContentLoaded', () => {
  const popup = document.querySelector('.popup-portfolio')

  // Opening logic
  const portfolioItem = document.querySelectorAll('.portfolioGrid__grid-item')
  const popupGalleryContainer = document.querySelector('.popup-portfolio__gallery')

  portfolioItem.forEach(item => {
    item.addEventListener('click', (e) => {
      const clickedSrc = e.target.getAttribute('src')
      const clickedJSON = e.target.getAttribute('data-gallery-file')

      let galleryArray = []
      fetch(`src/components/popup-portfolio/img/galleries/${clickedJSON}`)
        .then(res => res.json())
        .then(res => {
          res.map(item => {
            galleryArray.push(item)
          })
        })
        .catch(e => {
          throw new Error(e)
        })
        .finally(() => {
          popupGalleryContainer.innerHTML = ''
          popup.classList.remove('popup-portfolioHidden')

          document.body.setAttribute('style', 'overflow-y: hidden;  padding-right: 15px')

          popupGalleryContainer.insertAdjacentHTML('afterbegin', `
            <img src=${clickedSrc}
                 alt="portfolio-item"
                 class="popup-portfolio__gallery-item">
                
          `)

          galleryArray.map(item => {

            popupGalleryContainer.insertAdjacentHTML('afterbegin', `
            <img src=${item.src}
                 alt="portfolio-item"
                 class="popup-portfolio__gallery-item">
                
          `)
          })
        })
    })
  })

  // Closing logic
  const closeIcon = document.querySelector('.popup-portfolio__closeIconBlock-icon')
  closeIcon.addEventListener('click', () => {
    popup.classList.add('popup-portfolioHidden')
    document.body.removeAttribute('style')
  })
})