# 前提条件

- Linux, 又は Mac で Docker と Docker Compose がインストールされていること

# Virtualhome 可視化システム

# ローカルでの起動方法

- https://github.com/aistairc/virtualhome2kg_visualization を clone します。
- ディレクトリに入り、ブランチを`kgrc4si`にします。
- `docker compose up --build`を実行します。
- 結果を http://localhost:8080 で確認することができます。

# github pages を使った展開方法

可視化システムは、データの取得に SPARQL Endpoint を必要としています。
上記、ローカルでの実行方法では、ローカル上に GraphDB を起動していますが、可視化システムが接続する SPARQL Endpoint をインターネット上に存在するものにする場合は、静的ページとしても展開できます。
その場合、SPARQL Endpoint は以下の条件を満たしている必要があります。

- SPARQL Endpoint がレスポンスヘッダーとして Access-Control-Allow-Origin を\*か、可視化システムが存在するドメインを返却すること。
- HTTPS であること。

当リポジトリでは`kgrc4si`が更新されることによって github Actions が実行されるようになっており、これによって`gh-pages`ブランチに可視化システムが静的ページ用にビルドされたものが push されます。
これを設定画面から公開することで github pages として公開することが可能です。

# データ更新方法

当リポジトリはhttps://github.com/KnowledgeGraphJapan/KGRC-RDF の`kgrc4si`をフォーク元として持っており、そのブランチが持っている RDF データ等に変更があった場合に以下の手順で同期することが可能です。

```
git remote add upstream git@github.com:KnowledgeGraphJapan/KGRC-RDF.git # upstream リポジトリを設定
git fetch upstream # upstream リポジトリを更新
git merge upstream/kgrc4si # upstream ブランチと同期
```
