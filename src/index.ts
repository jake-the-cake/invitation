// import { buildPage } from "./buildPage.js"
import { displayPageTitle } from "./components/pageTitle.js"

const pageContent = document.getElementById('root')

const app = (() => {
console.log('version 0.1.0')
const title = displayPageTitle()
pageContent!.innerHTML = ''
pageContent!.appendChild(title)
})()