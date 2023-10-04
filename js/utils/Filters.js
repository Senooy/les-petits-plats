class Filters {
    constructor(idIngredientsList, idAppliancesList, idUstensilsList) {
        this._ingredientsList = document.querySelector(`#${idIngredientsList}`)
        this._appliancesList = document.querySelector(`#${idAppliancesList}`)
        this._ustensilsList = document.querySelector(`#${idUstensilsList}`)
    }

    update() {
        
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