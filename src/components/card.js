import axios from "axios"

const Card = (article) => {
  //create new elements
 const card = document.createElement('div')
 const headline = document.createElement('div')
 const author = document.createElement('div')
 const imgContainer = document.createElement('div')
 const img = document.createElement('img')
 const authName = document.createElement('span')
// <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  //create new classes
  card.classList.add('card')
  headline.classList.add('headline')
  author.classList.add('author')
  imgContainer.classList.add('img-container')
  //establish hierarchy
  card.appendChild(headline)
  card.appendChild(author)
  author.appendChild(imgContainer)
  imgContainer.appendChild(img)
  author.appendChild(authName)

  //add Text Content and image source
  headline.textContent = article.headline
  img.src = article.authorPhoto
  authName.textContent = article.authorName

  card.addEventListener('click', console.log(article.headline))
  return card
}

const cardAppender = (selector) => {
  //Not sure where to go past this point, please explain
  const hold = document.querySelector(selector)
  axios.get(`http://localhost:5000/api/articles`)
  .then( response => {
    console.log(response.data)
    })
}
export { Card, cardAppender }
