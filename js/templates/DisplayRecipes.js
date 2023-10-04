class DisplayRecipes {
    constructor($wrapperRecipes, recipes) {
        this._$wrapperRecipes = $wrapperRecipes
        this._recipes = recipes //référence pour toutes les recettes
    }

    renderAll() {
        // forEach a effectué avec la liste d'id renvoyé par SearchRecipes
        this._reset()
        this._recipes.forEach(recipe => {
            this._render(recipe)
        });
    }

    renderFiltered(filteredRecipes) {
        this._reset()
        for (const id of filteredRecipes) {
            const recipe = this._recipes.get(id)
            this._render(recipe)
        }
    }

    _render(recipe) {
        const template = new RecipeCard(recipe);
        this._$wrapperRecipes.appendChild(template.createRecipeCardV2());
    }

    _reset() {
        this._$wrapperRecipes.innerHTML = "";
    }

    _updateFilter() {

    }

    get recipes() {
        return this._recipes
    }
}