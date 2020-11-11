/**
 * @description supported syntax: static property, optional chain, deractor and Es module.
 */
class Greeting {
	constructor(name) {
		this.name = name || 'Guest'
	}

	static p = 12

	static testStatic = () => {}

	assignDirectlyProperty = async () => {
		await Promise.resolve('')
	}

	optinalProperty() {
		return this.obj?.props?.name
	}

	// @enumerable(true)
	hello = () => `Welcome, ${this.name}!`
}
// eslint-disable-next-line
function enumerable(value) {
	return (target, key, descriptor) => {
		// eslint-disable-next-line
		descriptor.enumerable = value
		return descriptor
	}
}
export default Greeting
