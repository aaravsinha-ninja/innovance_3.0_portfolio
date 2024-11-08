import {User} from "../types/types";

export const userData: User = {
    name: "Alice",
    email: "alice@example.com",
};

export const footer = {
    copyRightText: "all rights reserved",
    email: userData.email,
};

export const navlinks = [
    {
        name: "WORKS",
        link: "LatestProjects",
        elementId: "LatestProjects",
    },
    {
        name: "CONTACTS",
        link: "CallAlice",
        elementId: "CallAlice",
    },
];

export const navbar_details = {
    logo: "https://static.vecteezy.com/system/resources/previews/006/816/978/non_2x/code-icon-coding-symbol-coding-programming-sign-free-vector.jpg",
    name: userData.name,
};

export const socials = [
    {
        link: "https://dribbble.com/",
        icon: "https://img.icons8.com/?size=100&id=Wkmw3VcFPr8T&format=png&color=000000",
        name: "dribbble",
    },
    {
        link: "https://github.com/",
        icon: "https://img.icons8.com/?size=100&id=62856&format=png&color=000000",
        name: "github",
    },
    {
        link: "https://facebook.com/",
        icon: "https://img.icons8.com/?size=100&id=118497&format=png&color=000000",
        name: "facebook",
    },
    {
        link: "https://twitter.com/",
        icon: "https://img.icons8.com/?size=100&id=13963&format=png&color=000000",
        name: "twitter",
    },
];

export const education = [
    {
        year: "2014",
        title: "Bachelor Degree of Design",
        institution: "RMIT University",
    },
    {
        title: "UI/UX Design Certificate",
        institution: "University of Houston, US",
    },
];

export const experience = [
    {
        period: "2015 - 2019",
        items: [
            {title: "Design Internship", institution: "CMC Corporation, UK"},
            {title: "Graphic Designer", institution: "Tripadvisor Ltd, UK"},
            {
                title: "Leader Graphic Design",
                institution: "New Centery Media JSC, UK",
            },
            {title: "Web Designer", institution: "Freelancer"},
            {title: "Web Designer/ Author", institution: "Envato Market"},
        ],
    },
    {
        period: "2020 - PRESENT",
        items: [
            {title: "Product Design Management", institution: "Dribbble LLC, US"},
            {title: "Art Director / Co-Founder", institution: "Spotify"},
            {title: "Founder", institution: "iDesign Magazine"},
            {
                title: "Author of The Book",
                institution: "Work for Money, Design for Love",
            },
        ],
    },
];

export const skills = [
    {
        name: "Figma",
        proficiency: "90%",
        image: "/images/MyAdvantageLogos/figma.png",
    },
    {
        name: "Sketch",
        proficiency: "95%",
        image: "/images/MyAdvantageLogos/sketch.png",
    },
    {
        name: "Adobe XD",
        proficiency: "82%",
        image: "/images/MyAdvantageLogos/adobe.png",
    },
    {
        name: "Javascript",
        proficiency: "93%",
        image: "/images/MyAdvantageLogos/javascript.png",
    },
    {
        name: "Bootstrap",
        proficiency: "76%",
        image: "/images/MyAdvantageLogos/bootstrap.png",
    },
    {
        name: "HTML5/CSS",
        proficiency: "88%",
        image: "/images/MyAdvantageLogos/html.png",
    },
];

export const latestProjects = [
    {
        href: "https://www.nationalgeographic.com/",
        imgSrc: "images/LatestProjectCarousel/carousel-natgeo.jpg",
        imgAlt: "Image1",
        overlayText: "Explore the world with Nat Geo.",
        description: "Nat Geo",
    },
    {
        href: "https://www.cesarsociety.com/",
        imgSrc: "images/LatestProjectCarousel/carousel-cesarsociety.jpg",
        imgAlt: "Image2",
        overlayText: "Join the Cesar Society community.",
        description: "Cesar Society",
    },
    {
        href: "https://www.starwars.com/",
        imgSrc: "images/LatestProjectCarousel/carousel-mandalorian.jpg",
        imgAlt: "Image3",
        overlayText: "Experience the adventures of The Mandalorian.",
        description: "The Mandalorian",
    },
    {
        href: "https://www.fitly.com/",
        imgSrc: "images/LatestProjectCarousel/carousel-fitly.jpg",
        imgAlt: "Image4",
        overlayText: "Stay fit and healthy with Fitly.",
        description: "Fitly",
    },
    {
        href: "https://www.adidas.co.in/",
        imgSrc: "images/LatestProjectCarousel/carousel-adidas.jpg",
        imgAlt: "Image5",
        overlayText: "Discover the latest from Adidas.",
        description: "Adidas",
    },
    {
        href: "https://www.cesar.com/",
        imgSrc: "images/LatestProjectCarousel/carousel-cesar.jpg",
        imgAlt: "Image6",
        overlayText: "Explore the world of Cesar.",
        description: "Cesar",
    },
];

export const testimonials = [
    {
        quote: "Bruno was a real pleasure to work with and we look forward to working with him again. He's definitely the kind of designer you can trust with a project from start to finish. Great services & Recommended!",
        author: "Jurgen Kloop",
        position: "Product Management",
        company: "Google Inc",
    },
    {
        quote: "Alice consistently exceeded expectations. Her attention to detail and creative solutions made the project seamless. Highly recommended!",
        author: "Rachel Green",
        position: "Head of Marketing",
        company: "Airbnb",
    },
    {
        quote: "Working with Liam was a fantastic experience. He took the time to understand our needs and delivered beyond our expectations. Highly recommended!",
        author: "Jim Halpert",
        position: "Sales Manager",
        company: "Paper Co",
    },
    {
        quote: "Jordan's technical skills are matched by his professionalism. He's detail-oriented and always delivers on time. A true asset to any project!",
        author: "Pam Beesly",
        position: "Project Coordinator",
        company: "Apple Inc.",
    },
    {
        quote: "Matthew's reliability and talent made our collaboration seamless. His attention to detail is unparalleled. We look forward to future projects!",
        author: "Phoebe Buffay",
        position: "Human Resources",
        company: "Spotify",
    },
];
