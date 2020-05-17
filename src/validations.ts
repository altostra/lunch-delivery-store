import {
    Doneness,
    Hamburger,
    Order,
    Pizza,
    PizzaSize,
    Serving,
    ToppingCover,
    ToppingType
} from './order-types'
import {
    anyOf,
    arrayOf,
    enumOf,
    is,
    objectOf
} from '@altostra/type-validations'
import { maybeBoolean, number, string } from '@altostra/type-validations/lib/primitives'

const isTopping = objectOf({
    type: enumOf<ToppingType>(
        'olives',
        'onions',
        'bell-peppers',
        'chili',
        'pepperoni'
    ),
    cover: enumOf<ToppingCover>('1st-half', '2nd-half', 'all')
})

const isPizza = objectOf<Pizza>({
    type: is('pizza'),
    toppings: arrayOf(isTopping),
    size: enumOf<PizzaSize>('S', 'M', 'L', 'XL', 'XXL'),
})

const isHamburger = objectOf<Hamburger>({
    type: is('hamburger'),
    doneness: enumOf<Doneness>(
        'R',
        'MR',
        'M',
        'MW',
        'WD'
    ),
    lettuce: maybeBoolean,
    tomatos: maybeBoolean,
    pickles: maybeBoolean,
})

const isFoodOrder = anyOf(isPizza, isHamburger)

const isServing = objectOf<Serving>({
    quantity: isQuantity,
    dish: isFoodOrder,

})

export const isOrder = objectOf<Order>({
    address: string,
    servings: arrayOf(isServing)
})

function isQuantity(value: unknown) {
    return typeof value === 'number' &&
        value > 0 &&
        Number.isInteger(value)
}