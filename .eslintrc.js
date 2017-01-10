module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "impliedStrict": true  // 启用全局严格模式
        },
        "sourceType": "module"
    },
    "globals": {
        "document": false,
        "navigator": false,
        "window": false
    },
    "rules": {
        // 缩进使用2个空格
        "indent": [
            "error",
            2
        ],

        // 使用\n换行
        "linebreak-style": [
            "error",
            "unix"
        ],

        // 要求把换行符放在操作符后面
        "operator-linebreak": [
            "error",
            "after"
        ],

        // 使用单引号
        "quotes": [
            "error",
            "single"
        ],

        // 使用分号
        "semi": [
            "error",
            "always"
        ],

        // 禁止在数组括号内两侧出现空格
        "array-bracket-spacing": [
            "error",
            "never"
        ],

        // 强制在单行代码块中使用空格
        "block-spacing": [
            "error",
            "always"
        ],

        // 强制在代码块中使用一致的大括号风格
        "brace-style": [
            "error",
            "stroustrup"
        ],

        // 求逗号放在数组元素、对象属性或变量声明之后，且在同一行
        "comma-style": [
            "error",
            "last"
        ],

        // 指定一个变量作为 this 的别名
        "consistent-this": [
            "error",
            "that"
        ],

        // 要求变量声明语句后有一行空行
        "newline-after-var": [
            "error",
            "always"
        ],

        // 要求在关键字之前后至少有一个空格
        "keyword-spacing": [
            "error",
            {
              "before": true,
              "after": true
            }
        ],

        // 要求花括号内有空格
        "object-curly-spacing": [
            "error",
            "always"
        ],

        // 禁止在函数的 ( 前面有空格
        "space-before-function-paren": [
            "error",
            "never"
        ],

        //
        "space-before-blocks": [
            "error",
            "always"
        ],

        //禁止圆括号内两侧的空格
        "space-in-parens": [
            "error",
            "never"
        ],

        // 要求操作符周围有空格
        "space-infix-ops": [
            "error",
            { "int32Hint": false }
        ],

        // 禁止Yoda条件
        "yoda": [
            "error",
            "never"
        ],

        // 禁止 function 定义中出现重名参数
        "no-dupe-args": 2,

        // 禁止对象字面量中出现重复的 key
        "no-dupe-keys": 2,

        // 禁止不必要的分号
        "no-extra-semi": 2,

        // 禁止对 function 声明重新赋值
        "no-func-assign": 2,

        // 禁止使用多个空格
        "no-multi-spaces": 2,

        // 禁用行尾空格
        "no-trailing-spaces": 2,

        // 要求 IIFE 使用括号括起来
        "wrap-iife": 2,

        // 不允许使用undefined变量
        "no-undefined": 2,

        // 禁止在变量定义之前使用它们
        "no-use-before-define": 2,

        // 禁止空格和 tab 的混合缩进
        "no-mixed-spaces-and-tabs": 2,

        // ------ES6------

        // // 要求使用 let 或 const 而不是 var
        // "no-var": 2,
        //
        // // 不允许改变用const声明的变量
        // "no-const-assign": 2
    }
};
