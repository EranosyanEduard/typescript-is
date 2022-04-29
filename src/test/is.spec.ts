import { assert } from "chai"
import is from ".."
import typeIDs from "../utils"

describe("Тест экземпляра класса Is", () => {
    const values: Record<keyof typeof typeIDs, any> = {
        array: ["array"],
        boolean: true,
        character: "a",
        float: 0.5,
        function() {},
        integer: 0,
        null: null,
        number: 0,
        object: { key: "value" },
        string: "string",
        undefined,
    }

    describe("Тест интерфейса arr", () => {
        it("Тип аргумента Array", () => {
            assert.isTrue(is.arr(values.array))
        })
        it("Тип аргумента Boolean", () => {
            assert.isFalse(is.arr(values.boolean))
        })
        it("Аргумент типа Function", () => {
            assert.isFalse(is.arr(values.function))
        })
        it("Аргумент типа Null", () => {
            assert.isFalse(is.arr(values.null))
        })
        it("Аргумент типа Number", () => {
            assert.isFalse(is.arr(values.number))
        })
        it("Аргумент типа Object", () => {
            assert.isFalse(is.arr(values.object))
        })
        it("Тип аргумента String", () => {
            assert.isFalse(is.arr(values.string))
        })
        it("Аргумент типа Undefined", () => {
            assert.isFalse(is.arr(values.undefined))
        })
    })

    describe("Тест интерфейса bool", () => {
        it("Тип аргумента Array", () => {
            assert.isFalse(is.bool(values.array))
        })
        it("Тип аргумента Boolean", () => {
            assert.isTrue(is.bool(values.boolean))
        })
        it("Аргумент типа Function", () => {
            assert.isFalse(is.bool(values.function))
        })
        it("Аргумент типа Null", () => {
            assert.isFalse(is.bool(values.null))
        })
        it("Аргумент типа Number", () => {
            assert.isFalse(is.bool(values.number))
        })
        it("Аргумент типа Object", () => {
            assert.isFalse(is.bool(values.object))
        })
        it("Тип аргумента String", () => {
            assert.isFalse(is.bool(values.string))
        })
        it("Аргумент типа Undefined", () => {
            assert.isFalse(is.bool(values.undefined))
        })
    })

    describe("Тест интерфейса char", () => {
        it("Тип аргумента Array", () => {
            assert.isFalse(is.char(values.array))
        })
        it("Тип аргумента Boolean", () => {
            assert.isFalse(is.char(values.boolean))
        })
        it("Тип аргумента Character", () => {
            assert.isTrue(is.char(values.character))
        })
        it("Аргумент типа Function", () => {
            assert.isFalse(is.char(values.function))
        })
        it("Аргумент типа Null", () => {
            assert.isFalse(is.char(values.null))
        })
        it("Аргумент типа Number", () => {
            assert.isFalse(is.char(values.number))
        })
        it("Аргумент типа Object", () => {
            assert.isFalse(is.char(values.object))
        })
        it("Тип аргумента String", () => {
            assert.isFalse(is.char(values.string))
        })
        it("Аргумент типа Undefined", () => {
            assert.isFalse(is.char(values.undefined))
        })
    })

    describe("Тест интерфейса float", () => {
        it("Тип аргумента Array", () => {
            assert.isFalse(is.float(values.array))
        })
        it("Тип аргумента Boolean", () => {
            assert.isFalse(is.float(values.boolean))
        })
        it("Аргумент типа Float", () => {
            assert.isTrue(is.float(values.float))
        })
        it("Аргумент типа Function", () => {
            assert.isFalse(is.float(values.function))
        })
        it("Аргумент типа Null", () => {
            assert.isFalse(is.float(values.null))
        })
        it("Аргумент типа Number", () => {
            assert.isFalse(is.float(values.number))
        })
        it("Аргумент типа Object", () => {
            assert.isFalse(is.float(values.object))
        })
        it("Тип аргумента String", () => {
            assert.isFalse(is.float(values.string))
        })
        it("Аргумент типа Undefined", () => {
            assert.isFalse(is.float(values.undefined))
        })
    })

    describe("Тест интерфейса fun", () => {
        it("Тип аргумента Array", () => {
            assert.isFalse(is.fun(values.array))
        })
        it("Тип аргумента Boolean", () => {
            assert.isFalse(is.fun(values.boolean))
        })
        it("Аргумент типа Function", () => {
            assert.isTrue(is.fun(values.function))
        })
        it("Аргумент типа Null", () => {
            assert.isFalse(is.fun(values.null))
        })
        it("Аргумент типа Number", () => {
            assert.isFalse(is.fun(values.number))
        })
        it("Аргумент типа Object", () => {
            assert.isFalse(is.fun(values.object))
        })
        it("Тип аргумента String", () => {
            assert.isFalse(is.fun(values.string))
        })
        it("Аргумент типа Undefined", () => {
            assert.isFalse(is.fun(values.undefined))
        })
    })

    describe("Тест интерфейса int", () => {
        it("Тип аргумента Array", () => {
            assert.isFalse(is.int(values.array))
        })
        it("Тип аргумента Boolean", () => {
            assert.isFalse(is.int(values.boolean))
        })
        it("Аргумент типа Function", () => {
            assert.isFalse(is.int(values.function))
        })
        it("Аргумент типа Integer", () => {
            assert.isTrue(is.int(values.integer))
        })
        it("Аргумент типа Null", () => {
            assert.isFalse(is.int(values.null))
        })
        it("Аргумент типа Number", () => {
            assert.isTrue(is.int(values.number))
        })
        it("Аргумент типа Object", () => {
            assert.isFalse(is.int(values.object))
        })
        it("Тип аргумента String", () => {
            assert.isFalse(is.int(values.string))
        })
        it("Аргумент типа Undefined", () => {
            assert.isFalse(is.int(values.undefined))
        })
    })

    describe("Тест интерфейса null", () => {
        it("Тип аргумента Array", () => {
            assert.isFalse(is.null(values.array))
        })
        it("Тип аргумента Boolean", () => {
            assert.isFalse(is.null(values.boolean))
        })
        it("Аргумент типа Function", () => {
            assert.isFalse(is.null(values.function))
        })
        it("Аргумент типа Null", () => {
            assert.isTrue(is.null(values.null))
        })
        it("Аргумент типа Number", () => {
            assert.isFalse(is.null(values.number))
        })
        it("Аргумент типа Object", () => {
            assert.isFalse(is.null(values.object))
        })
        it("Тип аргумента String", () => {
            assert.isFalse(is.null(values.string))
        })
        it("Аргумент типа Undefined", () => {
            assert.isFalse(is.null(values.undefined))
        })
    })

    describe("Тест интерфейса num", () => {
        it("Тип аргумента Array", () => {
            assert.isFalse(is.num(values.array))
        })
        it("Тип аргумента Boolean", () => {
            assert.isFalse(is.num(values.boolean))
        })
        it("Аргумент типа Function", () => {
            assert.isFalse(is.num(values.function))
        })
        it("Аргумент типа Null", () => {
            assert.isFalse(is.num(values.null))
        })
        it("Аргумент типа Number", () => {
            assert.isTrue(is.num(values.number))
        })
        it("Аргумент типа Object", () => {
            assert.isFalse(is.num(values.object))
        })
        it("Тип аргумента String", () => {
            assert.isFalse(is.num(values.string))
        })
        it("Аргумент типа Undefined", () => {
            assert.isFalse(is.num(values.undefined))
        })
    })

    describe("Тест интерфейса obj", () => {
        it("Тип аргумента Array", () => {
            assert.isTrue(is.obj(values.array))
        })
        it("Тип аргумента Boolean", () => {
            assert.isFalse(is.obj(values.boolean))
        })
        it("Аргумент типа Function", () => {
            assert.isFalse(is.obj(values.function))
        })
        it("Аргумент типа Null", () => {
            assert.isFalse(is.obj(values.null))
        })
        it("Аргумент типа Number", () => {
            assert.isFalse(is.obj(values.number))
        })
        it("Аргумент типа Object", () => {
            assert.isTrue(is.obj(values.object))
        })
        it("Тип аргумента String", () => {
            assert.isFalse(is.obj(values.string))
        })
        it("Аргумент типа Undefined", () => {
            assert.isFalse(is.obj(values.undefined))
        })
    })

    describe("Тест интерфейса str", () => {
        it("Тип аргумента Array", () => {
            assert.isFalse(is.str(values.array))
        })
        it("Тип аргумента Boolean", () => {
            assert.isFalse(is.str(values.boolean))
        })
        it("Аргумент типа Function", () => {
            assert.isFalse(is.str(values.function))
        })
        it("Аргумент типа Null", () => {
            assert.isFalse(is.str(values.null))
        })
        it("Аргумент типа Number", () => {
            assert.isFalse(is.str(values.number))
        })
        it("Аргумент типа Object", () => {
            assert.isFalse(is.str(values.object))
        })
        it("Тип аргумента String", () => {
            assert.isTrue(is.str(values.string))
        })
        it("Аргумент типа Undefined", () => {
            assert.isFalse(is.str(values.undefined))
        })
    })

    describe("Тест интерфейса undef", () => {
        it("Тип аргумента Array", () => {
            assert.isFalse(is.undef(values.array))
        })
        it("Тип аргумента Boolean", () => {
            assert.isFalse(is.undef(values.boolean))
        })
        it("Аргумент типа Function", () => {
            assert.isFalse(is.undef(values.function))
        })
        it("Аргумент типа Null", () => {
            assert.isFalse(is.undef(values.null))
        })
        it("Аргумент типа Number", () => {
            assert.isFalse(is.undef(values.number))
        })
        it("Аргумент типа Object", () => {
            assert.isFalse(is.undef(values.object))
        })
        it("Тип аргумента String", () => {
            assert.isFalse(is.undef(values.string))
        })
        it("Аргумент типа Undefined", () => {
            assert.isTrue(is.undef(values.undefined))
        })
    })

    describe("Тест интерфейса empty.arr", () => {
        it("Аргумент - пустой массив", () => {
            assert.isTrue(is.empty.arr([]))
        })
        it("Аргумент - не пустой массив", () => {
            assert.isFalse(is.empty.arr(values.array))
        })
    })

    describe("Тест интерфейса empty.obj", () => {
        it("Аргумент - пустой объект", () => {
            assert.isTrue(is.empty.obj({}))
        })
        it("Аргумент - не пустой объект", () => {
            assert.isFalse(is.empty.obj(values.object))
        })
    })

    describe("Тест интерфейса empty.str", () => {
        it("Аргумент - пустая строка", () => {
            assert.isTrue(is.empty.str(""))
        })
        it("Аргумент - не пустая строка", () => {
            assert.isFalse(is.empty.str(values.string))
        })
    })
})
