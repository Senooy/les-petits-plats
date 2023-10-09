class App {
  constructor() {
    this.searchInput = document.querySelector('input[name="q"]');
    this.$wrapperRecipes = document.querySelector("#recipes");
    this.filtersListsIds = ['ingredients-filter', 'appliances-filter', 'ustensils-filter']
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

    // init filters
    const toggleFilters = new ToggleFilters(this.filtersListsIds)
    toggleFilters.addEvent()

    // Search system
    const searchRecipes = new SearchRecipes(recipesIndex, recipes, 1)

    // display ALL the recipes 
    const filters = new Filters(toggleFilters.wrappersFilters, 'tags', searchRecipes)

    const displayRecipe = new DisplayRecipes(this.$wrapperRecipes, filters)
    displayRecipe.renderV1(recipes)

    // Init main search input
    searchRecipes.setupSearchInput(this.searchInput, displayRecipe)
  }
}

const app = new App();
app.main();

