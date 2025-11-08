import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [language, setLanguage] = useState<string>("fr");

  const content = {
    fr: {
      hero: {
        greeting: "Bonjour ! 👋",
        title: "Développeuse Web Backend & Data Science",
        subtitle: "Passionnée par la création d'applications robustes et l'analyse de données",
        cta: "Me contacter",
      },
      skills: {
        title: "Mes Compétences",
        skills: [
          { name: "Python", icon: "code" },
          { name: "SQL", icon: "database" },
          { name: "Node.js", icon: "server" },
          { name: "Data Science", icon: "brain" },
          { name: "Git", icon: "git" },
          { name: "Analytics", icon: "chart" },
        ],
      },
      about: {
        title: "À Propos de Moi",
        description: [
          "Développeuse web backend avec une passion particulière pour la data science et l'analyse de données. J'aime créer des solutions techniques robustes et performantes qui résolvent des problèmes réels.",
          "Mon expertise se concentre sur le développement d'APIs, la gestion de bases de données, et l'utilisation de l'apprentissage automatique pour extraire des insights pertinents des données.",
          "Toujours en quête d'apprentissage, je m'intéresse particulièrement aux nouvelles technologies et aux meilleures pratiques en développement logiciel et en intelligence artificielle.",
        ],
      },
      projects: {
        title: "Mes Projets",
        projects: [
          {
            title: "Plateforme d'Analyse de Données",
            description: "Application full-stack pour l'analyse et la visualisation de données en temps réel",
            tags: ["Python", "Flask", "PostgreSQL", "Machine Learning"],
            github: "https://github.com",
            demo: "https://demo.com",
          },
          {
            title: "API REST Performante",
            description: "Backend scalable avec authentification et gestion avancée des utilisateurs",
            tags: ["Node.js", "Express", "MongoDB", "JWT"],
            github: "https://github.com",
          },
          {
            title: "Modèle de Prédiction ML",
            description: "Système de prédiction utilisant des algorithmes d'apprentissage automatique",
            tags: ["Python", "Scikit-learn", "Pandas", "NumPy"],
            github: "https://github.com",
            demo: "https://demo.com",
          },
        ],
      },
      contact: {
        title: "Contact",
        description: "N'hésitez pas à me contacter pour discuter de projets ou d'opportunités de collaboration.",
        email: "contact@example.com",
        social: {
          linkedin: "https://linkedin.com",
          github: "https://github.com",
        },
        cta: "Envoyer un message",
      },
    },
    en: {
      hero: {
        greeting: "Hello! 👋",
        title: "Backend Web Developer & Data Science",
        subtitle: "Passionate about building robust applications and data analysis",
        cta: "Contact me",
      },
      skills: {
        title: "My Skills",
        skills: [
          { name: "Python", icon: "code" },
          { name: "SQL", icon: "database" },
          { name: "Node.js", icon: "server" },
          { name: "Data Science", icon: "brain" },
          { name: "Git", icon: "git" },
          { name: "Analytics", icon: "chart" },
        ],
      },
      about: {
        title: "About Me",
        description: [
          "Backend web developer with a special passion for data science and data analysis. I love creating robust and performant technical solutions that solve real-world problems.",
          "My expertise focuses on API development, database management, and using machine learning to extract relevant insights from data.",
          "Always seeking to learn, I'm particularly interested in new technologies and best practices in software development and artificial intelligence.",
        ],
      },
      projects: {
        title: "My Projects",
        projects: [
          {
            title: "Data Analysis Platform",
            description: "Full-stack application for real-time data analysis and visualization",
            tags: ["Python", "Flask", "PostgreSQL", "Machine Learning"],
            github: "https://github.com",
            demo: "https://demo.com",
          },
          {
            title: "High-Performance REST API",
            description: "Scalable backend with authentication and advanced user management",
            tags: ["Node.js", "Express", "MongoDB", "JWT"],
            github: "https://github.com",
          },
          {
            title: "ML Prediction Model",
            description: "Prediction system using machine learning algorithms",
            tags: ["Python", "Scikit-learn", "Pandas", "NumPy"],
            github: "https://github.com",
            demo: "https://demo.com",
          },
        ],
      },
      contact: {
        title: "Contact",
        description: "Feel free to contact me to discuss projects or collaboration opportunities.",
        email: "contact@example.com",
        social: {
          linkedin: "https://linkedin.com",
          github: "https://github.com",
        },
        cta: "Send a message",
      },
    },
  };

  const currentContent = content[language as keyof typeof content];

  return (
    <div className="min-h-screen">
      <Navigation language={language} setLanguage={setLanguage} />
      <HeroSection content={currentContent.hero} />
      <SkillsSection content={currentContent.skills} />
      <AboutSection content={currentContent.about} />
      <ProjectsSection content={currentContent.projects} />
      <ContactSection content={currentContent.contact} />
      
      <footer className="py-8 border-t border-border bg-card">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Portfolio. {language === "fr" ? "Tous droits réservés" : "All rights reserved"}.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
