module.exports = {
    "parser": "babel-eslint",
    extends: [
        'airbnb-base',
        'plugin:react/recommended'
    ],
    "rules": {
        "max-len": [1, 80, 2, {
          "ignoreComments": true,
          "ignoreStrings": true,
          "ignoreTemplateLiterals": true,
          "ignoreUrls": true
        }],
        "import/prefer-default-export": 0,
      }
};
