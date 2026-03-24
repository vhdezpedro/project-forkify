import { API_URL } from './config.js';
import { getJSON } from './helpers.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
  },
};

export async function loadRecipe(id) {
  try {
    const data = await getJSON(API_URL + id);
    console.log(data);
    const { recipe } = data.data;

    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (error) {
    throw error;
  }
}

export async function loadSearchResults(query) {
  state.search.query = query;
  try {
    const data = await getJSON(`${API_URL}?search=${query}`);
    data.data.recipes.map(recipe => {
      state.search.results.push({
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
      });
    });
  } catch (error) {
    throw error;
  }
}
