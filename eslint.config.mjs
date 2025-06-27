import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import nextConfig from '@next/eslint-plugin-next';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...nextConfig,
];

export default eslintConfig;
