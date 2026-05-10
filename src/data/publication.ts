export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  {
    year: "2026",
    conference: "Developmental Biology Advances",
    title: "Ossification of the pectoral fin of Glyptolepis groenlandica: implications for the evolution of the lungfish appendicular skeleton",
    authors: "Branigan MK, Bijl S, Ahlberg PE, Tafforeau P, Mansuit R, Leyhr J, Clement AM, Stundl J, Dutel H, Hirasawa T, Haitina T, Sanchez S",
    paperUrl: "https://doi.org/10.1186/s13227-026-00264-y",
    imageUrl: "",
  },
  {
    year: "2026",
    conference: "G3 Genes|Genomes|Genetics",
    title: "WormTagDB: A Systematic Survey of Endogenously Tagged Proteins in C. elegans and Roadmap Towards the Tagged Proteome",
    authors: "Leyhr J, Chi Q, Zeng L, Li X, Cao B, Shen EZ, Zou W, Sherwood DR",
    paperUrl: "https://doi.org/10.1093/g3journal/jkag068",
    imageUrl: "",
  },
  {
    year: "2026",
    conference: "Current Biology",
    title: "Specialized high-capacity mitochondria fuel cell invasion",
    authors: "Kenny-Ganzert IW*, Basta LP*, Wang L, Chi Q, Kelley LC, Su CY, Leyhr J, Morton KS, Meyer JN, Sherwood DR",
    paperUrl: "https://doi.org/10.1016/j.cub.2026.03.023",
    imageUrl: "",
  },
  {
    year: "2025",
    conference: "Journal of Morphology",
    title: "Investigating the Morphogenesis and Replacement of Lamprey Toothlets Using Synchrotron Imaging",
    authors: "Grohganz M, Leyhr J, Johanson Z, Haitina T, Sanchez S, Dollman K, Stundl J, Bronner ME, Fraser GJ, Donoghue PCJ",
    paperUrl: "https://doi.org/10.1002/jmor.70094",
    imageUrl: "",
  },
  {
    year: "2025",
    conference: "Science Advances",
    title: "Acquisition of neural crest promoted thyroid evolution from chordate endostyle",
    authors: "Stundl J, Rajan ARD, Urrutia HA, Leyhr J, Stundlova J, Solovieva T, Haitina T, Sanchez S, Musilova Z, Martik ML, Bronner ME",
    paperUrl: "https://doi.org/10.1126/sciadv.adv2657",
    imageUrl: "",
  },
  {
    year: "2025",
    conference: "Nature Communications",
    title: "Nkx2.7 is a conserved regulator of craniofacial development",
    authors: "Ford C, De Sena-Tomás C, Wun TTR, Aleman AG, Rangaswamy U, Leyhr J, Nuñez MI, Gao CZ, Nim HT, See M, Coppola U, Waxman JS, Ramialison M, Haitina T, Smeeton J, Sanges R, Targoff KL",
    paperUrl: "https://doi.org/10.1038/s41467-025-58821-3",
    imageUrl: "",
  },
  {
    year: "2025",
    conference: "Journal of Anatomy",
    title: "Hidden in plain sight: does the first intercostal ligament help to stabilize the Weberian apparatus?",
    authors: "Leyhr J, Haitina T, Bird NC",
    paperUrl: "https://doi.org/10.1093/molbev/msae246",
    imageUrl: "",
  },
  {
    year: "2024",
    conference: "Molecular Biology and Evolution",
    title: "The sensory shark: high-quality morphological, genomic and transcriptomic data for the small-spotted catshark Scyliorhinus canicula reveal the molecular bases of sensory organ evolution in jawed vertebrates",
    authors: "Mayeur H, Leyhr J, Mulley J, Leurs N, Michel L, Sharma K, Lagadec R, Aury JM, Osborne OG, Mulhair P, Poulain J, Mangenot S, Mead D, Smith M, Corton C, Oliver K, Skelton J, Betteridge E, Dolucan J, Dudchenko O, Omer AD, Weisz D, Lieberman-Aiden E, McCarthy S, Sims Y, Torrance J, Tracey A, Howe K, Baril T, Hayward A, Martinand-Mari C, Sanchez S, Haitina T, Martin K, Korsching SI, Mazan S, Debiais-Thibaud M",
    paperUrl: "https://doi.org/10.1101/2024.05.23.595469",
    imageUrl: "/images/Catsharksensory.png",
  },
  {
    year: "2024",
    conference: "STAR Protocols",
    title: "Protocol for fluorescent live-cell staining of tardigrades",
    authors: "Harry CJ, Hibshman JD, Damatac A, Davidson PL, Estermann MA, Flores-Flores M, Holmes CM, Lázaro J, Legere EA, Leyhr J, Thendral SB, Vincent BA, Goldstein B",
    paperUrl: "https://doi.org/10.1016/j.xpro.2024.103232",
    imageUrl: "",
  },
  {
    year: "2023",
    conference: "Frontiers in Endocrinology",
    title: "Enhanced contrast synchrotron X-ray microtomography for describing skeleton-associated soft tissue defects in zebrafish mutants",
    authors: "Leyhr J, Sanchez S, Dollman KN, Tafforeau P, Haitina T",
    paperUrl: "https://doi.org/10.3389/fendo.2023.1108916",
    imageUrl: "",
  },
  {
    year: "2022",
    conference: "eLife",
    title: "A novel cis-regulatory element drives early expression of Nkx3.2 in the gnathostome primary jaw joint",
    authors: "Leyhr J*, Waldmann L*, Filipek-Górniok B, Zhang H, Allalou A, Haitina T",
    paperUrl: "https://doi.org/10.7554/eLife.75749",
    imageUrl: "",
  },
  {
    year: "2022",
    conference: "Developmental Dynamics",
    title: "The Role of Gdf5 in the Development of the Zebrafish Fin Endoskeleton",
    authors: "Waldmann L*, Leyhr J*, Zhang H, Allalou A, Öhman-Mägi C, Haitina T",
    paperUrl: "https://doi.org/10.1002/dvdy.399",
    imageUrl: "",
    award: "Cover feature",
  },
  {
    year: "2021",
    conference: "PLoS ONE",
    title: "The Broad Role of Nkx3.2 in the Development of the Zebrafish Axial Skeleton",
    authors: "Waldmann L*, Leyhr J*, Zhang H, Öhman-Mägi C, Allalou A, Haitina T",
    paperUrl: "https://doi.org/10.1371/journal.pone.0255953",
    imageUrl: "",
  },
  {
    year: "2018",
    conference: "BMC Evolutionary Biology",
    title: "Embryonic expression patterns and phylogenetic analysis of panarthropod sox genes: Insight into nervous system development, segmentation and gonadogenesis",
    authors: "Janssen R, Andersson E, Betnér E, Bijl S, Fowler W, Höök L, Leyhr J, Landström E, Mannelqvist A, Panara V, Smith K, Tiemann S",
    paperUrl: "https://doi.org/10.1186/s12862-018-1196-z",
    imageUrl: "",
  },
];
