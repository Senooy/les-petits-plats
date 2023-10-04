class App {
  constructor() {
    this.$wrapperRecipes = document.querySelector("#recipes");
    this.$wrapperRecipesCount = document.querySelector('#displayRecipesCount')
    this._filtersListId = ['ingredients', 'appliances', 'ustensils']
  }

  main() {
    // contains ALL the recipes with their id for keys
    const recipes = new Map()

    recipesData.forEach((recipe) => {
      const recipeInstance = new Recipe(recipe);
      recipes.set(recipeInstance.id, recipeInstance);
    });

    // display ALL the recipes 
    const filters = new Filters(this._filtersListId, 'tags')

    const displayRecipe = new DisplayRecipes(this.$wrapperRecipes, this.$wrapperRecipesCount, filters)
    displayRecipe.render(recipes)

    // Generates 3 index for each filter category.
    const recipesIndex = new RecipesIndex(recipes);

    // Search system
    const searchRecipes = new SearchRecipes(displayRecipe, recipesIndex, recipes)
    searchRecipes.setupSearchInput()

    console.log(`app, recipeIndex : `);
    console.log(recipesIndex);
    console.log("");
  }
}

const app = new App();

app.main();

