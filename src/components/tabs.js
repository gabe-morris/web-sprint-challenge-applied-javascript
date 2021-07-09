const Tabs = (topics) => {
 const topic = document.createElement('div')
  topic.classList.add('topics')
 topics.forEach(item => {
   const tab = document.createElement('div')
   tab.classList.add('tab')
   tab.textContent = item
   topic.appendChild(tab)
 })
 
 return topic
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
