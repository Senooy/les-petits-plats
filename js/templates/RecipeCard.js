class RecipeCard {
    constructor(recipe) {
        this._recipe = recipe;
    }

    createRecipeCard() {
        const $wrapper = document.createElement('div');
        $wrapper.classList.add('col');

        let ingredient = "";
        this._recipe.ingredients.forEach(el => {
            ingredient += `
                <li class="list-group-item"><span class="fw-bold">${el.ingredient} : </span>${el.quantity}</li>
            `
        });

        const ingredients = this._recipe.ingredients.map(ingredient => `
            <li class="list-group-item"><span class="fw-bold">${ingredient.name} ${ingredient.hasQuantity ? ': ' : ''} </span>${ingredient.quantity}</li>
        `);
        const ingredientsHTML = ingredients.join('');

        const card = `
            <article class="card" style = "width: 23.75rem; height:23rem;">

            <img src="public/assets/img/${this._recipe.image}" class="card-img-top h-50 ratio ratio-4x3" alt="...">


                <div class="card-body" style="background-color: E7E7E7;">
                    <div class="row py-2">
                        <div class="col-9">
                            <h5 class="card-title fw-light">${this._recipe.name}</h5>
                        </div>

                        <div class="col-3 text-end">${this._recipe.time}min</div>
                    </div>

                    <div class="row pt-2 h-100">
                        <div class="col-6">
                            <ul class="list-unstyle">
                                ${ingredientsHTML}
                            </ul>
                        </div>

                        <div class="col-6 h-100 d-flex flex-column align-items-stretch">
                                <p class="class="d-inline-block text-truncate" style="max-width: 150px;">${this._recipe.description}</p>
                        </div>
                    </div>
                </div>
            </article>
        `

        $wrapper.innerHTML = card;
        return $wrapper;
    }
}