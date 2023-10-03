class RecipeCard {
    constructor(recipe) {
        this._recipe = recipe;
    }

    createRecipeCardV1() {
        const $wrapper = document.createElement('div');
        $wrapper.classList.add('col');

        const ingredients = this._recipe.ingredients.map(ingredient => `
            <li class="list-group-item"><span class="fw-bold">${ingredient.name} ${ingredient.hasQuantity ? ': ' : ''} </span>${ingredient.quantity}</li>
        `);
        const ingredientsHTML = ingredients.join('');

        const card = `
            <article class="card" style = "width: 23.75rem; height:23rem;">

            <img src="public/assets/img/recipes/${this._recipe.image}" class="card-img-top h-50 ratio ratio-4x3" alt="...">


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

    createRecipeCardV2() {
        const $wrapper = document.createElement('div');
        $wrapper.classList.add('col');

        const ingredients = this._recipe.ingredients.map(ingredient => `
        <div class="col">
            <h4 class="fs-5">${ingredient.name}</h4>
            <p class="fs-5">${ingredient.quantity}</p>
        </div>
        `);
        const ingredientsHTML = ingredients.join('');

        const card = `
            <article class="card overflow-hidden" style ="width: 23.75rem; height:45.69rem;">

                <img src="public/assets/img/recipes/${this._recipe.image}" class="card-img-top w-100 object-fit-cover" style="height: 15.81rem" alt="...">

                    <div class="card-body">
                        <h2 class="card-title fs-4">${this._recipe.name}</h2>

                        <h3 class="text-uppercase text-grey fs-6">recette</h3>
                        <p class="card-text overflow-hidden" style="height: 4.75rem">${this._recipe.description}</p>

                        <h3 class="text-uppercase fs-6">ingrédients</h3>
                        <div class="row row-cols-2">
                            ${ingredientsHTML}
                        </div>
                    </div>
            </article>
        `

        $wrapper.innerHTML = card;
        return $wrapper;
    }
}