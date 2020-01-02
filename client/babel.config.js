module.exports = {
	'presets': [
		[
			'@babel/preset-env',
			{
				'useBuiltIns': false,
				'corejs': 3,
				'modules': false,
				'loose': true,
				'targets': {
					'browsers': [
						'>1%',
						'not dead',
						'not op_mini all',
						'not ie <= 11'
					]
				}
			}
		]
	],
	'plugins': [
		[
			'@babel/plugin-transform-runtime',
			{
				'helpers': false,
				'corejs': false,
				'regenerator': true,
				'useESModules': false,
				'version': '7.0.0-beta.0',
				'absolutePath': false
			}
		]
	],
	'minified': true
}
