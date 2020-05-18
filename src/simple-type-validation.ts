import { Order } from './order-types'
import { arrayOf, objectOf, primitives } from '@altostra/type-validations'

interface Request {
    body: any
}

const isOrder = objectOf({
    address: primitives.string,
    servings: arrayOf(primitives.any),
})

export async function handler(req: Request) {
    const order: unknown = req.body

    if (!isOrder(order)) {
        throw new Error('Invalid order')
    }

    await processOrder(order)
}

async function processOrder(order: Order): Promise<void> {

}