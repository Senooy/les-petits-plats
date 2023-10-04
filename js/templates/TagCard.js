class TagCard {
    constructor($wrapper) {
        this._$wrapperTags = $wrapper;
    }

    render(tag) {
        const $wrapper = document.createElement('div')
        $wrapper.classList.add('col')

        $wrapper.innerHTML = `
            <div class="card">
                <div class="card-body btn btn-warning d-flex align-items-center justify-content-between" style="height: 3.13rem;">
                    ${tag}            
                    <button type="button" class="btn-close" disabled aria-label="Close"></button>
                </div>
            </div>
        `

        this._$wrapperTags.appendChild($wrapper);
    }
}