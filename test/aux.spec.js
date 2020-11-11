import Aux from '../src/aux'

describe('Greeting', () => {
	describe('greeting.hello()', () => {
		it('should return welcome message for a guest user', () => {
			const greeting = new Aux()
			const message = greeting.hello()
			expect(message).toBe('Welcome, Guest!')
		})
		it('should return welcome message for a named user', () => {
			const greeting = new Aux('John')
			const message = greeting.hello()
			expect(message).toBe('Welcome, John!')
		})
	})
})
