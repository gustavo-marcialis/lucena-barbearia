# Guia de Compilação Mobile (Android e iOS)

Este projeto foi configurado com **Capacitor** para funcionar como um aplicativo nativo no Android e iOS.

## Pré-requisitos

Para gerar os aplicativos finais (`.apk`, `.aab` ou `.ipa`), você precisará configurar o ambiente de desenvolvimento local:

1.  **Node.js** (instalado via `npm`).
2.  **Android Studio** (para construir para Android).
3.  **Xcode** (apenas no macOS, para construir para iOS).

## Passos Gerais

Sempre que você modificar o código do site (`src/`), execute os seguintes comandos para atualizar o projeto nativo:

```bash
# 1. Gera a versão estática do site
npm run build

# 2. Sincroniza as mudanças com as pastas nativas (android/ios)
npx cap sync
```

## Android

A pasta `android/` já foi gerada no projeto.

1.  Certifique-se de ter o **Android Studio** instalado.
2.  Abra o projeto nativo no Android Studio:
    ```bash
    npx cap open android
    ```
    (Ou abra o Android Studio e selecione a pasta `android` dentro deste projeto).
3.  Aguarde o Android Studio sincronizar o Gradle.
4.  Para testar: Conecte seu celular via USB (com depuração ativada) e clique no botão **Run (Play)** no Android Studio.
5.  Para gerar o APK final: Vá em `Build > Build Bundle(s) / APK(s) > Build APK(s)`.

## iOS

Para iOS, você precisa de um Mac com Xcode.

1.  Adicione a plataforma iOS (caso ainda não exista):
    ```bash
    npx cap add ios
    ```
2.  Abra o projeto no Xcode:
    ```bash
    npx cap open ios
    ```
3.  No Xcode, configure seu "Team" na aba "Signing & Capabilities".
4.  Selecione seu dispositivo ou simulador e clique em **Run**.

## Notas Importantes

*   **Imagens:** As imagens foram configuradas para não usar otimização de servidor (`unoptimized: true` no `next.config.mjs`) para funcionarem offline.
*   **API Routes:** As rotas de API do Next.js (`/api/*`) **não funcionam** neste modo estático. Se o app precisar de backend, ele deve se comunicar com uma API externa (URL completa).
*   **Ícone e Splash Screen:** Para alterar o ícone e a tela de abertura, utilize a ferramenta `@capacitor/assets` ou substitua os arquivos manualmente nas pastas `android/app/src/main/res` e `ios/App/App/Assets.xcassets`.
