class Filters {
    constructor(filtersListId, wrapperTagsId, searchRecipes) {
        this._filtersListId = filtersListId
        this._$wrapperFiltersList = this._getWrappers()
        this._$wrapperTags = document.querySelector(`#${wrapperTagsId}`)
        this._searchRecipes = searchRecipes
    }

    _getWrappers() {
        return this._filtersListId.map(id => document.querySelector(`#${id}`));
    }

    update(filtersData) {
        this._$wrapperFiltersList.forEach($wrapperFilter => {
            $wrapperFilter.innerHTML = ""
            const key = $wrapperFilter.id

            filtersData[key].forEach(item => {
                const filterTemplate = new FilterTemplate(item, key)
                const template = filterTemplate.createItem()

                template.addEventListener('click', () => {
                    const tagTxt = template.textContent;
                    const $wrapper = filterTemplate.createTagCard(tagTxt);

                    this._searchRecipes.searchByFilter(filterTemplate.filterType, tagTxt); 

                    const btnClose = $wrapper.querySelector('button')
                    btnClose.addEventListener('click', () => {
                        $wrapper.remove()
                    })

                    this._$wrapperTags.appendChild($wrapper)
                  });

                $wrapperFilter.appendChild(template)
            })
        });
    }
}
