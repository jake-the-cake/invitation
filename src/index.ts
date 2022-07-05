import { buildPage } from "./buildPage.js"

const pageContent = document.getElementById('root')

const pageTitle = async () => {
	const	res = await fetch('../src/components/title.html')
	.then(response => {
		return response.text()
	})
	return String(res)
}

const app = (async () => {
	pageContent!.innerHTML = (await pageTitle()).valueOf()
	buildPage()
})()