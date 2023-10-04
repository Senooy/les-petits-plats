class App {
  constructor() {
    this.$wrapperRecipes = document.querySelector("#recipes");
    this.$wrapperRecipesCount = document.querySelector('#displayRecipesCount')
    
    this.ingredientList = document.querySelector('#ingredient')
    this.applianceList = document.querySelector('#appliance')
    this.ustensilList = document.querySelector('#ustensil')
  }

  main() {
    const recipes = new Map()
    
    recipesData.forEach((recipe) => {
      const recipeInstance = new Recipe(recipe);
      recipes.set(recipeInstance.id, recipeInstance);
    });

    const recipesIndex = new RecipesIndex(recipes);

    recipes.forEach(recipe => {
      const template = new RecipeCard(recipe);
      this.$wrapperRecipes.appendChild(template.createRecipeCardV2());
    });

    const createListItems = (container, data) => {
      for (const item in data) {
        const $wrapper = document.createElement('li');
        $wrapper.classList.add('list-group-item');
        $wrapper.innerText = data[item].original;
        container.appendChild($wrapper);
      }
    }
    
    createListItems(this.ingredientList, recipesIndex.ingredients);
    createListItems(this.applianceList, recipesIndex.appliances);
    createListItems(this.ustensilList, recipesIndex.ustensils);

  
    this.$wrapperRecipesCount.innerHTML = `${recipes.length} ${recipes.length > 1 ? 'recettes' : 'recette'}`

    console.log(recipesIndex);

    console.log(recipesIndex.ingredients['citron']);
    console.log(recipesIndex.ustensils['couteau']);
    console.log(recipesIndex.appliances['four']);

    console.log(""); 
  }
}

const app = new App();

app.main();

