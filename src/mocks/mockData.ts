export interface DetailSlide {
  year: number;
  description: string;
}

export interface MainSlide {
  title: string;
  startYear: number;
  endYear: number;
  details: DetailSlide[];
}

export const slidesData: MainSlide[] = [
  {
    title: "Technology",
    startYear: 1980,
    endYear: 1986,
    details: [
      { year: 1980, description: "Sinclair Research releases the home computer ZX80" },
      { year: 1981, description: "IBM releases the IBM Personal Computer (IBM PC), initiating widespread PC adoption" },
      { year: 1982, description: "The ZX Spectrum home computer is released by UK-based Sinclair Research" },
      { year: 1983, description: "Microsoft announces the first version of Windows" },
      { year: 1984, description: "Apple releases the first Macintosh, a personal computer with a graphical interface" },
      { year: 1985, description: "Nintendo releases the Nintendo Entertainment System (NES) in the US" }
    ]
  },
  {
    title: "Cinema",
    startYear: 1987,
    endYear: 1991,
    details: [
      { year: 1987, description: "“Predator”, USA (directed by John McTiernan)" },
      { year: 1988, description: "“Who Framed Roger Rabbit”, USA (directed by Robert Zemeckis)" },
      { year: 1989, description: "“Back to the Future Part II”, USA (directed by Robert Zemeckis)" },
      { year: 1990, description: "“Die Hard 2”, USA (directed by Renny Harlin)" },
      { year: 1991, description: "“The Addams Family”, USA (directed by Barry Sonnenfeld)" }
    ]
  },
  {
    title: "Literature",
    startYear: 1992,
    endYear: 1997,
    details: [
      { year: 1992, description: "Nobel Prize in Literature: Derek Walcott, 'for a brilliant epic of the Caribbean in 64 sections'" },
      { year: 1994, description: "“Insomnia” — novel by Stephen King" },
      { year: 1995, description: "Nobel Prize in Literature: Seamus Heaney (Ireland)" },
      { year: 1997, description: "First book of the Harry Potter series released: “Harry Potter and the Philosopher's Stone” (J.K. Rowling)" }
    ]
  },
  {
    title: "Theatre",
    startYear: 1999,
    endYear: 2004,
    details: [
      { year: 1999, description: "Premiere of the ballet “Cinderella” choreographed by Jean-Christophe Maillot, set design by Ernest Pignon" },
      { year: 2000, description: "Theatre magazine resumed publication" },
      { year: 2002, description: "Premiere of Tom Stoppard’s trilogy “The Coast of Utopia” at the Royal National Theatre, London" },
      { year: 2003, description: "Premiere of “Macbeth” starring Patrick Stewart at Chichester Festival Theatre" },
      { year: 2004, description: "The National Theatre launches the NT Live project — live broadcasts of plays to cinemas worldwide" }
    ]
  },
  {
    title: "Sport",
    startYear: 2006,
    endYear: 2014,
    details: [
      { year: 2006, description: "CSKA basketball club wins the national championship in Russia" },
      { year: 2008, description: "The 29th Summer Olympic Games held in Beijing from August 8 to 24" },
      { year: 2010, description: "The Winter Olympics held in Vancouver from February 13 to 28" },
      { year: 2012, description: "The 30th Summer Olympic Games held in London from July 27 to August 12" },
      { year: 2014, description: "The 22nd Winter Olympic Games held in Sochi (Russia) from February 7 to 23" }
    ]
  },
  {
    title: "Science",
    startYear: 2015,
    endYear: 2022,
    details: [
      { year: 2015, description: "September 13 — Partial solar eclipse visible in South Africa and parts of Antarctica" },
      { year: 2016, description: "The Hubble telescope discovers the most distant galaxy ever observed, designated GN-z11" },
      { year: 2017, description: "Tesla officially unveils the world’s first electric semi-truck, Tesla Semi" },
      { year: 2018, description: "Launch of the Parker Solar Probe mission to study the Sun" },
      { year: 2019, description: "Google announces the creation of a 53-qubit quantum computer, achieving quantum supremacy" },
      { year: 2020, description: "SpaceX’s Crew Dragon spacecraft returns to Earth after its first manned mission" },
      { year: 2021, description: "James Webb Space Telescope successfully launched on December 25" },
      { year: 2022, description: "First images of the universe from the James Webb Telescope, including exoplanets and early galaxies" }
    ]
  }
];
