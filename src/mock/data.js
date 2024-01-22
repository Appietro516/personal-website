import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "Anthony Pietrofeso's Website", // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'A collection of works by Anthony Pietrofeso', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm",
  name: 'Anthony Pietrofeso',
  subtitle: 'Software Engineer',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  paragraphOne:
    'Welcome to my personal website, I really enjoy all kinds of coding and data analysis work. Feel free to browse my latest projects, check out my resume, or contact me if you have any questions, comments, feedback.',
  paragraphTwo: ' ',
  paragraphThree: 'I look forward to hearing from you!',
  resume: 'https://drive.google.com/file/d/1mU8UP-n07u4xBK9B1m1il1XdpsiVjmUJ/view?usp=sharing',
  transcript: 'https://drive.google.com/file/d/103jPjF-yQOd77WbyPcpXv9bQRdqcNyzG/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'fantasy-stats.PNG',
    title: 'Fantasy Football Analysis',
    info: 'Predicting top fantasy football picks through simple linear regression on their past seasons.',
    info2: '',
    url: '',
    repo: 'https://github.com/Appietro516/fantasy-football-data-analysis', // if no repo, the button will not show up
    technologies: ['Python', 'Numpy', 'Pandas', 'Data Analysis'],
    startDate: 'Aug 2020',
    endDate: 'Oct 2020',
  },
  {
    id: nanoid(),
    img: 'azff.jpg',
    title: 'L&M AZFF Portal Redesign',
    info: 'Senior capstone project with the University of Arizona and local consulting firm to help redesign their web portal. The portal ingests text-based reports and processes them in real time to create data visualizations and display them. The source code and live site are not available for the public, but a demo showcase wix site with sample data can be previewed.',
    info2: '',
    url: 'https://jgriffith32.wixsite.com/lc-m498',
    repo: '', // if no repo, the button will not show up
    technologies: ['Javascript', 'Python', 'Flask', 'Bootstrap', 'Bokeh', 'Data Analysis'],
    startDate: 'Jan 2020',
    endDate: 'May 2020',
  },
  {
    id: nanoid(),
    img: 'thiswebsite.png',
    title: 'This Website',
    info: 'A personal website for displaying my portfolio, contact information, and work experiences.',
    info2: '',
    url: 'https://pietrofeso.dev',
    repo: 'https://github.com/Appietro516/personal-website', // if no repo, the button will not show up
    technologies: ['JavaScript', 'HTML', 'Gatsby', 'React', 'Bootstrap', 'GraphQL'],
    startDate: 'Apr 2020',
    endDate: 'Ongoing',
  },
  {
    id: nanoid(),
    img: 'bounce-back.png',
    title: 'Stock Bounce Back Calculator',
    info: 'Group project designed to allow a user to display and track stock portfolio purchases, profit/loss, and shares outstanding.',
    info2: '',
    url: '',
    repo: 'https://github.com/aznaznorange/337FinalBounceBackCalculator', // if no repo, the button will not show up
    technologies: ['JavaScript', 'HTML', 'Node', 'Express', 'Alpha Vantage API'],
    startDate: 'Nov 2018',
    endDate: 'Dec 2018',
  },
  {
    id: nanoid(),
    img: 'tower-rush.png',
    title: 'Tower Rush Alpha',
    info: 'Simple Tower Defense game created with C# and Unity with random path generation, procedurally increasing difficulty and wave strength, and multiple distinct classes of towers and enemies.',
    info2: '',
    url: '',
    repo: 'https://github.com/Appietro516/3D-Tower-Defense-Unity', // if no repo, the button will not show up
    technologies: ['C#', 'HLSL', 'Unity', 'Procedural Generation'],
    startDate: 'Oct 2018',
    endDate: 'Dec 2018',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'anthony@pietrofeso.dev',
  phone: '(520) 261-3491',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/anthony-pietrofeso/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Appietro516',
    },
    {
      id: nanoid(),
      name: 'stack-overflow',
      url: 'https://stackoverflow.com/users/13677454/appietro516?tab=profile',
    },
    {
      id: nanoid(),
      name: 'trello',
      url: 'https://trello.com/appietro516',
    },
    {
      id: nanoid(),
      name: 'hashnode',
      url: 'https://blog.pietrofeso.dev/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
