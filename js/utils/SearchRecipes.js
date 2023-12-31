class SearchRecipes extends StringUtils {
  constructor(recipesIndex, recipes, version) {
    super()
    this._allRecipes = recipes;
    this._recipesIndex = recipesIndex;
    this._activeFiltersIndex = new Map();
    this._resultMainSearch = [...this._allRecipes.keys()];
    this._version = version;
  }

  setupSearchInput(searchInput, displayRecipe) {
    this._displayRecipe = displayRecipe;

    searchInput.addEventListener('input', () => {
      const searchValue = searchInput.value.trim();
      
      if (searchValue.length >= 3) {
        this._resultMainSearch = this._mainSearch(searchValue)
        this._updateDisplayRecipes()
      } else if (searchValue == "") {
        this._resultMainSearch = [...this._allRecipes.keys()];
        this._updateDisplayRecipes()
      }      
    });

    const searchBtn = searchInput.nextElementSibling.querySelector('button')

    searchBtn.addEventListener('click', () => {
      const searchValue = searchInput.value.trim();
      
      if (searchValue != "") {
        this._resultMainSearch = this._mainSearch(searchValue)
        this._updateDisplayRecipes() 
      }
    })
  }

  // Called by the elements in the filters' selects 
  searchByFilter(filterType, filter) {
      this._addFilter(filterType, filter)
      this._updateDisplayRecipes() 
  }

  // Returns the ids whose matching with either the name, the ingredients or description of ALL the recipes
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

  // add new filter in _activeFiltersIndex
  _addFilter(filterType, filter) {
    this._activeFiltersIndex.set(filter, filterType)
  }

  removeFilter(filter) {
    this._activeFiltersIndex.delete(filter)
    this._updateDisplayRecipes()
  }

  _updateDisplayRecipes() {
    const recipesFromIds = (recipesIds) => {
      return recipesIds.map((id) => this._allRecipes.get(id));
    }

    const recipesIds = this._getRecipesFiltered()

    this._version === 1 ? this._displayRecipe.renderV1(recipesFromIds(recipesIds), this._activeFiltersIndex) :
    this._displayRecipe.render(recipesFromIds(recipesIds), this._activeFiltersIndex)
  }

  // Returns only the communs ids from all the arrays matching with the filters
  _getRecipesFiltered() {
    const idsByFilters =  this._idsByFilters()

    return idsByFilters.length > 0 ? this._resultMainSearch.filter((value) => idsByFilters.includes(value))
     : this._resultMainSearch
  }

  // Makes 1 array of ids from all the active filters
  _idsByFilters() {
    let commonIds = []
    this._activeFiltersIndex.forEach((filterType, filter) => {
      const ids = this._recipesIndex[filterType][this.normalizeString(filter)];

      if (commonIds.length === 0) {
        commonIds = ids
      } else {
        commonIds = commonIds.filter(id => ids.includes(id))
      }
    })
    return commonIds
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
