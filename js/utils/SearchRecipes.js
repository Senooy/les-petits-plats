class SearchRecipes extends StringUtils {
  constructor(displayRecipe, recipesIndex, recipes) {
    super()
    this._displayRecipe = displayRecipe;
    this._allRecipes = recipes;
    this._currentRecipesIndex = recipesIndex;
    this._currentRecipes = [...this._allRecipes.values()];
  }

  setupSearchInput() {
    const searchInput = document.querySelector('input[name="q"]');

    searchInput.addEventListener('input', () => {
      const searchValue = searchInput.value.trim();
      
      if (searchValue.length >= 3) {
      let filteredRecipesID = this._mainSearch(searchValue)
       this._currentRecipes = this._getRecipesFromId(filteredRecipesID)
       this._displayRecipe.render(this._currentRecipes)
      }

      if (searchValue == "") {
       this._currentRecipes = [...this._allRecipes.values()]
       this._displayRecipe.render(this._currentRecipes)
      }      
    });
  }

  _mainSearch(searchTerm) {
    const filteredRecipes = this._currentRecipes.filter((recipe) => {
        const normalizedSearch = this.normalizeString(searchTerm);
        if (
          recipe.normalizeName.includes(normalizedSearch) ||
          recipe.normalizeDescription.includes(normalizedSearch)
        ) {
          return true;
        }
  
        return recipe.ingredients.some((ingredient) =>
          ingredient.normalizeName.includes(normalizedSearch)
        );
      }
    );

    return filteredRecipes.map((recipe) => recipe.id);
  }

  filterSeach(tag, searchTerm) {
    return this._currentRecipesIndex.get(tag[this.normalizeString(searchTerm)]);
  }

  _getRecipesFromId(arrayRecipesId) {
    return arrayRecipesId.map((id) => this._allRecipes.get(id));
  }

  tagSearch() {
    // search IN the list for the filter to apply !!
  }
}

// Other Main Search
  // mainSearch(searchTerm) {
  //     const filtredIdRecipes = []
  //     const normalizeSearch = this._toNormalize(searchTerm)

  //     this._currentRecipes.forEach(recipe => {

  //         if (this._toNormalize(recipe.name).includes(normalizeSearch) || this._toNormalize(recipe.description).includes(normalizeSearch)) {
  //             filtredIdRecipes.push(recipe.id)
  //         } else {
  //             recipe.ingredients.forEach(ingredient => {

  //                 if (this._toNormalize(ingredient.name).includes(normalizeSearch)) {
  //                     filtredIdRecipes.push(recipe.id);
  //                 }
  //             })
  //         } 
  //     });
  // }
