class Ingredient {
    constructor(data) {
        this._ingredient = data.ingredient;
        this._quantity = data.quantity;
        this._unit = data.unit;
    }

    get name() {
        return this._ingredient;
    }

    get normalizeName() {
        return this._ingredient.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    get unit() {
        return !this._unit ? '' : (this._unit === 'grammes' ? 'g' : (this._unit.length > 2 ? ` ${this._unit}` : this._unit)); 
    }

    get quantity() {
        return this._quantity ? `${this._quantity}${this.unit}` : '';
    }

    get hasQuantity() {
        return this._quantity ? true : false;
    }
}