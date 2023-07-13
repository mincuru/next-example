This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# 技術情報

| 技術要素 | 説明 |
| ---- | ---- |
| ORM |  |
| Seed | 未調査 |
| API | GraphQL |


## DB 構築、ORM

[Prisma](https://www.prisma.io/)を利用してDB構築、Migration、ORMを実現。

```
npx prisma init --url mysql://root:password@localhost:3306/app
```

## Seed

`未着手`

## API

Apolloを利用してGraphQLとして実装。
GraphQL Code Generator を利用してクライアントコードを生成。
https://tech-broccoli.life/articles/engineer/nextjs-app-router-with-apollo-server
https://zenn.dev/yuta4j1/articles/nextjs-apollo-starter

`調査中`
`ページネーションについて未調査`

## テスト

`未着手`

## 認証

`未着手`

## 例外ハンドリング

`未着手`

## ログ出力

`未着手`

## 環境変数

.envファイルを利用

## CI/CD

`未着手`

## コンテナ化

`未着手`
