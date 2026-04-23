# 🌿 Projeto Corpo em 30 Dias — Landing Page
### Mariana Rocha · Nutricionista Esportiva

---

## 📁 Estrutura de arquivos

```
📁 mariana-rocha/
├── index.html     → Estrutura HTML da página
├── style.css      → Todo o estilo visual (cores, layout, responsividade)
├── script.js      → Animações, contador e interações
└── README.md      → Este arquivo
```

> ⚠️ Os três arquivos devem estar sempre na **mesma pasta** para a página funcionar corretamente.

---

## 🚀 Como publicar no Netlify (gratuito)

1. Acesse [netlify.com](https://netlify.com) e crie uma conta gratuita
2. No painel, clique em **"Add new site" → "Deploy manually"**
3. Arraste a pasta `mariana-rocha/` para a área indicada
4. Aguarde o upload — o Netlify gera um link automático
5. Para personalizar o subdomínio: **Site configuration → Change site name**
   - Exemplo: `marianarocha-projeto.netlify.app`
6. Envie o link para o cliente

> 💡 Crie a conta antes de subir, caso contrário o link some em 24h.

---

## ✏️ O que personalizar antes de entregar

| O que                        | Onde no arquivo     | Exemplo                          |
|------------------------------|---------------------|----------------------------------|
| Número do WhatsApp           | `index.html`        | `wa.me/5511999999999`            |
| Link de compra (Hotmart)     | `index.html`        | Substituir os `href="#"`         |
| Foto da Mariana (seção Sobre)| `index.html`        | Trocar URL da `<img>`            |
| Foto do Hero (fundo)         | `style.css`         | URL dentro de `#hero { background }` |
| CRN da nutricionista         | `index.html`        | `CRN 12345`                      |
| Ano no footer                | `index.html`        | `© 2025`                         |

---

## 🎨 Cores do projeto

| Nome           | Código    | Uso                        |
|----------------|-----------|----------------------------|
| Verde escuro   | `#1a3d2b` | Fundo hero, textos, footer |
| Verde médio    | `#2d6a4f` | Botões, destaques          |
| Verde claro    | `#52b788` | Ícones, bordas             |
| Verde menta    | `#d8f3dc` | Fundos suaves              |
| Dourado        | `#c9a84c` | CTAs, labels, destaques    |
| Dourado claro  | `#f0d080` | Textos sobre fundo escuro  |

Para alterar as cores, edite as variáveis no início do `style.css`:

```css
:root {
  --verde-escuro:  #1a3d2b;
  --dourado:       #c9a84c;
  /* ... */
}
```

---

## ⚙️ Funcionalidades JavaScript

- **Animações de scroll** — elementos surgem suavemente ao rolar a página
- **Contador regressivo** — exibe tempo até meia-noite na barra de urgência
- **Vagas decrescentes** — número de vagas reduz automaticamente a cada 45s
- **Sombra na navbar** — aparece ao rolar a página
- **Parallax no hero** — movimento suave na imagem de fundo

---

## 📱 Responsividade

A página foi desenvolvida com abordagem **mobile-first** e se adapta a:

- 📱 Celular (até 480px)
- 📱 Tablet (até 860px)
- 🖥️ Desktop (acima de 860px)

---

## 🔗 Tecnologias utilizadas

- HTML5 semântico
- CSS3 puro (variáveis, grid, flexbox, animações)
- JavaScript vanilla (sem bibliotecas)
- Google Fonts: [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) + [DM Sans](https://fonts.google.com/specimen/DM+Sans)

---

## 📞 Suporte

Dúvidas sobre personalização ou hospedagem? Entre em contato com o desenvolvedor responsável pela entrega deste projeto.