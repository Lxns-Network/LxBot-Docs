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
::: tip 提示
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
::: tip 游玩方法
每次发起竞猜消耗 1 个[硬币](/coin/)。**回复**软糖发送的语音消息即可回答问题，
首个半分钟内正确回答者可获得硬币奖励，回答的歌名请尽量规范。

不同的秒数对应不同的奖励：
- 5 秒 1 个硬币
- 4 秒 2 个硬币
- ……
- 1 秒 5 个硬币

个人每日最多正确回答 10 次。
:::

## 控分计算 <Badge text="new" />
``` {1}
/a calcscore <物量> <目标分数>
/arc calcscore <物量> <目标分数>
/arcaea calcscore <物量> <目标分数>
```

## 世界模式 <Badge text="new" />
您可以在该功能中通过爬梯获取[硬币](/coin/)奖励。

### 地图列表
该指令会展示 `<地图名>`。
``` {1}
/a world map
/arc world map
/arcaea world map
```

### 地图详情
``` {1}
/a world map <地图名>
/arc world map <地图名>
/arcaea world map <地图名>
```
`<地图名>` 可通过[地图列表](#地图列表)获取。

### 选择地图
``` {1}
/a world select <地图名>
/arc world select <地图名>
/arcaea world select <地图名>
```
`<地图名>` 可通过[地图列表](#地图列表)获取。

### 楼层信息
获取当前位置与限制、奖励详情。
``` {1}
/a world step
/arc world step
/arcaea world step
```

### 上传成绩
> 您需要先[选择地图](#选择地图)。
``` {1}
/a world upload
/arc world upload
/arcaea world upload
```

::: tip 提示
该指令会消耗 1 点体力。
:::

### 体力详情
> 您需要先[选择地图](#选择地图)。
``` {1}
/a world stamina
/arc world stamina
/arcaea world stamina
```

::: tip 提示
体力每半个小时恢复 1 点，满体力为 6 点。
:::