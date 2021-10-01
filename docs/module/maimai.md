# maimai
<span class="span-friend">私聊</span>
<span class="span-group">群聊</span>
<span class="span-discord">DC</span>
<span class="span-telegram">TG</span>

本模块基于 [Diving-Fish/mai-bot](https://github.com/Diving-Fish/mai-bot) 修改。

---

## 绑定账号
绑定[舞萌 DX 查分器](https://www.diving-fish.com/maimaidx/prober/)账号。

```
/m bind <舞萌 DX 查分器 ID>
```

## 曲目详情
```
/m song <曲目> [难度]
```
`[难度]` 不为空时获取谱面详情，可选值：
- Basic：`green` 或 `绿`
- Advanced：`yellow` 或 `黄`
- Expert：`red` 或 `红`
- Master：`purple` 或 `紫`
- Re: MASTER：`white` 或 `白`

## 查询 Best 40
```
/m b40 [舞萌 DX 查分器 ID]
```
`[舞萌 DX 查分器 ID]` 为空时且未绑定账号时获取账号 ID（仅 QQ）。