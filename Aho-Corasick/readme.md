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

