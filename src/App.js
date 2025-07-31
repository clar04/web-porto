import React, { useState } from "react";

import { SiReact, SiNextdotjs, SiTailwindcss } from "react-icons/si";

import {
  BarChart3,
  Brain,
  Briefcase,
  Code,
  Database,
  ExternalLink,
  FileText,
  Github,
  Globe,
  Linkedin,
  Mail,
  MessageSquare,
  Phone,
  Terminal,
  User,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("about");

  const dataProjects = [
    {
      title: "Sistem Rekomendasi Properti Real-time untuk Kota Melbourne",
      description:
        "Dikembangkan sistem rekomendasi properti real-time untuk Melbourne. Fitur termasuk dashboard interaktif menggunakan Python untuk menganalisis tren penjualan dan perilaku pelanggan. Integrasi Kafka dan MinIO untuk streaming dan penyimpanan data, semua dideploy via Docker.",
      tech: ["Python", "Apache Kafka", "Minio", "Docker"],
      image: "./images/project1.png",
      link: "https://github.com/clar04/fp-bigdata",
    },
    {
      title: "Klasifikasi Emosi Ulasan Pelanggan",
      description:
        "Mengimplementasikan klasifikasi emosi untuk ulasan pelanggan menggunakan berbagai model deep learning. Tujuan proyek ini adalah memproses dan menganalisis data tekstual untuk mengkategorikan emosi, membantu pemahaman sentimen pelanggan.",
      tech: ["Python", "Pandas", "Tensorflow", "Sastrawi", "scikit-learn"],
      image: "./images/project2.png",
      link: "https://github.com/clar04/Emotion-Classification",
    },
    {
      title: "Biomedical Cancer Publication Classifier",
      description:
        "Membangun pipeline machine learning untuk mengklasifikasikan publikasi teks biomedis ke dalam jenis kanker spesifik. Proyek ini memanfaatkan Apache Spark (PySpark) untuk pemrosesan data skala besar serta teknik NLP dan model TensorFlow.",
      tech: ["Python", "PySpark", "pandas", "tensorflow"],
      image:
        "https://storage.googleapis.com/kaggle-datasets-images/2389764/4033428/79458858452843a140f9ca9a94deff5e/dataset-cover.jpg?t=2022-08-06-02-32-08",
      link: "https://github.com/clar04/cancer-classification",
    },
  ];

  const webProjects = [
    {
      title: "Portfolio Website (This Site)",
      description:
        "My personal portfolio website, designed and built from scratch using React and Tailwind CSS. Showcases my projects and skills with a clean, modern, and responsive design.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      image: "./images/web-porto.png",
      link: "https://porto-clara.vercel.app/",
    },
    {
      title: "Dashboard Admin",
      description:
        "A React-based web application for employee management, featuring user authentication, profile editing, and a responsive design with theme switching. It includes features like user authentication, employee CRUD operations, search, pagination, profile editing, and dark/light theme switching.",
      tech: [
        "React",
        "React Router DOM",
        "Tailwind CSS",
        "Vite",
        "PostCSS",
        "Autoprefixer",
        "ESLint",
      ],
      image: "./images/web-porto2.png",
      link: "https://github.com/clar04/test-aksa",
    },
    {
      "title": "Berita Kini - News Aggregator",
      "description": "A React-based news aggregator that fetches and displays news from various Indonesian sources. It allows users to filter news by source and category, view detailed articles, and see recommendations for further reading.",
      "tech": [
        "React",
        "React Router DOM",
        "Tailwind CSS",
        "Axios",
        "PostCSS",
        "Autoprefixer",
        "ESLint"
      ],
      "image": "./images/web-porto3.png", 
      "link": "https://github.com/clar04/test-seal"
    }];

  const dataSkills = [
    { name: "Apache Spark", icon: <Database className="w-6 h-6" /> },
    { name: "EDA", icon: <Brain className="w-6 h-6" /> },
    { name: "Excel", icon: <BarChart3 className="w-6 h-6" /> },
    { name: "Google Sheets", icon: <BarChart3 className="w-6 h-6" /> },
    { name: "Machine Learning", icon: <Brain className="w-6 h-6" /> },
    { name: "Python", icon: <Code className="w-6 h-6" /> },
    { name: "SQL", icon: <Database className="w-6 h-6" /> },
    { name: "Streamlit", icon: <Terminal className="w-6 h-6" /> },
  ];

  const webSkills = [
    { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6" /> },
    { name: "React", icon: <SiReact className="w-6 h-6" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6" /> },
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-sans text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-md z-50 border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-white tracking-wide">
            Clara's Profile
          </h1>
          <div className="hidden md:flex space-x-6">
            {[
              {
                id: "about",
                label: "About Me",
                icon: <User className="w-5 h-5" />,
              },
              {
                id: "web-projects",
                label: "Web Projects",
                icon: <Globe className="w-5 h-5" />,
              },
              {
                id: "data-projects",
                label: "Data Projects",
                icon: <Database className="w-5 h-5" />,
              },
              {
                id: "cv",
                label: "My CV",
                icon: <FileText className="w-5 h-5" />,
              },
              {
                id: "contact",
                label: "Contact",
                icon: <MessageSquare className="w-5 h-5" />,
              },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 px-5 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${activeSection === item.id
                    ? "bg-purple-700 text-white shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-white/15"
                  }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero/About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-6xl font-extrabold text-white mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Clara Valentina
            </span>
          </h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            A passionate{" "}
            <span className="font-semibold text-purple-300">
              Data Enthusiast
            </span>{" "}
            and aspiring{" "}
            <span className="font-semibold text-pink-300">Web Developer</span>,
            dedicated to transforming ideas into impactful digital solutions.
          </p>

          {/* Profile Picture */}
          <div className="flex justify-center mb-16">
            <div className="relative p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-2xl">
              <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-slate-900">
                <img
                  src="./images/foto-profil.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full p-4 shadow-xl">
                <BarChart3 className="w-8 h-8 text-white animate-bounce" />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/15 shadow-xl">
            <h3 className="text-3xl font-bold text-white mb-6">About Me</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I'm a data enthusiast passionate about turning raw data into
              actionable insights, and I also find great joy in crafting
              engaging web experiences. Proficient in Python, SQL, and Excel, I
              navigate the full data lifecycle from cleaning and analysis to
              visualization and reporting. Simultaneously, I'm honing my skills
              in web development using modern frameworks like React and Next.js,
              building interactive and responsive applications. My goal is to
              combine analytical thinking with practical development to solve
              problems and create compelling digital stories, whether through
              data-driven dashboards or user-centric web applications.
            </p>

            {/* Data Skills */}
            <div className="mb-10">
              <h4 className="text-2xl font-bold text-white mb-4">
                Data Skills
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {dataSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white/10 rounded-xl p-5 border border-white/10 flex flex-col items-center justify-center space-y-3 hover:bg-purple-800/20 transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    <div className="text-purple-400">{skill.icon}</div>
                    <span className="text-white font-semibold text-base">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Web Skills */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-4">
                Web Dev Skills
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {webSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white/10 rounded-xl p-5 border border-white/10 flex flex-col items-center justify-center space-y-3 hover:bg-purple-800/20 transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    <div className="text-purple-400">{skill.icon}</div>
                    <span className="text-white font-semibold text-base">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Development Projects Section */}
      <section id="web-projects" className="py-20 bg-black/30 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Web Development Projects
            </h2>
            <p className="text-xl text-gray-300">
              Showcasing my work in building interactive and responsive web
              applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {webProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/15 hover:border-purple-500 transition-all duration-500 hover:shadow-2xl hover:translate-y-[-5px]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-5 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-1 bg-blue-600/30 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Projects Section */}
      <section id="data-projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Data Projects
            </h2>
            <p className="text-xl text-gray-300">
              Dive into my data analysis and machine learning endeavors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {dataProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/15 hover:border-pink-500 transition-all duration-500 hover:shadow-2xl hover:translate-y-[-5px]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-5 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-1 bg-pink-600/30 text-pink-300 rounded-full text-xs font-medium border border-pink-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors font-medium"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="py-20 bg-black/30 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            My Curriculum Vitae
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Access my professional CV for detailed qualifications and
            experience.
          </p>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/15 shadow-xl flex flex-col items-center">
            <h3 className="text-3xl font-semibold text-white mb-5">
              Download My CV
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Click the button below to view or download my latest curriculum
              vitae in PDF format. This document provides a comprehensive
              overview of my education, technical skills, academic projects, and
              leadership roles.
            </p>
            <a
              href="./cv/CV_317.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-purple-700 text-white font-bold rounded-full shadow-lg hover:bg-purple-800 transition-all duration-300 transform hover:scale-105"
            >
              <FileText className="w-6 h-6" />
              <span>View/Download CV</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-16">Get In Touch</h2>

          <div className="w-full bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/15 shadow-xl">
            <h3 className="text-3xl font-semibold text-white mb-10 text-center">
              Contact Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a
                href="mailto:claravalentina004@gmail.com"
                className="flex items-center space-x-6 bg-white/10 p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:bg-purple-800/20 group shadow-md"
              >
                <div className="bg-purple-600 p-4 rounded-full group-hover:bg-purple-500 transition-colors shadow-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-gray-300 text-sm">Email</p>
                  <p className="text-white font-medium text-lg break-words group-hover:text-purple-300 transition-colors">
                    claravalentina004@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/+62895410768812"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-6 bg-white/10 p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:bg-purple-800/20 group shadow-md"
              >
                <div className="bg-purple-600 p-4 rounded-full group-hover:bg-purple-500 transition-colors shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-gray-300 text-sm">Phone</p>
                  <p className="text-white font-medium text-lg group-hover:text-purple-300 transition-colors">
                    +62 8954-1076-8812
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/claravalentina004"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-6 bg-white/10 p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:bg-purple-800/20 group shadow-md"
              >
                <div className="bg-purple-600 p-4 rounded-full group-hover:bg-purple-500 transition-colors shadow-lg">
                  <Linkedin className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-gray-300 text-sm">LinkedIn</p>
                  <p className="text-white font-medium text-lg break-words group-hover:text-purple-300 transition-colors">
                    linkedin.com/in/claravalentina004
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/clar04"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-6 bg-white/10 p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:bg-purple-800/20 group shadow-md"
              >
                <div className="bg-purple-600 p-4 rounded-full group-hover:bg-purple-500 transition-colors shadow-lg">
                  <Github className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-gray-300 text-sm">GitHub</p>
                  <p className="text-white font-medium text-lg group-hover:text-purple-300 transition-colors">
                    github.com/clar04
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-md border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <p className="mb-2">© 2025 Clara's Profile. All rights reserved.</p>
          <p>
            Built with <span className="text-purple-400">React</span> &{" "}
            <span className="text-blue-400">Tailwind CSS</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
