var body = document.querySelector('body');
body.style.margin = '0';
body.style.padding = '0';
body.style.boxSizing = 'border-box';

for (let i = 0; i < body.childNodes.length; i++) {
    if (body.childNodes[i].nodeType === 1) {
        body.childNodes[i];
    }
};

var div = body.firstElementChild;
div.firstElementChild.style.color = 'red';

let navbar = document.getElementById('navbar');
navbar.style.width = '100%';
navbar.style.height = '40px';
navbar.style.background = 'black';
navbar.style.display = 'flex';
navbar.style.justifyContent = 'space-around';
navbar.style.alignItems = 'center';
navbar.style.padding = '12px 0px 12px 0px';

let logo = document.getElementById('logo');
logo.style.fontSize = '24px';
logo.style.color = 'white';
logo.style.fontWeight = 'bold';

let items = document.getElementById('items');

for (let i = 0; i < items.children.length; i++) {
    items.children[i].style.color = 'white';
    items.children[i].style.fontSize = '17px';
    items.children[i].style.textDecoration = 'none';
    items.children[i].style.margin = '0px 6px'
};

var sidebar = document.querySelector('.sidebar');
var display = false;

sidebar.style.display = !display ? 'none' : 'block';

let btn = document.querySelector('button');
btn.style.fontSize = '24px';
btn.style.fontWeight = 'bold';

btn.addEventListener('click',() => {
    display = !display;
    sidebar.style.display = display ? 'none' : 'block';
});

var sideitems = document.getElementById('sideitems');
sideitems.style.display = 'flex';
sideitems.style.flexDirection = 'column';
sideitems.style.paddingLeft = '80px';
sideitems.style.height = '90.3vh';
sideitems.style.width = '100%';
sideitems.style.background = 'black'

for (let i = 0; i < sideitems.childNodes.length; i++) {
    if (sideitems.childNodes[i].nodeType === 1) {
        sideitems.childNodes[i].style.color = 'white';
        sideitems.childNodes[i].style.textDecoration='none';
        sideitems.childNodes[i].style.fontSize='17px';
        sideitems.childNodes[i].style.margin='0px 0px 6px 0px';
    }
}