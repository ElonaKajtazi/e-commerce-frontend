module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      "standard",
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:jsx-a11y/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:import/errors",
      "plugin:import/warnings",
      "plugin:import/typescript",
      "plugin:tailwindcss/recommended",
      "plugin:prettier/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: [
      "react",
      "@typescript-eslint",
      "import",
      "jsx-a11y",
      "tailwindcss",
    ],
    rules: {
      "react/react-in-jsx-scope": "off", 
      "react/prop-types": "off",
  
      "import/order": [
        "error",
        {
          "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
          "alphabetize": { order: "asc", caseInsensitive: true },
        },
      ],
  
      "tailwindcss/no-custom-classname": "off",
  
      "@typescript-eslint/no-unused-vars": ["error"],
      "@typescript-eslint/no-explicit-any": "warn",

      "no-console": ["warn", { allow: ["warn", "error"] }],
      "quotes": [ 2, "single",
        {
          "avoidEscape": true,
          "allowTemplateLiterals": true
        }
      ],
      "no-debugger": "warn", 
      "no-multiple-empty-lines": ["error", { max: 2 }],
  
      "prettier/prettier": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  };
  