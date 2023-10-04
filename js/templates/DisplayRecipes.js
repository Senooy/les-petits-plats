class DisplayRecipes {
    constructor($wrapperRecipes, recipes, $wrapperRecipesCount, filters) {
      this._$wrapperRecipes = $wrapperRecipes;
      this._recipes = recipes;
      this._$wrapperRecipesCount = $wrapperRecipesCount;
      this._filters = filters;
    }
  
    renderAll() {
      this._reset();
      const filtersData = this._initializeFilters();
      
      this._recipes.forEach(recipe => {
        this._render(recipe);
        this._updateFilters(recipe, filtersData);
      });
  
      this._updateRecipesCount(this._recipes.size);
      this._filters.update(
        filtersData.ingredients,
        filtersData.appliances,
        filtersData.ustensils
      );
    }
  
    renderFiltered(filteredRecipes) {
      this._reset();
      const filtersData = this._initializeFilters();
  
      for (const id of filteredRecipes) {
        const recipe = this._recipes.get(id);
        this._render(recipe);
        this._updateFilters(recipe, filtersData);
      }
  
      this._updateRecipesCount(filteredRecipes.length);
      this._filters.update(
        filtersData.ingredients,
        filtersData.appliances,
        filtersData.ustensils
      );
    }
  
    _render(recipe) {
      const template = new RecipeCard(recipe);
      this._$wrapperRecipes.appendChild(template.createRecipeCardV2());
    }
  
    _reset() {
      this._$wrapperRecipes.innerHTML = "";
    }
  
    _updateRecipesCount(recipesCount) {
      this._$wrapperRecipesCount.innerHTML = `${recipesCount} ${
        recipesCount > 1 ? "recettes" : "recette"
      }`;
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
  
      if (!filtersData.appliances.includes(recipe.appliance)) {
        filtersData.appliances.push(recipe.appliance);
      }
  
      recipe.ustensils.forEach(ustensil => {
        if (!filtersData.ustensils.includes(ustensil)) {
            filtersData.ustensils.push(ustensil);
        }
      });
    }
  
    get recipes() {
      return this._recipes;
    }
  }
  