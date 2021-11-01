let slides = document.getElementById('slides');
let childrenDivLength = slides.children.length;
let index = 0;
let array;

slides.children[index].classList.add('shown');

function slideNext(){

    index++;

    if( index === childrenDivLength){

        slides.children[index-1].classList.remove('shown');
        index = 0;
        slides.children[index].classList.add('shown');
        return;
    }

    if( index <= (childrenDivLength-1) && index > 0){

        slides.children[index-1].classList.remove('shown');
        slides.children[index].classList.add('shown');

    }

}


function slidePrevious(){

    if(index < 1){
        index = childrenDivLength-1;
        // console.log(index);
        slides.children[childrenDivLength-1].classList.add('shown');
        slides.children[0].classList.remove('shown');
        return;
    }

    if( index >= 1){
        index--;
        // console.log(index);
        slides.children[index].classList.add('shown');
        slides.children[index+1].classList.remove('shown');
    }
    
}
