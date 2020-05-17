import { Order } from './order-types'
import { isOrder } from './validations'

interface Request {
    getBody: <T>() => Promise<T>
}

export async function handler(req: Request) {
    const order: unknown = await req.getBody<unknown>()

    if (!isOrder(order)) {
        throw new Error('Invalid order')
    }

    await processOrder(order)
}

async function processOrder(order: Order): Promise<void> {

}