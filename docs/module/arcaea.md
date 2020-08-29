# Arcaea
<span class="span-friend">私聊</span>
<span class="span-group">群聊</span>

::: tip 注意
Arcaea 由 lowiro 开发，该工具与 Arcaea 以及 lowiro 无从属关系。

使用该工具表示您已知晓其违反了 [Arcaea 使用条款](https://arcaea.lowiro.com/zh/terms_of_service) 中的 **3.2-4** 与 **3.2-6**，因此造成的损失我们不予承担任何责任。
:::

---

## 帮助
``` {1}
/a help
/arc help
/arcaea help
```

## 绑定账号
``` {1}
/a bind <Arcaea ID>
/arc bind <Arcaea ID>
/arcaea bind <Arcaea ID>
```
`<Arcaea ID>` 为 9 位好友 ID。

## 查询最近成绩
``` {1}
/a [info [@]]
/arc [info [@]]
/arcaea [info [@]]
```
`[@]` 为空时默认自己账号，反之为目标账号。

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

## 查询 Best 30 <Badge text="beta" type="warning"/>
返回所有 Best 30 成绩、计算后的 Best 30 与 Recent 10 均值。
``` {1}
/a b30
/a best30
/arc b30
/arc best30
/arcaea b30
/arcaea best30
```

## 潜力值计算 <Badge text="new" />
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

## 曲目信息 <Badge text="new" />
``` {1}
/a song <曲名>
/arc song <曲名>
/arcaea song <曲名>
```