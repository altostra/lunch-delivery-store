import { Order } from './order-types'

interface Request {
    getBody: <T>() => Promise<T>
}

export async function handler(req: Request) {
    const order = await req.getBody<unknown>()

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