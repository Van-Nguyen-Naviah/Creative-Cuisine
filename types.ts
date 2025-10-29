
export interface Ingredient {
  name: string;
  emoji: string;
}

export interface IngredientCategory {
  category: string;
  items: Ingredient[];
}
