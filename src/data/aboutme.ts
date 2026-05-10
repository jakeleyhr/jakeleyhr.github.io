export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Jake Leyhr",
  title: "Postdoctoral Associate",
  institution: "Duke University",
  // Note that links work in the description
  description:
    "I am a Postdoctoral Associate in developmental biology at Duke University (NC, USA) studying cell invasion in nematode worms. Before that, I completed my PhD at Uppsala University (Sweden), where I examined the role and regulation of key genes patterning the cartilage, bone, and connective tissues of zebrafish.",
  email: "firstname.lastname@duke.edu",
  imageUrl:
    "/images/Jake.jpg",
  googleScholarUrl: "https://scholar.google.com/citations?user=gzb9BW4AAAAJ&hl=en",
  githubUsername: "jakeleyhr",
  linkedinUsername: "jake-leyhr-39116a81",
  twitterUsername: "",
  blogUrl: "",
  cvUrl: "",
  institutionUrl: "https://www.duke.edu",
  // altName: "",
  // secretDescription: "I like dogs.",
};
