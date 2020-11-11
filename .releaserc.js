module.exports = {
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		'@semantic-release/changelog',
		'@semantic-release/npm',
		'@semantic-release/git',
	],
	branches: [
		'master',
		'next',
		{
			name: 'beta',
			channel: 'channel-beta',
			prerelease: true,
		},
		{
			name: 'alpha',
			channel: 'channel-alpha',
			prerelease: true,
		},
	],
}
