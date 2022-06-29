Longest String Chain
====================


Given a list of English lowercase words, let’s say word1 is a predecessor of word2 if and only if we can add exactly one letter anywhere in word1 to make it equal to word2. For example, "abc" is a predecessor of "abac".

A word chain is a sequence of words [word_1, word_2, ..., word_k] with k >= 1, where word_1 is a predecessor of word_2, word_2 is a predecessor of word_3, and so on.

Return the longest possible length of a word chain with words chosen from the given list of words.

Examples
--------

Input: words = ["a","b","ba","bca","bda","bdca"]
Output: 4

Explanation:

One of the longest word chain is "a","ba","bda","bdca".

Input: words = ["xbc","pcxbcf","xb","cxbc","pcxbc"]
Output: 5

Constraints
-----------

1 <= words.length <= 1000
1 <= words[i].length <= 16
words[i] only consists of English lowercase letters.



Coffee shop owner clusters
==========================

There are many coffee shop owners in Seattle. Some of them know each other directly. Others might know each other transitively, through others. For example, if owner A<->B and B<->C know each other directly, then A and C know each other indirectly and all three belong to one cluster.

Knowing which owners know each other directly, find the number of the coffee shop owner clusters.

Input is a square matrix where each cell, owner[A][B], indicates whether owner A knows owner B directly.

[“1100”,
 “1110”,
 “0110”,
 “0001”]

Output: 2

There are four owners: z0, z1, z2 and z3.

Each owner knows oneself, thus the matrix diagonal has all 1s.

Other than that, the green matrix cells indicate that z0<->z1 and z1<->z2 know each other directly.

Because of the transitive property, owners z0, z1 and z2 form one cluster.

The remaining owner, z3, doesn't know others and forms their own separate cluster.

This gives us a total of 2 owner clusters.


1: 1 0 0 0 1 0
2: 0 1 1 0 0 0
3: 0 1 1 1 0 0
4: 0 0 1 1 0 1
5: 1 0 0 0 1 0
6: 0 0 0 1 0 1

1 - 5
2 - 3 - 4 - 6
