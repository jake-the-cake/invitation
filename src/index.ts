const pageContent = document.getElementById('root')

const pageTitle = async () => {
	const	res = await fetch('../src/components/title.html')
	.then(response => {
		return response.text()
	})
	const html = String(res)
	return html
}

const app = (async () => {
	pageContent!.innerHTML = (await pageTitle()).valueOf()
})()