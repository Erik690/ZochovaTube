Kern 4.B

Ls - Listing
cd – Change Directory
cd .. – Change Directory (jeden späť)
npm run dev – zapnutie servera
ctrl c – vypnúť server
NextJS - https://nextjs.org/ pomoc na vytváranie webových aplikácií 
npm run build – stavanie aplikácie/časti stránky
ctrl l – vyčistenie terminálu
npm run start – spustenie aplikácie po vytvorení pomocou npm run build
Material UI - https://mui.com/ stránka s rôznymi komponentami na použitie do kódu
page.tsx - stránka (nesmie tam byť chyba v názve inak nebude fungovať)
git init – vytvorí priečinok 
git branch -m main – zmena branch mena na main
git config –global user.name “moje meno na githube“- moje meno na githube
git config –global user.email “moj email na githube“- moj email na githube
git remote add origin (link na mojom githube) – priame prepojenie linku na githube
git remote -v – kontorla spravnosti
git add . - git prida celý projekt na github
npm install @mui/icons-material @mui/material @emotion/styled @emotion/react - inštalovanie importnutých ikon


1. Vercel -> Storage:
    Neon -> Create -> Accept -> Region -> Frankfurt, Germany-(fra1) -> Connect
    in snap-zoska-4h-postgres:
    .env.local -> Show secret -> Copy snippet into your src/.env 

2. NextAuth:
    Get started -> Adapters -> Prisma 
    npm install @prisma/client @auth/prisma-adapter
    npm install prisma --save-dev
    npx prisma init

3. VsCode:
    In .env replace value of DATABASE_URL
    .env
    Create prisma.ts in src/app/api/auth/[...nextauth] -> copy code from NextAuth docs
    Update authOptions.ts -> add:   import { PrismaAdapter } from "@auth/prisma-adapter"
                                    import { prisma } from "./prisma"
                                    adapter: PrismaAdapter(prisma),

    package.json:   "build": "prisma generate && next build",
                    "postinstall": "prisma generate"


4. VsCode terminal:
    npx prisma format
    npx prisma migrate dev --name init
    npx prisma generate
    npx prisma studio