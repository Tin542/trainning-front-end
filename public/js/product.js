const productImage = document.querySelectorAll(".product-images img"); //select all image thumbs
const productImageSlide = document.querySelector(".image-slider");//select image slider element

let activeImageSlide = 0; // default slider image position

productImage.forEach((item, i) => {
    item.addEventListener('click', () => { // add click event to each image thumb
        productImage[activeImageSlide].classList.remove('active'); //removing active classfrom current image
        item.classList.add('active'); //add active class to current image or click image thumb

        // console.log(item.src);
        // console.log(i);

        productImageSlide.style.backgroundImage = `url('${item.src}')`; // setting up image slider's background image
        
        activeImageSlide = i; // updating the image slider variable to track current thumb
    })
})

const sizeBtns = document.querySelectorAll('.size-radio-btn'); //selecting size button element
let checkBtn = 0; //current selected button

sizeBtns.forEach((item, i) => { //loping throught all btn
    item.addEventListener('click', () =>{
        sizeBtns[checkBtn].classList.remove('check'); //remove check class from current btn
        item.classList.add('check'); //add check class to checked button
        checkBtn = i; //update var
    })

})