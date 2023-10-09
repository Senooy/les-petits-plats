class DisplayRecipes {
  constructor($wrapperRecipes, $wrapperRecipesCount, filters) {
    this._$wrapperRecipes = $wrapperRecipes;
    this._$wrapperRecipesCount = $wrapperRecipesCount;
    this._filters = filters;
  }

  render(recipes, activeFilters = new Map) {
    this._reset()
    const filtersData = this._initializeFilters();

    recipes.forEach(recipe => {
      const template = new RecipeCard(recipe);
      this._$wrapperRecipes.appendChild(template.createRecipeCardV2());
      this._updateFilters(recipe, filtersData, activeFilters);
    });

    this._updateRecipesCount(recipes);

    this._filters.update(
      filtersData
    );
  }

  errorMsg() {
    this._reset()
    
    this._$wrapperRecipes.innerHTML = "Aucune recette trouvée"

    this._updateRecipesCount()
  }

  _reset() {
    this._$wrapperRecipes.innerHTML = "";
  }

  _updateRecipesCount(recipes = []) {
    let recipesCount
    if (recipes instanceof Map) {
      recipesCount = recipes.size
    } else if (recipes instanceof Array) {
      recipesCount = recipes.length
    } else {
      throw new Error(`recipes must be a map or an array`)
    }

    this._$wrapperRecipesCount.innerHTML = `${recipesCount < 10 ? `0${recipesCount}` : `${recipesCount}`} ${recipesCount > 0 ? "recettes" : "recette"}`;
  }

  _initializeFilters() {
    return {
      ingredients: [],
      appliances: [],
      ustensils: []
    };
  }

  _updateFilters(recipe, filtersData, activeFilters) {
    recipe.ingredients.forEach(ingredient => {
      if (!activeFilters.has(ingredient.capitalizeName) && !filtersData.ingredients.includes(ingredient.capitalizeName)) {
        filtersData.ingredients.push(ingredient.capitalizeName);
      }
    })


    if (!activeFilters.has(recipe.capitalizeAppliance) && !filtersData.appliances.includes(recipe.capitalizeAppliance)) {
      filtersData.appliances.push(recipe.capitalizeAppliance);
    }

    recipe.capitalizeUstensils.forEach(ustensil => {
      if (!activeFilters.has(ustensil) && !filtersData.ustensils.includes(ustensil)) {
        filtersData.ustensils.push(ustensil);
      }
    });
  }
}
