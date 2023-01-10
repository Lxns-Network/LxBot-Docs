# 代码运行
<span class="span-friend">私聊</span>
<span class="span-group">群聊</span>
<span class="span-discord">DC</span>
<span class="span-telegram">TG</span>

---

## 运行
```
/e <语言> <代码>
```
`<语言>` 可选值：
::: details 查看详细列表
- Python 3.9：`py`
  <br>预装的第三方库：Pillow、numpy、matplotlib、scipy、kiwisolver、python-dateutil、pyparsing、cycler、six
  <br>预装的字体：NotoSansCJKSC-Black.ttf、NotoSerifCJKSC-Black.ttf
- Node.js：`js`
- Lua：`lua`
- C++：`cpp`
- C#：`cs`
- C：`c`
- Java：`java`
- PHP：`php`
- Kotlin：`kt`
- Kotlin Script：`kts`
- Rust：`rs`
- Golang：`go`
- F#：`fs`
- R：`r`
- Pascal：`pas`
- Lisp：`lisp`
- Erlang：`erl`
- Swift：`swift`
- Brainfuck：`bf`
  <br>经测试不支持 `[实参]`。
- Groovy：`groovy`
- Bash：`sh`
- NASM（64 位）：`asm`
- Ruby（暂不可用）：`rb`
- Scala（暂不可用）：`scala`
:::

::: theorem 文件返回
在运行目录下有一名为 `temp` 的目录，若有输出文件需求，请向该目录保存文件。图片的最大尺寸为 `5000×5000` 。音频的最大大小为 `1MB`。

示例指令（Python 3）：
```py
/e py from PIL import Image, ImageDraw
image = Image.new("RGB", (50, 20), "white")
draw = ImageDraw.Draw(image)
draw.text((0, 0), "Hello", fill='black')
image.save("./temp/a.jpg")
```

支持的文件格式：
- image/jpg
- image/png
- image/gif
- audio/wav
- audio/ogg
- audio/mp3
:::

## 用户代码
通过用户代码，您可以实现一键执行自己或他人公开的代码（自定义指令）。

### 保存（修改）
```
/e <语言> save <名称> [代码]
```
`[代码]` 最长为 10000 字。为空时则后续单独上传文件，发送其它文本则取消操作。

::: tip 注意
每个人仅能保存 10 个用户代码。
:::

示例指令（Python 3）：
```py
/e py save encodeBase64 import sys, base64
print(base64.b64encode(sys.argv[1].encode()).decode())
```

### 详情
```
/e info <名称>
```
`<名称>` 可以使用 `<用户名>:<名称>` 的格式来获取他人公开代码的详情。

### 运行
```
/e run <名称> [实参]
```
`<名称>` 可以使用 `<用户名>:<名称>` 的格式来运行他人公开的代码。

示例指令（Python 3）：
```
/e py run encodeBase64 test
```

### 公开
让其他人可以运行您保存的用户代码。
```
/e public <名称>
```

### 修改详情
```
/e description <名称> <详情>
```
`<详情>` 最长为 500 字。

### 列表
```
/e list
```

### 删除
```
/e del <名称>
```

## [代码示例](./usage/)