# Paper Flight para Android

O aplicativo Android executa o jogo localmente em um WebView seguro. Não depende do site publicado nem de conexão com a internet.

## Atualizar o conteúdo nativo

```bash
pnpm install
pnpm android:sync
pnpm android:doctor
```

Depois, abra a pasta `android` no Android Studio.

## Testar no celular

No Android Studio, conecte o celular com depuração USB ou selecione um emulador e pressione **Run**. O APK de teste também fica disponível como artefato da ação **Android** no GitHub.

## Gerar o arquivo da Play Store

Crie uma chave de upload pelo Android Studio e use **Build > Generate Signed App Bundle**. O arquivo final precisa ser um `.aab` assinado. Não envie a chave, senhas ou `keystore.properties` ao GitHub.

Antes de publicar, siga [docs/PLAY_STORE_CHECKLIST.md](docs/PLAY_STORE_CHECKLIST.md).
