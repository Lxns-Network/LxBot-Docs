# 直播
<span class="span-group">群聊</span>

---

## 设置监听
```
/bili live listen <房间号>
```

## 取消监听
```
/bili live unlisten <房间号>
```

## 监听列表
```
/bili live listen list
```

## 监听详情
```
/bili live listen info <房间号>
```

## 设置监听事件
```
/bili live event add <房间号> <事件>
```
`<事件>` 可选值：
- 直播开始（默认设置）：`LIVE`
- 直播准备中（默认设置）：`PREPARING`
- 用户发送弹幕：`DANMU_MSG`
  <br>*您需要[设置监听关键词](#设置监听关键词)才能转发。*
- 礼物连击：`COMBO_SEND`
- 续费大航海：`GUARD_BUY`
- 醒目留言：`SUPER_CHAT_MESSAGE`

## 取消监听事件
```
/bili live event del <房间号> <事件>
```
`<事件>` 如上。

## 设置监听关键词
```
/bili live keyword add <房间号> <关键词>
```

## 取消监听关键词
```
/bili live keyword del <房间号> <关键词>
```
`<关键词>` 为 **all** 时删除所有关键词。

## 关键词列表
```
/bili live keyword list
```