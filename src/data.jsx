// home
import home_picture from "./assets/home/emma-headshot.jpg";
import aboutme from "./assets/home/aboutme.jpg";
import resume from "./assets/home/Resume_LaurenPaffrath.pdf";

// professional experience
import starbucks from "./assets/experience/starbucks.jpg";
import starbucks2 from "./assets/experience/starbucks-2.jpg";

import waterutil from "./assets/experience/water-util.png";
import waterutil2 from "./assets/experience/water-util-2.jpg";

import palmsprings from  "./assets/experience/palmsprings.jpg";

import iceshack from "./assets/experience/iceshack.jpg";

// education
import solidworks from "./assets/education/solidworks.jpg";
import solidworks2 from "./assets/education/solidworks2.jpg";

import transportation from "./assets/education/transportation.jpg";
import transportation2 from "./assets/education/transportation2.jpg";

import geomatics from "./assets/education/geomatics.jpg";
import geomatics2 from "./assets/education/geomatics2.jpg";

import nai from "./assets/education/nai.jpg"

// projects
import submarine1 from "./assets/projects/submarine.jpg";
import submarine2 from "./assets/projects/submarine-2.jpg";

import bridge from "./assets/projects/bridge.jpg";
import bridge2 from "./assets/projects/bridge2.png";

