class App {
    constructor() {
      this.searchInput = document.querySelector('input[name="q"]');
      this.$wrapperRecipes = document.querySelector("#recipes");
      this._filtersListsIds = ['ingredients', 'appliances', 'ustensils']
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
      const searchRecipes = new SearchRecipes(recipesIndex, recipes, 1)
  
      // display ALL the recipes 
      const filters = new Filters(this._filtersListsIds, 'tags', searchRecipes)
  
      const displayRecipe = new DisplayRecipes(this.$wrapperRecipes, filters)
      displayRecipe.renderV1(recipes)
  
      // Init main search input
      searchRecipes.setupSearchInput(this.searchInput, displayRecipe)
    }
  }
  
  const app = new App();
  app.main();
  
  