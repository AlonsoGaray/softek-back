export default function traducirRespuesta(data: any, tipo: string, pageNumber: number = 1) {
  switch (tipo) {
    case "people":
      return {
        total: data.count,
        siguiente: `CAMBIAR_URL/api/people/${pageNumber + 1}`,
        anterior: pageNumber === 1 ? null : `https://CAMBIAR_URL/api/people/${pageNumber - 1}`,
        resultados: (data.results as AtributosPersona[]).map((result: AtributosPersona) => ({
          ...traducirAtributosGlobales(result),
          ...traducirAtributosPersona(result),
        })),
      };
    case "person":
      return {
        ...traducirAtributosGlobales(data),
        ...traducirAtributosPersona(data),
      };
    case "films":
      return {
        total: data.count,
        siguiente: data.next,
        anterior: data.previous,
        resultados: (data.results as AtributosPelicula[]).map((result: AtributosPelicula) => ({
          ...traducirAtributosGlobales(result),
          ...traducirAtributosPelicula(result),
        })),
      };
    case "film":
      return {
        ...traducirAtributosGlobales(data),
        ...traducirAtributosPelicula(data),
      };
    default:
      return data;
  }
}

function traducirAtributosGlobales(data: AtributosGlobales) {
  return { creado: data.created, editado: data.edited };
}

function traducirAtributosPersona(data: AtributosPersona) {
  return {
    nombre: data.name,
    url: data.url,
    altura: data.height,
    peso: data.mass,
    color_cabello: data.hair_color,
    color_piel: data.skin_color,
    color_ojos: data.eye_color,
    fecha_nacimiento: data.birth_year,
    genero: data.gender,
    planeta_natal: data.homeworld,
    peliculas: data.films,
    especies: data.species,
    vehiculos: data.vehicles,
    naves: data.starships,
  };
}

function traducirAtributosPelicula(data: AtributosPelicula) {
  return {
    titulo: data.title,
    id_episodio: data.episode_id,
    texto_apertura: data.opening_crawl,
    director: data.director,
    productor: data.producer,
    fecha_lanzamiento: data.release_date,
    personajes: data.characters,
    planetas: data.planets,
    naves: data.starships,
    vehiculos: data.vehicles,
    especies: data.species,
  };
}
