class Ingredient {
    constructor(data) {
        this._ingredient = data.ingredient;
        this._quantity = data.quantity;
        this._unit = data.unit;
    }

    get ingredient() {
        return this._ingredient;
    }

    get quantity() {
        let unit = !this._unit ? '' : (this._unit === 'grammes' ? 'g' : (this._unit.length > 2 ? ` ${this._unit}` : this._unit)); 

        return `${this._quantity}${unit}`;
    }
}