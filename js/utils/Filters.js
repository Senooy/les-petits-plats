class Filters {
    constructor(idIngredientsList, idAppliancesList, idUstensilsList) {
        this._ingredientsList = document.querySelector(`#${idIngredientsList}`)
        this._appliancesList = document.querySelector(`#${idAppliancesList}`)
        this._ustensilsList = document.querySelector(`#${idUstensilsList}`)

        this._filterList = new FilterListTemplate()
    }

    update(ingredientsList, appliancesList, ustensilesList) {
        // clean the lists
        this._ingredientsList.innerHTML = "";
        this._appliancesList.innerHTML = ""
        this._ustensilsList.innerHTML = ""

        // new filters lists
       this._filterList.render(this._ingredientsList, ingredientsList)
       this._filterList.render(this._appliancesList, appliancesList)
        this._filterList.render(this._ustensilsList, ustensilesList)
    }
}

class Tag {
    constructor(idTagWrapper, tag) {
        this._$wrapperTags = document.querySelector(`#${idTagWrapper}`);
        this._tag = tag;
    }

    addTag() {
       const tag = new TagCard(this._tag);
       const template = tag.createTagCard();
        this._$wrapperTags.appendChild(template);
    }

    removeTag() {
        
    }
}