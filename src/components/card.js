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
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
