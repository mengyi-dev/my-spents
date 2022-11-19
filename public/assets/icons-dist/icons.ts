export type IconsId =
  | "beauty"
  | "clothes"
  | "education"
  | "electronics"
  | "eletronic"
  | "entertainment"
  | "food"
  | "gift"
  | "shopping"
  | "snack"
  | "telephone"
  | "transport"
  | "travel";

export type IconsKey =
  | "Beauty"
  | "Clothes"
  | "Education"
  | "Electronics"
  | "Eletronic"
  | "Entertainment"
  | "Food"
  | "Gift"
  | "Shopping"
  | "Snack"
  | "Telephone"
  | "Transport"
  | "Travel";

export enum Icons {
  Beauty = "beauty",
  Clothes = "clothes",
  Education = "education",
  Electronics = "electronics",
  Eletronic = "eletronic",
  Entertainment = "entertainment",
  Food = "food",
  Gift = "gift",
  Shopping = "shopping",
  Snack = "snack",
  Telephone = "telephone",
  Transport = "transport",
  Travel = "travel",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Beauty]: "61697",
  [Icons.Clothes]: "61698",
  [Icons.Education]: "61699",
  [Icons.Electronics]: "61700",
  [Icons.Eletronic]: "61701",
  [Icons.Entertainment]: "61702",
  [Icons.Food]: "61703",
  [Icons.Gift]: "61704",
  [Icons.Shopping]: "61705",
  [Icons.Snack]: "61706",
  [Icons.Telephone]: "61707",
  [Icons.Transport]: "61708",
  [Icons.Travel]: "61709",
};
