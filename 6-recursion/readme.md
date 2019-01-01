可以实现一下斐波那契数列，输入一个数值 n，返回第 n 位的斐波那契数列或者返回长度为 n 的斐波那契数列。
### 参考文章
[programming with js recursion](https://hackernoon.com/programming-with-js-recursion-31371e2bf808)，这篇文章给递归下了个定义：
> Recursion is when a functions calls itself until it reaches a certain state
这个定义很好，里面界定了两个问题，第一递归有终止条件，第二递归就是在函数内部继续调用这个函数。

关于递归，SICP 中有两个图，一个是阶乘，一个是斐波那契数列，配图给出的文字说明分别是 linear-recursive progress 和 tree-recursive progress。显然递归也有分类，而且这两种递归形式应该也是最常见的形式。
