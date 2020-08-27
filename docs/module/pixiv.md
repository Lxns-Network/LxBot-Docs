# Pixiv
<span class="span-friend">私聊</span>
<span class="span-group">群聊</span>

---

## 帮助
```
/p help
/pixiv help
```

## 随机插画
::: theorem 你知道吗？
该功能用的都是开发者本人的账号，或许可以知道开发者的 xp？
:::
```
/p rand [来源]
/p random [来源]
/pixiv rand [来源]
/pixiv random [来源]
```
`[来源]` 可选值（默认 **0 ~ 2** 随机）：
- 个人收藏：`0`
- 个人发现：`1`
- 个人 Premium 推荐：`2`
- 本地缓存：`3`

## 下载原图
包含 `R-18` 与 `R-18G` 标签的图片将会被忽略。
```
/p get <作品 ID>
/p download <作品 ID>
/pixiv get <作品 ID>
/pixiv download <作品 ID>
```

## 开关选项
::: warning 注意
该功能暂时被废弃。
:::
```
/p conf <选项>
/p config <选项>
/pixiv conf <选项>
/pixiv config <选项>
```
`<选项>` 可选值为：
- 带图模式：`img` 或 `image`

## 保存到缓存
<span class="span-admin">Bot 管理员</span>
```
/p save <作品 ID>
/pixiv save <作品 ID>
```