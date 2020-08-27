# 基础模块
<span class="span-friend">私聊</span>
<span class="span-group">群聊</span>

软糖酱最基础的运行模块。

---

## Ping
测试软糖酱的消息处理延迟。
```
/b ping
/base ping
```

## 关于
```
/b about
/base about
```

## 帮助
查询软糖酱内置帮助。
```
/b help [模块名]
/base help [模块名]
```

## 签到
获取[硬币](/coin/)的一种方式。
```
/b sign
/base sign
```

## 睡眠
<span class="span-group">群聊</span>
::: tip 注意
该指令需要软糖酱账号为群管理员。
:::
帮助群员更好的入睡，不再水群。
```
/b sleep [小时]
/base sleep [小时]
```
`[小时]` 默认值为 **6**。

## 运行状态
```
/b stat
/b status
/base stat
/base status
```

## [硬币](/coin/)
可以使用[签到](#签到)获取硬币，使用 `/b help base.coin` 查询内置帮助。

### 查询
查询当前账号的硬币数量。
```
/b coin
/base coin
```

### 转账
将当前账号的硬币转让给其他人。
```
/b coin pay <目标> <硬币数>
/b coin transfer <目标> <硬币数>
/base coin pay <目标> <硬币数>
/base coin transfer <目标> <硬币数>
```
`<目标>` 为 **@** 或 **QQ 号**。

### 抽奖
获取硬币的一种方式。
```
/b coin wager
/b coin gamble
/base coin wager
/base coin gamble
```

::: theorem 奖池说明
初始奖池为 1000 个硬币。每日只能抽奖一次，每次投入 5 个硬币，中奖的概率为 0.01%。中奖后奖池内的所有硬币将会转入中奖者的账户中，届时奖池将会重置。
:::

### 给予
<span class="span-admin">Bot 管理员</span>
```
/b coin give <目标> <硬币数>
/base coin give <目标> <硬币数>
```
`<目标>` 为 **@** 或 **QQ 号**。

### 拿取
<span class="span-admin">Bot 管理员</span>
```
/b coin take <目标> <硬币数>
/base coin take <目标> <硬币数>
```
`<目标>` 为 **@** 或 **QQ 号**。

### 设置
<span class="span-admin">Bot 管理员</span>
```
/b coin set <目标> <硬币数>
/base coin set <目标> <硬币数>
```
`<目标>` 为 **@** 或 **QQ 号**。

## 用户组

### 查询
查询目标账号的用户组。
```
/b member info [目标]
/base member info [目标]
```
`[目标]` 为 **@** 或 **QQ 号**。

### 设置
<span class="span-admin">Bot 管理员</span>
```
/b member set <目标> <用户组>
/base member set <目标> <用户组>
```
`<目标>` 为 **@** 或 **QQ 号**。

`<用户组>` 为 **admin**, **normal**, **banned**。

## 群权限
<span class="span-group">群聊</span>

### 选项
<span class="span-admin">群管理员</span>
<span class="span-group">群主</span>
<span class="span-admin">Bot 管理员</span>

该部分在旧版本中指的是[模块](#模块)。
```
/b group conf <选项>
/b group config <选项>
/base group conf <选项>
/base group config <选项>
```
`<选项>` 可选值，使用 `/b help base.group.conf` 查询内置帮助：
- 指令前缀（暂不可用）：`prefix [字符]`
  <br>`[字符]` 为单个数字、半角英文或符号。
- 新成员：`welcome [详细参数]`
- 成员退群：`leave [详细参数]`
  <br>`[详细参数]` 可选值：
  - 开关选项：`on` 或 `off`
  - 设置提示内容：`set <内容>`
- 模块警示：`module_warn [on|off]`

### 查询
```
/b group info [目标]
/base group info [目标]
```
`[目标]` 为 **this** 或 **群号**。

### 设置
<span class="span-admin">Bot 管理员</span>
```
/b group set <目标> <权限>
/base group set <目标> <权限>
```
`<目标>` 为 **this** 或 **群号**。

`<权限>` 为 **normal**, **banned**。

## 模块
<span class="span-group">群聊</span>

<span class="span-admin">群管理员</span>
<span class="span-group">群主</span>
<span class="span-admin">Bot 管理员</span>

该功能用于开关指定群聊的模块。

### 设置
```
/b module set <模块名> <on|off>
/base module set <模块名> <on|off>
```
`<模块名>` 可在[模块列表](#模块列表)中查询。

### 模块列表
```
/b module list
/base module list
```