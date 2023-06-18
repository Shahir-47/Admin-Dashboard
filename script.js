//adjusting the width of the main content area to account for the width of the sidebar
const sidebar = document.querySelector('.sidebar');
const sidebarWidth = window.getComputedStyle(sidebar).getPropertyValue('width');
const sidebarWidthWithoutUnits = parseFloat(sidebarWidth);
const newWidth = sidebarWidthWithoutUnits; 
document.querySelector('.main').style.paddingLeft = `${newWidth}px`;


//adjusting the height of the main content area to account for the height of the header
const header = document.querySelector('.header-1');
const headerHeight = window.getComputedStyle(header).getPropertyValue('height');
const headerHeightWithoutUnits = parseFloat(headerHeight);
const newHeight = headerHeightWithoutUnits + 16; 
document.querySelector('.main').style.paddingTop = `${newHeight}px`;


//adjusting the width of the header to account for the width of the sidebar
const sidebarRight = window.getComputedStyle(sidebar).getPropertyValue('right');
console.log(sidebarRight);
const sidebarRightWithoutUnits = parseFloat(sidebarRight);
const headerWidth = window.innerWidth - sidebarRightWithoutUnits;
header.style.left = `${headerWidth}px`;


//making the height of the right sidebar same as the height of the main content area
const project = document.querySelector('.projects');
const projectHeight = window.getComputedStyle(project).getPropertyValue('height');
const projectHeightWithoutUnits = parseFloat(projectHeight);
const newRightBar = projectHeightWithoutUnits + 18;
document.querySelector('.sticky-anc').style.height = `${newRightBar}px`;
document.querySelector('.sticky-anc').style.minHeight = `${newRightBar}px`;
document.querySelector('.sticky-anc').style.maxHeight = `${newRightBar}px`;
