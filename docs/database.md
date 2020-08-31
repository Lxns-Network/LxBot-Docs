# 表结构

---

## 日志
``` sql
CREATE TABLE `message`(
	`ID` integer PRIMARY KEY AUTOINCREMENT,
	`type` TEXT,
	`group` BIGINT,
	`member` BIGINT,
	`time` TIME,
	`text` TEXT
)
```

## 用户
``` sql
CREATE TABLE `user`(
	`member` BIGINT PRIMARY KEY,
	`config` BLOB
)
```

## 群
``` sql
CREATE TABLE `group`(
	`group` BIGINT PRIMARY KEY,
	`config` BLOB
)
```

## 全局
``` sql
CREATE TABLE `global`(
	`type` BIGINT PRIMARY KEY,
	`config` BLOB
)
```

## 兑换码
``` sql
CREATE TABLE `gift`(
	`ID` integer PRIMARY KEY AUTOINCREMENT,
	`code` TEXT,
	`count` BIGINT,
	`per` BIGINT,
	`type` BIGINT,
	`amount` BIGINT,
	`time` DATETIME,
	`expired` DATETIME
)


CREATE TABLE `gift_log`(
	`ID` BIGINT,
	`member` BIGINT,
	`time` DATETIME
)
```
| 配置名  | 表名     | 类型     | 用途               | 备注
| ------- | -------- | -------- | ------------------ | -
| ID      | gift     | int      | 兑换码 ID          | 自动递增
| code    | gift     | str      | 兑换码             |
| count   | gift     | int      | 可兑换的人数       | -1 为无限，正整数兑换时自动递减
| per     | gift     | int      | 每个人可兑换的次数 | 默认为 1
| type    | gift     | int      | 兑换类型           | 1 为硬币
| amount  | gift     | int      | 单次兑换数量       |
| time    | gift     | datetime | 兑换码生成时间     |
| expired | gift     | datetime | 兑换码过期时间     |
| ID      | gift_log | int      | 兑换码 ID          |
| member  | gift_log | int      | 兑换 QQ            |
| time    | gift_log | datetime | 兑换时间           |