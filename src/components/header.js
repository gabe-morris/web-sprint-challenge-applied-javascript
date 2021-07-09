const Header = (title, date, temp) => {
  //Creates new elements
 const head = document.createElement('div')
 const headerDate = document.createElement('span')
 const headerTitle = document.createElement('h1')
 const headerTemp = document.createElement('span')

 //add new classes
 head.classList.add('header')
 headerDate.classList.add('date')
 headerTemp.classList.add('temp')

 //establish hierarchy
 head.appendChild(headerDate)
 head.appendChild(headerTitle)
 head.appendChild(headerTemp)

 //filling out text content
  headerDate.textContent = date
  headerTitle.textContent = title
  headerTemp.textContent = temp

  return head
}

const headerAppender = (selector) => {
  

}

export { Header, headerAppender }
