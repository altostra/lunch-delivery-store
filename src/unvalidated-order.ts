import { Order } from './order-types'

interface Request {
    getBody: <T>() => Promise<T>
}

export async function handler(req: Request) {
    const order: Order = await req.getBody<Order>()
    await processOrder(order)
}

async function processOrder(order: Order): Promise<void> {

}