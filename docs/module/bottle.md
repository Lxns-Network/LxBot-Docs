# 漂流瓶
<span class="span-group">群聊</span>

::: warning 警告
禁止使用此功能传播任何违反[使用条款](/terms-of-use/)的内容。
:::

---

## 投掷
> 该指令会消耗 1 个[玻璃瓶](/module/base/#物品)。
```
/bottle throw <内容>
```
::: tip 注意
每天只能投掷 5 个漂流瓶。
:::

## 捡取
```
/bottle pick
```
::: tip 注意
每天只能捡取 15 个漂流瓶。
:::

## 评论
> 仅能评论当日捡取过的漂流瓶。
```
/bottle comment <漂流瓶 ID> <内容>
```
`<内容>` 最多为 50 字，且仅能使用纯文本。

::: theorem 提示
您也可以直接回复[捡取](#捡取)的漂流瓶来评论。
:::

## 设置群可见
<span class="span-admin">群管理员</span>
<span class="span-group">群主</span>
<span class="span-bot-admin">Bot 管理员</span>
<span class="span-bot-helper">Bot 协助者</span>
```
/bottle conf visible
```

## 统计
```
/bottle total
```

## 封禁
<span class="span-bot-admin">Bot 管理员</span>
<span class="span-bot-helper">Bot 协助者</span>
```
/bottle ban <漂流瓶 ID>
```

## 解除封禁
<span class="span-bot-admin">Bot 管理员</span>
<span class="span-bot-helper">Bot 协助者</span>
```
/bottle unban <漂流瓶 ID>
```