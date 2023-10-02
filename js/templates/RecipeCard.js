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

        const ingredients = this._recipe.ingredients.map(el => `
            <li class="list-group-item"><span class="fw-bold">${el.ingredient} ${el.quantity ? ': ' : ''} </span>${el.quantity}</li>
        `);
        const ingredientsHTML = ingredients.join('');

        const card = `
            <div class="card" style = "width: 23.75rem; height:22.75;">
                <!-- photo plat -->
                <div style="height: 11.12rem; background: #C7BEBE;"></div>

                <div class="card-body" style="background-color: E7E7E7;">
                    <div class="row py-2">
                        <div class="col-9">
                            <h5 class="card-title fw-light">${this._recipe.name}</h5>
                        </div>

                        <div class="col-3 text-end">${this._recipe.time}min</div>
                    </div>

                    <div class="row pt-2">
                        <div class="col-6">
                            <ul class="list-group">
                                ${ingredientsHTML}
                            </ul>
                        </div>

                        <div class="col-6">
                                <p>${this._recipe.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        `

        $wrapper.innerHTML = card;
        return $wrapper;
    }
}