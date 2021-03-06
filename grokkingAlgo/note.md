### 前言
极客时间的老师给初学者推荐了 grokking algorithm 这本书，看这本书确实比较简单，但是里面很多的内容和细节其实值得仔细品味，很多的概念对于理解算法有很大帮助。

这本书的把常见的算法解释的很清楚，并且给出了 python 的代码实现。计划是一天一个 chapter，但是越到后面难度应该会越大，暂且按照这个进度去看的话，大概需要 11 天可以看完整本书。给出一点 Buffer，那就是 14 天，两周的时间。那就是 12.3 - 12.17。
虽然列出来计划，但是很多时候计划都会被打破，在想自己要不要给自己定一个计划如果被打破的惩罚。比如给家人交罚款，😂，。或者其他什么规矩？

作者有个自己的网站，http://adit.io/

### Chapter 1
#### binary search
这个部分定了一个函数 def binary_search，作者给这个函数的每一句都写了注释，虽然这个函数很简答，但是这个注释也值得看一下。
首先 low 和 high，作者注释的是 keep track of which part of the list you are searching，其实这个也相当于一个指针。
while low <= high，作者给的注释是 while you haven't narrowed it down to only one
element...，这个解释也很妙。实际上，这个遍历的过程有点像“夹逼定理”的过程，在不断的缩小一个范围，当最大最小两个指针同时指向同一个元素的时候，就是这个遍历结束的时候。这个遍历的过程用到了两个指针，这也是一种常见的算法理论，就是使用两个指针会产生一些神奇的，更高的效率。比如在课程后面有人用单链表的方式判断回文就用到了两个指针。不过是快慢指针。而这个是高低两个指针，或者说前后，或者说上下两个指针。
这两个注释对于理解代码有很大的帮助。

> (Big O notation) tells you the number of operations an algorithm will take.

可见 big o notation 实际上是在说当一个数据结构有 n 个元素的时候，执行某个算法要进行多少次简单操作。

> ...But Big O notation is about the worst-case scenario.

big o notation 是最坏情况的描述。

### Chapter 2
因为之前看课程的时候看过一遍 chapter 2，所以再看的时候速度很快，并且没有太多的感慨。文章的最后给出了选择排序的思路和代码实现，以及时间复杂度。这个可以用 js 来实现一下。选择排序的基础是找到数组中最小的数字，没找到一次，就对剩下的数组执行相同的操作。所以这个是不是可以做成递归的形式，感觉似乎也是可以的。递归的算法复杂度肯定是两数相乘，那么选择排序的是 O(n²)，而快速排序的复杂度是
O(n*Logn)。

### Chapter 6: Breadth-first search
这两天看书比较快，直接跳到第六章了。
这里说的最短路径，其实应该是最少次数。
这里一定要注意，有个 directed graph 的概念，就是 edge 是单向的。Anuj 是 Bob 的 neighbor，尽管实际中这也意味着 Bob 是 Anuj 的 neighbor，但是在这个数据结构里， Bob 就并不是 Anuj 的 neighbor。这就是单向的 graph。
在最短路径搜索的时候，还要注意一点，就是一定要维护一个已经被搜索的列表，如果已经被搜索过了，那么就不要在搜索了，如果没有则搜索结束之后添加到这个列表中。这样就可以知道整个搜索过程。并且避免重复搜索。
最短路径如果针对的是一棵树的话，实际上在求从树的根节点到第几层的时候找到另外符合条件的节点。
### Chapter 7: Dijkstra's Algorithm
这个算法很有意思，最开始我没看懂原理，但是看到第二个例子之后，我把第一个例子又模拟了一遍，感觉似乎看懂了。还没有真实代码去实践。第二个例子也是生活中的实际例子，感觉对实际生活也有很大的帮助。
这个算法在百度搜索有视频，打开第一条就是爱奇艺的麻省理工算法导论的系列课程。然后去 B 站又搜了一下，发现很多相关资源可以看。比如麻省理工的课程在 B 站也有。今天看完一个算法的图解或者课程。

### Chapter 8: Greedy Algorithm
> A greedy algorithm is simple: at each step, pick the optimal move. In this case, each time you pick a class, you pick the class that ends the soonest. In technical terms: at each step you pick the locally optimal solution, and in the end you’re left with the globally optimal solution.
贪婪算法的思路就是每一步都选择最优决定。

百度百科对于贪婪算法的说明也还可以，里面有一些可以借鉴的内容，比如 dijkstra 算法就是 贪婪算法 的应用。


### Chapter 10: K-nearestneighbors
- KNN is used for classification and regression and involves looking at the k-nearest neighbors.
- Classification = categorization into a group.
- Regression = predicting a response(like a number).
- Feature extraction means converting an item (like a fruite or a user) into a list of numbers that can be compared.
- Picking good features is an important part of a successful KNN algorithm.

