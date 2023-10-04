class DisplayRecipes {
  constructor($wrapperRecipes, $wrapperRecipesCount, filters) {
    this._$wrapperRecipes = $wrapperRecipes;
    this._$wrapperRecipesCount = $wrapperRecipesCount;
    this._filters = filters;
  }

  render(recipes) {
    this._$wrapperRecipes.innerHTML = "";
    const filtersData = this._initializeFilters();

    recipes.forEach(recipe => {
      this._render(recipe);
      this._updateFilters(recipe, filtersData);
    });

    this._updateRecipesCount(recipes);

    this._filters.update(
      filtersData
    );
  }

  _render(recipe) {
    const template = new RecipeCard(recipe);
    this._$wrapperRecipes.appendChild(template.createRecipeCardV2());
  }

  _reset() {
    this._$wrapperRecipes.innerHTML = "";
  }

  _updateRecipesCount(recipes) {
    let recipesCount
    if (recipes instanceof Map) {
      recipesCount = recipes.size
    } else if (recipes instanceof Array) {
      recipesCount = recipes.length
    } else {
      throw new Error(`recipes must be a map or an array`)
    }

    this._$wrapperRecipesCount.innerHTML = `${recipesCount} ${recipesCount > 1 ? "recettes" : "recette"}`;
  }

  _initializeFilters() {
    return {
      ingredients: [],
      appliances: [],
      ustensils: []
    };
  }

  _updateFilters(recipe, filtersData) {
    recipe.ingredients.forEach(ingredient => {
      if (!filtersData.ingredients.includes(ingredient.capitalizeName)) {
        filtersData.ingredients.push(ingredient.capitalizeName);
      }
    });

    if (!filtersData.appliances.includes(recipe.capitalizeAppliance)) {
      filtersData.appliances.push(recipe.capitalizeAppliance);
    }

    recipe.capitalizeUstensils.forEach(ustensil => {
      if (!filtersData.ustensils.includes(ustensil)) {
        filtersData.ustensils.push(ustensil);
      }
    });
  }

  get recipes() {
    return this._recipes;
  }
}
