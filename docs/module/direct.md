# 指令转发
<span class="span-group">群聊</span>

该功能用于将消息通过正则匹配转发到指令，也就是自定义指令的格式。通过该功能，您可以实现发送一段文本，甚至是图片来执行指令。

---

## 新增
<span class="span-admin">群管理员</span>
<span class="span-group">群主</span>
<span class="span-bot-admin">Bot 管理员</span>
<span class="span-bot-helper">Bot 协助者</span>

```
/d add <目标指令>
<匹配正则>
```

::: theorem 提示
现阶段您只能设置至多 100 个转发规则。

您可以使用 `\子匹配位置`（如 `\1`）来匹配正则中的 capture group（如 `(ABC)`），也就是将消息中的某段文本映射到指令当中，这通常用于一些变化的量。

示例指令：
```
/d add /a ycm \1
^([A-Za-z]{4}\d{2})$
```
:::

## 删除
<span class="span-admin">群管理员</span>
<span class="span-group">群主</span>
<span class="span-bot-admin">Bot 管理员</span>
<span class="span-bot-helper">Bot 协助者</span>

```
/d del <all|转发 ID|关键词>
```
`<转发 ID>` 可在[转发列表](#转发列表)中查询。

## 自定义优先度
<span class="span-admin">群管理员</span>
<span class="span-group">群主</span>
<span class="span-bot-admin">Bot 管理员</span>
<span class="span-bot-helper">Bot 协助者</span>

设置不同的优先度，其次按照时间倒序（越新越优先）来决定匹配的优先顺序。
```
/d priority <转发 ID> [优先度]
```
`<转发 ID>` 可在[转发列表](#转发列表)中查询。

`[优先度]` 为 0 至 100 的整数，值越大越先匹配，默认值为 0。

## 转发列表

用于获取转发 ID，同时了解匹配的优先顺序。
```
/d list
```