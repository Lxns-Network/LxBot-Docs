# 部分示例表达式

::: tip 注意
如果输入非精确数字，将会返回非精确结果。
:::

---

## 基本运算
- 四则运算：
  - 加：`+`
  - 减：`-`
  - 乘：`*`
  - 除：`/`
- 乘方：`^`
- 开方：`sqrt(_,_)` 或 `_^(1/_)`
- 大于等于：`>=`
- 圆周率：`pi` 或 `π`
- 对数：`log(a,b)`
- 绝对值：`|_|` 或 `abs(_)`
- 无穷：`infinity` 或 `∞`

## 进制转换
- 二进制：`binary`
- 三进制：`ternary`
- 四进制：`quanternary`
- 五进制：`quinary`
- 六进制：`senary`
- 七进制：`septenary`
- 八进制：`octonary`
- 九进制：`novenary`
- 十一进制：`undecimal`
- 十二进制：`duodecimal`

## 代数、函数、方程
因式分解：`factor _`

解方程、微分方程：`solve _`

图象：`plot _`

求方程整数解：`solve _ over the integers`

求导函数：
- 一阶导数：`derivative of _`
- 二阶导数：`second derivatice of _`

求不定积分：`indefinite integral of _` 或 `integrate _`

求定积分：`integrate _ dx from x=_ to _`

::: tip 提示
`integrate` 可以使用 `∫` 符号代替。
:::

求函数最值：
- 最小值：`min _ (when _)`
- 最大值：`max _ (when _)`

求极限：`lim x->0 _`

级数求和：`sum _ from x=_ to _`

## 向量
绘制向量：`vector{}`

向量的加减：`{}+{}`

求向量外积：`{}cross{}`