# Tríade Resultados — App PWA

Gerador de conteúdo estratégico com IA. Instalável no iPhone como app nativo.

---

## 🚀 Deploy rápido (Vercel)

### Opção 1 — Via GitHub + Vercel (recomendado)

1. **Suba para o GitHub:**
```bash
cd triade-app
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/triade-app.git
git push -u origin main
```

2. **Conecte ao Vercel:**
   - Acesse [vercel.com](https://vercel.com) e faça login
   - Clique em **"Add New Project"**
   - Importe o repositório `triade-app`
   - Clique em **Deploy** (sem alterar nenhuma config)

3. **Seu app estará online em:** `https://triade-app.vercel.app`

---

### Opção 2 — Vercel CLI (mais rápido)

```bash
npm i -g vercel
cd triade-app
vercel --prod
```

---

## 📱 Instalar no iPhone como App

1. Abra o link do Vercel no **Safari** (obrigatório — não Chrome)
2. Toque no ícone de **Compartilhar** (quadrado com seta)
3. Role e toque em **"Adicionar à Tela de Início"**
4. Confirme o nome **"Tríade"** e toque em **Adicionar**
5. O ícone aparece na tela inicial como um app nativo ✓

---

## 🔑 Configurar a API Key

Depois de instalar:
1. Abra o app → aba **Config**
2. Cole sua chave Anthropic (`sk-ant-...`)
3. Toque em **Salvar**

Obtenha sua chave em: [console.anthropic.com](https://console.anthropic.com)

---

## 🎤 Microfone no iPhone

O iOS não permite acesso direto ao microfone em apps web instalados via PWA. O app usa uma solução inteligente:

- Toque no ícone 🎤 → o teclado abre automaticamente
- Use o **microfone do teclado** (ícone de microfone na barra do teclado iOS)
- O texto ditado aparece no campo automaticamente

---

## 🖼️ Geração de Imagens

A versão atual gera imagens localmente via Canvas com visual da marca Tríade.

Para ativar geração com IA real (DALL·E 3):
1. Crie uma conta na [OpenAI](https://platform.openai.com)
2. Adicione a chave OPENAI na aba Config (próxima versão)

---

## 📁 Estrutura do projeto

```
triade-app/
├── index.html          # App principal (todo o código)
├── vercel.json         # Configuração do deploy
├── public/
│   ├── manifest.json   # PWA manifest (iOS install)
│   ├── sw.js           # Service Worker (offline)
│   └── icons/
│       ├── icon-192.png
│       └── icon-512.png
└── README.md
```

---

## ✨ Funcionalidades

- ✅ Geração de conteúdo com IA (Claude Sonnet)
- ✅ 5 tipos: Autoridade, Educativo, Venda, Prova social, Bastidores
- ✅ 5 plataformas: Instagram, Stories, Carrossel, WhatsApp, YouTube
- ✅ Entrada por voz (via microfone do teclado iOS)
- ✅ Resposta em texto e/ou áudio (TTS em português)
- ✅ Geração de imagens com visual da marca
- ✅ Download e compartilhamento de imagens
- ✅ Histórico local (últimos 50 conteúdos)
- ✅ Variações alternativas automáticas
- ✅ Instalável como app no iPhone
- ✅ Funciona offline (conteúdo cacheado)
