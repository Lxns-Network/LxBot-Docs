# Phigros
<span class="span-friend">私聊</span>
<span class="span-group">群聊</span>
<span class="span-discord">DC</span>
<span class="span-telegram">TG</span>

---

## 曲目详情
```
/pgr song <曲名>
```

## 音频预览
```
/pgr play <曲名> [截取区间]
```
`[截取区间]` 具体参数为 `<起始秒>-<结束秒>`，为空时默认 **1-16**。

`<结束秒>` 不能大于曲目长度，为 **0** 时默认歌曲总秒数。

::: tip 注意
在 Discord 环境下，该功能需要[语音](/module/discord/#语音)，且不支持 `[截取区间]`。
:::

## RKS 计算
```
/pgr calc <曲名 [难度]|定数> <ACC%>
```
`[难度]` 可选值：
- EZ：`ez`
- HD：`hd`
- IN（默认）：`in`
- AT：`at`
- Legacy：`legacy`

## ACC 计算
```
/pgr calcacc <曲名 [难度]|物量> <Perfect 数> <Good 数>
```
`[难度]` 可选值：
- EZ：`ez`
- HD：`hd`
- IN（默认）：`in`
- AT：`at`
- Legacy：`legacy`

## 随机 Tips
```
/pgr tip
```

::: theorem 提示
设置不同[语言](/module/base/#语言)返回 Tips 的语言也是不一样的。
:::

## 猜歌
<span class="span-group">群聊</span>
```
/pgr guess [秒数]
```
`[秒数]` 为 1 至 5 的整数，默认值为 5。
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
/pgr guessc [难度]
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
/pgr guessn [字符|曲名]
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
/pgr guessk
```
::: theorem 游玩方法
输入指令后会给出四个选项，随后会发送仅包含 Key 音的谱面片段音频。

音频发送后半分钟内会公布正确答案。

该功能无奖励、回复机制。
:::