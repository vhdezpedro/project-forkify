export const state = {
  recipe: {},
};

export async function loadRecipe(id) {
  const resp = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`,
  );
  const data = await resp.json();
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
}
