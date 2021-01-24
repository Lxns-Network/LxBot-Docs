# 账号辅助
<span class="span-friend">私聊</span>

::: tip 注意
Arcaea 由 lowiro 开发，该工具与 Arcaea 以及 lowiro 无从属关系。

使用该工具表示您已知晓其违反了 [Arcaea 使用条款](https://arcaea.lowiro.com/zh/terms_of_service) 中的 **3.2-4** 与 **3.2-6**，因此造成的损失我们不予承担任何责任。
:::

---

## 同步存档
同步存档到软糖酱的数据库中。
``` {1}
/a user save
/arc user save
/arcaea user save
```
::: tip 注意
存档关联的是 QQ 账号，而不是 Arcaea 账号。

虽然您可以使用其他 Arcaea 账号的存档，但[自动爬梯](#自动爬梯)时请不要上传账号未购买的曲目（会导致封号）。
:::

## 自动爬梯
### 已读警告
> 您需要执行该指令才能使用其他功能。
``` {1}
/a user world tos
/arc user world tos
/arcaea user world tos
```
::: details 警告内容
警告：输入 `/a user world tos` 以继续使用该功能，继续使用即代表您已知晓您违反了 [Arcaea ToS](https://arcaea.lowiro.com/zh/terms_of_service)，且有极高几率会导致您的账号**永久封禁**。由此造成的任何损失与本机器人及机器人开发者无任何关系。

该功能通过分析您上传的用户存档内曲目的成绩“随机”伪造一份合理的假成绩用来自动爬梯，该成绩不会超过存档中的最高记录，同时尽可能不会对您的潜力值产生较大的影响。上传前，您需要提前指定搭档与梯子。上传时，建议您同时对照游戏内梯子，上传指定曲目（虽然不符合要求会提示）。
:::

### 上传随机成绩
> 该功能需要先[同步存档](#同步存档)用于成绩生成。
``` {1}
/a user world upload <曲名> [难度]
/arc user world upload <曲名> [难度]
/arcaea user world upload <曲名> [难度]
```
`[难度]` 可选值：
- Beyond：`beyond` 、 `byd` 或 `byn`
- Future（默认）：`future` 或 `ftr`
- Present：`present` 或 `prs`
- Past：`past` 或 `pst`

::: tip 注意
上传前请至游戏内选中所需地图与游玩搭档，并确保所选曲目符合地图内要求。

所选曲目必须有记录成绩且不能为 **Track Lost** 评价。

所随机成绩不会超过存档中的最高成绩，根据最高的不同 `<Note 评价>` 数量增加或减去随机[偏差值](#偏差值)计算的结果。回忆率如果计算后小于 0 则会上传 Track Lost 的成绩。

Beyond 章节的残片深化与限时活动章节的源韵强化（如果有）将会自动生效，遗产章节相关见[增益体力](#增益体力)。
:::

### 偏差值
``` {1}
/a user world conf offset [偏差值 <Note 评价>]
/a user world config offset [偏差值 <Note 评价>]
/arc user world conf offset [偏差值 <Note 评价>]
/arc user world config offset [偏差值 <Note 评价>]
/arcaea user world conf offset [偏差值 <Note 评价>]
/arcaea user world config offset [偏差值 <Note 评价>]
```
`[偏差值]` 具体参数为 `<最小值>-<最大值>`（如 **5-10**），为空时则查询当前设置的偏差值。

`<最小值>` 与 `<最大值>` 应在 0 至 20 范围内。

`<Note 评价>` 可选值：
- 大 Pure：`big_pure`
- Pure：`pure`
- Far：`far`

### 增益体力
> 仅遗产章节。
``` {1}
/a user world conf stamina_multiply [体力]
/a user world config stamina_multiply [体力]
/arc user world conf stamina_multiply [体力]
/arc user world config stamina_multiply [体力]
/arcaea user world conf stamina_multiply [体力]
/arcaea user world config stamina_multiply [体力]
```
`[体力]` 为空时则查询当前设置的增益体力，可选值：
- 不增益（默认）：`1`
- 2 倍增益：`2`
- 4 倍增益：`4`
- 6 倍增益：`6`

::: tip 注意
增益体力生效后将会同时激活碎片增益（500 碎片，1.5 倍步数）。
:::

### 体力详情
``` {1}
/a user world stamina
/arc user world stamina
/arcaea user world stamina
```

## 自定义设备 ID
账号登录时用的设备唯一识别码。
``` {1}
/a user conf device_id [设备 ID]
/a user config device_id [设备 ID]
/arc user conf device_id [设备 ID]
/arc user config device_id [设备 ID]
/arcaea user conf device_id [设备 ID]
/arcaea user config device_id [设备 ID]
```
`[设备 ID]` 为 UUID（如 **A4CA8FBF-1306-44C8-8ABD-C74954EA0EFD**），为空时则查询当前的设置。

::: tip 注意
一般在初次登录时会随机生成一个设备 ID，但有可能会挤掉其他设备，甚至导致冻结。

所以该设置用于规避多设备登录导致的冻结，但设备 ID 请自行通过其它途径获取。
:::