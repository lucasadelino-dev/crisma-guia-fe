# Caminho de Fé

Portal católico de oração e formação, com Rosário interativo, Catecismo, Crisma, exame de consciência e biografias de santos.

## Tecnologias
- React + TypeScript + Vite
- Frontend 100% estático; não usa banco, login, APIs ou armazenamento local.
- Dados de interação (terço e checkboxes) existem apenas em memória enquanto a página está aberta.

## Desenvolver localmente
```bash
npm install
npm run dev
```

## Compilar
```bash
npm run build
npm run preview
```

## Publicação com GitHub Actions / Pages
O workflow `.github/workflows/deploy.yml` compila e publica ao enviar alterações para a branch `main`.

**Primeira configuração, necessária uma única vez:** em **Settings > Pages > Build and deployment > Source**, selecione **GitHub Actions**. Após um push em `main`, o site poderá ser acessado em:
https://lucasadelino-dev.github.io/crisma-guia-fe/

Referências oficiais aparecem dentro de cada seção, com links ao Catecismo do Vaticano e fontes históricas confiáveis.

> Material de apoio à formação católica; não substitui catequese, orientação de um sacerdote ou sacramento da Reconciliação.

## Organização
- `src/content.ts`: textos, mistérios, referências e perguntas.
- `src/App.tsx`: páginas e interações.
- `src/styles.css`: identidade visual e responsividade.
- `.github/workflows/deploy.yml`: build e publicação automática.
