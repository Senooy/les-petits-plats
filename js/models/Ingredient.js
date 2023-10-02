class Ingredient {
    constructor(data) {
        this._ingredient = data.ingredient;
        this._quantity = data.quantity;
        this._unit = data.unit;
    }

    get ingredient() {
        return this._ingredient;
    }

    get unit() {
        return !this._unit ? '' : (this._unit === 'grammes' ? 'g' : (this._unit.length > 2 ? ` ${this._unit}` : this._unit)); 
    }

    get quantity() {
        return this._quantity ? `${this._quantity}${this.unit}` : '';
    }
}