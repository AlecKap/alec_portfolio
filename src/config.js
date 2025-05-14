// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// import newLogo from "./images/yourFileName"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/clouds-light.jpg";
import HeroDark from "./images/night-sky-w-moon.jpg";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "alecKap";

// Navbar Logo image
export const navLogo = null;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "Prior to pursuing a career in software engineering, I spent nearly a decade working in emergency medicine and doing medical consultation for C-suite executives and A-list celebrities.\n" +
  "During that time, I also attended school and graduated with a degree in philosophy.\n" +
  "I knew I wanted to take the skills and experience I had developed studying philosophy and working in medicine and use them to pursue a life as a software engineer!\n" +
  "I ended up attending and graduating from the Turing School of Software and Design, an ACCET federally accredited seven month intensive software engineering program.\n" +
  "I value intellectual challenges, collaboration, and leveraging my analytic problem solving skills to deliver efficient technical solutions that are clean, maintainable, and impactful.\n" +
  "I thrive in high-stakes, team-oriented environments by fostering positive team dynamics through exceptional communication and leadership.\n" +
  "Please feel free to reach out to me at amkap12@gmail.com and let's discuss exciting new projects you are working on or how I can contribute to your company and community goals!";
/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5"
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3"
  },
  {
    id: 3,
    skill: <Icon icon="devicon-plain:ruby" className="display-4" />,
    name: "Ruby",
  },
  {
    id: 4,
    skill: <Icon icon="fontisto:rails" className="display-4" />,
    name: "Rails"
  },
  {
    id: 5,
    skill: <Icon icon="file-icons:rspec" className="display-4" />,
    name: "RSpec"
  },
  {
    id: 6,
    skill: <Icon icon="devicon-plain:java" className="display-4" />,
    name: "Java"
  },
  {
    id: 7,
    skill: <Icon icon="simple-icons:spring" className="display-4" />,
    name: "Spring"
  },
  {
    id: 8,
    skill: <Icon icon="akar-icons:python-fill" className="display-4" />,
    name: "Python"
  },
  {
    id: 9,
    skill: <Icon icon="akar-icons:django-fill" className="display-4" />,
    name: "Django"
  },
  {
    id: 10,
    skill: <Icon icon="file-icons:pytest" className="display-4" />,
    name: "Pytest"
  },
  {
    id: 11,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript"
  },
  {
    id: 12,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React"
  },
  {
    id: 13,
    skill: <Icon icon="tabler:sql" className="display-4" />,
    name: "SQL"
  },
  {
    id: 14,
    skill: <Icon icon="akar-icons:postgresql-fill" className="display-4" />,
    name: "PostgreSQL"
  },
  {
    id: 15,
    skill: <Icon icon="ri:bootstrap-fill" className="display-4" />,
    name: "BootStrap"
  },
  {
    id: 16,
    skill: <Icon icon="simple-icons:postman" className="display-4" />,
    name: "Postman"
  },
  {
    id: 17,
    skill: <Icon icon="simple-icons:sidekiq" className="display-4" />,
    name: "Sidekiq"
  },
  {
    id: 18,
    skill: <Icon icon="devicon-plain:redis" className="display-4" />,
    name: "Redis"
  },
  {
    id: 19,
    skill: <Icon icon="devicon-plain:oauth" className="display-4" />,
    name: "Oauth"
  },
  {
    id: 20,
    skill: <Icon icon="simple-icons:honeybadger" className="display-4" />,
    name: "Honeybadger"
  },
  {
    id: 21,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git"
  },
  {
    id: 22,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub"
  },
  {
    id: 23,
    skill: <Icon icon="material-icon-theme:circleci" className="display-4" />,
    name: "CirlceCI"
  },
  {
    id: 24,
    skill: <Icon icon="devicon-plain:heroku" className="display-4" />,
    name: "Heroku"
  }
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "https://docs.google.com/document/d/1i3oXCBCpATCmcWGt27TmaULgKzA7kTsPn107JYNdO5M/edit?tab=t.0";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["bookhaven", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/mdkgwvra";

// Footer icons theme (light or dark)
export const footerTheme = "dark";
