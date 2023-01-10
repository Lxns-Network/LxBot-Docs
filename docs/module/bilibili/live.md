# 直播
<span class="span-group">群聊</span>

---

## 直播监听
<span class="span-bot-admin">Bot 管理员</span>

::: tip 注意
如**主播**有功能需求，请添加反馈群（**1151290186**）咨询群管理员。
:::

### 设置监听
```
/bili live listen <房间号>
```

### 取消监听
```
/bili live unlisten <房间号>
```

### 监听列表
```
/bili live listen list
```

### 监听详情
```
/bili live listen info <房间号>
```

### 设置监听事件
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

### 取消监听事件
```
/bili live event del <房间号> <事件>
```
`<事件>` 如上。

### 自定义事件提醒内容
```
/bili live event content <房间号> <事件> [内容]
```
`<事件>` 如上，目前仅支持自定义开播与下播。

`[内容]` 为空时返回自定义事件提醒内容，可用的占位符：
- 房间标题：`$TITLE`
- 主播用户名：`$NAME`
- 房间 ID：`$ROOM_ID`
- 直播封面：`$COVER`
- @全体成员：`$AT_ALL`

### 设置监听关键词
```
/bili live keyword add <房间号> <关键词>
```

### 取消监听关键词
```
/bili live keyword del <房间号> <关键词>
```
`<关键词>` 为 **all** 时删除所有关键词。

### 关键词列表
```
/bili live keyword list <房间号>
```