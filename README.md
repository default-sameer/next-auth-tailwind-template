
# NextJS, Next-Auth, Prisma, Typescript & Tailwind Starter Template

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), [`next-auth`](https://next-auth.js.org/), [`prisma`](https://prisma.io) ,  typescript and tailwind.

## Getting Started

First get started by cloning the repo:
```
$ https://github.com/default-sameer/next-auth-tailwind-template.git
```
Install the Dependencies

```bash
yarn install
# or
npm install
```

Add your [`Github Client_Id and Client_Secret`](https://github.com/settings/apps/new) in a .env file


Run the development server:

```bash
yarn dev
# or
npm run dev
```

Initialize Prisma
for local development sqlite is used
```zsh
npx prisma init --datasource-provider sqlite  
```

then to push the changes to database
```zsh
npx prisma db push
```
To open with prisma studio
```zsh
 npx prisma studio
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

