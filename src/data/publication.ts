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
    authors: "Branigan MK, Bijl S, Ahlberg PE, Tafforeau P, Mansuit R, <b>Leyhr J</b>, Clement AM, Stundl J, Dutel H, Hirasawa T, Haitina T, Sanchez S",
    paperUrl: "https://doi.org/10.1186/s13227-026-00264-y",
    imageUrl: "",
  },
  {
    year: "2026",
    conference: "G3 Genes|Genomes|Genetics",
    title: "WormTagDB: A Systematic Survey of Endogenously Tagged Proteins in C. elegans and Roadmap Towards the Tagged Proteome",
    authors: "<b>Leyhr J</b>, Chi Q, Zeng L, Li X, Cao B, Shen EZ, Zou W, Sherwood DR",
    paperUrl: "https://doi.org/10.1093/g3journal/jkag068",
    imageUrl: "/images/LeyhrwormtagDB2026.png",
  },
  {
    year: "2026",
    conference: "Current Biology",
    title: "Specialized high-capacity mitochondria fuel cell invasion",
    authors: "Kenny-Ganzert IW*, Basta LP*, Wang L, Chi Q, Kelley LC, Su CY, <b>Leyhr J</b>, Morton KS, Meyer JN, Sherwood DR",
    paperUrl: "https://doi.org/10.1016/j.cub.2026.03.023",
    imageUrl: "/images/Kenny-Ganzert2026.jpg",
  },
  {
    year: "2025",
    conference: "Journal of Morphology",
    title: "Investigating the Morphogenesis and Replacement of Lamprey Toothlets Using Synchrotron Imaging",
    authors: "Grohganz M, <b>Leyhr J</b>, Johanson Z, Haitina T, Sanchez S, Dollman K, Stundl J, Bronner ME, Fraser GJ, Donoghue PCJ",
    paperUrl: "https://doi.org/10.1002/jmor.70094",
    imageUrl: "/images/lampreytoothlets.png",
  },
  {
    year: "2025",
    conference: "Science Advances",
    title: "Acquisition of neural crest promoted thyroid evolution from chordate endostyle",
    authors: "Stundl J, Rajan ARD, Urrutia HA, <b>Leyhr J</b>, Stundlova J, Solovieva T, Haitina T, Sanchez S, Musilova Z, Martik ML, Bronner ME",
    paperUrl: "https://doi.org/10.1126/sciadv.adv2657",
    imageUrl: "/images/lampreyendostyle.png",
  },
  {
    year: "2025",
    conference: "Nature Communications",
    title: "Nkx2.7 is a conserved regulator of craniofacial development",
    authors: "Ford C, De Sena-Tomás C, Wun TTR, Aleman AG, Rangaswamy U, <b>Leyhr J</b>, Nuñez MI, Gao CZ, Nim HT, See M, Coppola U, Waxman JS, Ramialison M, Haitina T, Smeeton J, Sanges R, Targoff KL",
    paperUrl: "https://doi.org/10.1038/s41467-025-58821-3",
    imageUrl: "/images/NK3synteny.png",
  },
  {
    year: "2025",
    conference: "Journal of Anatomy",
    title: "Hidden in plain sight: does the first intercostal ligament help to stabilize the Weberian apparatus?",
    authors: "<b>Leyhr J</b>, Haitina T, Bird NC",
    paperUrl: "https://doi.org/10.1093/molbev/msae246",
    imageUrl: "/images/Weberian GA.png",
  },
  {
    year: "2024",
    conference: "Molecular Biology and Evolution",
    title: "The sensory shark: high-quality morphological, genomic and transcriptomic data for the small-spotted catshark Scyliorhinus canicula reveal the molecular bases of sensory organ evolution in jawed vertebrates",
    authors: "Mayeur H, <b>Leyhr J</b>, Mulley J, Leurs N, Michel L, Sharma K, Lagadec R, Aury JM, Osborne OG, Mulhair P, Poulain J, Mangenot S, Mead D, Smith M, Corton C, Oliver K, Skelton J, Betteridge E, Dolucan J, Dudchenko O, Omer AD, Weisz D, Lieberman-Aiden E, McCarthy S, Sims Y, Torrance J, Tracey A, Howe K, Baril T, Hayward A, Martinand-Mari C, Sanchez S, Haitina T, Martin K, Korsching SI, Mazan S, Debiais-Thibaud M",
    paperUrl: "https://doi.org/10.1101/2024.05.23.595469",
    imageUrl: "/images/Catsharksensory.png",
  },
  {
    year: "2024",
    conference: "STAR Protocols",
    title: "Protocol for fluorescent live-cell staining of tardigrades",
    authors: "Harry CJ, Hibshman JD, Damatac A, Davidson PL, Estermann MA, Flores-Flores M, Holmes CM, Lázaro J, Legere EA, <b>Leyhr J</b>, Thendral SB, Vincent BA, Goldstein B",
    paperUrl: "https://doi.org/10.1016/j.xpro.2024.103232",
    imageUrl: "/images/tardigrade.jpg",
  },
  {
    year: "2023",
    conference: "Frontiers in Endocrinology",
    title: "Enhanced contrast synchrotron X-ray microtomography for describing skeleton-associated soft tissue defects in zebrafish mutants",
    authors: "<b>Leyhr J</b>, Sanchez S, Dollman KN, Tafforeau P, Haitina T",
    paperUrl: "https://doi.org/10.3389/fendo.2023.1108916",
    imageUrl: "/images/DICEpanels.jpg",
  },
  {
    year: "2022",
    conference: "eLife",
    title: "A novel cis-regulatory element drives early expression of Nkx3.2 in the gnathostome primary jaw joint",
    authors: "<b>Leyhr J</b>*, Waldmann L*, Filipek-Górniok B, Zhang H, Allalou A, Haitina T",
    paperUrl: "https://doi.org/10.7554/eLife.75749",
    imageUrl: "/images/Leyhr2022.jpg",
  },
  {
    year: "2022",
    conference: "Developmental Dynamics",
    title: "The Role of Gdf5 in the Development of the Zebrafish Fin Endoskeleton",
    authors: "Waldmann L*, <b>Leyhr J</b>*, Zhang H, Allalou A, Öhman-Mägi C, Haitina T",
    paperUrl: "https://doi.org/10.1002/dvdy.399",
    imageUrl: "/images/DD_Cover.jpg",
    award: "Cover feature",
  },
  {
    year: "2021",
    conference: "PLoS ONE",
    title: "The Broad Role of Nkx3.2 in the Development of the Zebrafish Axial Skeleton",
    authors: "Waldmann L*, <b>Leyhr J</b>*, Zhang H, Öhman-Mägi C, Allalou A, Haitina T",
    paperUrl: "https://doi.org/10.1371/journal.pone.0255953",
    imageUrl: "/images/Waldmann2021.png",
  },
  {
    year: "2018",
    conference: "BMC Evolutionary Biology",
    title: "Embryonic expression patterns and phylogenetic analysis of panarthropod sox genes: Insight into nervous system development, segmentation and gonadogenesis",
    authors: "Janssen R, Andersson E, Betnér E, Bijl S, Fowler W, Höök L, <b>Leyhr J</b>, Landström E, Mannelqvist A, Panara V, Smith K, Tiemann S",
    paperUrl: "https://doi.org/10.1186/s12862-018-1196-z",
    imageUrl: "/images/Janssen2018.jpg",
  },
];
