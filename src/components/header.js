const Header = (title, date, temp) => {
  //Creates new elements
 const head = document.CreateElement('div')
 const headerDate = document.createElement('span')
 const headerTitle = document.createElement('h1')
 const headerTemp = document.createElement('span')

 //add new classes
 head.classList.add('header')
 headerDate.classList.add('date')
 headerTemp.classList.add('temp')

}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
