export interface Hero {
  id: number;
  name: string;
  description: string;
  thumbnail: Image;
}

export interface Image {
  path: string;
  extension: string;
}

export interface HeroesActionsType {
  type: string;
  payload: Array<Hero> | number | string;
}

export interface HeroesStateType {
  heroes: Array<Hero>;
  loading: boolean;
  errorMessage: string;
}

export interface RequestResult {
  data: Array<Hero>;
  error: string | null;
}
