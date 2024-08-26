// Write your code here
    function Breakfast(food, drink) {
    this.food = food
    this.drink = drink
}

class Lunch extends Breakfast {
    constructor(salad, soup, drink) {
        super()
        this.salad = salad
        this.soup = soup
        this.drink = drink
    }
}

class Dinner extends Lunch {
    constructor(salad, soup, entree, dessert) {
        super()
        this.salad = salad
        this.soup = soup
        this.entree = entree
        this.dessert = dessert
    }
}

