# Parada das Promos

Página ponte para apresentar o grupo gratuito de ofertas no WhatsApp, com layout responsivo, fotos ilustrativas de produtos e chamadas para entrada no grupo.

## Arquivos

- `index.html`: conteúdo e links de convite para o WhatsApp.
- `styles.css`: identidade visual e adaptação para celular, incluindo botão fixo.
- `script.js`: consentimento e eventos do Meta Pixel.
- `privacidade.html`: política de privacidade.
- `assets/`: fotos de produtos armazenadas localmente.
- `assets/logo-parada-das-promos-v2.png`: nova logo do projeto, gerada com a ferramenta integrada de imagens.

## Visualização e publicação

Abra `index.html` no navegador ou use a prévia HTML da IDE. Publique todos os arquivos acima mantendo a estrutura de pastas. Não há instalação de dependências nem etapa de build.

## Ajustes

O convite está nos quatro links com a classe `join-link` em `index.html`. Atualize todos ao trocar de grupo. O ID do Pixel fica em `script.js`.

O Pixel carrega somente após aceitar o rastreamento. A preferência pode ser alterada no rodapé. `PageView` registra a visita; `JoinGroupClick` e `Lead` registram cliques no convite, não entradas confirmadas no grupo. O parâmetro `placement` identifica o botão utilizado.

Os produtos são ilustrativos e não representam ofertas ativas. As chamadas de urgência se referem à disponibilidade variável de preços, estoques e cupons; não há contagem regressiva ou número fictício de vagas.

## Fotos

Fotos do Unsplash, armazenadas localmente para evitar requisições de imagens a terceiros durante a visita:

- Fones: https://images.unsplash.com/photo-1505740420928-5e560c06d30e.
- Tênis: https://images.unsplash.com/photo-1542291026-7eec264c27ff
- Relógio: https://images.unsplash.com/photo-1523275335684-37898b6baf30
