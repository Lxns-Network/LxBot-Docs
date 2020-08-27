# 网络工具
<span class="span-friend">私聊</span>
<span class="span-group">群聊</span>

::: tip 注意
本模块返回的结果仅供参考。
:::
---

## 帮助
```
/n help
/net help
/network help
```

## Ping
```
/n ping <主机名> [次数]
/net ping <主机名> [次数]
/network ping <主机名> [次数]
```
`[次数]` 为整数，最大为 10 次。

## DNS 查询
```
/n dns <主机名> <记录名>
/net dns <主机名> <记录名>
/network dns <主机名> <记录名>
```
`<记录名>` 包含 **A**, **AAAA**, **CNAME**, **MX**, **NAPTR**, **NS**, **PTR**, **SOA**, **SRV**, **TXT**。

## TCP 路由追踪
<span class="span-admin">Bot 管理员</span>
```
/n trace <主机名>
/n tracert <主机名>
/n traceroute <主机名>
/net trace <主机名>
/net tracert <主机名>
/net traceroute <主机名>
/network trace <主机名>
/network tracert <主机名>
/network traceroute <主机名>
```