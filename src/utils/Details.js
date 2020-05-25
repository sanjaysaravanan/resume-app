import ResumeApp1 from "../assets/images/resume-app-1.png";
import ResumeApp2 from "../assets/images/resume-app-2.png";
import ResumeApp3 from "../assets/images/resume-app-3.png";
import ResumeApp4 from "../assets/images/resume-app-4.png";
import TodoApp1 from "../assets/images/todo-app-2.png";
import TodoApp2 from "../assets/images/todo-app-1.png";
import TodoApp3 from "../assets/images/todo-app-3.png";

export const projects = [
  {
    title: "Website Resume",
    technologies: ["JavaScript", "Python"],
    description:
      "A simple responsive website resume displaying my professional life, " +
      "carrer objective, skillset, contact details and others " +
      "essentials about me.",
    images: [ResumeApp1, ResumeApp2, ResumeApp3, ResumeApp4]
  },
  {
    title: "ToDo Application",
    technologies: ["JavaScript", "Python"],
    description:
      "This is my first full-stack application working in both frontend " +
      "and backend. This appliation is inspired from a udemy course, I extended" +
      " that idea and built an application entirely with the best practices " +
      "in react-js, flask to my knowledge.",
    images: [TodoApp1, TodoApp2, TodoApp3]
  }
];

export const aboutMyself =
  "Experienced Associate Software Engineer with a demonstrated" +
  " history of working in the computer software industry. Skilled in Python (Programming Language)," +
  " Java, JavaScript, Docker, and some cloud technologies. Engineering professional with a Bachelor of" +
  " Engineering - B.E focused in Electronics and Communications Engineering. Passionate towards programming," +
  " practicing coding problems in platforms like hackerrank, etc. My ultimate goal is to do work what I like" +
  " to do and be productive in it.";

export const ResumeDetails = {
  skills: [
    "Flask - Intermediate",
    "MongoDB - Intermediate",
    "React-JS - Intermediate",
    "Spring MVC - Beginner",
    "Docker - Intermediate",
    "Git - Intermediate",
    "Jenkins(CI/CD) - Beginner",
    "AWS - Beginner",
    "GCP - Beginner"
  ],
  languages: [
    "Python - Intermediate",
    "JavaScript - Intermediate",
    "Java - Intermediate",
    "HTML/CSS - Intermediate"
  ],
  professionalInfo: [
    {
      descrption:
        "Candidate with B.E in Electronics and Communication seeks a reference " +
        "Software Developer Role. One year of experience in Backend, frontend, and some " +
        "DevOps, Infrastructure Development practices. A fast learner with the ability to adapt " +
        "to different technologies."
    }
  ],
  workExperience: [
    {
      subTitle: "Associate Software Engineer",
      where: "Altimetrik India Pvt.Ltd",
      year: "2019 - present",
      descrption:
        "Software Engineer(DevOps) role focused on building a product using" +
        " Python(Flask), JavaScript(React-JS), Docker, Jenkins and AWS."
    }
  ],
  education: [
    {
      subTitle: "Undergraduate - B.E.",
      where: "Anna University",
      year: "2015 - 2019",
      descrption:
        "Electronics and Communication Engineering in Rajalakshmi Engineering College"
    }
  ]
};

export const links = {
  facebook: "https://www.facebook.com/sanjaysaravanan21",
  linkedIn: "https://www.linkedin.com/in/sanjaysaravanan21",
  github: "https://github.com/sanjaysaravanan",
  twitter: "https://twitter.com/sanjaysaravan21",
  instagram: "https://www.instagram.com/sanjaysaravanan_21",
  hackerrank: "https://www.hackerrank.com/SanjaySaravanan"
};

export const contacts = {
  phoneOne: "9790889427",
  phoneTwo: "7092799119",
  mailId: "sanjaysaravanan38@gmail.com"
};
