module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        mocha: true
    },
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        parser : '@typescript-eslint/parser',
        project: "tsconfig.json",
        sourceType: "module"
    },
    plugins: [
        "import",
        "jsdoc",
        "@typescript-eslint"
    ],
    rules: {
        "@typescript-eslint/array-type": [
            "error",
            {
                default: "array-simple"
            }
        ],
        "@typescript-eslint/no-unsafe-call" : [ "off" ],
        "@typescript-eslint/interface-name-prefix" : [ "off" ],
        "@typescript-eslint/class-name-casing" : [ "off" ],
        "@typescript-eslint/camelcase" : [ "off" ],
        "@typescript-eslint/ban-ts-ignore" : [ "off" ],
        "@typescript-eslint/ban-types": [
            "error",
            {
                types: {
                    Object: {
                        message: "Avoid using the `Object` type. Did you mean `object`?"
                    },
                    Function: {
                        message: "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
                    },
                    Boolean: {
                        message: "Avoid using the `Boolean` type. Did you mean `boolean`?"
                    },
                    Number: {
                        message: "Avoid using the `Number` type. Did you mean `number`?"
                    },
                    String: {
                        message: "Avoid using the `String` type. Did you mean `string`?"
                    },
                    Symbol: {
                        message: "Avoid using the `Symbol` type. Did you mean `symbol`?"
                    }
                }
            }
        ],
        "@typescript-eslint/consistent-type-definitions": "error",
        "@typescript-eslint/explicit-member-accessibility": [
            "off",
            {
                accessibility: "explicit"
            }
        ],
        "@typescript-eslint/no-misused-promises": [
            "error",
            {
                "checksVoidReturn": false
            }
        ],
        "@typescript-eslint/explicit-function-return-type": ["error", { allowExpressions: true }],
        "@typescript-eslint/indent": ["error", 4],
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                multiline: {
                    delimiter: "semi",
                    requireLast: true
                },
                singleline: {
                    delimiter: "semi",
                    requireLast: false
                }
            }
        ],
        "@typescript-eslint/member-ordering": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/require-await": "warn",
        "@typescript-eslint/quotes": [
            "error",
            "single"
        ],
        "@typescript-eslint/semi": [
            "error",
            "always"
        ],
        "@typescript-eslint/triple-slash-reference": [
            "error",
            {
                path: "always",
                types: "prefer-import",
                lib: "always"
            }
        ],
        "@typescript-eslint/unified-signatures": "error",
        "@typescript-eslint/no-unused-vars": [
            1,
            {
                "varsIgnorePattern" : "Query|Param"
            }
        ],
        "@typescript-eslint/no-unsafe-assignment" : 0,
        "@typescript-eslint/no-unsafe-member-access" : 0,
        "@typescript-eslint/no-unsafe-return" : 0,
        "@typescript-eslint/no-floating-promises": 0,
        "arrow-body-style": "error",
        "arrow-parens": [
            "off",
            "always"
        ],
        "brace-style": [
            "off",
            "off"
        ],
        "comma-dangle": [ "error", "never" ],
        complexity: "off",
        "constructor-super": "error",
        curly: "error",
        "dot-notation": "off",
        "eol-last": "error",
        eqeqeq: [
            "error",
            "smart"
        ],
        "guard-for-in": "error",
        "id-blacklist": "off",
        "id-match": "off",
        "import/no-deprecated": "error",
        "import/no-extraneous-dependencies": "off",
        "import/no-internal-modules": "off",
        "import/order": "off",
        "jsdoc/check-alignment": "error",
        "jsdoc/check-indentation": "error",
        "jsdoc/newline-after-description": "error",
        "max-classes-per-file": [
            "error",
            1
        ],
        "max-len": [
            "error",
            {
                code: 700
            }
        ],
        "new-parens": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-cond-assign": "error",
        "no-console": [
            "error",
            {
                allow: [
                    "log",
                    "dirxml",
                    "warn",
                    "error",
                    "dir",
                    "timeLog",
                    "assert",
                    "clear",
                    "count",
                    "countReset",
                    "group",
                    "groupCollapsed",
                    "groupEnd",
                    "table",
                    "Console",
                    "markTimeline",
                    "profile",
                    "profileEnd",
                    "timeline",
                    "timelineEnd",
                    "timeStamp",
                    "context"
                ]
            }
        ],
        "no-debugger": "error",
        "no-empty": "off",
        "no-eval": "error",
        "no-fallthrough": "error",
        "no-invalid-this": "off",
        "no-multiple-empty-lines": "error",
        "no-new-wrappers": "error",
        "no-shadow": [
            "error",
            {
                hoist: "all"
            }
        ],
        "no-throw-literal": "warn",
        "no-trailing-spaces": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": "off",
        "no-unsafe-finally": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "object-shorthand": "error",
        "object-curly-spacing": ["error", "always"],
        "array-bracket-spacing": ["error", "always"],
        "one-var": [
            "error",
            "never"
        ],
        "quote-props": [
            "error",
            "consistent-as-needed"
        ],
        radix: "error",
        "space-before-function-paren": [
            "error",
            {
                anonymous: "never",
                asyncArrow: "always",
                named: "never"
            }
        ],
        "spaced-comment": [
            "error",
            "always",
            {
                markers: [
                    "/"
                ]
            }
        ],
        "use-isnan": "error",
        "valid-typeof": "off"
    }
}