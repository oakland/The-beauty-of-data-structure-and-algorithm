本章节中名为“韩某众”的读者回复了一段内容，提到了 js，并且给出了一个搜索关键词。在 google 搜索这个关键词之后，拿到两篇文章，一篇是英文原文，一篇是众成翻译给出的译文。这个对于理解 js 数组底层实现应该有很大帮助。文章罗列如下：
- [javascript-array-evolution-performance](http://voidcanvas.com/javascript-array-evolution-performance/)
- [JavaScript 数组的演进及其性能](https://www.zcfy.cc/article/diving-deep-into-javascript-array-8211-evolution-038-performance-void-canvas)

上面这篇文章又引申出了 typed array 这个概念，需要去 MDN 看下。和这篇文章相关的[脑图](http://naotu.baidu.com/file/59f4d132aa64dfa9aed0818dd096fb27)

### 笔记
一维数组的内存寻址公式：`a[k]_address = base_address + k * type_size`。那二维数组的寻址公式是什么？
`a[i][j]_address = base_address + (i*n + j)*type_size`

### 疑惑
“警惕数组的访问越界问题” 这个部分中有一段 C 语言代码，其中有句话“a[3] 也会被定位到某块不属于数组的内存地址上，而这个地址正好是存储变量 i 的内存地址，那么 a[3] = 0 就相当于 i = 0 ...”，这句话没看懂，为什么 a[3] = 0 就相当于 i = 0？
