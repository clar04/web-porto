import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, ExternalLink, Database, BarChart3, Brain, Code, User, Briefcase, MessageSquare } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  const projects = [
    {
      title: "Sistem Rekomendasi Properti Real-time untuk Kota Melbourne",
      description: "Dashboard interaktif untuk menganalisis tren penjualan dan perilaku pelanggan menggunakan Python dan Tableau.",
      tech: ["Python", "Apache Kafka", "Minio", "Dovker"],
      image: "./images/project1.png",
      link: "https://github.com/clar04/fp-bigdata"
    },   
    {
      title: "Klasifikasi Emosi",
      description: "Proyek ini berfokus pada klasifikasi emosi dari ulasan pelanggan menggunakan berbagai model deep learning. Tujuannya adalah untuk menganalisis data tekstual dan mengkategorikannya ke dalam keadaan emosi yang telah ditentukan, yang dapat membantu bisnis memahami sentimen pelanggan dan meningkatkan layanan.",
      tech: ["Python", "Pandas", "Tensorflow", "Sastrawi", "scikit-learn"],
      image: "./images/project2.png",
      link: "https://github.com/clar04/Emotion-Classification"
    },
    {
      title: "Biomedical Cancer Publication Classifier",
      description: "Proyek ini bertujuan untuk mengklasifikasikan publikasi teks biomedis ke dalam jenis kanker spesifik menggunakan teknik machine learning berbasis Apache Spark (PySpark) dan pustaka Python.",
      tech: ["Python", "PySpark", "pandas", "tensorflow"],
      image: "https://storage.googleapis.com/kaggle-datasets-images/2389764/4033428/79458858452843a140f9ca9a94deff5e/dataset-cover.jpg?t=2022-08-06-02-32-08",
      link: "https://github.com/clar04/cancer-classification"
    }
  ];

  const skills = [
    { name: "Python", icon: <Code className="w-6 h-6" />  },
    { name: "SQL", icon: <Database className="w-6 h-6" /> },
    { name: "Machine Learning", icon: <Brain className="w-6 h-6" /> },
    { name: "Excel", icon: <BarChart3 className="w-6 h-6" /> },
    { name: "Google Sheets", icon: <BarChart3 className="w-6 h-6" />},
    { name: "EDA", icon: <Brain className="w-6 h-6" /> },
    { name: "Apache Spark", icon: <Database className="w-6 h-6" />},
    { name: "Streamlit", icon: <Code className="w-6 h-6" />}
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Clara's Profile</h1>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'about', label: 'About Me', icon: <User className="w-4 h-4" /> },
                { id: 'projects', label: 'Projects', icon: <Briefcase className="w-4 h-4" /> },
                { id: 'contact', label: 'Contact', icon: <MessageSquare className="w-4 h-4" /> }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'bg-purple-600 text-white' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center pt-20">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Picture */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
                  <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center">
                  <img
          src="./images/foto-profil.jpg"
          alt="Profile"
          className="w-full h-full rounded-full object-cover transition-transform duration-300 hover:scale-110"
        />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-purple-600 rounded-full p-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <h2 className="text-5xl font-bold text-white mb-4">
                  Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Clara Valentina</span>
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Passionate about transforming data into actionable insights
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">About Me</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
  I’m a data enthusiast passionate about turning raw data into actionable insights. 
  Proficient in Python, SQL, and Excel, I work across the full data lifecycle—from cleaning 
  and analysis to visualization and reporting.I combine analytical thinking with practical tools to uncover trends, solve problems, and 
  tell compelling data stories. Currently, I’m focused on sharpening my skills in analysis, 
  automation, and visualization to support data-driven decisions across domains.
</p>

                
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="text-purple-400">{skill.icon}</div>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
            <p className="text-xl text-gray-300">Some of my recent data analysis and machine learning projects</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-xs border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.link}
                    className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
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

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            {/* <p className="text-xl text-gray-300">Let's discuss your data analysis needs</p> */}
          </div>

          <div className="flex justify-center">
            {/* Contact Info */}
            <div className="w-full max-w-2xl">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-8 text-center">Contact Information</h3>
                
                <div className="space-y-8">
                  <a 
                    href="mailto:clara.cooleyah@gmail.com"
                    className="flex items-center space-x-6 hover:bg-white/5 p-4 rounded-lg transition-all duration-300 group"
                  >
                    <div className="bg-purple-600 p-4 rounded-full group-hover:bg-purple-500 transition-colors">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Email</p>
                      <p className="text-white font-medium text-lg group-hover:text-purple-300 transition-colors">clara.cooleyah@gmail.com</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://wa.me/+62895410768812"
                    className="flex items-center space-x-6 hover:bg-white/5 p-4 rounded-lg transition-all duration-300 group"
                  >
                    <div className="bg-purple-600 p-4 rounded-full group-hover:bg-purple-500 transition-colors">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Phone</p>
                      <p className="text-white font-medium text-lg group-hover:text-purple-300 transition-colors">+62 8954-1076-8812</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://linkedin.com/in/claravalentina004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-6 hover:bg-white/5 p-4 rounded-lg transition-all duration-300 group"
                  >
                    <div className="bg-purple-600 p-4 rounded-full group-hover:bg-purple-500 transition-colors">
                      <Linkedin className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">LinkedIn</p>
                      <p className="text-white font-medium text-lg group-hover:text-purple-300 transition-colors">linkedin.com/in/claravalentina004</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://github.com/clar04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-6 hover:bg-white/5 p-4 rounded-lg transition-all duration-300 group"
                  >
                    <div className="bg-purple-600 p-4 rounded-full group-hover:bg-purple-500 transition-colors">
                      <Github className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">GitHub</p>
                      <p className="text-white font-medium text-lg group-hover:text-purple-300 transition-colors">github.com/clar04</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-lg border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Clara's Profile. Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;