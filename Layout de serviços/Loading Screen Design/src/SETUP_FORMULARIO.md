# 📋 Setup do Formulário de Contato - Noiz Assessoria

## 🎯 Opções Disponíveis (Esforço Mínimo)

---

## ✅ OPÇÃO 1: Google Sheets + Apps Script (RECOMENDADO)
**Vantagens:** Gratuito, dados organizados em planilha, fácil de gerenciar
**Tempo de setup:** ~5 minutos

### Passo a Passo:

#### 1. Criar o Google Sheets
1. Acesse [Google Sheets](https://sheets.google.com)
2. Crie uma nova planilha chamada "Contatos Noiz Assessoria"
3. Na primeira linha (linha 1), adicione os seguintes cabeçalhos:
   - Coluna A: `Timestamp`
   - Coluna B: `Nome`
   - Coluna C: `Empresa`
   - Coluna D: `Email`
   - Coluna E: `Mensagem`

#### 2. Adicionar o Script
1. Na planilha, clique em **Extensões** > **Apps Script**
2. Apague o código padrão e cole este script:

```javascript
function doPost(e) {
  try {
    // Pega a planilha ativa
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse dos dados recebidos
    var data = JSON.parse(e.postData.contents);
    
    // Adiciona nova linha com os dados
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.company,
      data.email,
      data.message
    ]);
    
    // Retorna sucesso
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Dados salvos com sucesso'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Retorna erro
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Clique em **Salvar** (ícone de disquete)
4. Nomeie o projeto como "Noiz Contato Form"

#### 3. Deploy do Script
1. Clique em **Implantar** > **Nova implantação**
2. Clique no ícone de **engrenagem** ao lado de "Selecionar tipo"
3. Escolha **Aplicativo da Web**
4. Configure:
   - **Descrição:** "Formulário de contato Noiz"
   - **Executar como:** "Eu" (sua conta)
   - **Quem tem acesso:** "Qualquer pessoa"
5. Clique em **Implantar**
6. **IMPORTANTE:** Autorize o script quando solicitado
7. **Copie a URL** que aparece (algo como: `https://script.google.com/macros/s/ABC123.../exec`)

#### 4. Configurar no Site
1. Abra o arquivo `/components/ContactSection.tsx`
2. Na linha 13, substitua `'YOUR_GOOGLE_SCRIPT_URL_HERE'` pela URL copiada:
   ```typescript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/ABC123.../exec';
   ```
3. Salve o arquivo

#### 5. Testar
1. Acesse o site
2. Preencha o formulário de contato
3. Envie
4. Verifique se os dados apareceram no Google Sheets! ✅

---

## 🚀 OPÇÃO 2: Formspree (Alternativa Mais Rápida)
**Vantagens:** Setup em 2 minutos, envia email diretamente
**Desvantagens:** Plano gratuito tem limite de 50 envios/mês

### Passo a Passo:

#### 1. Criar conta no Formspree
1. Acesse [Formspree.io](https://formspree.io)
2. Crie uma conta gratuita
3. Clique em **+ New Form**
4. Dê um nome: "Contato Noiz"
5. Adicione o email que receberá as mensagens: `oi@noizassessoria.com`

#### 2. Copiar o Endpoint
1. Após criar o form, você receberá uma URL como:
   `https://formspree.io/f/xyzabc123`
2. Copie essa URL

#### 3. Configurar no Site
1. Abra `/components/ContactSection.tsx`
2. **Comente** as linhas 12-48 (código do Google Apps Script)
3. **Descomente** as linhas 50-74 (código do Formspree)
4. Na linha agora descomentada, substitua:
   ```typescript
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xyzabc123';
   ```
5. Salve o arquivo

#### 4. Testar
1. Envie um teste pelo formulário
2. Verifique o email! ✅

---

## 📊 Dicas e Boas Práticas

### Para Google Sheets:
- Configure **notificações por email** no Google Sheets quando houver novos dados
- Use **formatação condicional** para destacar leads importantes
- Crie uma **segunda aba** com análises (total de leads por mês, empresas mais frequentes, etc.)

### Para Formspree:
- Configure **auto-responder** para enviar email automático confirmando recebimento
- Ative **spam protection** nas configurações
- Configure **webhooks** se quiser integrar com outras ferramentas

---

## 🆘 Solução de Problemas

### Google Apps Script não funciona:
- Verifique se deu permissão ao script
- Confirme que "Quem tem acesso" está como "Qualquer pessoa"
- Teste a URL do script no navegador (deve retornar erro mas confirma que existe)

### Formspree não envia:
- Verifique se confirmou o email no Formspree
- Confira se a URL do endpoint está correta
- Verifique se não atingiu o limite de 50 envios do plano gratuito

---

## 🔄 Backup e Segurança

### Google Sheets:
- Dados ficam salvos automaticamente
- Você pode baixar como CSV a qualquer momento
- Configure compartilhamento com a equipe

### Formspree:
- Emails ficam na sua caixa de entrada
- Crie uma pasta/label específica para organizar
- Configure backup automático do Gmail

---

## 📱 Notificações em Tempo Real

### Receber no WhatsApp (Opcional):
1. Use [Zapier](https://zapier.com) (gratuito até 100 ações/mês)
2. Conecte: Google Sheets → WhatsApp
3. Configure para enviar mensagem quando nova linha for adicionada

### Receber no Slack (Opcional):
1. Use Zapier ou Make.com
2. Conecte: Google Sheets → Slack
3. Configure notificação no canal desejado

---

## ✅ Checklist Final

- [ ] Google Sheets criado com cabeçalhos corretos
- [ ] Script adicionado e salvo
- [ ] Script implantado como Web App
- [ ] URL do script copiada e adicionada no código
- [ ] Teste realizado com sucesso
- [ ] Email de notificação configurado (opcional)
- [ ] Equipe tem acesso ao Google Sheets

---

**Pronto! Seu formulário está funcionando com esforço mínimo e zero backend! 🎉**
