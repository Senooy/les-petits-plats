class App {
    constructor() {
        this.$recipesWrapper = document.querySelector("#recipes");
    }

    main() {
        recipes.map(recipe =>  new Recipe(recipe))
            .forEach(recipe => {
                const template = new RecipeCard(recipe);
                this.$recipesWrapper.appendChild(template.createRecipeCard());
            });
    }
}

const app = new App();
app.main();