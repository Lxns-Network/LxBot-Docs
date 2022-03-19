# Arcaea
<span class="span-friend">私聊</span>
<span class="span-group">群聊</span>
<span class="span-discord">DC</span>
<span class="span-telegram">TG</span>

::: tip 注意
Arcaea 由 lowiro 开发，该工具与 Arcaea 以及 lowiro 无从属关系。

关于 Arcaea 查分功能的通知：[https://www.bilibili.com/read/cv14463516](https://www.bilibili.com/read/cv14463516)
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
返回所有 Best 30 成绩、Best 31 至 33 成绩、计算后的 Best 30 与 Recent Top 10 均值。
```
/a b30 [official] [[dark]simple]
```
`[official]` 为空时使用第三方接口查询，反之则使用[官方查分接口](https://www.bilibili.com/read/cv14463516)。

`[[dark]simple]` 不为空时则为获取简易样式（不含 Best 31 至 33 的成绩），如 `/a b30 simple` 或 `/a b30 darksimple` 。

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
/a song <曲名> [难度]
```
`[难度]` 不为空时查询谱面信息，可选值：
- Beyond：`beyond` 、 `byd` 或 `byn`
- Future（默认）：`future` 或 `ftr`
- Present：`present` 或 `prs`
- Past：`past` 或 `pst`

## 音频预览
```
/a play <曲名> [难度] [截取区间]
```
`[难度]` 不为空时播放谱面特有音频，可选值：
- Beyond：`beyond` 、 `byd` 或 `byn`
- Future（默认）：`future` 或 `ftr`
- Present：`present` 或 `prs`
- Past：`past` 或 `pst`

`[截取区间]` 具体参数为 `<起始秒>-<结束秒>`，为空时默认游戏预览位置。

`<结束秒>` 不能大于曲目长度，为 **0** 时默认歌曲总秒数。

::: tip 注意
在 Discord 环境下，该功能需要[语音](/module/discord/#语音)，且不支持 `[截取区间]`。
:::

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

## 定数搜索
通过定数搜索曲目。
```
/a find <定数>
```

## 查车
查询或分享自己的 Link-Play 房间号。

### 车牌列表
```
/a ycm
```

### 发车
```
/a ycm <房间号> [描述]
```

## 猜歌
<span class="span-group">群聊</span>
```
/a guess [秒数]
```
`[秒数]` 为 1 至 5 的整数，默认为 **5**。
::: theorem 游玩方法
每次发起竞猜消耗 1 个[硬币](/coin/)。

**回复**软糖发送的语音消息即可回答问题，首个半分钟内正确回答者可获得硬币奖励，回答的歌名请尽量规范。

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
/a guessc [难度]
```
`[难度]` 可选值：
- 简单（默认）：`easy`
- 困难：`hard`
::: theorem 游玩方法
每次发起竞猜消耗 1 个[硬币](/coin/)。

**回复**软糖发送的消息即可回答问题，首个半分钟内正确回答者可获得 5 个硬币，回答的歌名请尽量规范。

个人每日最多正确回答 10 次，回答次数与[猜歌](#猜歌)共通。
:::

## 曲名竞猜
<span class="span-group">群聊</span>
```
/a guessn [字符|曲名]
```
`[字符]` 为单个字符，包括空格。
::: theorem 游玩方法
发起竞猜不消耗硬币，每回答一次消耗 1 个[硬币](/coin/)。

输入提示指令即可回答问题，群友们有 10 分钟的时间来猜出完整曲名。

当最后一个使用 `[曲名]` 猜中或猜光曲名中 `[字符]` 的人，可获得本次竞猜先前**所有人**所支付的硬币。

若未在规定时间内猜出，硬币将会归入[奖池](/module/base/#抽奖)。

无发起、回答次数限制。
:::

## Key 音竞猜
<span class="span-group">群聊</span>
```
/a guessk
```
::: theorem 游玩方法
输入指令后会给出四个选项，随后会发送仅包含 Key 音的谱面片段音频。

音频发送后半分钟内会公布正确答案。

该功能无奖励、回复机制。
:::

## 控分计算（暂不可用）
```
/a calcscore <物量> <目标分数>
```

## [世界模式](/module/arcaea/world/)