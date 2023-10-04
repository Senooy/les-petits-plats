class Filters {
    constructor(idIngredientsList, idAppliancesList, idUstensilsList) {
        this._ingredientsList = document.querySelector(`#${idIngredientsList}`)
        this._appliancesList = document.querySelector(`#${idAppliancesList}`)
        this._ustensilsList = document.querySelector(`#${idUstensilsList}`)
    }

    update(ingredientsList, appliancesList, ustensilesList) {
        // clean the lists
        this._ingredientsList.innerHTML = "";
        this._appliancesList.innerHTML = ""
        this._ustensilsList.innerHTML = ""

        // new filters lists
        const ingredientsFilter = new FilterList(this._ingredientsList, ingredientsList)
        ingredientsFilter.createFilterListItem();

        const applianceFilter = new FilterList(this._appliancesList, appliancesList)
        applianceFilter.createFilterListItem()

        const ustensilsFilter = new FilterList(this._ustensilsList, ustensilesList)
        ustensilsFilter.createFilterListItem()
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