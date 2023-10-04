class App {
  constructor() {
    this.$wrapperRecipes = document.querySelector("#recipes");
    this.$wrapperRecipesCount = document.querySelector('#displayRecipesCount')
    
    this.ingredientList = document.querySelector('#ingredients')
    this.applianceList = document.querySelector('#appliances')
    this.ustensilList = document.querySelector('#ustensils')
  }

  main() {
    // contains ALL the recipes with their id for keys
    const recipes = new Map()
    
    recipesData.forEach((recipe) => {
      const recipeInstance = new Recipe(recipe);
      recipes.set(recipeInstance.id, recipeInstance);
    });

    // display ALL the recipes 
    const displayRecipe = new DisplayRecipes(this.$wrapperRecipes, recipes)
    displayRecipe.renderAll()

    // Generates 3 index for each filter category.
    const recipesIndex = new RecipesIndex(recipes);
    

    // liste déroulante avec RecipesIndex
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

    
    // Search system
    const searchRecipes = new SearchRecipes(displayRecipe, recipesIndex)
    searchRecipes.setupSearchInput()
    
  
    // how many recipes return ? (count from recipes)
    this.$wrapperRecipesCount.innerHTML = `${recipes.size} ${recipes.size > 1 ? 'recettes' : 'recette'}`

    console.log(`app : `);
    console.log(`recipeIndex : ${recipesIndex}`);

    console.log(`array ingredients citron : ${recipesIndex.ingredients['citron']}`);
    console.log(`array ustensils couteau : ${recipesIndex.ustensils['couteau']}`);
    console.log(`array appliances four : ${recipesIndex.appliances['four']}`);

    console.log(""); 
  }
}

const app = new App();

app.main();

