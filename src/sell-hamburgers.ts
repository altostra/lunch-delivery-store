import { Order } from './order-types'
import { isOrder } from './validations'

interface Request {
    getBody: <T>() => Promise<T>
}

export async function handler(req: Request) {
    // Is this an order?
    const order: Order = {
        address: '127.0.0.1',
        servings: [{
            quantity: -10,
            dish: {
                type: 'hamburger',
                doneness: 'MW',
            }
        }]
    }

    /* Errors with
     * {
     * path: [ 'quantity', 0, 'servings' ],
     * reason: 'Value [-10] failed validation',
     * propertyType: '* (isQuantity)'
     * }
     */
    if (!isOrder(order, console.log)) {
        throw new Error('Invalid order')
    }

    await processOrder(order)
}

async function processOrder(order: Order): Promise<void> {

}