class RecipesIndex {
    constructor(recipes) {
    // Each map contains all the available values as keys, 
    // and the corresponding value is an array of recipe IDs that are associated with that value
        this._ingredients = {}
        this._appliances = {}
        this._ustensils = {}

        this._init(recipes)
    }

    _init(recipes) {
        const addRef = (id, array, ref) => {
            const normalizeRef = ref.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            const capitalizeRef = ref[0].toUpperCase() + ref.slice(1).toLowerCase()

            if (!array[normalizeRef]) {
                array[normalizeRef] = {
                    original: capitalizeRef,
                    ids: []
                }
            }
            array[normalizeRef].ids.push(id)
        }

        recipes.forEach(recipe => {
            const idRecipe = recipe.id;

            // ingredient Index
            recipe.ingredients.forEach(ingredient => {
                addRef(idRecipe, this._ingredients, ingredient.name)
            });

            // appliance Index
            addRef(idRecipe, this._appliances, recipe.appliance)

            // ustensils Index
            recipe.ustensils.forEach(ustensil => {
                addRef(idRecipe, this._ustensils, ustensil)
            });
        });
    }

    get ingredients() {
        return this._ingredients;
    }

    get appliances() {
        return this._appliances
    }

    get ustensils() {
        return this._ustensils;
    }
}