const lint = ['prettier --write', 'eslint src --fix', 'git add'];
const onlyPrettier = ['prettier --write', 'git add'];
module.exports = {
	'src/**/*.js': lint,
	'test/**/*.js': onlyPrettier,
};
