### 前言
今天重新看了一遍“数组”这节课程，感觉有些新收获。确实是“温故可以知新”，而且“书读百遍，其义自见”。这里结合 js 的数组再总结一些思想和经验。

### js 的数组
课程中老师的数组定义是：数组（Array）是一种线性表数据结构。它用一组连续的内存空间，来存储一组具有相同类型的数据。
这里“连续的内存空间”这个点，我以前其实是不知道的。看过课程之后才明白这句话到底是什么尤其，尤其是当执行删除和插入的操作时，整个过程的描述才让我认识到什么是连续的内存空间。而 js 中的数组又恰好和这里描述的数组是不一致的， js 的数组用的是链表的方式实现的数组。评论区 韩某众 的回复里提到了一篇 js 数组底层实现的文章。
[javascript-array-evolution-performance](http://voidcanvas.com/javascript-array-evolution-performance/)
这篇文章详细说明了 js 中的数组底层实现的进化，并且举了一些很好的例子。值得细看。

#### MDN
然后我又去看了 mdn 对数组的描述，里面有这样的话：
> Since an array's length can change at any time, and data can be stored at non-contiguous locations in the array, JavaScript arrays are not guaranteed to be dense; this depends on how the programmer chooses to use them. In general, these are convenient characteristics; but if these features are not desirable for your particular use, you might consider using typed arrays.

这里提到了 typed array，可以从这个点再出去去看看 typed array 这种数据类型，因为之前在做一个播放器的时候用过这种数据类型。现在正是可以重新看这种数据类型的好时机。

#### javascript info
[javascript-info-array](https://javascript.info/array)中对 js 的数组也有详细的描述。其中有几个点也值得注意，第一个是 "Internals" 部分对于 contiguous memory area 有相关的描述和说明。这里也提到了这个会对性能产生影响。第二是 "Performance" 这部分中提到了 'Methods push/pop run fast, while shift/unshift are slow'，这个其实就是说数组是连续的，如果有空的位置必须要依次把后面的内容挪动。最后，整个文章的后面给了几个练习题，其中有个题目很有意思，叫 'A maximal subarray'，可以写一下这个算法的函数。

### typed array
从 mdn 出来之后，打算看看 typed array 这部分内容，这部分应该是 js 更接近底层的内容。也是从 mdn 的 typed array 开始看。
buffer -> view -> typed array，看完 mdn 中 typed array 一部分内容，感觉 view 把 buffer 解析成了 typed array。
> A view provides a context — that is, a data type, starting offset, and the number of elements — that turns the data into a typed array.
> 上面这段话是从 mdn 中摘取出来的。不看中间破折号包裹的内容，显然 view 提供了 context，context 将数据生成了 typed array。
#### Understanding ECMAScript6
这本书里 chapter 10 里有 typed array 的内容。
其中提到了原生 JS 对于数据的按位操作是比较慢的，因为数字是按照 64 位浮点数的格式存储的，然后根据需要会转化成 32 位整数。这里就牵扯到之前头条面试的时候，面试官提到的一句，说在 js 中存储为 1 和 存储为 1.00000... 是一样的。因此为了节约空间复杂度，使用 null 作为 hash table 的值是更节约空间的。摘录一段文章中的内容
> Arithmetic on native JavaScript numbers was too slow for WebGL because the numbers were stored in a 64-bit floating-point format and converted to 32-bit integers as needed. Typed arrays were introduced to circumvent this limitation and provide better performance for arithmetic operations. The concept is that any single number can be treated like an array of bits and thus can use the familiar methods available on JavaScript arrays.
上面摘录中最后还说了一个概念，就是数字可以当做位数组来对待。
其中还提到了 Javascript numbers are stored in IEEE 754 format，关于这个在字节跳动面试的时候面试官有提到过，说在 js 中 1 的存储方式和 1.000000000... 的存储方式是一样的，所以让 hash table 的 key 是 null 是最节省空间的。而不是 1。这个数字的存储方式在 xiaoshen 的分享 ppt 里也有提到。然后网上找了一篇文章写的也很系统。暂时记录，没有仔细看。[IEEE754浮点表示法详解](https://segmentfault.com/a/1190000010841961)。
接着看。
array buffer 实际上就是指定内存地址，和 C 语言中的 malloc() 有些类似。例如 `let buffer = new ArrayBuffer(10)` 就表示 allocate 10 bytes。
这里需要注意，array buffer 的长度永远是初始化时设置的长度，创建之后可以改变存储的数据，但是无法改变这个内存的长度。
> An array buffer always represents the exact number of bytes specified when it was created. You can change the data contained within an array buffer but never the size of the array buffer.

##### 什么是View
> Array buffers represent memory locations, and views are the interfaces you’ll use to manipulate that memory.
view 其实就是操作内存空间的接口。reading and writing data 这部分中提到了 little endian 的问题，就是 xiaoshen 在 ppt 里提到的“大端和小端” 的问题，这个 little endian 就是“小端”的意思。
typed arrays are views。
