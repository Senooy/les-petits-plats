class Filters extends StringUtils {
    constructor($wrapperFiltersList, wrapperTagsId, searchRecipes) {
        super();
        this._$wrapperFiltersList = $wrapperFiltersList
        this._$wrapperTags = document.querySelector(`#${wrapperTagsId}`);
        this._searchRecipes = searchRecipes;
    }


    update(filtersData) {
        this._$wrapperFiltersList.forEach($wrapper => {
            const filterType = $wrapper.id.split("-").shift();
            const $wrapperFilter = $wrapper.querySelector(`#${filterType}`)

            this._clearFilterAndReset(filtersData[filterType], $wrapperFilter, filterType)
            this._clearInput($wrapperFilter)

            this._setupInputFilter($wrapperFilter, filtersData[filterType], filterType);
        });
    }

    _setupInputFilter($wrapperFilter, filterData, filterTemplate) {
        const input = this._getInput($wrapperFilter);

        input.addEventListener('input', () => {
            const searchValue = input.value.trim();
            if (searchValue === "") {
                this._clearFilterAndReset(filterData, $wrapperFilter, filterTemplate); // display ALL filters available
            } else {
                this._filterAndDisplayMatchingValues(searchValue, filterData, $wrapperFilter, filterTemplate);
            }
        });
    }

    _handleFilterClick(filterTemplate, template) {
        if (this._$wrapperTags.childElementCount == 0) {
            this._$wrapperTags.classList.add('mt-4')
        } 

        const tagTxt = template.textContent;
        const $wrapper = filterTemplate.createTagCardV1(tagTxt);
        console.log($wrapper);

        this._searchRecipes.searchByFilter(filterTemplate.filterType, tagTxt);

        const btnClose = $wrapper.querySelector('i');
        console.log(btnClose);
        btnClose.addEventListener('click', () => {
            $wrapper.remove();
            this._searchRecipes.removeFilter(tagTxt);

            if (this._$wrapperTags.childElementCount == 0) {
                this._$wrapperTags.classList.remove('mt-4')
            }
        });

        this._$wrapperTags.appendChild($wrapper);
    }

    _clearFilterAndReset(filterData, $wrapperFilter, filterType) {
        $wrapperFilter.innerHTML = "";

        if (filterData.length < 1) {
            $wrapperFilter.innerHTML = "Aucun filtre disponible"
        } else {
            filterData.forEach(filter => {
                const filterTemplate = new FilterTemplate(filterType, filter);

                const template = filterTemplate.createFilterV1();
                template.addEventListener('click', () => this._handleFilterClick(filterTemplate, template));

                $wrapperFilter.appendChild(template);
            });
        }

    }

    _filterAndDisplayMatchingValues(searchValue, filterData, $wrapperFilter, filterType) {
        const matchingValues = filterData.filter(filter => {
            const normalizeSearch = this.normalizeString(searchValue);
            return this.normalizeString(filter).includes(normalizeSearch);
        });

        $wrapperFilter.innerHTML = "";
        if (matchingValues.length > 0) {
            this._clearFilterAndReset(matchingValues, $wrapperFilter, filterType)
        } else {
            $wrapperFilter.innerHTML = "Aucune valeur trouvée";
        }
    }

    _clearInput($wrapperFilter) {
        const input = this._getInput($wrapperFilter)
        input.value = ""
    }

    _getInput($wrapperFilter) {
        return $wrapperFilter.parentElement.parentElement.querySelector('input')
    }
}
