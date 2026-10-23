# Piercing of the Dreams — Website

Site estático responsivo em HTML, CSS e JavaScript para apresentar o serviço de body piercing e as joias da marca.

## Direção visual
- **Masculino, refinado e futurista:** fundo grafite/preto, efeitos inspirados em aço e acentos dourados.
- Tipografia moderna com melhor hierarquia visual.
- Hero e cartões com artes vetoriais **criadas exclusivamente para a página**, que mantêm nitidez em telas de diferentes tamanhos.
- Área institucional que **preserva a logo original** enviada pelo proprietário.
- Galeria com **10 fotografias reais** das joias, separada das artes ilustrativas, sem vender imagens ilustrativas como produtos reais.
- Formulário local para preparar mensagem sem declarar envio ou agendamento automático.

## Arquivos principais
- `index.html`: página e seções.
- `style.css`: identidade visual, cores, grid e responsividade.
- `script.js`: navegação mobile e formulário.
- `favicon.svg`: ícone preto e dourado.
- `img/hero-metal.svg`: ilustração vetorial para o banner principal.
- `img/joia-estrela.svg` e `img/joia-pendente.svg`: novas ilustrações vetoriais nas seções de destaque, para manter a nitidez sem ampliar imagens comprimidas.
- `img/logo-oficial.webp`: marca gráfica original enviada pelo proprietário.
- `img/joias-galeria.webp`: mosaico das 10 fotos reais das joias.

A galeria usa o mosaico existente com imagens pequenas para minimizar ampliação/pixelização. Para qualidade fotográfica de catálogo, o ideal no futuro é substituir essa versão comprimida por arquivos individuais das fotos originais em resolução maior.

## Contatos
Preencher os canais oficiais no começo de `script.js`:

```js
const CONTACT = {
  whatsapp: "", // DDI, DDD e número, apenas dígitos
  instagram: "" // URL completa do perfil
};
```

Quando esses campos não estão preenchidos, não são inventados links de contato. O formulário apenas monta uma mensagem copiável.

## Publicação com GitHub Pages
Em `Settings > Pages > Build and deployment`, selecionar `Deploy from a branch`, branch `main` e pasta `/(root)`. Publicação depende da configuração e do deploy da plataforma.

URL esperada após publicação: https://gustalp23.github.io/piercingofthedreams/

## Cuidados
O conteúdo sobre cuidados é geral e inclui referência à [Association of Professional Piercers](https://safepiercing.org/aftercare/). Não substitui avaliação individual nem orientação de saúde. Preços, disponibilidade e locais de aplicação devem ser confirmados.
