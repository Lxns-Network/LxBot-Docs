# 红包
该功能用于用户发送硬币红包。

---

## 发送拼手气红包
```
/b hb send <硬币数> <人数> [过期时间]
[标题]
```
`<硬币数>` 不能小于 `<人数>`，且都为正整数。

`[过期时间]` 默认为 86400 秒（一天），范围在一分钟至一天间。

`[标题]` 默认为 “恭喜发财，大吉大利！”。

## 抢红包
```
/b hb <红包 ID>
```

## 列表
```
/b hb list
```

## 详情
```
/b hb <红包 ID> info
```

## 回收
该指令用于回收**过期**红包。

```
/b hb [红包 ID] rec
```
`[红包 ID]` 为空时默认回收所有过期红包。