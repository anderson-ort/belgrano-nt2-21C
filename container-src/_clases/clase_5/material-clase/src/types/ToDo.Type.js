
/**Esta clase me va a permitir validar que lo que haga sea estrictamente correcto*/
export class TodoValidator {

    static isValid(todo) {
        if (typeof todo !== 'object' || todo === null) return false

        const hasId = typeof todo.id === 'number'
        const hasText = typeof todo.text === 'string'
        const hasCompleted = typeof todo.completed === 'boolean'

        return hasId && hasText && hasCompleted
    }

    static assertValid(todo) {
        if (!this.isValid(todo)) {
            throw new Error('El objeto no cumple con la forma de un Todo')
        }
    }
}
