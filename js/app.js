const vid = document.querySelectorAll('video')[0];
const span = document.querySelectorAll('span');

/*-----------------------------------------------------------------
event listener for highlighting the text while video plays
-----------------------------------------------------------------*/

vid.addEventListener('timeupdate', () => {
    for (let i = 0; i < span.length; i+= 1){
    let spanStart = span[i].dataset.start;
    let spanEnd = span[i].dataset.end;
    let currentTime = vid.currentTime;
        if (currentTime >= spanStart && currentTime <= spanEnd){
            span[i].classList.add('highlight');
        }
        else{
            span[i].classList.remove('highlight');
        }
    }    
});
/*-----------------------------------------------------------------
event listener for clicking the text and video plays accordingly
-----------------------------------------------------------------*/

for (let i = 0; i < span.length; i += 1){
span[i].addEventListener('click', () => {
    vid.currentTime = span[i].dataset.start;
    vid.play();
});
}

