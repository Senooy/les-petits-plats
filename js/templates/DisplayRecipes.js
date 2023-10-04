class DisplayRecipes {
    constructor($wrapperRecipes, recipes) {
        this._$wrapperRecipes = $wrapperRecipes
        this._recipes = recipes //référence pour toutes les recettes
    }

    render() {
        // forEach a effectué avec la liste d'id renvoyé par SearchRecipes
        this._recipes.forEach(recipe => {
            const template = new RecipeCard(recipe);
            this._$wrapperRecipes.appendChild(template.createRecipeCardV2());
          });
      
    }
}