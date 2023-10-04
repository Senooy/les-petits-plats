class SearchRecipes  {
    constructor(recipes, recipesIndex) {
        this._recipes = recipes;
        this._recipesIndex = recipesIndex;
    }

    // mainSearch(searchTerm) {
    //     const filtredIdRecipes = []
    //     const normalizeSearch = this._toNormalize(searchTerm)

    //     this._recipes.forEach(recipe => {
            
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

    mainSearch(searchTerm) {
        const filteredRecipes = this._recipes.filter((recipe) => {
          const normalizedSearch = this._toNormalize(searchTerm);
      
          if (
            this._toNormalize(recipe.name).includes(normalizedSearch) ||
            this._toNormalize(recipe.description).includes(normalizedSearch)
          ) {
            return true;
          }
      
          return recipe.ingredients.some((ingredient) =>
            this._toNormalize(ingredient.name).includes(normalizedSearch)
          );
        });
      
        const filteredRecipeIds = filteredRecipes.map((recipe) => recipe.id);
      
        // Use filteredRecipeIds as needed
      }

      tagSeach(tag, seachTerm) {

      }

    _toNormalize(str) {
        return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
}