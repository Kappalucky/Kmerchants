module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['plugin:vue/essential'],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		quotes: [
			'error',
			'single',
			{ avoidEscape: true, allowTemplateLiterals: false },
		],
		'max-len': [
			'warn',
			{
				code: 80,
				tabWidth: 2,
				comments: 80,
				ignoreComments: false,
				ignoreTrailingComments: true,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true,
			},
		],
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
};
