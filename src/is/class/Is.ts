import { IIs } from './models'
import checkers from '../../checkers'
import TypeIDs from '../../utils'

class Is implements IIs {
    empty = {
        arr(v: unknown[]) {
            return checkers.empty.get(TypeIDs.ARRAY)(v)
        },
        obj(v: Record<string, unknown>) {
            return checkers.empty.get(TypeIDs.OBJECT)(v)
        },
        str(v: string) {
            return checkers.empty.get(TypeIDs.STRING)(v)
        },
    }

    arr(v: unknown): v is unknown[] {
        return checkers.type.get(TypeIDs.ARRAY)(v)
    }

    bool(v: unknown): v is boolean {
        return checkers.type.get(TypeIDs.BOOLEAN)(v)
    }

    char(v: unknown): v is string {
        return checkers.type.get(TypeIDs.CHARACTER)(v)
    }

    float(v: unknown): v is number {
        return checkers.type.get(TypeIDs.FLOAT)(v)
    }

    fun(v: unknown): v is CallableFunction {
        return checkers.type.get(TypeIDs.FUNCTION)(v)
    }

    int(v: unknown): v is number {
        return checkers.type.get(TypeIDs.INTEGER)(v)
    }

    null(v: unknown): v is null {
        return checkers.type.get(TypeIDs.NULL)(v)
    }

    num(v: unknown): v is number {
        return checkers.type.get(TypeIDs.NUMBER)(v)
    }

    obj(v: unknown): v is object {
        return checkers.type.get(TypeIDs.OBJECT)(v)
    }

    str(v: unknown): v is string {
        return checkers.type.get(TypeIDs.STRING)(v)
    }

    undef(v: unknown): v is undefined {
        return checkers.type.get(TypeIDs.UNDEFINED)(v)
    }
}

export default Is
