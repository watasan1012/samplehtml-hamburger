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
