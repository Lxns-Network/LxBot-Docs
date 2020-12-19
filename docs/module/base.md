# 基础模块
<span class="span-friend">私聊</span>
<span class="span-group">群聊</span>

软糖酱最基础的运行模块。

---

## 个人信息
查询我的等级经验信息。
``` {1}
/b i
/base i
/b me
/base me
```

## Ping
测试软糖酱的消息处理延迟。
``` {1}
/b ping
/base ping
```

## 关于
``` {1}
/b about
/base about
```

## 帮助
查询软糖酱内置帮助。
``` {1}
/b help [模块名]
/base help [模块名]
```

## 签到
获取[硬币](/coin/)与经验的一种方式。
``` {1}
/b sign
/base sign
```
::: tip 注意
达到现阶段满级后将会额外赠送随机 1 至 10 的硬币，理论最高单日可获取的硬币数为 20。
:::

## 睡眠
<span class="span-group">群聊</span>
::: tip 注意
该指令需要软糖酱账号为群管理员。
:::
帮助群员更好的入睡，不再水群。
``` {1}
/b sleep [小时]
/base sleep [小时]
```
`[小时]` 默认值为 **6**。

## 运行状态
``` {1}
/b stat
/b status
/base stat
/base status
```

## [硬币](/coin/)
可以使用[签到](#签到)获取硬币，使用 `/b help base.coin` 查询内置帮助。

### 查询
查询当前账号的硬币数量。
``` {1}
/b coin
/base coin
```

### 转账
将当前账号的硬币转让给其他人。
``` {1}
/b coin pay <目标> <硬币数>
/b coin transfer <目标> <硬币数>
/base coin pay <目标> <硬币数>
/base coin transfer <目标> <硬币数>
```
`<目标>` 为 **@** 或 **QQ 号**。

### 抽奖
获取硬币的一种方式。
``` {1}
/b coin wager
/b coin gamble
/base coin wager
/base coin gamble
```

::: theorem 奖池说明
初始奖池为 1000 个硬币。每日只能抽奖一次，每次投入 5 个硬币，中奖的概率为 0.01%。中奖后奖池内的所有硬币将会转入中奖者的账户中，届时奖池将会重置。
:::

### 给予
<span class="span-bot-admin">Bot 管理员</span>
``` {1}
/b coin give <目标> <硬币数>
/base coin give <目标> <硬币数>
```
`<目标>` 为 **@** 或 **QQ 号**。

### 拿取
<span class="span-bot-admin">Bot 管理员</span>
``` {1}
/b coin take <目标> <硬币数>
/base coin take <目标> <硬币数>
```
`<目标>` 为 **@** 或 **QQ 号**。

### 设置
<span class="span-bot-admin">Bot 管理员</span>
``` {1}
/b coin set <目标> <硬币数>
/base coin set <目标> <硬币数>
```
`<目标>` 为 **@** 或 **QQ 号**。

### 恢复硬币
该指令为旧版本衔接的指令，用于恢复经验为硬币。您一般不需要使用该指令。
``` {1}
/b coin restore
/base coin restore
```

## 用户组

### 查询
查询目标账号的用户组。
``` {1}
/b member info [目标]
/base member info [目标]
```
`[目标]` 为 **@** 或 **QQ 号**。

### 设置
<span class="span-bot-admin">Bot 管理员</span>
``` {1}
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
<span class="span-bot-admin">Bot 管理员</span>

该部分在旧版本中指的是[模块](#模块)。
``` {1}
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
  <br>*关闭后将不会显示 “模块未开启。” 的警告。*

### 查询
``` {1}
/b group info [目标]
/base group info [目标]
```
`[目标]` 为 **this** 或 **群号**。

### 设置
<span class="span-bot-admin">Bot 管理员</span>
``` {1}
/b group set <目标> <权限>
/base group set <目标> <权限>
```
`<目标>` 为 **this** 或 **群号**。

`<权限>` 为 **normal**, **banned**。

## 模块
<span class="span-group">群聊</span>

<span class="span-admin">群管理员</span>
<span class="span-group">群主</span>
<span class="span-bot-admin">Bot 管理员</span>

该功能用于开关指定群聊的模块。

### 设置
``` {1}
/b module set <模块名> <on|off>
/base module set <模块名> <on|off>
```
`<模块名>` 可在[模块列表](#模块列表)中查询。

::: tip 提示
使用已关闭的模块会提示 “模块未开启。”，使用 `/b group conf module_warn off` 关闭提示。
:::

### 模块列表
查询模块的开关状态。
``` {1}
/b module list
/base module list
```

## 兑换码
用于 Bot 管理员发行奖励。

### 兑换
``` {1}
/b gift cash <兑换码>
/base gift cash <兑换码>
```

### 生成
<span class="span-bot-admin">Bot 管理员</span>
``` {1}
/b gift gen <礼品类型> <兑换数量 / 人> <兑换人数> <兑换次数 / 人> <过期时间>
/b gift generate <礼品类型> <兑换数量 / 人> <兑换人数> <兑换次数 / 人> <过期时间>
/base gift gen <礼品类型> <兑换数量 / 人> <兑换人数> <兑换次数 / 人> <过期时间>
/base gift generate <礼品类型> <兑换数量 / 人> <兑换人数> <兑换次数 / 人> <过期时间>
```
`<礼品类型>` 可选值：
- 硬币：`coin`

`<兑换人数>` 为 **-1** 时为无限。

`<过期时间>` 单位为秒，为 **-1** 时为永不。

### 列表
<span class="span-bot-admin">Bot 管理员</span>

该指令仅会显示 `<兑换码前缀>`，不能直接兑换。
``` {1}
/b gift list
/base gift list
```

### 详情
<span class="span-bot-admin">Bot 管理员</span>
``` {1}
/b gift info <兑换码前缀>
/base gift info <兑换码前缀>
```

### 回收
<span class="span-bot-admin">Bot 管理员</span>

该指令会将发行的所有奖励回收。
``` {1}
/b gift recover <兑换码前缀>
/base gift recover <兑换码前缀>
```

### 删除
<span class="span-bot-admin">Bot 管理员</span>

该指令会将兑换码直接删除，不会回收已发行的奖励。
``` {1}
/b gift del <兑换码前缀>
/b gift delete <兑换码前缀>
/base gift del <兑换码前缀>
/base gift delete <兑换码前缀>
```