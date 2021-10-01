import ReadFile from "./decorators/read-file";

class Test {
	test() {
		console.log(this.read('./package.json'))
	}
	@ReadFile
	read(file) {}
}

const test = new Test;

console.log(test.test())