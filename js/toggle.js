class ToggleFilter {
    constructor() {
        this._ingredient = document.querySelector('#ingredients')
        this._active = false
    }

    addEvent() {
        const btn = this._ingredient.querySelector('button')
        const filter = this._ingredient.querySelector('#ingredients-filter')

        btn.addEventListener('click', () => {
           this._show(btn, filter)
        })

        const close = filter.querySelector('i')
        console.log(close);
        close.addEventListener('click', () => {
            this._hide(btn, filter)
        })
    }

    _show(btn, filter) {
        this._active = true;

        this._ingredient.classList.add('col-6')

        btn.classList.add('d-none')
        filter.classList.remove('d-none')
    }

    _hide(btn, filter) {
        this._active = false;

        this._ingredient.classList.remove('col-6')

        btn.classList.remove('d-none')
        filter.classList.add('d-none')
    }
}

const toggle = new ToggleFilter()

toggle.addEvent()