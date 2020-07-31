import Greeting from './Greeting';

function enumerable(value) {
	return (target, key, descriptor) => {
		// eslint-disable-next-line
		descriptor.enumerable = value;
		return descriptor;
	};
}
class A {
	static p = 12;

	static testStatic = () => {
		return 'null';
	};

	// @enumerable(true)
	test() {
		this.obj = {};
		return this.obj?.props?.name;
	}
}
export { A, enumerable };
export default Greeting;
