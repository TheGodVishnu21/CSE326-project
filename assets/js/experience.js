AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Student Developer",
    cardImage: "assets/images/experience-page/githubsclub.png",
    place: "GitHub Students Club LPU",
    time: "(October, 2024 - Still in)",
    desp: "<li>Selected in this club through exam.</li><li>Working on their projects.</li>",
  },
  {
    title: "Bot Developer",
    cardImage: "assets/images/experience-page/discord.jpeg",
    place: "Discord",
    time: "(Mar, 22 - Still in)",
    desp:"<li>Worked on the bots using discord.py.</li><li>Designed a discord bot for a community.</li><li>Developed Moderation Bot, ChatBot, All in one Bot.</li>",
  }
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Discord ChatBot, All in One Bot",
    cardImage: "assets/images/experience-page/discordbot.jpeg",
    description:
      "Responsible for handling the projects discord public and private bot.",
  },
  {
    title: "CSE326-Project-2024",
    cardImage: "assets/images/experience-page/CSE326.png",
    description:
      "Responsible for handling open source for the project Awesome Developer Portfolio.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Hackathon Section


const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Not Participated",
    subtitle: "None",
    image: "assets/images/experience-page/np.png",
    desp: "Waiting for hackathons to participate.",
  },
  {
    title: "Not participated ",
    subtitle: "None",
    image: "assets/images/experience-page/np.png",
    desp: "Waiting for hackathons to participate.",
  },
  {
    title: "Not participated",
    subtitle: "None",
    image: "assets/images/experience-page/np.png",
    desp: "Waiting for hackathons to participate.",
  },
  {
    title: "Not participated",
    subtitle: "None",
    image: "assets/images/experience-page/np.png",
    desp: "Waiting for hackathons to participate.",
  },
  {
    title: "Not participated",
    subtitle: "None",
    image: "assets/images/experience-page/np.png",
    desp: "Waiting for hackathons to participate.",
  },
  {
    title: "Not participated",
    subtitle: "None",
    image: "assets/images/experience-page/np.png",
    desp: "Waiting for hackathons to participate.",
  },
  {
    title: "Not participated",
    subtitle: "None",
    image: "assets/images/experience-page/np.png",
    desp: "Waiting for hackathons to participate.",
  }
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp}) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
