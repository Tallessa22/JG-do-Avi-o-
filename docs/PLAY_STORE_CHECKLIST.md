# Checklist de lançamento na Google Play

## Já preparado no projeto

- Aplicativo Android com pacote `com.tallessa22.paperflight`.
- Modo paisagem automático e tela cheia imersiva.
- Conteúdo do jogo incluído no aplicativo para funcionar offline.
- API alvo 36 e API mínima 24.
- Nenhuma permissão sensível ou permissão de internet.
- Ícone, tela inicial, ficha em português e declaração de segurança de dados.
- Geração automática de APK de teste e AAB de produção no GitHub Actions.

## Ações do proprietário antes do envio

1. Criar o aplicativo na Play Console com o pacote `com.tallessa22.paperflight`.
2. Criar e guardar com segurança a chave de upload; ativar o Play App Signing.
3. Gerar o AAB assinado pelo Android Studio usando **Build > Generate Signed App Bundle**.
4. Publicar a política de privacidade em um endereço público e informar a URL na Play Console.
5. Enviar ícone, gráfico de destaque e capturas reais feitas em um celular Android.
6. Preencher classificação de conteúdo, público-alvo, anúncios e Segurança de dados.
7. Executar teste interno e, quando exigido para a conta, teste fechado com 12 pessoas por 14 dias.
8. Solicitar acesso à produção e enviar a versão para análise.

O identificador do pacote não deve ser alterado depois da primeira publicação.
