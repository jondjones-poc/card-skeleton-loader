const headerElement = document.getElementById('header');
const excerptElement = document.getElementById('excerpt');
const profileElement = document.getElementById('profile_img');
const dateElement = document.getElementById('date');
const nameElement = document.getElementById('name');
const titleElement = document.getElementById('title');

const animatedBg = document.querySelectorAll('.animated-bg')
const animatedBgText = document.querySelectorAll('.animated-bg-text')

const getData = () => {
    headerElement.innerHTML = "<img src='https://source.unsplash.com/random/150x150' alt='Image'>";
    excerptElement.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio et quasi doloremque nobis error temporibus corporis iusto, dicta culpa quo maxime minima, tempore recusandae repellat labore sunt adipisci nulla incidunt?";
    titleElement.innerHTML = "title";
    nameElement.innerHTML = "Jon Jones";
    dateElement.innerHTML = "May 16, 2021";
    profileElement.innerHTML = "<img src='https://source.unsplash.com/random/150x150' alt='Image' />"

    animatedBg.forEach(element => {
        element.classList.remove('animated-bg')
    });

    animatedBgText.forEach(element => {
        element.classList.remove('animated-bg-text')
    });
}

setTimeout(getData, 2000);

