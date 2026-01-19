import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { title } from "process";

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
          { name: "Angular.js", icon: "server" },
          { name: "Data Science", icon: "brain" },
          { name: "Git", icon: "git" },
          { name: "Docker", icon: "docker" },
          { name: "PHP", icon: "code" },
          { name: "Swagger", icon: "swagger" },
          { name: "Django", icon: "django" },
          { name: "WordPress", icon: "wordpress" }
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
            title: "Application de tri de marchés",
            description: "Application web permettant de faire un tri des marchés disponibles sur le site des marchés publiques du Bénin(DRF, React.JS, Docker).",
            tags: ["Python", "DRF", "MySQL", "React"],
            github: "https://github.com",
            demo: "https://demo.com",
          },
          {
            title: "Mini Site E-commerce",
            description: "Mini site e-commerce d'ajouter des produits à un panier et de passer commande. (Django)",
            tags: ["Django", "Python", "SQLite"],
            github: "https://github.com/Cendrelle/Mini-site-E-commerce.git",
          },
          {
            title: "Application web (projet de fin de formation)",
            description: "Application web permettant de consulter le menu et de passer commandes dans un restaurant depuis un smartphone",
            tags: ["Python", "DRF", "PostgreSQL", "React"],
            github: "https://github.com/Cendrelle/mon-projet-app.git",
            demo: "https://demo.com",
          },
          {
            title: "API de blog",
            description: "Un blog permettant de créer, modifier, supprimer des artciles par catégorie.  (Django REST Framework).",
            tags: ["Python", "DRF", "PostgreSQL", "Raeact"],
            github: "https://github.com/Cendrelle/Django-log-api.git",
            demo: "https://demo.com",
          },
          {
            title: "Api D'authentification",
            description: "API d'authentification avec JWT et gestion des utilisateurs.",
            tags: ["Django", "DRF", "PostgreSQL"],
            github: "https://github.com/Cendrelle/jwt-auth-module.git",
          },
          {
            title: "Site web restaurant",
            description: "Un site web de restaurant avec navigation dans le menu et réservation.",
            tags: ["ReactJs", "Vite", "CSS"],
            github: "https://github.com/Cendrelle/gourmet-gateway.git",
            demo: "https://s-r-nia-your-gentle-guide.vercel.app/",
          }
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
        cta: "Envoyer",
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
          { name: "Angular.js", icon: "server" },
          { name: "Data Science", icon: "brain" },
          { name: "Git", icon: "git" },
          { name: "Docker", icon: "docker" },
          { name: "PHP", icon: "code" },
          { name: "Swagger", icon: "swagger" },
          { name: "Django", icon: "django" },
          { name: "WordPress", icon: "wordpress" }
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
            title: "Market Sorting Application",
            description: "A web application that filters and organizes public procurement data from the Benin government's marketplace website (DRF, React.js, Docker).",
            tags: ["Python", "DRF", "MySQL", "React"],
            github: "https://github.com",
            demo: "https://demo.com",
          },
          {
            title: "Mini E-commerce Website",
            description: "A mini e-commerce website allowing users to add products to a cart and place orders. (Django)",
            tags: ["Django", "Python", "SQLite"],
            github: "https://github.com/Cendrelle/Mini-site-E-commerce.git",
          },
          {
            title: "Web Application (Final Training Project)",
            description: "A web application that allows customers to browse a restaurant menu and place orders directly from their smartphone.",
            tags: ["Python", "DRF", "PostgreSQL", "React"],
            github: "https://github.com/Cendrelle/mon-projet-app.git",
            demo: "https://demo.com",
          },
          {
            title: "Blog API",
            description: "A blog API that allows users to create, update, and delete articles by category. (Django REST Framework)",
            tags: ["Python", "DRF", "PostgreSQL", "React"],
            github: "https://github.com/Cendrelle/Django-log-api.git",
            demo: "https://demo.com",
          },
          {
            title: "Authentication API",
            description: "An authentication API with JWT and full user management.",
            tags: ["Django", "DRF", "PostgreSQL"],
            github: "https://github.com/Cendrelle/jwt-auth-module.git",
          },
          {
            title: "Site web restaurant",
            description: "A restaurant website with menu browsing and reservation.",
            tags: ["ReactJs", "Vite", "CSS"],
            github: "https://github.com/Cendrelle/gourmet-gateway.git",
            demo: "https://s-r-nia-your-gentle-guide.vercel.app/",
          }
        ],
      },
      contact: {
        title: "Contact",
        description: "Feel free to contact me to discuss projects or collaboration opportunities.",
        email: "cendrellefaizoun@gmail.com",
        social: {
          linkedin: "https://www.linkedin.com/in/cendrelle-faizoun-065bb7290",
          github: "https://github.com/Cendrelle",
        },
        cta: "Send",
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
