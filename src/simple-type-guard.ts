import { Order } from './order-types'

interface Request {
    body: any
}

export async function handler(req: Request) {
    const order: unknown = req.body

    if (!isOrder(order)) {
        throw new Error('Invalid order')
    }

    await processOrder(order)
}

// Is this a rigorous input validation?
function isOrder(value: any): value is Order {
    return value !== null &&
        typeof value === 'object' &&
        typeof value.address === 'string' &&
        Array.isArray(value.servings)
}

async function processOrder(order: Order): Promise<void> {

}