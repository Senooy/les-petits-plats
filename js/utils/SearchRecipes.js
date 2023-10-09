class SearchRecipes extends StringUtils {
  constructor(recipesIndex, recipes) {
    super()
    this._allRecipes = recipes;
    this._recipesIndex = recipesIndex;
    this._currentRecipes = [...this._allRecipes.keys()];
  }

  setupSearchInput(displayRecipe) {
    const searchInput = document.querySelector('input[name="q"]');
    this._displayRecipe = displayRecipe;


    searchInput.addEventListener('input', () => {
      const searchValue = searchInput.value.trim();
      
      if (searchValue.length >= 3) {
        const filteredRecipesIds = this._getRecipesFiltered(this._mainSearch(searchValue))
        this._updateDisplayRecipes(filteredRecipesIds)
      } else if (searchValue == "") {
        this._updateDisplayRecipes([...this._allRecipes.keys()])
      }      
    });
  }

  // Called by the elements in the selects filters
  searchByFilter(filterType, searchTerm) {
    if (searchTerm) {
      const filteredRecipesIds = this._getRecipesFiltered(this._getFilterIndex(filterType, searchTerm))
      this._updateDisplayRecipes(filteredRecipesIds)

      console.log(filteredRecipesIds);
    } else {
      console.log(`else de searchByFilter`);
    }
    
  }

  // Returns the ids whose matching in the name, ingredients and description of ALL the recipes
  _mainSearch(searchTerm) {
    const filteredRecipes = [...this._allRecipes.values()].filter((recipe) => {
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

  // Returns the ids corresponding from RecipesIndex
  _getFilterIndex(filterType, searchTerm) {
    return this._recipesIndex[filterType][this.normalizeString(searchTerm)];
  }

  _updateDisplayRecipes(recipesIds) {
    if (recipesIds.length > 0) {
      this._currentRecipes = recipesIds
      this._displayRecipe.render(this._getRecipesFromId(this._currentRecipes))
    } else {
      this._displayRecipe.errorMsg()
    }
  }

  // Return the recipes from their id
  _getRecipesFromId(arrayRecipesId) {
    return arrayRecipesId.map((id) => this._allRecipes.get(id));
  }

  // Returns only the communs ids between the recipes already display and the recipes matching the new filter
  _getRecipesFiltered(filteredArray) {
    return this._currentRecipes.filter((value) => filteredArray.includes(value))
  }

  // Sets up the input in the advanced filters
  setupFilterInput() {
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
