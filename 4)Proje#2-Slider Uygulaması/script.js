var swiperss = [
    {
        name : 'slider1',
        image : 'img/slider1.jpg',
        link : 'https://www.youtube.com/watch?v=iQneGofNJuo&list=RDMMiQneGofNJuo&index=1'

    },
    {
        name : 'slider2',
        image : 'img/slider2.jpg',
        link : 'https://www.youtube.com/watch?v=hb2SqmMO3ZA&list=RDMMiQneGofNJuo&index=2'

    },
    {
        name : 'slider3',
        image : 'img/slider3.jpg',
        link : 'https://www.youtube.com/watch?v=8hCnFC6_4B0&list=RDMMiQneGofNJuo&index=3'

    },
    {
        name : 'slider4',
        image : 'img/slider4.jpg',
        link : 'https://www.youtube.com/watch?v=Al4zrxQaWhY&list=RDMMiQneGofNJuo&index=4'

    }
]

var index = 0;
var slaytCount = swiperss.length;

//click eventi ekledik.
document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index--;
    showslide(index);
    
});
document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    index++;
    showslide(index);
   
});


function showslide(i){

    index = i;

    if(i < 0){
        index = slaytCount - 1;
    }
    if(i >= slaytCount){
        index = 0;
    }

    document.querySelector('.card-title').textContent = swiperss[index].name;
    document.querySelector('.card-img-top').setAttribute('src',swiperss[index].image);
    document.querySelector('card-link').setAttribute('href',swiperss[index].link);
}

showslide(index);