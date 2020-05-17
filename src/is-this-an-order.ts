import { Order } from './order-types'
import { isOrder } from './validations'

interface Request {
    getBody: <T>() => Promise<T>
}

export async function handler(req: Request) {
    // Is this an order?
    const order: unknown = {
        address: '127.0.0.1',
        servings: [{
            quantity: 1,
            dish: {
                type: 'pizza',
                size: 'XL',
                toppings: [{
                    type: 'onions',
                    cover: 'all',
                }, {
                    type: 'chilli',
                    cover: '1st-half',
                }, {
                    type: 'bell-peppers',
                    cover: '2nd-half'
                },]
            }
        }]
    }

    if (!isOrder(order, console.log)) {
        throw new Error('Invalid order')
    }

    await processOrder(order)
}

async function processOrder(order: Order): Promise<void> {

}