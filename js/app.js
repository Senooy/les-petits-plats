class App {
  constructor() {
    this.$recipesWrapper = document.querySelector("#recipes");
  }

  main() {
    const recipes = recipesData.map(recipe => new Recipe(recipe));
    const recipesIndex = new RecipesIndex(recipes);

    recipes.forEach(recipe => {
      const template = new RecipeCard(recipe);
      this.$recipesWrapper.appendChild(template.createRecipeCardV2());
    });

    console.log(recipesIndex);

    console.log(recipesIndex.ingredients['citron']);
    console.log(recipesIndex.ustensils['couteau']);
    console.log(recipesIndex.appliances['four']);

    console.log(""); 
  }
}

const app = new App();

app.main();