### 前言
极客时间的老师给初学者推荐了 grokking algorithm 这本书，看这本书确实比较简单，但是里面很多的内容和细节其实值得仔细品味，很多的概念对于理解算法有很大帮助。

这本书的把常见的算法解释的很清楚，并且给出了 python 的代码实现。计划是一天一个 chapter，但是越到后面难度应该会越大，暂且按照这个进度去看的话，大概需要 11 天可以看完整本书。给出一点 Buffer，那就是 14 天，两周的时间。那就是 12.3 - 12.17。
虽然列出来计划，但是很多时候计划都会被打破，在想自己要不要给自己定一个计划如果被打破的惩罚。比如给家人交罚款，😂，。或者其他什么规矩？

作者有个自己的网站，http://adit.io/

### Chapter 1
#### binary search
这个部分定了一个函数 def binary_search，作者给这个函数的每一句都写了注释，虽然这个函数很简答，但是这个注释也值得看一下。
首先 low 和 high，作者注释的是 keep track of which part of the list you are searching，其实这个也相当于一个指针。
while low <= high，作者给的注释是 while you haven't narrowed it down to only one element...，这个解释也很妙。
这两个注释对于理解代码有很大的帮助。

> (Big O notation) tells you the number of operations an algorithm will take.

可见 big o notation 实际上是在说当一个数据结构有 n 个元素的时候，执行某个算法要进行多少次简单操作。

> ...But Big O notation is about the worst-case scenario.

big o notation 是最坏情况的描述。
