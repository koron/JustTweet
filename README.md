# Just Tweet Button mod

## 更新履歴

### 20210/7/9 1.51
+ youtubeをUTM自動削除の対象から除外。

### 2021/7/4 1.50
+ UTMパラメータを自動的に削除するようにしました。

### 2021/6/27 1.41
+ オプション設定のウインドウを保存した際に自動的に閉じるようにしました。
+ 変数の宣言に"var"を使うのをやめました。

### 2021/5/26 1.40 
+ 日本経済新聞(朝刊・夕刊)に対する考慮を追加しました。
+ 以下の通り、URLを置き換えます。
+ 置換前　https://www.nikkei.com/paper/article/〜
+ 置換後　https://www.nikkei.com/article/〜

### 2020/12/31 1.30
+ ウインドウの横幅サイズと表示場所を選べるようにしました（半分、3分割、4分割の9種類）。

### 2020/10/18 1.20
+ prefixの文言を変更できるようにしました。
+ アイコンを変更しました。

### 2020/10/03 1.11 
+ Prefixとウインドウサイズを自分好みに改変しました。
+ NowBrowsing: というprefixで画面の右半分に表示します。

## Publish
```console
$ make
```

It generates `just_tweet_button.zip` file.

Then upload it from https://chrome.google.com/webstore/developer/dashboard
