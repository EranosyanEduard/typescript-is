import { assert } from 'chai'
import is from '..'
import TypeIDs from '../utils'

describe('Тест экземпляра класса Is', () => {
    const values: Record<keyof typeof TypeIDs, any> = {
        ARRAY: ['array'],
        BOOLEAN: true,
        CHARACTER: 'a',
        FLOAT: 0.5,
        FUNCTION() {},
        INTEGER: 0,
        NULL: null,
        NUMBER: 0,
        OBJECT: { key: 'value' },
        STRING: 'string',
        UNDEFINED: undefined,
    }

    describe('Тест интерфейса arr', () => {
        it('Тип аргумента Array', () => {
            assert.isTrue(is.arr(values.ARRAY))
        })
        it('Тип аргумента Boolean', () => {
            assert.isFalse(is.arr(values.BOOLEAN))
        })
        it('Аргумент типа Function', () => {
            assert.isFalse(is.arr(values.FUNCTION))
        })
        it('Аргумент типа Null', () => {
            assert.isFalse(is.arr(values.NULL))
        })
        it('Аргумент типа Number', () => {
            assert.isFalse(is.arr(values.NUMBER))
        })
        it('Аргумент типа Object', () => {
            assert.isFalse(is.arr(values.OBJECT))
        })
        it('Тип аргумента String', () => {
            assert.isFalse(is.arr(values.STRING))
        })
        it('Аргумент типа Undefined', () => {
            assert.isFalse(is.arr(values.UNDEFINED))
        })
    })

    describe('Тест интерфейса bool', () => {
        it('Тип аргумента Array', () => {
            assert.isFalse(is.bool(values.ARRAY))
        })
        it('Тип аргумента Boolean', () => {
            assert.isTrue(is.bool(values.BOOLEAN))
        })
        it('Аргумент типа Function', () => {
            assert.isFalse(is.bool(values.FUNCTION))
        })
        it('Аргумент типа Null', () => {
            assert.isFalse(is.bool(values.NULL))
        })
        it('Аргумент типа Number', () => {
            assert.isFalse(is.bool(values.NUMBER))
        })
        it('Аргумент типа Object', () => {
            assert.isFalse(is.bool(values.OBJECT))
        })
        it('Тип аргумента String', () => {
            assert.isFalse(is.bool(values.STRING))
        })
        it('Аргумент типа Undefined', () => {
            assert.isFalse(is.bool(values.UNDEFINED))
        })
    })

    describe('Тест интерфейса char', () => {
        it('Тип аргумента Array', () => {
            assert.isFalse(is.char(values.ARRAY))
        })
        it('Тип аргумента Boolean', () => {
            assert.isFalse(is.char(values.BOOLEAN))
        })
        it('Тип аргумента Character', () => {
            assert.isTrue(is.char(values.CHARACTER))
        })
        it('Аргумент типа Function', () => {
            assert.isFalse(is.char(values.FUNCTION))
        })
        it('Аргумент типа Null', () => {
            assert.isFalse(is.char(values.NULL))
        })
        it('Аргумент типа Number', () => {
            assert.isFalse(is.char(values.NUMBER))
        })
        it('Аргумент типа Object', () => {
            assert.isFalse(is.char(values.OBJECT))
        })
        it('Тип аргумента String', () => {
            assert.isFalse(is.char(values.STRING))
        })
        it('Аргумент типа Undefined', () => {
            assert.isFalse(is.char(values.UNDEFINED))
        })
    })

    describe('Тест интерфейса float', () => {
        it('Тип аргумента Array', () => {
            assert.isFalse(is.float(values.ARRAY))
        })
        it('Тип аргумента Boolean', () => {
            assert.isFalse(is.float(values.BOOLEAN))
        })
        it('Аргумент типа Float', () => {
            assert.isTrue(is.float(values.FLOAT))
        })
        it('Аргумент типа Function', () => {
            assert.isFalse(is.float(values.FUNCTION))
        })
        it('Аргумент типа Null', () => {
            assert.isFalse(is.float(values.NULL))
        })
        it('Аргумент типа Number', () => {
            assert.isFalse(is.float(values.NUMBER))
        })
        it('Аргумент типа Object', () => {
            assert.isFalse(is.float(values.OBJECT))
        })
        it('Тип аргумента String', () => {
            assert.isFalse(is.float(values.STRING))
        })
        it('Аргумент типа Undefined', () => {
            assert.isFalse(is.float(values.UNDEFINED))
        })
    })

    describe('Тест интерфейса fun', () => {
        it('Тип аргумента Array', () => {
            assert.isFalse(is.fun(values.ARRAY))
        })
        it('Тип аргумента Boolean', () => {
            assert.isFalse(is.fun(values.BOOLEAN))
        })
        it('Аргумент типа Function', () => {
            assert.isTrue(is.fun(values.FUNCTION))
        })
        it('Аргумент типа Null', () => {
            assert.isFalse(is.fun(values.NULL))
        })
        it('Аргумент типа Number', () => {
            assert.isFalse(is.fun(values.NUMBER))
        })
        it('Аргумент типа Object', () => {
            assert.isFalse(is.fun(values.OBJECT))
        })
        it('Тип аргумента String', () => {
            assert.isFalse(is.fun(values.STRING))
        })
        it('Аргумент типа Undefined', () => {
            assert.isFalse(is.fun(values.UNDEFINED))
        })
    })

    describe('Тест интерфейса int', () => {
        it('Тип аргумента Array', () => {
            assert.isFalse(is.int(values.ARRAY))
        })
        it('Тип аргумента Boolean', () => {
            assert.isFalse(is.int(values.BOOLEAN))
        })
        it('Аргумент типа Function', () => {
            assert.isFalse(is.int(values.FUNCTION))
        })
        it('Аргумент типа Integer', () => {
            assert.isTrue(is.int(values.INTEGER))
        })
        it('Аргумент типа Null', () => {
            assert.isFalse(is.int(values.NULL))
        })
        it('Аргумент типа Number', () => {
            assert.isTrue(is.int(values.NUMBER))
        })
        it('Аргумент типа Object', () => {
            assert.isFalse(is.int(values.OBJECT))
        })
        it('Тип аргумента String', () => {
            assert.isFalse(is.int(values.STRING))
        })
        it('Аргумент типа Undefined', () => {
            assert.isFalse(is.int(values.UNDEFINED))
        })
    })

    describe('Тест интерфейса null', () => {
        it('Тип аргумента Array', () => {
            assert.isFalse(is.null(values.ARRAY))
        })
        it('Тип аргумента Boolean', () => {
            assert.isFalse(is.null(values.BOOLEAN))
        })
        it('Аргумент типа Function', () => {
            assert.isFalse(is.null(values.FUNCTION))
        })
        it('Аргумент типа Null', () => {
            assert.isTrue(is.null(values.NULL))
        })
        it('Аргумент типа Number', () => {
            assert.isFalse(is.null(values.NUMBER))
        })
        it('Аргумент типа Object', () => {
            assert.isFalse(is.null(values.OBJECT))
        })
        it('Тип аргумента String', () => {
            assert.isFalse(is.null(values.STRING))
        })
        it('Аргумент типа Undefined', () => {
            assert.isFalse(is.null(values.UNDEFINED))
        })
    })

    describe('Тест интерфейса num', () => {
        it('Тип аргумента Array', () => {
            assert.isFalse(is.num(values.ARRAY))
        })
        it('Тип аргумента Boolean', () => {
            assert.isFalse(is.num(values.BOOLEAN))
        })
        it('Аргумент типа Function', () => {
            assert.isFalse(is.num(values.FUNCTION))
        })
        it('Аргумент типа Null', () => {
            assert.isFalse(is.num(values.NULL))
        })
        it('Аргумент типа Number', () => {
            assert.isTrue(is.num(values.NUMBER))
        })
        it('Аргумент типа Object', () => {
            assert.isFalse(is.num(values.OBJECT))
        })
        it('Тип аргумента String', () => {
            assert.isFalse(is.num(values.STRING))
        })
        it('Аргумент типа Undefined', () => {
            assert.isFalse(is.num(values.UNDEFINED))
        })
    })

    describe('Тест интерфейса obj', () => {
        it('Тип аргумента Array', () => {
            assert.isTrue(is.obj(values.ARRAY))
        })
        it('Тип аргумента Boolean', () => {
            assert.isFalse(is.obj(values.BOOLEAN))
        })
        it('Аргумент типа Function', () => {
            assert.isFalse(is.obj(values.FUNCTION))
        })
        it('Аргумент типа Null', () => {
            assert.isFalse(is.obj(values.NULL))
        })
        it('Аргумент типа Number', () => {
            assert.isFalse(is.obj(values.NUMBER))
        })
        it('Аргумент типа Object', () => {
            assert.isTrue(is.obj(values.OBJECT))
        })
        it('Тип аргумента String', () => {
            assert.isFalse(is.obj(values.STRING))
        })
        it('Аргумент типа Undefined', () => {
            assert.isFalse(is.obj(values.UNDEFINED))
        })
    })

    describe('Тест интерфейса str', () => {
        it('Тип аргумента Array', () => {
            assert.isFalse(is.str(values.ARRAY))
        })
        it('Тип аргумента Boolean', () => {
            assert.isFalse(is.str(values.BOOLEAN))
        })
        it('Аргумент типа Function', () => {
            assert.isFalse(is.str(values.FUNCTION))
        })
        it('Аргумент типа Null', () => {
            assert.isFalse(is.str(values.NULL))
        })
        it('Аргумент типа Number', () => {
            assert.isFalse(is.str(values.NUMBER))
        })
        it('Аргумент типа Object', () => {
            assert.isFalse(is.str(values.OBJECT))
        })
        it('Тип аргумента String', () => {
            assert.isTrue(is.str(values.STRING))
        })
        it('Аргумент типа Undefined', () => {
            assert.isFalse(is.str(values.UNDEFINED))
        })
    })

    describe('Тест интерфейса undef', () => {
        it('Тип аргумента Array', () => {
            assert.isFalse(is.undef(values.ARRAY))
        })
        it('Тип аргумента Boolean', () => {
            assert.isFalse(is.undef(values.BOOLEAN))
        })
        it('Аргумент типа Function', () => {
            assert.isFalse(is.undef(values.FUNCTION))
        })
        it('Аргумент типа Null', () => {
            assert.isFalse(is.undef(values.NULL))
        })
        it('Аргумент типа Number', () => {
            assert.isFalse(is.undef(values.NUMBER))
        })
        it('Аргумент типа Object', () => {
            assert.isFalse(is.undef(values.OBJECT))
        })
        it('Тип аргумента String', () => {
            assert.isFalse(is.undef(values.STRING))
        })
        it('Аргумент типа Undefined', () => {
            assert.isTrue(is.undef(values.UNDEFINED))
        })
    })

    describe('Тест интерфейса empty.arr', () => {
        it('Аргумент - пустой массив', () => {
            assert.isTrue(is.empty.arr([]))
        })
        it('Аргумент - не пустой массив', () => {
            assert.isFalse(is.empty.arr(values.ARRAY))
        })
    })

    describe('Тест интерфейса empty.obj', () => {
        it('Аргумент - пустой объект', () => {
            assert.isTrue(is.empty.obj({}))
        })
        it('Аргумент - не пустой объект', () => {
            assert.isFalse(is.empty.obj(values.OBJECT))
        })
    })

    describe('Тест интерфейса empty.str', () => {
        it('Аргумент - пустая строка', () => {
            assert.isTrue(is.empty.str(''))
        })
        it('Аргумент - не пустая строка', () => {
            assert.isFalse(is.empty.str(values.STRING))
        })
    })
})
