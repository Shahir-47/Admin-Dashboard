// Get the sidebar element
const sidebar = document.querySelector('.sidebar');
// Get the computed width of the sidebar
const sidebarWidth = window.getComputedStyle(sidebar).getPropertyValue('width');
// Remove the units from the width
const sidebarWidthWithoutUnits = parseFloat(sidebarWidth);
// Add 1 rem to the sidebar width
const newWidth = sidebarWidthWithoutUnits; // Assuming 1 rem is equivalent to 16 pixels
// Apply the new width as the padding-left for the main content
document.querySelector('.main').style.paddingLeft = `${newWidth}px`;


// Get the sidebar element
const header = document.querySelector('.header-1');
// Get the computed width of the sidebar
const headerHeight = window.getComputedStyle(header).getPropertyValue('height');
// Remove the units from the width
const headerHeightWithoutUnits = parseFloat(headerHeight);
// Add 1 rem to the sidebar width
const newHeight = headerHeightWithoutUnits + 16; // Assuming 1 rem is equivalent to 16 pixels
// Apply the new width as the padding-left for the main content
document.querySelector('.main').style.paddingTop = `${newHeight}px`;



const sidebarRight = window.getComputedStyle(sidebar).getPropertyValue('right');
console.log(sidebarRight);
const sidebarRightWithoutUnits = parseFloat(sidebarRight);
const headerWidth = window.innerWidth - sidebarRightWithoutUnits;// Assuming 1 rem is equivalent to 16 pixels
header.style.left = `${headerWidth}px`;



// const project = document.querySelector('.projects');
// // Get the computed width of the sidebar
// const projectWidth = window.getComputedStyle(project).getPropertyValue('width');
// // Remove the units from the width
// const projectWidthWithoutUnits = parseFloat(projectWidth);
// // Add 1 rem to the sidebar width
// const ancLeft = projectWidthWithoutUnits + headerWidth + 16; // Assuming 1 rem is equivalent to 16 pixels
// // Apply the new width as the padding-left for the main content
// document.querySelector('.anc-tren').style.left = `${ancLeft}px`;