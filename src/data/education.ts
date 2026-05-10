export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2018—2023",
    institution: "Uppsala University",
    degree: "Ph.D. in Organismal Biology (Evolutionary Developmental Biology)",
    thesis: "Musculoskeletal Development in Jawed Vertebrates: Gene function, cis-regulation, and 3D phenotypes in zebrafish",
    thesisUrl: "https://urn.kb.se/resolve?urn=urn:nbn:se:uu:diva-509354",
    advisor: "Dr. Tatjana Haitina",
  },
  {
    year: "2016—2018",
    institution: "Uppsala University",
    degree: "MSc in Evolutionary Biology",
  },
  {
    year: "2013—2016",
    institution: "University of Exeter",
    degree: "BSc in Biological Sciences",
  }
];
