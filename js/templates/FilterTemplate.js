class FilterTemplate {
    constructor(data) {
        this._data = data
    }

    createItem() {
        const $wrapper = document.createElement('li');
        $wrapper.classList.add('list-group-item');
        $wrapper.innerText = this._data;

        return $wrapper
        }
    
    createTagCard(data) {
        const $wrapper = document.createElement('div')
        $wrapper.classList.add('col')

        $wrapper.innerHTML = `
            <div class="card">
                <div class="card-body btn btn-warning d-flex align-items-center justify-content-between" style="height: 3.13rem;">
                    ${data}            
                    <button type="button" class="btn-close" aria-label="Close"></button>
                </div>
            </div>
        `
        return $wrapper;
    }
}
