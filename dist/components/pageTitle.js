// main container
const returnHTML = document.createElement('div');
returnHTML.classList.add('page-title');
// variables
const pageTitle = 'Page Title';
// function
export const displayPageTitle = (title = pageTitle) => {
    returnHTML.innerText = title;
    return returnHTML;
};
