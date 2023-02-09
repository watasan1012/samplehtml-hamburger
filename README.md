# samplehtml-hamburger

## gitignore

githubにアップロードしないファイルを指定する

```sh
% touch .gitignore
```

.gitignoreファイルにgitに認識してもらいたくないファイル名(ディレクトリ名)を指定する

macだと.DS_Store が生成されるので記載する

- ファイルを指定する場合

```.gitignore
.DS_Store
```

npm でインストールされたパッケージ名のフォルダ配下をアップロードしない様に記載する

- ディレクトリを指定する場合

```.gitignore

node_modules/
```

## コードを綺麗にしよう

stylelintを使ってCSSプロパティのソートと整形を自動化する

### stylelintを使う

- 利用するアプリを確認する

```sh
% node -v
```

v18.13.0

```sh
% npm -v
```

8.19.3

- package.jsonの作成

```sh
% npm init -y
```

```
Wrote to /Users/hirotaka/work/samplehtml-hamburger/package.json:

{
  "name": "samplehtml-hamburger",
  "version": "1.0.0",
  "description": "## gitignore",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/watasan1012/samplehtml-hamburger.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/watasan1012/samplehtml-hamburger/issues"
  },
  "homepage": "https://github.com/watasan1012/samplehtml-hamburger#readme"
}
```

- npmを使ってパッケージをインストール

Stylelintとその基本設定をインストール

```sh
% npm install --save-dev stylelint stylelint-config-standard
```

- Stylelintの設定ファイルの作成

stylelintはインストールしただけでは使えず、設定ファイルを作成する必要があります。

プロジェクトのルートディレクトリに.stylelintrc.json ファイルを作成します。

```sh
% touch .stylelintrc.json
```

.stylelintrc.jsonファイルの中身には以下の文を記載する

```.stylelintrc.json
{
  "extends": "stylelint-config-standard"
}
```

- prettierと一緒に利用する

prettier をインストールします

```sh
% npm install prettier --save-dev
```

- stylelint と prettierを利用するには、競合するルールを無効にする

```sh
% npm install --save-dev stylelint-config-prettier
```

- .stylelintrc.jsonファイルを上書きする

```.stylelintrc.json
{
  "extends": ["stylelint-config-standard", "stylelint-config-prettier"]
}
```

``` "stylelint-config-prettier"``` を追加しました。

- CSSプロパティの順番を指定する

cssのプロパティ順序とは

```css
セレクタ {
    プロパティ: 値
    border-right: solid 1px #000;
    padding: 10px 20px;
    width: calc(100%/3);
}
```

プロパティの順序のルールを作り、ルール通りに並び替え、チェックします。

* stylelint-order をインストールします

```shell
% npm install --save-dev stylelint-order
```
* stylelintrc.jsonファイルを修正

.stylelintrc.jsonファイルにstylelint-orderを追加し、必要なルールをルールリストに追加してください。

下記の部分を追加します。

```json:.stylelintrc.json
    "plugins": ["stylelint-order"],
    "rules": {
        "order/properties-alphabetical-order": true,
        "string-quotes": "single"
    },
```

結果、.stylelintrc.jsonファイルは、以下のようになります。

```json:.stylelintrc.json
{
    "extends": ["stylelint-config-standard", "stylelint-config-prettier"],
    "plugins": ["stylelint-order"],
    "rules": {
        "order/properties-alphabetical-order": true,
        "string-quotes": "single"
    },
    "ignoreFiles": ["**/node_modules/**"]
}
```

### stylelintを実行してみよう

```sh
% npx stylelint "**/*.css"
```

ルールによって報告された問題を、可能な限り自動的に修正します。

```sh
% npx stylelint --fix "**/*.css"
```

## error コード

```
  22:5   ✖  Expected opacity to come        order/properties-alphabetical-order
            before visibility
```

opacityがvisibilityより先に来ることを期待期待した

```
 108:1   ✖  Expected class selector         selector-class-pattern
            ".bar_top" to be kebab-case
```

セレクタ名は、スネークケース`.bar_top` ではなく、ケバブケース が望ましいです。