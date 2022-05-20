import { Checker } from '../../class'
import errorMessages from '../../utils'
import TypeIDs from '../../../utils'

const checker = new Checker(Object.values(TypeIDs), (type) => {
    switch (type) {
        case TypeIDs.ARRAY:
            return (v) => Array.isArray(v)
        case TypeIDs.CHARACTER:
            return (v) => typeof v === 'string' && v.length === 1
        case TypeIDs.FLOAT:
            return (v) =>
                typeof v === 'number' &&
                !Number.isInteger(v) &&
                !Number.isNaN(v)
        case TypeIDs.INTEGER:
            return (v) => Number.isInteger(v)
        case TypeIDs.NULL:
            return (v) => v === null
        case TypeIDs.OBJECT:
            return (v) => typeof v === 'object' && v !== null
        default:
            return (v) => {
                const typeId = Object.entries(TypeIDs).find(
                    ([_type, id]) => id === type,
                )
                if (typeId !== undefined) {
                    return typeof v === typeId[0].toLowerCase()
                }
                throw new Error(errorMessages.unexpected)
            }
    }
})

export default checker
