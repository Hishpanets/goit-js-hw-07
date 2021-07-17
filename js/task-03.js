const images = [
    {
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const listImages = document.querySelector('ul#gallery');
let element = "";
images.forEach(function () {
    element += "<li><img></li>"
    console.log(element)
})
listImages.insertAdjacentHTML("afterbegin", element)

const gallery = listImages.querySelectorAll('li');
for (let i = 0; i < gallery.length; i++) {
    const img = gallery[i].querySelector('img');
    img.setAttribute("src", images[i].url)
    img.setAttribute("alt", images[i].alt)
    img.style.borderRadius = '30px';
    img.style.width = "95%";
    listImages.style.display = "grid";
    listImages.style.gridTemplateColumns = '1fr 1fr 1fr';
    listImages.style.justifyContent = "center";
}
