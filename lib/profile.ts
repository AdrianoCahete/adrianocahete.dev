export const profile = {
  name: "Adriano Cahete",
  url: "https://adrianocahete.dev/",
  title: "Adriano Cahete | FrontEnd Developer, Design Technologist & DesignOps",
  description: "FrontEnd Developer, Design Technologist & DesignOps based in Rio de Janeiro, Brazil. Building digital products with Nuxt, Vue and React.",
  jobTitle: "FrontEnd Developer, Design Technologist & DesignOps",
  location: "Rio de Janeiro, Brazil",
  socialImage: "https://adrianocahete.dev/assets/social-card.png",
  knowsAbout: ["Frontend Development", "Nuxt", "Vue", "React", "UI/UX Design", "DesignOps", "GitOps"],
  profiles: [
    { title: "LinkedIn", href: "https://www.linkedin.com/in/AdrianoCahete/" },
    { title: "GitHub", href: "https://github.com/AdrianoCahete" },
    { title: "Behance", href: "https://www.behance.net/AdrianoCahete/" },
  ],
};

export const profileQuestions = [
  {
    id: "specialties",
    question: "What does Adriano Cahete specialize in?",
    answer: "Adriano specializes in frontend development, design technology and DesignOps. He connects design and development through interaction design, motion, UX/UI, developer experience and GitOps practices.",
  },
  {
    id: "technologies",
    question: "Which technologies does Adriano work with?",
    answer: "Adriano builds digital products with Nuxt, Vue and React, combining frontend development with interface design.",
  },
  {
    id: "location",
    question: "Where is Adriano based?",
    answer: `Adriano is based in ${profile.location}.`,
  },
  {
    id: "contact",
    question: "How can I contact Adriano?",
    answer: "Use Adriano's LinkedIn profile to get in touch. His public work is also available on GitHub and Behance.",
    link: profile.profiles[0],
  },
];

export const profileSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${profile.url}#person`,
      name: profile.name,
      url: profile.url,
      description: profile.description,
      jobTitle: profile.jobTitle,
      homeLocation: { "@type": "Place", name: profile.location },
      knowsAbout: profile.knowsAbout,
      sameAs: profile.profiles.map(({ href }) => href),
    },
    {
      "@type": "WebSite",
      "@id": `${profile.url}#website`,
      url: profile.url,
      name: profile.name,
      description: profile.description,
      inLanguage: "en",
      publisher: { "@id": `${profile.url}#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${profile.url}#profile`,
      url: profile.url,
      name: profile.title,
      description: profile.description,
      inLanguage: "en",
      isPartOf: { "@id": `${profile.url}#website` },
      mainEntity: { "@id": `${profile.url}#person` },
      author: { "@id": `${profile.url}#person` },
      hasPart: [
        { "@id": `${profile.url}#about` },
        { "@id": `${profile.url}#work` },
        { "@id": `${profile.url}#projects` },
        { "@id": `${profile.url}#contact` },
        { "@id": `${profile.url}#profile-questions` },
      ],
    },
    ...[
      { id: "about", name: "About" },
      { id: "work", name: "Work Experience" },
      { id: "projects", name: "Projects and Interfaces" },
      { id: "contact", name: "Contact" },
    ].map(({ id, name }) => ({
      "@type": "WebPageElement",
      "@id": `${profile.url}#${id}`,
      url: `${profile.url}#${id}`,
      name,
      about: { "@id": `${profile.url}#person` },
      isPartOf: { "@id": `${profile.url}#profile` },
    })),
    {
      "@type": "FAQPage",
      "@id": `${profile.url}#profile-questions`,
      url: `${profile.url}#profile-questions`,
      name: "Profile questions",
      inLanguage: "en",
      about: { "@id": `${profile.url}#person` },
      isPartOf: { "@id": `${profile.url}#profile` },
      mainEntity: profileQuestions.map(({ id, question, answer }) => ({
        "@type": "Question",
        "@id": `${profile.url}#question-${id}`,
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};