export const data = {
  home: {
    title: "Emma Johnson",
    subtitle:
      "Motivated Civil Engineering student exploring interests across structural, environmental, and transportation engineering.",
    about: [
      "As a Civil Engineering student at the University of Central Florida, I am driven by a passion for creating sustainable infrastructure solutions that improve communities. My academic journey has been complemented by hands-on experience in water utilities management and leadership roles that have shaped my engineering perspective.",
      "Through my internship with West Palm Beach Water Utilities, I gained valuable experience reviewing engineering drawings, processing permits, and maintaining GIS databases for infrastructure projects. This real-world exposure to civil engineering practices has strengthened my understanding of the field ",
      "My diverse background in leadership roles, from managing teams at Starbucks to coordinating recreational programs, has developed my project management and communication skills. I'm eager to leverage my technical knowledge, leadership experience, and dedication to excellence to contribute meaningfully to civil engineering projects that make a positive impact on society.",
    ],
    pictures: [home_picture, aboutme],
    resume: resume,
    email: "emmaclare2005@gmail.com",
    linkedin: "https://www.linkedin.com/in/emma-clare-johnson",
  },
  education: {
    title: "Academics & Education",
    itemList: [
      {
        name: "NAI Intellectual Property Certification",
        path: "ip-certification",
        images: [nai],
        description:
          "Completed comprehensive training in America's intellectual property protection system in December 2023. Acquired in-depth knowledge of copyright law, trademark law, and intellectual property regulations. This certification demonstrates my understanding of legal frameworks essential for engineering innovation and technology development.",
      },
      {
        name: "Transportation and Highway Engineering",
        path: "transportation-engineering",
        images: [transportation, transportation2],
        description:
          "Specialized coursework in Introduction to Transportation Engineering and Highway Engineering, focusing on infrastructure design principles, traffic flow analysis, and transportation system planning. Studied geometric design standards, pavement engineering, and traffic control systems. Applied engineering principles to real-world transportation challenges, developing expertise in one of civil engineering's core specialty areas.",
      },
      {
        name: "Geomatics and Surveying Applications",
        path: "geomatics",
        images: [geomatics, geomatics2],
        description:
          "Completed comprehensive training in Geomatics, learning surveying techniques, GPS applications, and geographic information systems (GIS). Applied these skills during water utilities internship for infrastructure mapping and data verification. Developed proficiency in spatial data analysis and mapping technologies essential for modern civil engineering project planning and execution.",
      },
      {
        name: "Engineering Graphics and CAD Proficiency",
        path: "engineering-graphics",
        images: [solidworks2, solidworks],
        description:
          "Developed advanced proficiency in SolidWorks through Engineering Graphics coursework, creating detailed technical drawings and 3D models for engineering applications. Applied CAD skills to various academic projects, demonstrating ability to translate conceptual designs into precise technical documentation. This foundation in computer-aided design is essential for modern civil engineering practice and infrastructure development projects.",
      },
    ],
  },
  experience: {
    title: "Professional Experience",
    itemList: [
      {
        name: "Water Utilities Intern",
        tabname: "Water Utilities",
        images: [waterutil2, waterutil],
        description:
          "During my Water Utilities internship with West Palm Beach (May 2025 - August 2025), I reviewed engineering drawings and easement requests for accuracy and compliance with municipal standards. I prepared and filed legal documents to support permitting processes. My responsibilities included processing permit requests and coordinating with various agencies for project approvals. I verified manhole and valve data lists to ensure GIS database accuracy and added new construction projects into GIS systems to maintain up-to-date infrastructure records. This experience provided hands-on exposure to civil engineering practices in water infrastructure management.",
      },
      {
        name: "Shift Lead at Starbucks",
        tabname: "Starbucks",
        images: [starbucks, starbucks2],
        description:
          "As a Shift Lead at Starbucks (April 2021 - Present), I trained new employees on company regulations and expectations while maintaining high operational standards. I was recognized as Partner of the Quarter twice for outperforming expectations and setting exemplary standards. I efficiently managed operations under high-volume conditions, servicing up to 60 customers through indoor cafe and drive-thru while coordinating with team members. My responsibilities included closing procedures, inventory management, cash handling, safe deposits, and change orders. I provided leadership and coaching to baristas, offering real-time feedback to ensure adherence to company policies.",
      },
      {
        name: "Recreational Program Management",
        tabname: "Recreation Management",
        images: [palmsprings],
        description:
          "Coordinated and supervised recreational programs for children ages 4-11 at Palm Springs Parks and Recreation Center. Organized team sports activities, managed sports inventory, and maintained facility equipment records. Supervised new construction projects to prevent vandalism and track completion progress. Handled administrative duties including scheduling park reservations, organizing documentation, and updating public notices. This role developed project coordination and facility management skills applicable to civil engineering projects.",
      },
      {
        name: "Tropical Ice Shack",
        tabname: "Tropical Ice Shack",
        images: [iceshack],
        description:
          "Managed business operations at The Tropical Ice Shack, overseeing employee management, financial operations, and inventory control systems. Developed scheduling systems and coordinated vendor relationships for special events and occasions. Implemented quality control processes for product freshness and inventory management. These experiences developed project management, team coordination, and operational efficiency skills valuable for engineering project leadership.",
      },
    ],
  },
  projects: {
    title: "Projects & Leadership",
    itemList: [
      {
        name: "Arduino Robot Car and Bridge Integration",
        path: "arduino-project",
        images: [bridge, bridge2],
        description:
          "Developed a comprehensive autonomous vehicle system featuring an Arduino-controlled robot car with line-tracking capabilities and distance sensors. Programmed the system in C language to navigate complex paths and obstacles. Designed and constructed a supporting popsicle stick bridge engineered to precise specifications and load requirements. Successfully demonstrated the integrated system with the robot autonomously traversing the custom-built bridge using drawn line navigation.",
      },
      {
        name: "Award-Winning Submarine Design",
        path: "submarine-design",
        images: [submarine1, submarine2],
        description:
          "Led a multidisciplinary engineering team in the design and construction of a remote-controlled submarine for competitive demonstration. Utilized PVC pipes, pool noodles, propellers, microcontroller, and motors to create a fully functional underwater vehicle. Managed electrical systems integration, including motor connections, microcontroller programming, and waterproof enclosure design. Achieved 1st place among 8 competing teams for fastest and most efficient navigation through a challenging obstacle course.",
      },
    ],
  },
};
