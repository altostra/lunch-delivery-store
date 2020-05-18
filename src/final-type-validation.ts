import { Order } from './order-types'
import { isOrder } from './validations'

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

async function processOrder(order: Order): Promise<void> {

}