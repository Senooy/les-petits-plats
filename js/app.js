class App {
  constructor() {
    this.searchInput = document.querySelector('input[name="q"]');
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

    // Generates 3 index for each filter category.
    const recipesIndex = new RecipesIndex(recipes);
    recipesIndex.init(recipes)

    // Search system
    const searchRecipes = new SearchRecipes(recipesIndex, recipes)

    // display ALL the recipes 
    const filters = new Filters(this._filtersListId, 'tags', searchRecipes)

    const displayRecipe = new DisplayRecipes(this.$wrapperRecipes, this.$wrapperRecipesCount, filters)
    displayRecipe.render(recipes)

    // Init main search input
    searchRecipes.setupSearchInput(this.searchInput, displayRecipe)
  }
}

const app = new App();
app.main();

