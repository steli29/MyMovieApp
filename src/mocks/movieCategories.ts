import { MovieCategoryType } from '../types/movie';

export const MOVIE_CATEGORIES = [
  {
    id: 'recent-movies',
    title: 'Recently Released Movies',
    type: MovieCategoryType.Recent,
    imdbIDs: [
      'tt12037194', // Furiosa
      'tt15239678', // Dune: Part Two
      'tt22022452', // Inside Out 2
      'tt29623480', // The Wild Robot
      'tt14948432', // Red One
      'tt17526714', // The Substance
      'tt11315808', // Joker: Folie à Deux
      'tt8790086', // Kraven the Hunter
      'tt9218128', // Gladiator II
      'tt6263850', // Deadpool & Wolverine
    ],
  },
  {
    id: 'recent-series',
    title: 'Recently Released Series',
    type: MovieCategoryType.Recent,
    imdbIDs: [
      'tt12637874', // Fallout
      'tt14269590', // Shogun
      'tt11198330', // House of the Dragon
      'tt13406094', // The White Lotus
      'tt3581920', // The Last of Us
      'tt11280740', // Severance
      'tt13622958', // The Penguin
      'tt18412256', // The Gentlemen
      'tt2802850', // Fargo
      'tt15435876', // The Diplomat
    ],
  },
  {
    id: 'top-movies',
    title: 'Top 10 Movies',
    type: MovieCategoryType.Top10,
    imdbIDs: [
      'tt0111161', // The Shawshank Redemption
      'tt0068646', // The Godfather
      'tt0468569', // The Dark Knight
      'tt0071562', // The Godfather Part II
      'tt0050083', // 12 Angry Men
      'tt0108052', // Schindler's List
      'tt0167260', // The Return of the King
      'tt0110912', // Pulp Fiction
      'tt0060196', // The Good, the Bad and the Ugly
      'tt0137523', // Fight Club
    ],
  },
  {
    id: 'top-series',
    title: 'Top 10 Series',
    type: MovieCategoryType.Top10,
    imdbIDs: [
      'tt0903747', // Breaking Bad
      'tt0944947', // Game of Thrones
      'tt0386676', // The Office
      'tt1475582', // Sherlock
      'tt7366338', // Chernobyl
      'tt0185906', // Band of Brothers
      'tt0306414', // The Wire
      'tt0417299', // Avatar: The Last Airbender
      'tt0795176', // Planet Earth
      'tt2861424', // Rick and Morty
    ],
  },
  {
    id: 'sci-fi',
    title: 'Sci-Fi & Adventure',
    type: MovieCategoryType.Standard,
    imdbIDs: [
      'tt0816692', // Interstellar
      'tt0133093', // The Matrix
      'tt1160419', // Dune
      'tt1375666', // Inception
      'tt0083658', // Blade Runner
      'tt1856101', // Blade Runner 2049
      'tt2543164', // Arrival
      'tt3659388', // The Martian
      'tt1631867', // Edge of Tomorrow
      'tt0910970', // WALL-E
    ],
  },
  {
    id: 'popular-series',
    title: 'Popular TV Series',
    type: MovieCategoryType.Standard,
    imdbIDs: [
      'tt0903747', // Breaking Bad
      'tt0944947', // Game of Thrones
      'tt4574334', // Stranger Things
      'tt3581920', // The Last of Us
      'tt11280740', // Severance
      'tt3032476', // Better Call Saul
      'tt2442560', // Peaky Blinders
      'tt2861424', // Rick and Morty
      'tt1475582', // Sherlock
      'tt13406094', // The White Lotus
    ],
  },
  {
    id: 'superhero',
    title: 'Superhero Movies',
    type: MovieCategoryType.Standard,
    imdbIDs: [
      'tt0468569', // The Dark Knight
      'tt1877830', // The Batman
      'tt4154796', // Avengers: Endgame
      'tt0848228', // The Avengers
      'tt2250912', // Spider-Man: Homecoming
      'tt9362722', // Across the Spider-Verse
      'tt1825683', // Black Panther
      'tt3501632', // Thor: Ragnarok
      'tt1431045', // Deadpool
      'tt6263850', // Deadpool & Wolverine
    ],
  },
  {
    id: 'comedy-series',
    title: 'Comedy Series',
    type: MovieCategoryType.Standard,
    imdbIDs: [
      'tt0386676', // The Office
      'tt1442437', // Modern Family
      'tt2467372', // Brooklyn Nine-Nine
      'tt0108778', // Friends
      'tt0898266', // The Big Bang Theory
      'tt0460649', // How I Met Your Mother
      'tt2575988', // Silicon Valley
      'tt4955642', // The Good Place
      'tt0369179', // Two and a Half Men
      'tt1439629', // Community
    ],
  },
  {
    id: 'action',
    title: 'Action Movies',
    type: MovieCategoryType.Standard,
    imdbIDs: [
      'tt2911666', // John Wick
      'tt4425200', // John Wick: Chapter 2
      'tt1745960', // Top Gun: Maverick
      'tt1392190', // Mad Max: Fury Road
      'tt1631867', // Edge of Tomorrow
      'tt1229238', // Mission: Impossible - Ghost Protocol
      'tt4912910', // Mission: Impossible - Fallout
      'tt0095016', // Die Hard
      'tt0117060', // Mission: Impossible
      'tt0468569', // The Dark Knight
    ],
  },
  {
    id: 'crime-series',
    title: 'Crime & Drama Series',
    type: MovieCategoryType.Standard,
    imdbIDs: [
      'tt0903747', // Breaking Bad
      'tt3032476', // Better Call Saul
      'tt2707408', // Narcos
      'tt5071412', // Ozark
      'tt2356777', // True Detective
      'tt0306414', // The Wire
      'tt0141842', // The Sopranos
      'tt2442560', // Peaky Blinders
      'tt2802850', // Fargo
      'tt1796960', // Homeland
    ],
  },
  {
    id: 'fantasy',
    title: 'Fantasy Movies',
    type: MovieCategoryType.Standard,
    imdbIDs: [
      'tt0241527', // Harry Potter
      'tt0120737', // The Fellowship of the Ring
      'tt0167261', // The Two Towers
      'tt0167260', // The Return of the King
      'tt0903624', // The Hobbit
      'tt0363771', // The Chronicles of Narnia
      'tt1201607', // Harry Potter and the Deathly Hallows Part 2
      'tt1014759', // Alice in Wonderland
      'tt0332452', // Troy
      'tt0454876', // Life of Pi
    ],
  },
  {
    id: 'mystery-series',
    title: 'Mystery & Thriller Series',
    type: MovieCategoryType.Standard,
    imdbIDs: [
      'tt4574334', // Stranger Things
      'tt5753856', // Dark
      'tt1475582', // Sherlock
      'tt5290382', // Mindhunter
      'tt2085059', // Black Mirror
      'tt11280740', // Severance
      'tt1839578', // Person of Interest
      'tt2356777', // True Detective
      'tt10919420', // Squid Game
      'tt11866324', // The Midnight Club
    ],
  },
  {
    id: 'animation',
    title: 'Animated Movies',
    type: MovieCategoryType.Standard,
    imdbIDs: [
      'tt0114709', // Toy Story
      'tt0126029', // Shrek
      'tt0441773', // Kung Fu Panda
      'tt1323594', // Despicable Me
      'tt0910970', // WALL-E
      'tt2380307', // Coco
      'tt2096673', // Inside Out
      'tt22022452', // Inside Out 2
      'tt2948356', // Zootopia
      'tt29623480', // The Wild Robot
    ],
  },
] as const;

export const CATEGORIES = [
  'Movies',
  'Series',
  'New & Hot',
  'Action',
  'Comedy',
  'Sci-Fi',
  'Horror',
] as const;
