class App {
    constructor() {
        this.$recipesWrapper = document.querySelector("#recipes");
    }

    main() {
        recipes.map(recipe =>  new Recipe(recipe))
            .forEach(recipe => {
                const template = new RecipeCard(recipe);
                this.$recipesWrapper.appendChild(template.createRecipeCardV2());
            });
    }
}

const app = new App();
app.main();

/*
* Hashmap selon les ingrédients en clé et un tableau qui liste tous les ids des recettes 
avec cet ingrédient, {outils et ustensiles}
*
const ingredientMap = {};

for (const recipe of recipes) {
  const recipeId = recipe.id;

  for (const ingredient of recipe.ingredients) {
    const ingredientName = ingredient.ingredient.toLowerCase();

    if (!ingredientMap[ingredientName]) {
      ingredientMap[ingredientName] = [];
    }

    ingredientMap[ingredientName].push(recipeId);
  }
}

console.log(ingredientMap);
*/