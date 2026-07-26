# ESLint + Prettier — Guia Passo a Passo

Guia de referência para configurar ESLint e Prettier trabalhando juntos em projetos futuros.

## 1. Instalar as dependências

```bash
npm install -D prettier eslint-config-prettier
```

- `prettier` → o formatador em si.
- `eslint-config-prettier` → desliga as regras de estilo do ESLint que conflitam com o Prettier.

## 2. Entender a divisão de responsabilidade

- **ESLint** → bugs prováveis, más práticas (hooks mal usados, imports não usados, etc.)
- **Prettier** → formatação pura (aspas, ponto e vírgula, indentação, quebras de linha)

Se as duas tiverem opinião sobre a mesma coisa (ex: `;`), elas podem conflitar. Por isso o `eslint-config-prettier` existe: ele entra no `extends` do ESLint e desliga qualquer regra de estilo sobreposta, deixando o Prettier como única fonte de verdade para formatação.

## 3. Configurar o `eslint.config.js` (flat config)

```js
import eslintConfigPrettier from 'eslint-config-prettier'

export default tseslint.config(
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      eslintConfigPrettier, // sempre por último, pra ter a palavra final
    ],
    rules: {
      // regras de estilo (semi, quotes, etc.) NÃO vão aqui —
      // isso é responsabilidade do .prettierrc
    },
  },
)
```

**Duas armadilhas comuns:**

1. Cada chave dentro de `rules: {}` precisa ser o nome de uma regra do **ESLint**, no formato `'nome-da-regra': ['severidade', opções]`. Colocar opções do Prettier ali direto (ex: `tabWidth: 2`, `singleQuote: true`) quebra o ESLint, porque ele tenta interpretar como regra própria e não reconhece.
2. Regras dentro de `rules: {}` sempre têm prioridade sobre o que vem de `extends`. Se você definir manualmente `semi: ['error', 'always']` em `rules` depois de estender `eslintConfigPrettier`, você está reativando a regra que ele acabou de desligar — aí as duas ferramentas podem voltar a divergir se o `.prettierrc` mudar essa preferência no futuro.

## 4. Criar o `.prettierrc`

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100,
  "tabWidth": 2
}
```

Se o projeto tiver um `.editorconfig`, sincronize `tabWidth` com o `indent_size` de lá — são camadas diferentes (editor vs. formatador automático), mas devem concordar entre si.

## 5. Adicionar scripts no `package.json`

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

- `lint` / `format:check` → para rodar em CI, sem alterar arquivos.
- `lint:fix` / `format` → para rodar localmente e aplicar as correções automáticas.

## 6. Validar

```bash
npm run lint
npm run format:check
```

Se os dois passarem limpos, o setup está correto. Rode `npm run format` para aplicar a formatação em todo o projeto pela primeira vez.
