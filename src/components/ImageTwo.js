import { Parallax } from 'react-parallax';
import SelfImage from '../img/SelfImage.jpg'

function reveal() {
    let reveals = document.querySelectorAll(".reveal")
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
      }
}

window.addEventListener("scroll", reveal)

const ImageTwo = () => (
    <Parallax className='image'strength={800}>
        <div className='contenttwo'>
            <img className="SelfImage reveal" src={SelfImage}></img>
            <div className='Container'>
            </div>
            <div className='AboutText reveal'>
                <p>Hello, my name is Lucas. I am 27 years old, a husband, a father and starting my career in the tech field. Two careers over 
                the last 9 years have given me a multitude of skills that will help with me moving into the tech field. I started out of high 
                school going to college and working as a server. I met my wife during this time! The time I spent in these first two years of 
                the service industry I learned many difficult lessons. The main skills I gained from these lessons were accountability, 
                humbleness, and time management. I worked in the service industry for about two years before moving into the construction industry.</p><br></br>
                <p>The transition into the construction industy from the service industry was a difficult one but, I was determined nevertheless. 
                I wanted to be the best in the field I was going into (Concrete Pump Operations), the start of this journey literally started at the 
                bottom of the ladder. The first position I held was a shop hand. The ability to climb the ladder required me to get a CDL license. 
                Upon completion of my CDL I worked as a line pump operator for a number of months before finally moving into Concrete Boom Pumps. 
                The next three years I refined my skills as an operator and managing the work environment of the areas I was subcontracted to. These
                skills included leadership, multi-tasking, communication and critical thinking. My time in this career came to an end as the long hours
                were starting to wear on my family.</p><br></br> <p>College was calling my name again and I took up my education once again. I completed two years of undergrad
                nursing courses before wanting to look into another educational option in a different career field. Fullstack Academy came up during my
                research, after reading more about the educational program they had to offer I knew I had to jump right in. The passion I have come to find
                for coding is amazing. The constant need to learn more, new improved ways, and working with others to develop the best engineering solutions
                possible has me hooked! I am currently on the hunt for the first company I will get the pleasure of working with and starting my career in
                the tech field.</p>
            </div>
        </div>
    </Parallax>
);

export default ImageTwo