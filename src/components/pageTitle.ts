// typing
interface PageTitleProps {
	(title?: string | undefined): HTMLDivElement
}

// main container
const returnHTML: HTMLDivElement = document.createElement('div')
returnHTML.classList.add('page-title')

// variables
const pageTitle: string = 'Page Title'

// function
export const displayPageTitle:PageTitleProps = (title: string = pageTitle) => {
	returnHTML.innerText = title
	return returnHTML
}