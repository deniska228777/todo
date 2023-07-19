const display = document.getElementById('display');
const btn = document.getElementById('btnPlus');
const eshe = document.getElementById('eshe');
const todo = document.getElementById('todolist');   
const colorArray = ['#faebd7', '#009600', '#00ffff', '#7fffd4', '#deb887', '#008b8b', '#ff69b4', '#d3d3d3', 'bisque', 'silver'];
const spanTitle = document.getElementById('spanTitle');
let visota = 250;
const colors = () => {
    const index = Math.floor(Math.random()*10);
    const vibor = colorArray.slice(index, index+1);
    return vibor; 
};
class Note {
    constructor(text) {
        this.newDiv = document.createElement('div');
        this.newDiv.classList.add('newDiv');
        this.newDiv.textContent = text;
        this.newDiv.style.color = colors();
        this.crestik = document.createElement('input');
        this.crestik.type = 'button';
        this.crestik.classList.add('crestik');
        this.crestik.value = '×';
    };
    create() {
        if (display.value!=='') {
            eshe.style.display = 'flex';
            this.newDiv.append(this.crestik);
            if (eshe.childElementCount<6) {
                visota+=50;
                eshe.append(this.newDiv);
                this.crestik.onclick = () => {
                    this.newDiv.remove();
                    visota-=50;
                    todo.style.height = `${visota}px`
                    if (eshe.childElementCount>3) {display.style.marginBottom = '20px'};
                    if (eshe.childElementCount<3) {todo.style.paddingBottom = '50px'};
                    if (eshe.childElementCount==0) {todo.style.paddingBottom = '15px'};
                };
                if (eshe.childElementCount>3) {display.style.marginBottom = '20px'};
                if (eshe.childElementCount<3) {todo.style.paddingBottom = '50px'} else {todo.style.paddingBottom = '15px';};
            };
        } else {
            console.log('stoy');
        };
    };
};
btn.addEventListener('click', () => {const newDivchik = new Note(display.value); newDivchik.create(); display.value = ''; todo.style.height = `${visota}px`});
display.addEventListener('keydown', (event) => {if (event.keyCode===13) btn.click()});
document.addEventListener('readystatechange', () => spanTitle.style.color = colors());
