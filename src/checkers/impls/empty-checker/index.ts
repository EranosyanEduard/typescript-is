import { Checker } from '../../class'
import errorMessages from '../../utils'
import TypeIDs from '../../../utils'

const AllowedTypeIDs = Object.entries(TypeIDs)
    .filter(([type]) => {
        switch (<keyof typeof TypeIDs>type) {
            case 'ARRAY':
            case 'OBJECT':
            case 'STRING':
                return true
            default:
                return false
        }
    })
    .map(([_type, index]) => index)

const checker = new Checker<number, object | string>(AllowedTypeIDs, (type) => {
    switch (type) {
        case TypeIDs.ARRAY:
        case TypeIDs.OBJECT:
        case TypeIDs.STRING:
            return (v) =>
                Array.isArray(v) || typeof v === 'string'
                    ? v.length === 0
                    : Object.keys(v).length === 0
        default:
            return (_) => {
                throw new Error(errorMessages.unexpected)
            }
    }
})

export default checker
