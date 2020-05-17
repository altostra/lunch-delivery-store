import { Order } from './order-types'
import { arrayOf, objectOf } from '@altostra/type-validations'
import { any, string } from '@altostra/type-validations/lib/primitives'

interface Request {
    getBody: <T>() => Promise<T>
}

const isOrder = objectOf({
    address: string,
    servings: arrayOf(any),
})

export async function handler(req: Request) {
    const order: unknown = await req.getBody<unknown>()

    if (!isOrder(order)) {
        throw new Error('Invalid order')
    }

    await processOrder(order)
}

async function processOrder(order: Order): Promise<void> {

}