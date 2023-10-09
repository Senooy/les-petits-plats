class Filters {
    constructor(filtersListId, wrapperTagsId) {
        this._filtersListId = filtersListId
        this._$wrapperFiltersList = this._getWrappers()
        this._$wrapperTags = document.querySelector(`#${wrapperTagsId}`)
    }

    _getWrappers() {
        return this._filtersListId.map(id => document.querySelector(`#${id}`));
    }

    update(filtersData) {
        this._$wrapperFiltersList.forEach($wrapperFilter => {
            $wrapperFilter.innerHTML = ""
            const key = $wrapperFilter.id

            filtersData[key].forEach(item => {
                const filterTemplate = new FilterTemplate(item)
                const template = filterTemplate.createItem()

                $wrapperFilter.appendChild(template)
            })
        });
    }
}
