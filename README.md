# usage

## You should change babelrc for node module or browser module

```javascript
// for browser
{
    "presets": [
        [
            "@babel/preset-env",
            {
                "modules": false,
                "targets": {
                    "chrome": "49",
                    "ie": "8"
                }
            }
        ]
    ],
    plugins:[  "@babel/plugin-transform-runtime"]
}
// for node
{
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "node": "current"
                }
            }
        ]
    ]
}
```
