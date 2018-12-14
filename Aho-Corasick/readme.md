Q: Given an input text and an array of k words, arr[], find all occurrences of all words in the input text. Let n be the length of text and m be the total number characters in all words, i.e. m = length(arr[0]) + length(arr[1]) + … + length(arr[k-1]). Here k is total numbers of input words.

Notes: If we use a linear time searching algorithm like KMP, then we need to one by one search all words in text[]. This gives us total time complexity as O(n + length(word[0]) + O(n + length(word[1]) + O(n + length(word[2]) + … O(n + length(word[k-1]). This time complexity can be written as O(n*k + m).
Aho-Corasick Algorithm finds all words in O(n + m + z) time where z is total number of occurrences of words in text. The Aho–Corasick string matching algorithm formed the basis of the original Unix command fgrep.

这种算法是针对非常特定的问题(super specific problem)

问了算法群的人，说 AC = KMP + Trie，所以理解 AC 需要先理解 KMP 和 Trie。Trie 我看了文章大概看懂了。现在还剩下 KMP。根据算法之美的课程 KMP 和 BM 的算法本质是类似的，所以我先看 BM 算法，然后再看 KMP，然后再看 AC。

复杂度：
概念和名词： Trie tree

### Trie tree
是什么？怎么生成的？
Trie tree 在百度百科里说的是 hash tree 的一个变种，那么也就意味着你需要先理解什么是 hash tree，google 出来的结果是 hash tree 也叫 merkle tree。所以搜索的时候别忘掉另外一种关键词
The original idea behind using tries as a computing structure was that they could be a nice compromise between running time and memory. 这句话就是说 trie tree 是一种时间复杂度和空间复杂度的折中方案。

### BM 算法
> 这里我要特别说明一点，如果坏字符在模式串里多处出现，那我们在计算 xi 的时候，选择最靠后的那个，因为这样不会让模式串滑动过多，导致本来可能匹配的情况被滑动略过。
上面这个点是坏字符串规则中老师强调的点。

> 利用坏字符规则，BM 算法在最好情况下的时间复杂度非常低，是 O(n/m)。比如，主串是 aaabaaabaaabaaab，模式串是 aaaa。每次比对，模式串都可以直接后移四位，所以，匹配具有类似特点的模式串和主串的时候，BM 算法非常高效。
> 不过，单纯使用坏字符规则还是不够的。因为根据 si-xi 计算出来的移动位数，有可能是负数，比如主串是 aaaaaaaaaaaaaaaa，模式串是 baaa。不但不会向后滑动模式串，还有可能倒退。所以，BM 算法还需要用到“好后缀规则”。

根据上面这个说法，显然“好后缀”规则是对“坏字符串”规则的补充。

> 这个时候该如何滑动模式串呢？当然，我们还可以利用坏字符规则来计算模式串的滑动位数，不过，我们也可以使用好后缀处理规则。两种规则到底如何选择，我稍后会讲。抛开这个问题，现在我们来看，好后缀规则是怎么工作的？

这两个规则并不是互斥的，也就是说当出现主串和模式串不匹配的时候，在这两个规则里二选一，而什么时候选择坏字符串规则什么时候选择好后缀规则，则是有条件和规律的。

> 所以，针对这种情况(如果好后缀在模式串中不存在可匹配的子串)，我们不仅要看好后缀在模式串中，是否有另一个匹配的子串，我们还要考察好后缀的后缀子串，是否存在跟模式串的前缀子串匹配的。

> 坏字符和好后缀的基本原理都讲完了，我现在回答一下前面那个问题。当模式串和主串中的某个字符不匹配的时候，如何选择用好后缀规则还是坏字符规则，来计算模式串往后滑动的位数？
> 我们可以分别计算好后缀和坏字符往后滑动的位数，然后取两个数中最大的，作为模式串往后滑动的位数。这种处理方法还可以避免我们前面提到的，根据坏字符规则，计算得到的往后滑动的位数，有可能是负数的情况。

这里解答了什么时候用好后缀规则，什么时候用坏字符串规则，且解答了好后缀规则两种情况下应该如何处理。

### KMP
> 如何来求好前缀的最长可匹配前缀和后缀子串呢？我发现，这个问题其实不涉及主串，只需要通过模式串本身就能求解。所以，我就在想，能不能事先预处理计算好，在模式串和主串匹配的过程中，直接拿过来就用呢？

上面的说法是说当主串和模式串匹配的过程中出现任何一种好前缀的时候，都可以直接根据预先设定的策略知道模式串向后挪动几位。


### [字符串模式匹配算法2 - AC算法](http://www.cnblogs.com/zzqcn/p/3525636.html)
> 由AC算法的原理，我们可以知道，用于匹配的FSA与输入串无关，而只与模式串有关；匹配过程中如果发生失配，则FSA应回退到某一状态，而输入串指针无需回退。这两点都与KMP算法的思想吻合。
上面这句话解释了 AC 和 KMP 之间的关系，或者说相似之处。
这篇网络上的文章在“构造示例”这一步讲解的非常好。
> 首先规定一个初始状态0，接着依次处理多个模式串，首先是he：
> 每个圆圈代表一个状态(State)，圆圈中的数字表示状态的编号；有向箭头代表状态的转换，它由当前状态指向下一状态，箭头上的字符表示此次状态转换的条件。接下来是she，注意每处理一个模式串时，都要先回到起始状态0：
> 注意，如果给定条件C，从当前状态出发能转换到一个有效状态，那么只进行状态转换，而不创建新状态，这一点在处理后面两个模式串时可以看到。接着是his：
> 最后是hers，而且AC规定，当当前状态为初始状态（0）时，对于任意条件C来，都能转换到有效状态（这也避免了回退的死循环），因此，除了条件h和s外，对其他任意条件，状态0还应转换至状态0：

这个过程的图示和文字完美的解释了内容和过程。

### 深入理解 AC 算法
https://blog.csdn.net/lemon_tree12138/article/details/49335051

> 首先明白两点：Trie树的核心点是状态转移，KMP模式匹配的核心点是减少重复匹配。

显然这段话也点明了 AC 和 KMP 以及 Trie 之间的关系。


### 总结
花了两个晚上的时间终于把 AC 给搞懂了，当然就差 js 的代码实现了。😂
现在需要把所有 AC 的博客和文章通读一遍，把其中觉得有价值的内容摘录出来。大概要花费 0.5 h。


### 摘录
https://www.cnblogs.com/xudong-bupt/p/3433506.html, 推荐指数 +++
> 普通的自动机不能进行多模式匹配，AC自动机增加了失败转移，转移到已经输入成功的文本的后缀，来实现。

https://www.cnblogs.com/simple-boy/p/3931536.html, 推荐指数 ++
> 最近在研究一些字符串匹配算法，也是由于工作上的需要，强力推荐一本书《柔性字符串匹配》 

https://github.com/robert-bor/aho-corasick，非常棒的内容，推荐指数 ++++-
> Every character encountered is presented to a state object within the goto structure. If there is a matching state, that will be elevated to the new current state.

上面这句话还让我想到了 react 的数据，也是类似一种状态树，数据也是一层一层流下去，也是一个大的 state object

> However, if there is no matching state, the algorithm will signal a fail and fall back to states with less depth (ie, a match less long) and proceed from there, until it found a matching state, or it has reached the root state.

这句话说得是，当不匹配的时候怎么办？不匹配就走 fail 函数，fail 函数是有策略的，并不是直接会到起始位置（root），而是回到一个 less depth (a match less long)，这个括号的注释很棒，就是说回到到一个仅次于当前深度的一个深度，而不是最表层，当然肯定也不是更深层。从这个位置在判断是否 fail，如果 fail，那么继续递归上面的行为，直到 root，也就是 the least depth 的位置。如果没有 fail 就继续向前走。

> Whenever a state is reached that matches an entire keyword, it is emitted to an output set which can be read after the entire scan has completed.
这句话说了，什么时候出发 emit，输出 output，以及最终的 output 的结果什么时候展示。

> The beauty of the algorithm is that it is O(n). No matter how many keywords you have, or how big the search text is, the performance will decline in a linear way.
搞了半天，为啥要整这个算法，就是为了降低时间复杂度。

https://www.npmjs.com/search?q=aho，在 npm 里搜索 aho 的结果，推荐指数 ++++-
在 npm 里搜 aho 会出上面的结果，里面有 ac 的算法库，有几个仓库很不错，从这几个仓库出发还能看到一些很好的算法实现和解释。也值得去看看。

http://www.cnblogs.com/zzqcn/p/3525636.html，这篇文章很不错，作者是真的懂了，并不是抄的。推荐指数 ++++
> 先根据多模式串建立一个有限状态自动机FSA，在进行模式匹配时，设当前状态为Scur，输入串中的当前符号为C，运行FSA，试图得到下一状态Snext。如果Snext无效，即发生失配，则根据规则，将当前状态回退到一个适合的状态Sfail，然后重复上一过程，直到Snext有效或Scur为0。在匹配的过程中，如果当前状态正好匹配了某个模式P，则输出它。

上面这段话解释了整个 AC 算法的过程。

> 由AC算法的原理，我们可以知道，用于匹配的FSA与输入串无关，而只与模式串有关；匹配过程中如果发生失配，则FSA应回退到某一状态，而输入串指针无需回退。这两点都与KMP算法的思想吻合。

上面这句话说了 AC 算法和 KMP 算法之间的关系，并且进一步的阐释了两者之间的本质原则。

> 这时构建的FSA也叫做非确定性有限状态机（Nondeterministic Finite State Automata: NFA），也就是说，当匹配过程中发生失配时，应根据fail表进行状态回退，但具体回退到哪个状态为止，是不确定的，需要一次或多次循环回溯。

这里作者解释了 NFSA 这个说法，里面有两个关键词，分别是 非确定性 和 有限。之后作者还进一步阐述了从这个不确定性到确定性可以优化的事情。

> 可以预见，NFA会影响模式匹配的效率。可以通过构建确定性有限状态机（Deterministic Finite State Automata: DFA）来弥补这个缺陷，它的原理是，在当前状态下，对于任意条件，都可以确定地给出下一状态，而不需要进行循环。
> 设当前状态是S，条件为C，问题是如何求得下一个确定状态S‘。如果goto(S, C)成功，则S’ = goto(S, C)；否则，令S‘ = goto(fail(S), C)，如果S’有效且不为0，则S‘就是那个确定状态，此时，应把S’ = goto(S, C)这个关系添加到goto表中。可以预见，DFA会提高匹配速度，但由于向goto表添加了更多的条目，会导致存储消耗增加。

显然作者这里的方法就是给 goto 添加类似硬代码一样的东西，感觉像是空间换时间的这种方式。因为不管是硬添加 goto 还是在执行过程中进行 goto，都需要做当 fail 的时候 goto 这件事情。只不过一个是提前了，一个是在过程中做。提前的话，可以提高执行的速度，但是 goto 表会增加额外的内容，甚至有可能因为这个 goto 用不到而浪费这部分空间。


