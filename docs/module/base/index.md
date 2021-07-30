# 基础模块
<span class="span-friend">私聊</span>
<span class="span-group">群聊</span>
<span class="span-discord">DC</span>

软糖酱最基础的运行模块。

---

## 个人信息
查询我的等级经验信息。
```
/b i
```

## Ping
测试软糖酱的消息处理延迟。
```
/b ping
```

## 关于
```
/b about
```

## 帮助
查询软糖酱内置帮助。
```
/b help [模块名]
```

## 签到
获取[硬币](/coin/)与经验的一种方式。
```
/b sign
```
::: tip 注意
达到现阶段满级后将会额外赠送随机 1 至 10 的硬币，理论最高单日可获取的硬币数为 20。
:::

### 签到排行
获取当日签到排名前十的用户。
```
/b sign rank
```

### 个人签到详情
```
/b sign info
```

## 注册
注册用户名用于软糖部分功能中对您的称呼。
```
/b reg <用户名>
```
`<用户名>` 由英文、数字、“-” 或 “_” 组成。

## 今日运势
> 结果仅供参考。
```
/b fortune
```

## 睡眠
<span class="span-group">群聊</span>
::: tip 注意
该指令需要软糖酱账号为群管理员。
:::
帮助群员更好的入睡，不再水群。
```
/b sleep [小时]
```
`[小时]` 为浮点数，默认值为 **8**。

## 运行状态
```
/b stat [full]
```

## 打水漂
```
/b dap
```

## 语言
使用 `/b help base.language` 查询内置帮助。

### 列表
```
/b lang list
```

### 切换
切换将会实时生效，但仅针对部分已翻译的模块。
```
/b lang [语言]
```
`[语言]` 为空时返回当前语言，可选值：
- 简体中文（默认）：**zh**
- 繁體中文：**tw**
- English：**en**
- 日本語：**jp**
- 한국어：**kr**
- Français：**fr**

## [硬币](/coin/)
可以使用[签到](#签到)获取硬币，使用 `/b help base.coin` 查询内置帮助。

### 查询
查询当前账号的硬币数量。
```
/b coin
```

### 转账
将当前账号的硬币转让给其他人。
```
/b coin pay <目标> <硬币数>
```
`<目标>` 为 **@** 或 **QQ 号**。

### 抽奖
获取[硬币](/coin/)的一种方式。
```
/b coin wager
```

::: theorem 奖池说明
初始奖池为 1000 个硬币。每日只能抽奖一次，每次投入 5 个硬币，中奖的概率为 0.01%。中奖后奖池内的所有硬币将会转入中奖者的账户中，届时奖池将会重置。
:::

### 排行
```
/b coin rank
```

### 给予
<span class="span-bot-admin">Bot 管理员</span>
```
/b coin give <目标> <硬币数>
```
`<目标>` 为 **@** 或 **QQ 号**。

### 拿取
<span class="span-bot-admin">Bot 管理员</span>
```
/b coin take <目标> <硬币数>
```
`<目标>` 为 **@** 或 **QQ 号**。

### 设置
<span class="span-bot-admin">Bot 管理员</span>
```
/b coin set <目标> <硬币数>
```
`<目标>` 为 **@** 或 **QQ 号**。

## 物品
通过[硬币](/coin/)在[商店](#商店)购买或其他途径获取的内容，可以用来使用一些功能。使用 `/b help base.item` 查询内置帮助。

### 库存
```
/b item list
```

### 物品详情
> 只能查询已有物品的详情。
```
/b item info <物品 ID>
```

### 使用
```
/b item use <物品 ID> [数量]
```

## 商店
使用 `/b help base.shop` 查询内置帮助。

### 商品列表
```
/b shop list
```

### 购买
```
/b shop buy <物品 ID> [数量]
```
`<物品 ID>` 可通过[商品列表](#商品列表)获得。

`[数量]` 默认为 **1**。

## 用户组
使用 `/b help base.member` 查询内置帮助。

### 查询
查询目标账号的用户组。
```
/b member info [目标]
```
`[目标]` 为 **@** 或 **QQ 号**。

### 设置
<span class="span-bot-admin">Bot 管理员</span>
<span class="span-bot-helper">Bot 协助者</span>
```
/b member set <目标> <用户组>
```
`<目标>` 为 **@** 或 **QQ 号**。

`<用户组>` 可选值：
- Bot 管理员：**admin**
  <br>*Bot 协助者无法设置*
- Bot 协助者：**helper**
  <br>*Bot 协助者无法设置*
- 普通用户（默认）：**normal**
- 被封禁用户：**banned**

## 群权限
<span class="span-group">群聊</span>

使用 `/b help base.group` 查询内置帮助。

### 选项
<span class="span-admin">群管理员</span>
<span class="span-group">群主</span>
<span class="span-bot-admin">Bot 管理员</span>
<span class="span-bot-helper">Bot 协助者</span>

使用 `/b help base.group.conf` 查询内置帮助。

```
/b group conf <选项>
```
`<选项>` 可选值：
- 新成员：`welcome [详细参数]`
- 成员退群：`leave [详细参数]`
  <br>`[详细参数]` 可选值：
  - 开关选项：`on` 或 `off`
  - 设置提示内容：`set <内容>`
- 模块警示：`module_warn [on|off]`
  <br>*关闭后将不会显示 “模块未开启。” 的警告。*
- 指令使用频率（单群每人）：`command_process_interval [秒数]`
  <br>`[秒数]` 默认值为 1 秒（全局）。

### 查询
```
/b group info [目标]
```
`[目标]` 为 **this** 或 **群号**。

### 设置
<span class="span-bot-admin">Bot 管理员</span>
<span class="span-bot-helper">Bot 协助者</span>
```
/b group set <目标> <权限>
```
`<目标>` 为 **this** 或 **群号**。

`<权限>` 可选值：
- 正常群聊：**normal**
- 未验证的群聊（默认）：**unverified**
- 被封禁的群聊：**banned**

## 模块
<span class="span-group">群聊</span>

用于开关群聊的模块，使用 `/b help base.module` 查询内置帮助。

### 设置
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

### 查询
查询单个模块的开关状态。
```
/b module <模块名>
```

### 模块列表
查询所有模块的开关状态。
```
/b module list
```

## [红包](/module/base/hongbao/)

## [兑换码](/module/base/gift/)