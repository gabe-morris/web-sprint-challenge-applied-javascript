import axios from "axios"

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
 axios.get(`http://localhost:5000/api/topics`)
 .then (response => {
   const newTabs = Tabs(response.data.topics)
   const holder = document.querySelector(selector)
    return holder.appendChild(newTabs)
 })
}

export { Tabs, tabsAppender }
