# Arcaea
<span class="span-friend">私聊</span>
<span class="span-group">群聊</span>

::: tip 注意
Arcaea 由 lowiro 开发，该工具与 Arcaea 以及 lowiro 无从属关系。
:::

---

## 绑定账号
```
/a bind <Arcaea ID|用户名>
```
`<Arcaea ID>` 为 9 位好友 ID。

## 查询最近成绩
```
/a [info [@]]
```
`[@]` 为空时默认自己账号，反之为目标账号。
::: theorem 提示
您可以使用 `/a conf img` 切换卡片查询类型。
:::

## 查询单曲最佳成绩
```
/a info <曲名> [难度]
```
`[难度]` 可选值：
- Beyond：`beyond` 、 `byd` 或 `byn`
- Future（默认）：`future` 或 `ftr`
- Present：`present` 或 `prs`
- Past：`past` 或 `pst`

## 查询 Best 30
返回所有 Best 30 成绩、计算后的 Best 30 与 Recent 10 均值。
```
/a b30
```

## 潜力值计算
通过定数与成绩计算出潜力值。
```
/a calc <分数> <定数|曲名 [难度]>
```
`[难度]` 可选值：
- Beyond：`beyond` 、 `byd` 或 `byn`
- Future（默认）：`future` 或 `ftr`
- Present：`present` 或 `prs`
- Past：`past` 或 `pst`

## 曲目信息
```
/a song <曲名>
```

## 音频预览
```
/a preview <曲名> [截取区间]
```
`[截取区间]` 具体参数为 `<起始秒>-<结束秒>`，为空时默认游戏预览位置。

`<结束秒>` 不能大于曲目长度，为 **0** 时默认歌曲总秒数。

## 曲目本地排行
查询软糖酱缓存的成绩排行。
```
/a rank <曲名 [难度]>
```
`[难度]` 可选值：
- Beyond：`beyond` 、 `byd` 或 `byn`
- Future（默认）：`future` 或 `ftr`
- Present：`present` 或 `prs`
- Past：`past` 或 `pst`

## 开关选项
```
/a conf <选项>
```
`<选项>` 可选值：
- 卡片查询类型：`img` 或 `image`
  - LxBot（默认）
  - RABiBOT v2
  <br>*仅支持[查询最近成绩](./#查询最近成绩)。*

## 猜歌
<span class="span-group">群聊</span>
```
/a guess [秒数]
```
`[秒数]` 为 1 至 5 的整数，默认为 **5**。
::: theorem 游玩方法
每次发起竞猜消耗 1 个[硬币](/coin/)。**回复**软糖发送的语音消息即可回答问题，
首个半分钟内正确回答者可获得硬币奖励，回答的歌名请尽量规范。

不同的秒数对应不同的奖励：
- 5 秒 1 个硬币
- 4 秒 2 个硬币
- ……
- 1 秒 5 个硬币

个人每日最多正确回答 10 次，回答次数与[曲绘竞猜](#曲绘竞猜)共通。
:::

## 曲绘竞猜
<span class="span-group">群聊</span>
```
/a guessc
```
::: theorem 游玩方法
每次发起竞猜消耗 1 个[硬币](/coin/)。**回复**软糖发送的消息即可回答问题，
首个半分钟内正确回答者可获得 5 个硬币，回答的歌名请尽量规范。

个人每日最多正确回答 10 次，回答次数与[猜歌](#猜歌)共通。
:::

## 控分计算（暂不可用）
```
/a calcscore <物量> <目标分数>
```

## [多人游戏](/module/arcaea/multiplayer/)

## [世界模式](/module/arcaea/world/)

## ???
`/user`