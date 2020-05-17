import { Order } from './order-types'
import { isOrder } from './validations'
import { assertBy, Assertion, ValidationRejection } from '@altostra/type-validations'

declare const logger: { warn: (...args: any[]) => any }
declare class FancyBadRequestError extends Error {
    constructor(message: string, data: any)
}


interface Request {
    getBody: <T>() => Promise<T>
}

// An assertion must be explicitly typed in order to be used.
// The `Assertion<T>` type can be used for that.
export const validateOrder: Assertion<Order> = assertBy(
    isOrder,
    invalidInputErrorFactory
)

export async function handler(req: Request) {
    const order: unknown = await req.getBody<unknown>()

    validateOrder(order)

    await processOrder(order)
}

function invalidInputErrorFactory(value: unknown, rejections: ValidationRejection[]): any {
    logger.warn('Invalid input', { value, rejections })
    // We return the error to be thrown
    return new FancyBadRequestError('Invalid request', { value, rejections })
}

async function processOrder(order: Order): Promise<void> {

}