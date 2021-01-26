# 指令转发
<span class="span-group">群聊</span>

<span class="span-admin">群管理员</span>
<span class="span-group">群主</span>
<span class="span-bot-admin">Bot 管理员</span>
::: right
旧版为 **定义指令**，即 `/define`。
:::

该功能用于将消息通过正则匹配转发到指令，也就是自定义指令的格式。通过该功能，您可以实现发送一段文本，甚至是图片来执行指令。

---

## 新增
::: warning 注意
旧版 `<目标指令>` 中的 `{{"{{子匹配位置}\}"}}` 在新版中变更为 `\子匹配位置`，即 `{{"{{1}\}"}}` 变更为 `\1`。

而 `{{"{{子匹配位置|默认值}\}"}}` 用法已经移除。
:::
``` {1,2}
/d add <目标指令>
<匹配正则>

/direct add <目标指令>
<匹配正则>
```
`<目标指令>` 相较于旧版需要手动添加 `/`（斜杠）。

`<匹配正则>` 现在不会自动添加 `^` 与 `$`，您可以直接模糊匹配。

示例指令：
```
/direct add /b stat
软糖状态
```

## 删除
``` {1}
/d del <all|转发 ID>
/d delete <all|转发 ID>
/direct del <all|转发 ID>
/direct delete <all|转发 ID>
```
`<转发 ID>` 可在[转发列表](#转发列表)中查询。

## 转发列表
``` {1}
/d list
/direct list
```