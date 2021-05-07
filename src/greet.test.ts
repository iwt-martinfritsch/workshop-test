import { greet } from "./greet"

describe('greet', () => {
    it('should greet Harald', () => {
        expect(greet('Harald')).toBe('Servus Harald')
    })
})