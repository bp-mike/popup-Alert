var parent = document.querySelector('.model-parent'),
    btn = document.querySelector('button'),
    X = document.querySelector('.X'),
    section = document.querySelector('section')
    // container = document.querySelector('.container')

// adding event listener [alternatively, we could use onclick in html]

btn.addEventListener('click', appear);
X.addEventListener('click' , disappearx);
parent.addEventListener('click' , disappear_parent);
function appear() {
    parent.style.display = 'block';
    section.style.filter = 'blur(10px)';
}

function disappearx(){
    parent.style.display = 'none';
    section.style.filter = 'blur(0px)';
}

function disappear_parent(e){
    if(e.target.className == 'model-parent'){
        parent.style.display = 'none';
        section.style.filter = 'blur(0px)';
    }
}