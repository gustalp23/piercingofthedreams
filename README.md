# Piercing of the Dreams ✧

Site institucional responsivo em português brasileiro, feito com HTML, CSS e JavaScript, sem dependências de build.

## Arquivos
- `index.html`: conteúdo e seções da página.
- `style.css`: identidade visual e ajustes de tela.
- `script.js`: menu mobile e preparação de mensagem de contato.
- `favicon.svg`: ícone próprio.

## Como personalizar os contatos
Abra `script.js` e configure:

```js
const CONTACT = {
  whatsapp: "", // Apenas números, incluindo DDI 55 e DDD
  instagram: ""  // URL completa: https://www.instagram.com/seuusuario/
};
```

Somente links configurados são exibidos. O formulário **não envia dados**: prepara uma mensagem para cópia e, quando existe WhatsApp configurado, permite abrir a conversa com o texto preenchido. Não há confirmação automática de agendamento.

## Antes de divulgar
- Informar e conferir os contatos oficiais.
- Substituir imagens ilustrativas por fotografias próprias autorizadas.
- Confirmar os procedimentos disponíveis, valores, local e horários de atendimento.
- Validar instruções pós-procedimento com o profissional.

As imagens do Unsplash são ilustrativas e não representam trabalhos realizados pelo estúdio. A seção de cuidados inclui orientações gerais com referência à [Association of Professional Piercers](https://safepiercing.org/aftercare/).

## Publicar no GitHub Pages

Em **Settings → Pages → Build and deployment → Deploy from a branch**, selecione `main` e `/(root)`, depois clique em Save.

Quando a publicação for concluída, o endereço previsto é:

https://gustalp23.github.io/piercingofthedreams/

> Salvar os arquivos não confirma a publicação. É preciso configurar o GitHub Pages e aguardar a implantação.
