# Arcaea
<span class="span-friend">私聊</span>
<span class="span-group">群聊</span>

::: tip 注意
Arcaea 由 lowiro 开发，该工具与 Arcaea 以及 lowiro 无从属关系。
:::

---

## 绑定账号
``` {1}
/a bind <Arcaea ID|用户名>
/arc bind <Arcaea ID|用户名>
/arcaea bind <Arcaea ID|用户名>
```
`<Arcaea ID>` 为 9 位好友 ID。

## 查询最近成绩
``` {1}
/a [info [@]]
/arc [info [@]]
/arcaea [info [@]]
```
`[@]` 为空时默认自己账号，反之为目标账号。
::: theorem 提示
您可以使用 `/a conf img` 切换卡片查询类型。
:::

## 查询单曲最佳成绩
``` {1}
/a info <曲名> [难度]
/arc info <曲名> [难度]
/arcaea info <曲名> [难度]
```
`[难度]` 可选值：
- Beyond：`beyond` 、 `byd` 或 `byn`
- Future（默认）：`future` 或 `ftr`
- Present：`present` 或 `prs`
- Past：`past` 或 `pst`

## 查询 Best 30
返回所有 Best 30 成绩、计算后的 Best 30 与 Recent 10 均值。
``` {1}
/a b30
/a best30
/arc b30
/arc best30
/arcaea b30
/arcaea best30
```

## 潜力值计算
通过定数与成绩计算出潜力值。
``` {1}
/a calc <分数> <定数|曲名 [难度]>
/a calculate <分数> <定数|曲名 [难度]>
/arc calc <分数> <定数|曲名 [难度]>
/arc calculate <分数> <定数|曲名 [难度]>
/arcaea calc <分数> <定数|曲名 [难度]>
/arcaea calculate <分数> <定数|曲名 [难度]>
```
`[难度]` 可选值：
- Beyond：`beyond` 、 `byd` 或 `byn`
- Future（默认）：`future` 或 `ftr`
- Present：`present` 或 `prs`
- Past：`past` 或 `pst`

## 曲目信息
``` {1}
/a song <曲名>
/arc song <曲名>
/arcaea song <曲名>
```

## 音频预览
``` {1}
/a preview <曲名> [截取区间]
/arc preview <曲名> [截取区间]
/arcaea preview <曲名> [截取区间]
```
`[截取区间]` 具体参数为 `<起始秒>-<结束秒>`，为空时默认游戏预览位置。

`<结束秒>` 不能大于曲目长度，为 **0** 时默认歌曲总秒数。

## 曲目本地排行
查询软糖酱缓存的成绩排行。
``` {1}
/a rank <曲名 [难度]>
/arc rank <曲名 [难度]>
/arcaea rank <曲名 [难度]>
```
`[难度]` 可选值：
- Beyond：`beyond` 、 `byd` 或 `byn`
- Future（默认）：`future` 或 `ftr`
- Present：`present` 或 `prs`
- Past：`past` 或 `pst`

## 开关选项
``` {1}
/a conf <选项>
/a config <选项>
/arc conf <选项>
/arc config <选项>
/arcaea conf <选项>
/arcaea config <选项>
```
`<选项>` 可选值：
- 卡片查询类型：`img` 或 `image`
  - LxBot（默认）
  - RABiBOT v2
  <br>*仅支持[查询最近成绩](./#查询最近成绩)。*

## 猜歌
<span class="span-group">群聊</span>
``` {1}
/a guess [秒数]
/arc guess [秒数]
/arcaea guess [秒数]
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
``` {1}
/a guessc
/a guesscover
/arc guessc
/arc guesscover
/arcaea guessc
/arcaea guesscover
```
::: theorem 游玩方法
每次发起竞猜消耗 1 个[硬币](/coin/)。**回复**软糖发送的消息即可回答问题，
首个半分钟内正确回答者可获得 5 个硬币，回答的歌名请尽量规范。

个人每日最多正确回答 10 次，回答次数与[猜歌](#猜歌)共通。
:::

## 控分计算（暂不可用）
``` {1}
/a calcscore <物量> <目标分数>
/arc calcscore <物量> <目标分数>
/arcaea calcscore <物量> <目标分数>
```

## [世界模式](/module/arcaea/world/)

## ???
`/user`