const base = import.meta.env.BASE_URL;

export const myProjects = [
  {
    id: 1,
    title: "Enginuity",
    description:
      "A JIS College Of Engineering project presentation competition website...",
    subDescription: [
      "The primary objective of ENGINUITY 2025 is to foster innovation and technical excellence...",
      "The event aims to encourage problem-solving, creativity, and interdisciplinary thinking...",
    ],
    href: "https://sabbir45ali.github.io/Enginuity/",
    logo: "",
    image: `${base}assets/projects/enginity.jpg`,
    tags: [
      { id: 1, name: "HTML", path: `${base}assets/logos/html5.svg` },
      { id: 2, name: "CSS", path: `${base}assets/logos/css3.svg` },
      { id: 3, name: "JS", path: `${base}assets/logos/javascript.svg` },
      {
        id: 4,
        name: "TailwindCSS",
        path: `${base}assets/logos/tailwindcss.svg`,
      },
    ],
  },
  {
    id: 2,
    title: "Breast Cancer Detection(FrontEnd)",
    description:
      "A breast cancer detection web application that utilizes machine learning...",
    subDescription: [
      "Developed a user-friendly interface using Vite.js and React...",
      "Integrated Firebase for secure user authentication...",
      "Implemented a machine learning model...",
      "Designed responsive UI components...",
      "Ensured data security and privacy compliance...",
    ],
    href: "https://sabbir45ali.github.io/Breast-Cancer--React-/",
    logo: "",
    image: `${base}assets/projects/BCD.jpg`,
    tags: [
      { id: 1, name: "Vite.js", path: `${base}assets/logos/vitejs.svg` },
      { id: 2, name: "React", path: `${base}assets/logos/react.svg` },
      { id: 3, name: "Firebase", path: `${base}assets/logos/firebase.svg` },
      {
        id: 4,
        name: "TailwindCSS",
        path: `${base}assets/logos/tailwindcss.svg`,
      },
    ],
  },
  {
    id: 3,
    title: "Breast Cancer Detection(BackEnd)",
    description:
      "A robust backend for a breast cancer detection application...",
    subDescription: [
      "Developed a RESTful API using Django...",
      "Integrated machine learning models...",
      "Implemented user authentication...",
      "Ensured secure data handling...",
      "Optimized API performance...",
    ],
    href: "https://github.com/Sabbir45ali/Breast-Cancer-Detection-Backend",
    logo: "",
    image: `${base}assets/projects/BCD.jpg`,
    tags: [
      { id: 1, name: "Python", path: `${base}assets/logos/python.svg` },
      { id: 2, name: "Django", path: `${base}assets/logos/django.svg` },
      { id: 3, name: "Firebase", path: `${base}assets/logos/firebase.svg` },
      { id: 4, name: "Postman", path: `${base}assets/logos/postman.svg` },
    ],
  },
  {
    id: 4,
    title: "Addagram",
    description:
      "A social media application that allows users to share photos...",
    subDescription: [
      "Developed a full-stack social media application...",
      "Implemented user authentication...",
      "Designed a responsive UI...",
      "Integrated Git for version control...",
      "Deployed the app on Microsoft Azure...",
    ],
    href: "https://emrysilio1710.github.io/Social-Media-Application/",
    logo: "",
    image: `${base}assets/projects/addagram.jpg`,
    tags: [
      { id: 1, name: "React", path: `${base}assets/logos/react.svg` },
      {
        id: 2,
        name: "TailwindCSS",
        path: `${base}assets/logos/tailwindcss.svg`,
      },
      { id: 3, name: "Git", path: `${base}assets/logos/git.svg` },
      { id: 4, name: "GitHub", path: `${base}assets/logos/github-pink.png` },
    ],
  },
  {
    id: 5,
    title: "Nexa",
    description: "A humanoid Robot",
    subDescription: [
      "Nexa is a humanoid robot designed to assist with various tasks...",
      "Equipped with advanced sensors and AI capabilities...",
    ],
    href: "https://www.facebook.com/JISGroupEducationalInitiatives/posts/a-proud-day-for-jisce-and-every-parent-behind-our-achieverssabbir-ali-and-joy-si/1086098806880733/",
    logo: "",
    image: `${base}assets/projects/nexa.jpg`,
    tags: [
      { id: 1, name: "Python", path: `${base}assets/logos/python.svg` },
      { id: 2, name: "Raspberry Pi", path: `${base}assets/logos/pi.svg` },
      { id: 3, name: "Arduino", path: `${base}assets/logos/arduino.svg` },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: `${base}assets/socials/whatsApp.svg`,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/sabbir-45-sam/",
    icon: `${base}assets/socials/linkedIn.svg`,
  },
  {
    name: "Github",
    href: "https://github.com/Sabbir45ali",
    icon: `${base}assets/logos/github-pink.png`,
  },
];

export const experiences = [
  {
    title: "Secondary School",
    job: "Barrackpore Ramakrishna Vivekananda Misson",
    date: "2020",
    contents: [
      "Completed secondary education with a focus on science and mathematics, laying the foundation for future studies in engineering and technology.",
      "Participated in various extracurricular activities, enhancing teamwork and leadership skills.",
      "Percentage - 72%",
    ],
  },
  {
    title: "Higher Secondary School",
    job: "Sodepure Chandrachur Vidyapith",
    date: "2022",
    contents: [
      "Completed higher secondary education with a specialization in science, focusing on physics, chemistry, and mathematics.",
      "Engaged in various science fairs and competitions, fostering a strong interest in technology and engineering.",
      "Percentage - 69%",
    ],
  },
  {
    title: "B Tech in Electronics and Communication Engineering",
    job: "JIS College of Engineering",
    date: "2022-Present",
    contents: [
      "Currently pursuing a Bachelor of Technology in Electronics and Communication Engineering, with a focus on embedded systems and robotics and coding.",
      "Involved in various projects and research activities related to electronics, programming, and automation.",
      "GPA - 8.65",
    ],
  },
];

export const reviews = [
  {
    name: "Ruksana",
    username: "@ruksana",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Joy",
    username: "@joy",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Sayani",
    username: "@sayani",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "Rohit",
    username: "@rohit",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Rupam",
    username: "@rupma",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Taslim",
    username: "@taslim",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Anik",
    username: "@anik",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Priyabrata",
    username: "@priyabrata",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
  {
    name: "Jeet",
    username: "@jeet",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
  {
    name: "Tanmoy",
    username: "@tanmoy",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
  {
    name: "Mohona",
    username: "@mohona",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
  {
    name: "Anirban Ghosal",
    username: "@anirban",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
  {
    name: "Subratonu Saha",
    username: "@sub",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
