# Portfolio-Guilherme-Ribeiro

## Desenvolvimento

O site é estático e usa Tailwind CSS compilado localmente, sem dependência de CDN em produção.

```bash
npm install
npm run build:css
```

O comando gera `tailwind.generated.css`, carregado pelo `index.html`. Durante o desenvolvimento, use `npm run watch:css`.