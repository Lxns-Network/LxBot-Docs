# 兑换码
用于 Bot 管理员发行奖励。

---

## 兑换
```
/b gift cash <兑换码>
```

## 生成
<span class="span-bot-admin">Bot 管理员</span>
```
/b gift gen <礼品类型> <兑换数量 / 人> <兑换人数> <兑换次数 / 人> <过期时间>
```
`<礼品类型>` 可选值：
- 硬币：`coin`
- 物品：`item <物品 ID>`

`<兑换人数>` 为 **-1** 时为无限。

`<过期时间>` 单位为秒，为 **-1** 时为永不。

## 列表
<span class="span-bot-admin">Bot 管理员</span>

该指令仅会显示 `<兑换码前缀>`，不能直接兑换。
```
/b gift list
```

## 详情
<span class="span-bot-admin">Bot 管理员</span>
```
/b gift info <兑换码前缀>
```

## 回收
<span class="span-bot-admin">Bot 管理员</span>

该指令会将发行的所有奖励回收。
```
/b gift recover <兑换码前缀>
```

## 删除
<span class="span-bot-admin">Bot 管理员</span>

该指令会将兑换码直接删除，不会回收已发行的奖励。
```
/b gift del <兑换码前缀>
```