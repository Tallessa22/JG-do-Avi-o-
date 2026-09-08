# Memory

A referência visual e dois sprites foram gerados com o estilo de caderno solicitado. Os assets foram enviados ao armazenamento privado WebDev e devem ser referenciados pelos caminhos `/manus-storage/...`, nunca copiados para `client/public` ou `client/src/assets`.

O jogo usa Babylon.js 9 com um canvas full-screen e câmera ortográfica. A sessão inicial recebeu `@babylonjs/core`; o scaffold WebDev já mantém o servidor de desenvolvimento ativo em modo on-change.

A verificação prioritária é visual: confirmar que o canvas preenche a tela, o overlay não bloqueia o toque, o avião aparece com transparência, os portões têm um gap jogável, e `?demo` chega a um score não-zero sem intervenção manual.
