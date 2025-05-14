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
  "I enjoy learning about technology and helping others use it to improve their lives and be more productive. I built this site with React, React Bootstrap, Redux, and the GitHub REST API.";

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
