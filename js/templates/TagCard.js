class FilterListTemplate {
    render($wrapperList, data) {
        for (const item in data) {
            const $wrapper = document.createElement('li');
            $wrapper.classList.add('list-group-item');
            $wrapper.innerText = data[item];

            $wrapperList.appendChild($wrapper);
        }
    }
}

class TagCard {
    constructor(tag) {
        this._tag = tag;
    }

    createTagCard() {
        const $wrapper = document.createElement('div')
        $wrapper.classList.add('col')

        $wrapper.innerHTML = `
            <div class="card">
                <div class="card-body btn btn-warning d-flex align-items-center justify-content-between" style="height: 3.13rem;">
                    ${this._tag}            
                    <button type="button" class="btn-close" disabled aria-label="Close"></button>
                </div>
            </div>
        `
        return $wrapper;
    }
}