# Piercing of the Dream — site oficial

Website estático responsivo da **Piercing of the Dream**, em HTML, CSS e JavaScript. Identidade visual dark-tech em preto, grafite, metal e dourado.

## Imagens e identidade visual

- `img/logo-oficial-final.webp`: **logo original recebida do estúdio**, preservada sem redesenhar.
- `img/joias/joia-01.webp` até `img/joias/joia-10.webp`: dez imagens **tratadas/recriadas digitalmente** com inspiração nas fotografias enviadas. São arquivos independentes de 660 × 660 px em WebP, e não um mosaico.
- `img/hero-metal.svg`, `img/joia-estrela.svg`, `img/joia-pendente.svg`: ilustrações editoriais vetoriais para outros destaques.

**Importante:** as imagens tratadas podem diferir das peças reais em detalhes e acabamentos. Confirme fotos específicas, materiais, modelos e disponibilidade antes de qualquer compra ou aplicação. O site não anuncia preços não informados nem simula agendamento confirmado.

## Estrutura

- `index.html`: página inicial, coleção, galeria, processo, cuidados e contato.
- `style.css`: layout responsivo e identidade visual.
- `script.js`: navegação mobile e formulário que prepara uma mensagem copiável.
- `favicon.svg`: ícone do navegador.

## Configurar o atendimento

No início do `script.js`:

```js
const CONTACT = {
  whatsapp: "", // 55 + DDD + número
  instagram: "" // URL completa do perfil oficial
};
```

Enquanto esses campos estiverem vazios, o site não informa números nem links inexistentes. O formulário somente prepara uma mensagem, sem envio automático.

## GitHub Pages

Em `Settings → Pages`, configure `Deploy from a branch`, branch `main`, pasta `/(root)`. A implantação pode ser acompanhada em `Actions`.

URL esperada: https://gustalp23.github.io/piercingofthedreams/

Orientações gerais de cuidados baseadas na [Association of Professional Piercers](https://safepiercing.org/aftercare/), sem substituir avaliação individual.
