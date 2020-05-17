export interface Order {
    address: string
    servings: Serving[]
}

export interface Serving {
    quantity: number
    dish: FoodOrder
}

export type FoodOrder =
    | Pizza
    | Hamburger

export interface Pizza {
    type: 'pizza'
    toppings: Topping[]
    size: PizzaSize
}

export interface Topping {
    type: ToppingType
    cover: ToppingCover
}
export type ToppingType =
    | 'olives'
    | 'onions'
    | 'bell-peppers'
    | 'chili'
    | 'pepperoni'

export type ToppingCover =
    | '1st-half'
    | '2nd-half'
    | 'all'

export type PizzaSize =
    | 'S'
    | 'M'
    | 'L'
    | 'XL'
    | 'XXL'

export interface Hamburger {
    type: 'hamburger'
    doneness: Doneness
    tomatos?: boolean
    lettuce?: boolean
    pickles?: boolean
}

export type Doneness =
    | 'R'
    | 'MR'
    | 'M'
    | 'MW'
    | 'WD'