class ToggleFilters {
    constructor(filtersListId) {
        this._$wrappersFiltersList = this._getWrappers(filtersListId)
        this._active = false
    }

    _getWrappers(filtersListId) {
        return filtersListId.map(id => document.querySelector(`#${id}`));
    }

    addEvent() {
        this._$wrappersFiltersList.forEach($wrapper => {
            const id = $wrapper.id.split("-").shift();
            const btn = $wrapper.querySelector('button')
            const filter = $wrapper.querySelector(`#${id.concat('-wrapper')}`)

            btn.addEventListener('click', () => {
                this._show(btn, filter, $wrapper)
            })

            const close = $wrapper.querySelector('i')
            close.addEventListener('click', () => {
                this._hide(btn, filter, $wrapper)
            })


            document.addEventListener('click', event => {
                const isClickedInsideWrapper = this._$wrappersFiltersList.some($wrapper => $wrapper.contains(event.target));
                if (!isClickedInsideWrapper && this._active) {
                    this._hide();
                }
            });
        })
    }

    _show(btn, filter, $wrapper) {
        if (this._active) {
            this._hide()
        }

        this._active = true;
        this._openFilter = filter
        this._btnOpenFilter = btn
        this._openWrapper = $wrapper

        this._openWrapper.classList.add('col-6')

        this._btnOpenFilter.classList.add('d-none')
        this._openFilter.classList.remove('d-none')

        this._openFilter.querySelector('input').focus()
    }

    _hide() {
        this._active = false;

        this._openWrapper.classList.remove('col-6')

        this._btnOpenFilter.classList.remove('d-none')
        this._openFilter.classList.add('d-none')
    }

    get wrappersFilters() {
        return this._$wrappersFiltersList
    }
}