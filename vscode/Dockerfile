# ベースイメージとしてNode.jsを使用
FROM node:18

# 作業ディレクトリを設定
WORKDIR /usr/src/app

# package.jsonとpackage-lock.jsonをコピー
COPY package.json package-lock.json ./

# 依存関係をインストール
RUN npm install

# ソースコードをコピー
COPY . .

# TypeScriptをコンパイル
RUN npm run compile

# 開発モードでのホットリロードを設定
CMD ["npm", "run", "watch"]