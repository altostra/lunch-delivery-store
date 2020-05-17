import { Order } from './order-types'
import { isOrder } from './validations'
import { assertBy, Assertion } from '@altostra/type-validations'

declare const logger: { warn: (...args: any[]) => any }

const checkOrder: Assertion<Order> = assertBy(
    isOrder,
    (invalidData, rejections) => {
        const message = 'Request data is invalid'
        logger.warn(message, { invalidData, rejections })

        return new Error(message)
    }
)