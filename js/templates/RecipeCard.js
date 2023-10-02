class RecipeCard {
    constructor(recipe) {
        this._recipe = recipe;
    }

    createRecipeCard() {
        const $wrapper = document.createElement('div');
        $wrapper.classList.add('card');
    }
}