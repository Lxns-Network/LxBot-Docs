# 指令转发
<span class="span-group">群聊</span>

该功能用于将消息通过正则匹配转发到指令，也就是自定义指令的格式。通过该功能，您可以实现发送一段文本，甚至是图片来执行指令。

---

## 新增
<span class="span-admin">群管理员</span>
<span class="span-group">群主</span>
<span class="span-bot-admin">Bot 管理员</span>
<span class="span-bot-helper">Bot 协助者</span>

::: tip 提示
您可以使用 `\子匹配位置`（如 `\1`）来匹配正则中的 capture group（如 `(ABC)`）。
:::
```
/d add <目标指令>
<匹配正则>
```

示例指令：
```
/direct add /a info\1
^查(.*)$
```

## 删除
<span class="span-admin">群管理员</span>
<span class="span-group">群主</span>
<span class="span-bot-admin">Bot 管理员</span>
<span class="span-bot-helper">Bot 协助者</span>

```
/d del <all|转发 ID>
```
`<转发 ID>` 可在[转发列表](#转发列表)中查询。

## 转发列表
```
/d list
/direct list
```