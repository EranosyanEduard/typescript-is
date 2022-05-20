import { TypeName } from '../models'

const TYPES: TypeName[] = [
    'ARRAY',
    'BOOLEAN',
    'CHARACTER',
    'FLOAT',
    'FUNCTION',
    'INTEGER',
    'NULL',
    'NUMBER',
    'OBJECT',
    'STRING',
    'UNDEFINED',
]

const TypeIdentifiers = TYPES.reduce((acc, type, index) => {
    acc[type] = index
    return acc
}, {} as Record<TypeName, number>)

export default TypeIdentifiers
