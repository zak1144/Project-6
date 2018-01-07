const vid = document.querySelectorAll('video')[0];
const span = document.querySelectorAll('span');



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