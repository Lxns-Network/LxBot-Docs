# 模块
<span class="span-group">群聊</span>

用于开关群聊的模块，使用 `/b help base.module` 查询内置帮助。

---

## 设置
<span class="span-admin">群管理员</span>
<span class="span-group">群主</span>
<span class="span-bot-admin">Bot 管理员</span>
<span class="span-bot-helper">Bot 协助者</span>
```
/b module <模块名> <on|off>
```
`<模块名>` 可在[模块列表](#模块列表)中查询，为 **all** 时操作所有模块。

::: theorem 提示
使用已关闭的模块会提示 “模块未开启。”，使用 `/b group conf module_warn off` 关闭提示。
:::

## 查询
查询单个模块的开关状态。
```
/b module <模块名>
```

## 模块列表
查询所有模块的开关状态。
```
/b module list
```