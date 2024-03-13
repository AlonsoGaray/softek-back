type AtributosGlobales = {
  created: string;
  edited: string;
};

type AtributosPersona = AtributosGlobales & {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  species: string[];
  films: string[];
  vehicles: string[];
  starships: string[];
  url: string;
};

type AtributosPelicula = AtributosGlobales & {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
};

type CrearGlobal = {
  nombre: string;
  creado: string;
  editado: string | null;
};

type CrearPersona = CrearGlobal & {
  altura: string;
  peso: string;
  fecha_nacimiento: string;
  genero: string;
  especie: string;
};

type CrearPelicula = CrearGlobal & {
  director: string;
  fecha_lanzamiento: string;
};
