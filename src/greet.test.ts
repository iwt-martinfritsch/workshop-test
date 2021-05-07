import { greet } from "./greet"

describe('greet', () => {
    it('should greet Harald', () => {
        expect(greet('Harald')).toContain('Servus Harald')
    })
})