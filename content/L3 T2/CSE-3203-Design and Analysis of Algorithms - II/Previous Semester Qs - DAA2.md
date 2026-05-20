---
publish: true
---
# 2022

## 1 _____

### a. What is Hashing? Write down the properties of a good hash function.

**Hashing** is a technique that maps data keys to specific indices in a hash table using a hash function, enabling efficient data retrieval, insertion, and deletion.

**Properties of a Good Hash Function:**

| Property | Description |
|----------|-------------|
| **Uniform Distribution** | Keys should be evenly distributed across table slots |
| **Deterministic** | Same key always produces same hash value |
| **Fast Computation** | Hash value should be computed in $O(1)$ time |
| **Minimizes Collisions** | Different keys should ideally map to different slots |
| **Full Range Coverage** | Should utilize all available table indices |

### b. What is Load factor in Hashing? The keys 12, 18, 13, 2, 3, 23, 5 and 15 are inserted into an initially empty hash table of length 10 using open addressing with hash function $h(k) = k \bmod 10$ and linear probing. What is the resultant hash table?

**Load Factor ($\alpha$):**
$$
\alpha = \frac{\text{Number of elements stored}}{\text{Total number of slots}}
$$

**Insertion Trace (Linear Probing):**

| Key | $h(k)$ | Action | Final Index |
|-----|--------|--------|-------------|
| 12 | 2 | Slot 2 empty | 2 |
| 18 | 8 | Slot 8 empty | 8 |
| 13 | 3 | Slot 3 empty | 3 |
| 2 | 2 | Collision → 3 (collision) → 4 | 4 |
| 3 | 3 | Collision → 4 (collision) → 5 | 5 |
| 23 | 3 | Collision → 4 → 5 → 6 | 6 |
| 5 | 5 | Collision → 6 (collision) → 7 | 7 |
| 15 | 5 | Collision → 6 → 7 → 8 (collision) → 9 | 9 |

**Resultant Hash Table:**

| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|-------|---|---|---|---|---|---|---|---|---|---|
| **Value** | | | 12 | 13 | 2 | 3 | 23 | 5 | 18 | 15 |

**Load Factor:**
$$
\alpha = \frac{8}{10} = \mathbf{0.8}
$$

### c. Discuss the pros and cons of Quadratic Probing over Double Hashing.

| Aspect | Quadratic Probing | Double Hashing |
|--------|-------------------|----------------|
| **Probe Sequence** | $h(k) + c_1 i + c_2 i^2$ | $h_1(k) + i \cdot h_2(k)$ |
| **Computation Cost** | Lower (one hash function) | Higher (two hash functions) |
| **Clustering** | Reduces primary clustering | Eliminates primary and secondary clustering |
| **Slot Coverage** | May not probe all slots | Probes all slots if table size is prime |
| **Implementation** | Simpler | More complex |

**Pros of Quadratic Probing:**
- Faster computation per probe (single hash function)
- Simpler to implement

**Cons of Quadratic Probing:**
- Suffers from secondary clustering
- May fail to find empty slot even if table is not full

## 2 _____

### a. Explain the concept of convex and non convex in computational geometry. Present Graham scan algorithm for finding the convex hull.

**Convex Set:** A set of points is convex if for any two points $p$ and $q$ in the set, the line segment connecting them lies entirely within the set.

**Non-Convex Set:** A set is non-convex if there exists at least one pair of points where the line segment between them goes outside the set.

**Graham Scan Algorithm:**

| Step | Description |
|------|-------------|
| **1. Find Pivot** | Select point with lowest $y$-coordinate (leftmost if tie) |
| **2. Sort** | Sort remaining points by polar angle relative to pivot |
| **3. Initialize Stack** | Push pivot and first two sorted points |
| **4. Iterate** | For each remaining point, check if it makes a left turn |
| **5. Backtrack** | If right turn, pop stack until left turn is made |
| **6. Push** | Push current point onto stack |
| **7. Result** | Stack contains convex hull vertices in counterclockwise order |

**Time Complexity:** $O(n \log n)$ due to sorting step.

### b. Consider a graph $G=(V, E)$ find the Hamiltonian cycle using backtracking method.

**Graph Edges:**
$(1,2), (1,3), (1,4), (2,3), (2,5), (3,4), (3,5), (4,5)$

**Backtracking Trace (Starting from Vertex 1):**

| Step | Path | Action |
|------|------|--------|
| 1 | [1] | Start |
| 2 | [1, 2] | Move to 2 |
| 3 | [1, 2, 3] | Move to 3 |
| 4 | [1, 2, 3, 4] | Move to 4 |
| 5 | [1, 2, 3, 4, 5] | Move to 5 |
| 6 | Check 5→1 | Edge (5,1) does not exist → Backtrack |
| 7 | [1, 2, 3, 5] | Backtrack to 5, try alternative |
| 8 | [1, 2, 3, 5, 4] | Move to 4 |
| 9 | Check 4→1 | Edge (4,1) exists → **Cycle Found** |

**Hamiltonian Cycle:**
**$1 \to 2 \to 3 \to 5 \to 4 \to 1$**

**Alternative Valid Cycle:**
**$1 \to 3 \to 2 \to 5 \to 4 \to 1$**

### c. Differentiate between Backtracking and Branch and Bound method.

| Feature | Backtracking | Branch and Bound |
|---------|--------------|------------------|
| **Search Strategy** | Depth-First Search (DFS) | BFS, DFS, or Best-First |
| **Problem Type** | Constraint Satisfaction / All solutions | Optimization problems |
| **Node Expansion** | Expands all children | Uses bounding function to prune |
| **Bounding Function** | Not used | Used to eliminate suboptimal branches |
| **Goal** | Find feasible solution(s) | Find optimal solution |
| **Memory Usage** | Lower (stack-based) | Higher (priority queue) |
| **State Space** | Explores entire tree if needed | Prunes large portions of tree |

## 3 _____

### a. What is Euler's Totient function?
#### (i) Find the value of $\Phi(35)$ with proper explanation.
#### (ii) Find the value of $\Phi(7000)$.

**Euler's Totient Function $\Phi(n)$:**
Counts the number of positive integers less than or equal to $n$ that are relatively prime to $n$.

**Formula:**
If $n = p_1^{a_1} p_2^{a_2} \cdots p_k^{a_k}$, then:
$$
\Phi(n) = n \prod_{i=1}^{k} \left(1 - \frac{1}{p_i}\right)
$$

**(i) $\Phi(35)$:**
$$
\begin{aligned}
35 &= 5 \times 7 \\
\Phi(35) &= 35 \left(1 - \frac{1}{5}\right) \left(1 - \frac{1}{7}\right) \\
&= 35 \times \frac{4}{5} \times \frac{6}{7} \\
&= \mathbf{24}
\end{aligned}
$$

**(ii) $\Phi(7000)$:**
$$
\begin{aligned}
7000 &= 7 \times 10^3 = 7 \times 2^3 \times 5^3 \\
\Phi(7000) &= 7000 \left(1 - \frac{1}{2}\right) \left(1 - \frac{1}{5}\right) \left(1 - \frac{1}{7}\right) \\
&= 7000 \times \frac{1}{2} \times \frac{4}{5} \times \frac{6}{7} \\
&= 3500 \times 0.8 \times \frac{6}{7} \\
&= 2800 \times \frac{6}{7} \\
&= \mathbf{2400}
\end{aligned}
$$

### b. Define Relatively prime number. Solve the following equations using Chinese Remainder Theorem.
$$
\begin{aligned}
X &\equiv 2 \pmod 3 \\
X &\equiv 3 \pmod 5 \\
X &\equiv 2 \pmod 7
\end{aligned}
$$

**Relatively Prime Numbers:**
Two integers $a$ and $b$ are relatively prime if their greatest common divisor is 1, i.e., $\gcd(a,b) = 1$.

**Chinese Remainder Theorem Solution:**

| Parameter | Value |
|-----------|-------|
| $a_1 = 2, m_1 = 3$ | |
| $a_2 = 3, m_2 = 5$ | |
| $a_3 = 2, m_3 = 7$ | |
| $M = 3 \times 5 \times 7$ | $105$ |

**Calculate $M_i$ and Inverses $y_i$:**

| $i$ | $M_i = M/m_i$ | Equation $M_i y_i \equiv 1 \pmod{m_i}$ | $y_i$ |
|-----|---------------|----------------------------------------|-------|
| 1 | $35$ | $35 y_1 \equiv 1 \pmod 3 \Rightarrow 2 y_1 \equiv 1$ | $2$ |
| 2 | $21$ | $21 y_2 \equiv 1 \pmod 5 \Rightarrow 1 y_2 \equiv 1$ | $1$ |
| 3 | $15$ | $15 y_3 \equiv 1 \pmod 7 \Rightarrow 1 y_3 \equiv 1$ | $1$ |

**Final Calculation:**
$$
\begin{aligned}
X &= (a_1 M_1 y_1 + a_2 M_2 y_2 + a_3 M_3 y_3) \bmod M \\
&= (2 \cdot 35 \cdot 2 + 3 \cdot 21 \cdot 1 + 2 \cdot 15 \cdot 1) \bmod 105 \\
&= (140 + 63 + 30) \bmod 105 \\
&= 233 \bmod 105 \\
&= \mathbf{23}
\end{aligned}
$$

### c. Define deterministic and randomized online algorithm?

| Feature | Deterministic Online Algorithm | Randomized Online Algorithm |
|---------|-------------------------------|-----------------------------|
| **Decision Making** | Next move is fixed based on current input | Next move involves random choices |
| **Predictability** | Fully predictable for same input | Unpredictable due to randomness |
| **Competitive Ratio** | Worst-case performance guarantee | Expected performance guarantee |
| **Use Case** | Standard scheduling, caching | Adversarial environments, load balancing |
| **Example** | LRU Cache | Randomized QuickSort |

## 4 _____

### a. Color the given Graph using Graph coloring Algorithm.

**Graph Structure (Adjacency List):**

| Vertex | Neighbors | Degree |
|--------|-----------|--------|
| 1 | 2, 3, 4, 6, 7 | 5 |
| 2 | 1, 5 | 2 |
| 3 | 1, 4, 6, 7 | 4 |
| 4 | 1, 3, 5, 7 | 4 |
| 5 | 2, 4, 7, 8, 10 | 5 |
| 6 | 1, 3, 7, 9 | 4 |
| 7 | 1, 3, 4, 5, 6, 8 | 6 |
| 8 | 5, 7, 9, 10 | 4 |
| 9 | 6, 8, 10 | 3 |
| 10 | 5, 8, 9 | 3 |

**Welsh-Powell Algorithm (Greedy Coloring):**

| Step | Vertex | Available Colors | Assigned Color |
|------|--------|------------------|----------------|
| 1 | 7 (deg=6) | {1} | **C1** |
| 2 | 1 (deg=5) | {2} (neighbor 7=C1) | **C2** |
| 3 | 5 (deg=5) | {2} (neighbor 7=C1) | **C2** |
| 4 | 3 (deg=4) | {3} (neighbors 7=C1, 1=C2) | **C3** |
| 5 | 4 (deg=4) | {4} (neighbors 7=C1, 1=C2, 3=C3) | **C4** |
| 6 | 6 (deg=4) | {4} (neighbors 7=C1, 1=C2, 3=C3) | **C4** |
| 7 | 8 (deg=4) | {3} (neighbors 7=C1, 5=C2) | **C3** |
| 8 | 9 (deg=3) | {1} (neighbors 6=C4, 8=C3) | **C1** |
| 9 | 10 (deg=3) | {1} (neighbors 5=C2, 8=C3, 9=C1) | **C1** |
| 10 | 2 (deg=2) | {1} (neighbors 1=C2, 5=C2) | **C1** |

**Final Coloring:**

| Vertex | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|--------|---|---|---|---|---|---|---|---|---|----|
| **Color** | C2 | C1 | C3 | C4 | C2 | C4 | C1 | C3 | C1 | C1 |

**Chromatic Number:** $\chi(G) = \mathbf{4}$

*(Note: Vertices {1, 3, 4, 7} form a $K_4$ clique, proving $\chi(G) \geq 4$)*

### b. Given $a=161$ and $b=28$, Find the $\gcd(a,b)$ and the values of $s$ and $t$ using Extended Euclidean algorithm.

**Euclidean Algorithm (Forward):**

| Step | Equation | Quotient | Remainder |
|------|----------|----------|-----------|
| 1 | $161 = 5 \times 28 + 21$ | 5 | 21 |
| 2 | $28 = 1 \times 21 + 7$ | 1 | 7 |
| 3 | $21 = 3 \times 7 + 0$ | 3 | 0 |

**$\gcd(161, 28) = \mathbf{7}$**

**Extended Euclidean Algorithm (Backward Substitution):**

$$
\begin{aligned}
7 &= 28 - 1 \times 21 \\
7 &= 28 - 1 \times (161 - 5 \times 28) \\
7 &= 28 - 161 + 5 \times 28 \\
7 &= 6 \times 28 - 1 \times 161 \\
7 &= (-1) \times 161 + 6 \times 28
\end{aligned}
$$

**Result:**
- **$s = -1$**
- **$t = 6$**

**Verification:** $(-1) \times 161 + 6 \times 28 = -161 + 168 = 7$ ✓

### c. Find the greatest common divisors of 2740 and 1760 using Euclidean algorithm.

**Euclidean Algorithm:**

| Step | Equation | Quotient | Remainder |
|------|----------|----------|-----------|
| 1 | $2740 = 1 \times 1760 + 980$ | 1 | 980 |
| 2 | $1760 = 1 \times 980 + 780$ | 1 | 780 |
| 3 | $980 = 1 \times 780 + 200$ | 1 | 200 |
| 4 | $780 = 3 \times 200 + 180$ | 3 | 180 |
| 5 | $200 = 1 \times 180 + 20$ | 1 | 20 |
| 6 | $180 = 9 \times 20 + 0$ | 9 | 0 |

**Result:**
**$\gcd(2740, 1760) = \mathbf{20}$**

## 5 _____

### a. What are the limitations of Backtracking method.

**Limitations of Backtracking:**

| Limitation | Description |
|------------|-------------|
| **Exponential Time Complexity** | Worst case $O(b^d)$ where $b$ is branching factor |
| **No Optimality Guarantee** | Finds first solution, not necessarily optimal |
| **Redundant Computation** | Re-explores same subproblems repeatedly |
| **Memory Intensive** | Deep recursion requires significant stack space |
| **Not Suitable for Large Instances** | Performance degrades rapidly with problem size |
| **No Pruning Without Bounds** | Explores entire search space without bounding function |

### b. Simulate Travelling Salesman algorithm for the following graph and cost matrix?

**Cost Matrix:**

| | A | B | C | D |
|---|---|---|---|---|
| **A** | ∞ | 5 | 7 | 3 |
| **B** | 2 | ∞ | 4 | 2 |
| **C** | 5 | 2 | ∞ | 3 |
| **D** | 4 | 2 | 3 | ∞ |

**Branch and Bound (TSP) - Row Reduction:**

| Row | Min | Reduction |
|-----|-----|-----------|
| A | 3 | [∞, 2, 4, 0] |
| B | 2 | [0, ∞, 2, 0] |
| C | 2 | [3, 0, ∞, 1] |
| D | 2 | [2, 0, 1, ∞] |

**Lower Bound (LB) = 3 + 2 + 2 + 2 = 9**

**Column Reduction (after row reduction):**

| Col | Min | Reduction |
|-----|-----|-----------|
| A | 0 | [∞, 0, 3, 2] |
| B | 0 | [2, ∞, 0, 0] |
| C | 1 | [3, 1, ∞, 0] |
| D | 0 | [0, 0, 1, ∞] |

**LB = 9 + 1 = 10**

**Explore Paths (Starting from A):**

| Path | Cost | LB | Status |
|------|------|----|--------|
| A→B | 5 | 10+5=15 | Explore |
| A→C | 7 | 10+7=17 | Explore |
| A→D | 3 | 10+3=13 | Explore |

**Path A→D (LB=13):**

| Path | Cost | LB | Status |
|------|------|----|--------|
| A→D→B | 3+2=5 | 13 | Explore |
| A→D→C | 3+3=6 | 13 | Explore |

**Path A→D→B (Cost=5):**
- Remaining: C→A = 5
- Total: 5 + 4 + 2 + 5 = **16**

**Path A→D→C (Cost=6):**
- Remaining: B→A = 2
- Total: 6 + 2 + 2 + 2 = **12**

**Path A→B (LB=15):**

| Path | Cost | LB | Status |
|------|------|----|--------|
| A→B→D→C→A | 5+2+3+5 | 15 | Total = 15 |
| A→B→C→D→A | 5+4+3+4 | 15 | Total = 16 |

**Path A→C (LB=17):**

| Path | Cost | LB | Status |
|------|------|----|--------|
| A→C→B→D→A | 7+2+2+4 | 17 | Total = 15 |
| A→C→D→B→A | 7+3+2+2 | 17 | Total = 14 |

**All Possible Tours Summary:**

| Tour | Cost |
|------|------|
| A→B→C→D→A | 5+4+3+4 = 16 |
| A→B→D→C→A | 5+2+3+5 = 15 |
| A→C→B→D→A | 7+2+2+4 = 15 |
| A→C→D→B→A | 7+3+2+2 = 14 |
| A→D→B→C→A | 3+2+2+5 = 12 |
| A→D→C→B→A | 3+3+2+2 = 10 |

**Optimal Tour:**
**A → D → C → B → A** with **Minimum Cost = 10**

### c. Consider the N-Queens problem. Describe how backtracking can be applied to solve the N-Queens problem. Provide an example for N=4.

**N-Queens Problem:**
Place N queens on an $N \times N$ chessboard such that no two queens attack each other (no two queens share the same row, column, or diagonal).

**Backtracking Approach:**

| Step | Description |
|------|-------------|
| **1. Place Queen** | Place queen in first available column of current row |
| **2. Check Safety** | Verify no conflict with previously placed queens |
| **3. Recurse** | If safe, move to next row and repeat |
| **4. Backtrack** | If no safe position, remove queen and try next column |
| **5. Solution Found** | When all N queens are placed successfully |

**Safety Check Conditions:**
- No other queen in same column
- No other queen on same diagonal ($|row_1 - row_2| = |col_1 - col_2|$)

**N=4 Solution (Backtracking Trace):**

| Row | Attempt | Position | Result |
|-----|---------|----------|--------|
| 1 | Col 1 | (1,1) | Safe ✓ |
| 2 | Col 1 | (2,1) | Conflict (same column) |
| 2 | Col 2 | (2,2) | Conflict (diagonal) |
| 2 | Col 3 | (2,3) | Safe ✓ |
| 3 | Col 1-4 | All | Conflict → Backtrack |
| 2 | Col 4 | (2,4) | Safe ✓ |
| 3 | Col 1-3 | All | Conflict → Backtrack |
| 3 | Col 4 | (3,4) | Conflict (same column) |
| 1 | Col 2 | (1,2) | Safe ✓ (Restart) |
| 2 | Col 4 | (2,4) | Safe ✓ |
| 3 | Col 1 | (3,1) | Safe ✓ |
| 4 | Col 3 | (4,3) | Safe ✓ |

**Solution for N=4:**

| | Col 1 | Col 2 | Col 3 | Col 4 |
|---|---|---|---|---|
| **Row 1** | | **Q** | | |
| **Row 2** | | | | **Q** |
| **Row 3** | **Q** | | | |
| **Row 4** | | | **Q** | |

**Queen Positions:** $(1,2), (2,4), (3,1), (4,3)$

**Second Solution:** $(1,3), (2,1), (3,4), (4,2)$

## 6 _____

### a. Discuss about the time complexity of Brute force approach for string matching.

**Brute Force String Matching:**
Compares pattern $P$ of length $m$ with every substring of text $T$ of length $n$.

**Time Complexity:**
- **Best Case:** $O(n)$ (Pattern found at start or mismatch at first character)
- **Worst Case:** $O(n \cdot m)$ (Pattern matches all but last character at each position)
- **Average Case:** $O(n)$ (Assuming random text)

**Example Worst Case:**
- Text: `AAAA...B`
- Pattern: `AAAB`

### b. What is spurious hit in Robin Karp Algorithm. For working modulo $q = 11$, how many spurious hits does the Rabin-Karp matcher encounters in Text $T = 3141592653589793$.

**Spurious Hit:**
A spurious hit occurs when the hash value of a substring matches the hash value of the pattern, but the substring itself is not equal to the pattern. It requires a character-by-character comparison to verify.

**Assumption:** Pattern $P = 26$ (Standard example for this text).
- $m = 2$ (Pattern length)
- $q = 11$
- $d = 10$ (Radix)

**Hash of Pattern:**
$$
p = 26 \bmod 11 = \mathbf{4}
$$

**Sliding Window Hash Calculations ($t_s$):**

| Shift $s$ | Substring | Hash Calculation ($t_s \bmod 11$) | Match? | Type |
|-----------|-----------|-----------------------------------|--------|------|
| 0 | 31 | $31 \bmod 11 = 9$ | No | — |
| 1 | 14 | $14 \bmod 11 = 3$ | No | — |
| 2 | 41 | $41 \bmod 11 = 8$ | No | — |
| 3 | 15 | $15 \bmod 11 = 4$ | Yes | **Spurious** |
| 4 | 59 | $59 \bmod 11 = 4$ | Yes | **Spurious** |
| 5 | 92 | $92 \bmod 11 = 4$ | Yes | **Spurious** |
| 6 | 26 | $26 \bmod 11 = 4$ | Yes | **Valid** |
| 7 | 65 | $65 \bmod 11 = 10$ | No | — |
| 8 | 53 | $53 \bmod 11 = 9$ | No | — |
| 9 | 35 | $35 \bmod 11 = 2$ | No | — |
| 10 | 58 | $58 \bmod 11 = 3$ | No | — |
| 11 | 89 | $89 \bmod 11 = 1$ | No | — |
| 12 | 97 | $97 \bmod 11 = 9$ | No | — |
| 13 | 79 | $79 \bmod 11 = 2$ | No | — |
| 14 | 93 | $93 \bmod 11 = 5$ | No | — |

**Result:**
**Total Spurious Hits = 3** (At shifts 3, 4, and 5)

### c. Construct the string-matching automaton for the pattern $P = \text{aabab}$ and illustrate its operation on the text string $T = \text{aaababaabaababaab}$?

**Pattern:** $P = \text{aabab}$ ($m=5$)
**States:** $0, 1, 2, 3, 4, 5$ (State 5 is accepting)

**Transition Function $\delta(q, a)$:**

| State $q$ | $\delta(q, \text{a})$ | $\delta(q, \text{b})$ |
|-----------|-----------------------|-----------------------|
| 0 | 1 | 0 |
| 1 | 2 | 0 |
| 2 | 2 | 3 |
| 3 | 4 | 0 |
| 4 | 2 | 5 |
| 5 | 2 | 0 |

**Trace on Text $T = \text{aaababaabaababaab}$:**

| Step | Input Char | Current State | Next State | Action |
|------|------------|---------------|------------|--------|
| 1 | a | 0 | 1 | — |
| 2 | a | 1 | 2 | — |
| 3 | a | 2 | 2 | — |
| 4 | b | 2 | 3 | — |
| 5 | a | 3 | 4 | — |
| 6 | b | 4 | 5 | **Match at index 6** |
| 7 | a | 5 | 2 | — |
| 8 | a | 2 | 2 | — |
| 9 | b | 2 | 3 | — |
| 10 | a | 3 | 4 | — |
| 11 | a | 4 | 2 | — |
| 12 | b | 2 | 3 | — |
| 13 | a | 3 | 4 | — |
| 14 | b | 4 | 5 | **Match at index 14** |
| 15 | a | 5 | 2 | — |
| 16 | a | 2 | 2 | — |
| 17 | b | 2 | 3 | — |

**Result:**
Matches found at indices **6** and **14**.

## 7 _____

### a. Define P, Co-P, NP, Co-NP, NP-complete, and NP-hard. By a diagram show the relationship among these classes of problems.

**Definitions:**

| Class | Definition |
|-------|------------|
| **P** | Problems solvable in polynomial time by a deterministic Turing machine |
| **Co-P** | Complements of problems in P (Note: $\text{P} = \text{Co-P}$) |
| **NP** | Problems verifiable in polynomial time by a deterministic TM (or solvable by non-deterministic TM in poly time) |
| **Co-NP** | Complements of problems in NP (e.g., TAUTOLOGY) |
| **NP-Complete** | Problems in NP that are as hard as any problem in NP (NP-Hard $\cap$ NP) |
| **NP-Hard** | Problems at least as hard as NP-Complete (may not be in NP) |

**Relationship Diagram:**

```
          NP-Hard
    +-----------------------+
    |                       |
    |    +-------------+    |
    |    | NP-Complete |    |
    |    +-------------+    |
    |                       |
    |    +-------+          |
    |    |   NP  |          |
    |    +-------+          |
    |                       |
    |    +-------+          |
    |    |   P   |          |
    |    +-------+          |
    +-----------------------+
```

- $\text{P} \subseteq \text{NP}$
- $\text{P} \subseteq \text{Co-P}$
- $\text{NPC} \subseteq \text{NP} \cap \text{NPH}$
- If $\text{P} = \text{NP}$, then $\text{P} = \text{NP} = \text{Co-NP} = \text{NPC}$

### b. Compute the prefix function for KMP algorithm for the following pattern abcdabca.

**Pattern:** $P = \text{abcdabca}$

| Index $i$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|-----------|---|---|---|---|---|---|---|---|
| **Char** | a | b | c | d | a | b | c | a |
| **$\pi[i]$** | 0 | 0 | 0 | 0 | 1 | 2 | 3 | 1 |

**Explanation:**
- $\pi[1]=0$ (No proper prefix)
- $\pi[2]=0$ (`ab` has no common prefix/suffix)
- $\pi[3]=0$ (`abc` has no common prefix/suffix)
- $\pi[4]=0$ (`abcd` has no common prefix/suffix)
- $\pi[5]=1$ (`abcda` → `a` matches `a`)
- $\pi[6]=2$ (`abcdab` → `ab` matches `ab`)
- $\pi[7]=3$ (`abcdabc` → `abc` matches `abc`)
- $\pi[8]=1$ (`abcdabca` → `a` matches `a`, but `ab` $\neq$ `ca`)

**Result:**
**$\pi = [0, 0, 0, 0, 1, 2, 3, 1]$**

### c. Discuss about the basics of dynamic multithreading.

**Dynamic Multithreading** extends sequential computation with parallelism constructs, allowing threads to be spawned dynamically during execution.

**Key Concepts:**

| Concept | Description |
|---------|-------------|
| **Spawn** | Creates a parallel thread of execution (non-blocking) |
| **Sync** | Waits for all spawned threads to complete (blocking) |
| **Parallel Loop** | `parallel for` executes iterations concurrently |
| **Work ($T_1$)** | Total time to execute on a single processor |
| **Span ($T_\infty$)** | Critical path length (longest chain of dependencies) |
| **Parallelism** | Ratio $T_1 / T_\infty$ (maximum speedup possible) |

**Greedy Scheduler:**
- Assigns available tasks to idle processors greedily
- Achieves near-optimal performance: $T_P \leq \frac{T_1}{P} + T_\infty$

**Example:**
```
x = spawn Fib(n-1)
y = Fib(n-2)
sync
return x + y
```
- `spawn` starts parallel computation
- `sync` ensures both results are ready before return

# 2023

## 1 _____

### a. What is Hashing? What are the advantages of hash table?

**Hashing** is a technique that uses a hash function to map keys to specific indices in a hash table, enabling efficient data storage and retrieval.

**Advantages of Hash Table:**
- **Fast Access:** Average time complexity of $O(1)$ for search, insert, and delete operations.
- **Efficient Memory Usage:** Stores only necessary data without overhead of tree structures.
- **Direct Addressing:** Eliminates need for sequential searching.
- **Scalability:** Handles large datasets efficiently with proper load factor management.

### b. Given the input $\{4371, 1323, 6173, 4199, 4344, 9679, 1989\}$, a fixed table size of $10$, and a hash function $H(X) = X \bmod 10$, show the resulting.

**Hash Values:**
$H(4371) = 1$, $H(1323) = 3$, $H(6173) = 3$, $H(4199) = 9$, $H(4344) = 4$, $H(9679) = 9$, $H(1989) = 9$

**(i) Quadratic Probing Hash Table:**
Probe sequence: $(H(k) + i^2) \bmod 10$

| Key | $H(k)$ | Probes | Final Index |
|-----|--------|--------|-------------|
| 4371 | 1 | 1 | 1 |
| 1323 | 3 | 3 | 3 |
| 6173 | 3 | 3 (collision) → 4 | 4 |
| 4199 | 9 | 9 | 9 |
| 4344 | 4 | 4 (collision) → 5 | 5 |
| 9679 | 9 | 9 (collision) → 0 | 0 |
| 1989 | 9 | 9 (collision) → 0 (collision) → 3 (collision) → 8 | 8 |

**Resultant Table:**

| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|-------|---|---|---|---|---|---|---|---|---|---|
| **Value** | 9679 | 4371 | | 1323 | 6173 | 4344 | | | 1989 | 4199 |

**(ii) Separate Chaining Hash Table:**

| Index | Chain |
|-------|-------|
| 0 | |
| 1 | 4371 |
| 2 | |
| 3 | 1323 → 6173 |
| 4 | 4344 |
| 5 | |
| 6 | |
| 7 | |
| 8 | |
| 9 | 4199 → 9679 → 1989 |

### c. Traverse Sieve of Eratosthenes algorithm for the given list 2,3,4,5,6,7,8,9,10,11,12,13,14,15

**Algorithm Trace:**
- **Initial List:** $[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]$
- **p = 2:** Mark multiples of 2 ($4, 6, 8, 10, 12, 14$)
  - Remaining: $[2, 3, 5, 7, 9, 11, 13, 15]$
- **p = 3:** Mark multiples of 3 ($9, 15$)
  - Remaining: $[2, 3, 5, 7, 11, 13]$
- **p = 4:** Already marked.
- **Stop Condition:** $p^2 > 15$ (Next prime is 5, $5^2 = 25 > 15$)

**Prime Numbers Found:**
**$2, 3, 5, 7, 11, 13$**

## 2 _____

### a. Find $\phi(3120)$ using the Euler's totient function. Write down the algorithm of "Sieve of Eratosthenes".

**Euler's Totient Calculation:**
$$
\begin{aligned}
3120 &= 2^4 \times 3 \times 5 \times 13 \\
\phi(3120) &= 3120 \left(1 - \frac{1}{2}\right) \left(1 - \frac{1}{3}\right) \left(1 - \frac{1}{5}\right) \left(1 - \frac{1}{13}\right) \\
&= 3120 \times \frac{1}{2} \times \frac{2}{3} \times \frac{4}{5} \times \frac{12}{13} \\
&= \mathbf{768}
\end{aligned}
$$

**Sieve of Eratosthenes Algorithm:**
1. Create a list of integers from $2$ to $n$.
2. Let $p = 2$ (the first prime).
3. Mark all multiples of $p$ starting from $p^2$ up to $n$.
4. Find the smallest unmarked number greater than $p$. If none exists, stop. Otherwise, set $p$ to this number and repeat step 3.
5. All unmarked numbers in the list are prime.

### b. What is Modular Arithmetic? Solve $23^3 \bmod 30$ using Modular Exponentiation.

**Modular Arithmetic:** A system of arithmetic for integers where numbers "wrap around" upon reaching a certain value (the modulus).

**Modular Exponentiation ($23^3 \bmod 30$):**
$$
\begin{aligned}
23^1 &\equiv 23 \pmod{30} \\
23^2 &\equiv 529 \equiv 19 \pmod{30} \\
23^3 &\equiv 23^2 \times 23^1 \equiv 19 \times 23 = 437 \\
437 \bmod 30 &= \mathbf{17}
\end{aligned}
$$

### c. Define Relatively prime number. Solve the following equations using Chinese Remainder Theorem.
$$
\begin{aligned}
X &\equiv 1 \pmod 4 \\
X &\equiv 2 \pmod 5 \\
X &\equiv 3 \pmod 7
\end{aligned}
$$

**Relatively Prime:** Two integers are relatively prime if their greatest common divisor is 1.

**CRT Solution:**
- $M = 4 \times 5 \times 7 = 140$
- $M_1 = 35, M_2 = 28, M_3 = 20$
- Inverses: $y_1 = 3, y_2 = 2, y_3 = 6$

$$
\begin{aligned}
X &= (1 \cdot 35 \cdot 3 + 2 \cdot 28 \cdot 2 + 3 \cdot 20 \cdot 6) \bmod 140 \\
&= (105 + 112 + 360) \bmod 140 \\
&= 577 \bmod 140 \\
&= \mathbf{17}
\end{aligned}
$$

## 3 _____

### a. Are the following equations valid for CRT? If so, why? Calculate the value of X.
$$
\begin{aligned}
X &\equiv 2 \pmod 3 \\
X &\equiv 3 \pmod 4 \\
X &\equiv 4 \pmod 5
\end{aligned}
$$

**Validity:** Yes, valid because moduli $3, 4, 5$ are pairwise coprime ($\gcd(3,4)=1, \gcd(3,5)=1, \gcd(4,5)=1$).

**Solution:**
- $M = 60$
- $M_1 = 20, M_2 = 15, M_3 = 12$
- Inverses: $y_1 = 2, y_2 = 3, y_3 = 3$

$$
\begin{aligned}
X &= (2 \cdot 20 \cdot 2 + 3 \cdot 15 \cdot 3 + 4 \cdot 12 \cdot 3) \bmod 60 \\
&= (80 + 135 + 144) \bmod 60 \\
&= 359 \bmod 60 \\
&= \mathbf{59}
\end{aligned}
$$

### b. What is Relatively co prime?
#### (i) Find the value of $\Phi(35)$ with proper explanation.
#### (ii) Find the value of $\Phi(1000)$.
#### (iii) Solve the modular exponentiation $23^{16} \bmod 30$.

**Relatively Co-prime:** Two numbers sharing no common factors other than 1.

**(i) $\Phi(35)$:**
$$
\Phi(35) = 35 \left(1 - \frac{1}{5}\right) \left(1 - \frac{1}{7}\right) = \mathbf{24}
$$

**(ii) $\Phi(1000)$:**
$$
\Phi(1000) = 1000 \left(1 - \frac{1}{2}\right) \left(1 - \frac{1}{5}\right) = \mathbf{400}
$$

**(iii) $23^{16} \bmod 30$:**
Using Euler's Theorem ($\phi(30)=8$):
$$
23^8 \equiv 1 \pmod{30} \implies 23^{16} = (23^8)^2 \equiv 1^2 = \mathbf{1}
$$

### c. What are the applications of prime factorization?

**Applications:**
- **Cryptography:** Foundation of RSA encryption (security relies on difficulty of factoring large numbers).
- **Number Theory:** Calculating GCD, LCM, and Euler's totient function.
- **Simplification:** Reducing fractions to lowest terms.
- **Computer Science:** Hash functions, random number generation, and error detection codes.

## 4 _____

### a. Given a graph with vertices and edges, find whether it contains a Hamiltonian path using backtracking. Show the steps.

**Graph Edges:**
$(1,2), (1,3), (1,4), (1,8), (2,3), (2,4), (2,8), (3,4), (4,5), (5,6), (5,8), (6,7), (7,8)$

**Backtracking Trace:**
- Start at Vertex 1.
- Path: $[1]$
- Try 2: $[1, 2]$
- Try 3: $[1, 2, 3]$
- Try 4: $[1, 2, 3, 4]$
- Try 5: $[1, 2, 3, 4, 5]$
- Try 6: $[1, 2, 3, 4, 5, 6]$
- Try 7: $[1, 2, 3, 4, 5, 6, 7]$
- Try 8: $[1, 2, 3, 4, 5, 6, 7, 8]$ (All vertices visited)

**Hamiltonian Path Found:**
**$1 \to 2 \to 3 \to 4 \to 5 \to 6 \to 7 \to 8$**

### b. Color the following graph using the minimum number of colors such that no two adjacent vertices share the same color. What is the chromatic number of the graph?

**Graph Analysis:**
The graph is a complete bipartite graph $K_{3,3}$.
- **Set 1:** $\{a, c, e\}$
- **Set 2:** $\{b, d, f\}$
Every vertex in Set 1 is connected to every vertex in Set 2, and there are no edges within sets.

**Coloring:**
- **Color 1:** Assign to $\{a, c, e\}$
- **Color 2:** Assign to $\{b, d, f\}$

**Chromatic Number:**
**$\chi(G) = \mathbf{2}$**

### c. The 5-Queens problem requires placing 5 queens on a $5 \times 5$ board so that no two threaten each other. List four different solutions in matrix form (use 1 for queen, 0 for empty).

**Solution 1:**
$$
\begin{bmatrix}
0 & 1 & 0 & 0 & 0 \\
0 & 0 & 0 & 1 & 0 \\
1 & 0 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 \\
0 & 0 & 0 & 0 & 1
\end{bmatrix}
$$

**Solution 2:**
$$
\begin{bmatrix}
0 & 0 & 1 & 0 & 0 \\
1 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 1 \\
0 & 1 & 0 & 0 & 0 \\
0 & 0 & 0 & 1 & 0
\end{bmatrix}
$$

**Solution 3:**
$$
\begin{bmatrix}
0 & 0 & 0 & 1 & 0 \\
0 & 1 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 1 \\
1 & 0 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 0
\end{bmatrix}
$$

**Solution 4:**
$$
\begin{bmatrix}
0 & 0 & 0 & 0 & 1 \\
0 & 1 & 0 & 0 & 0 \\
1 & 0 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 \\
0 & 0 & 0 & 1 & 0
\end{bmatrix}
$$

## 5 _____

### a. Explain the comparisons using Knuth-Morris-Pratt Algorithm Where T =abxabcabcaby and P =abcaby.

**Pattern $P$ = abcaby**
**Prefix Function ($\pi$):**

| Index $i$ | 1 | 2 | 3 | 4 | 5 | 6 |
|-----------|---|---|---|---|---|---|
| **Char** | a | b | c | a | b | y |
| **$\pi[i]$** | 0 | 0 | 0 | 1 | 2 | 0 |

**Matching Trace:**
- **Shift 0:** `abx...` vs `abc...` (Mismatch at index 3, $x \neq c$). $\pi[2]=0$, shift by $3-0=3$.
- **Shift 3:** `abcabc...` vs `abcaby` (Mismatch at index 6, $c \neq y$). $\pi[5]=2$, shift by $6-2=4$.
- **Shift 7:** `abcaby` vs `abcaby` (Match!).

**Result:** Match found at index **7**.

### b. Illustrate the step-by-step matching process of the naïve algorithm for P=abaa in T=abcabaabcabac. Indicate at which indices the comparisons start and where mismatches occur.

**Text $T$:** `a b c a b a a b c a b a c`
**Pattern $P$:** `a b a a`

| Shift | Start Index | Comparison | Result |
|-------|-------------|------------|--------|
| 0 | 0 | `abca` vs `abaa` | Mismatch at index 2 ($c \neq a$) |
| 1 | 1 | `bcab` vs `abaa` | Mismatch at index 0 ($b \neq a$) |
| 2 | 2 | `caba` vs `abaa` | Mismatch at index 0 ($c \neq a$) |
| 3 | 3 | `abaa` vs `abaa` | **Match** |
| 4 | 4 | `baab` vs `abaa` | Mismatch at index 0 ($b \neq a$) |
| 5 | 5 | `aabc` vs `abaa` | Mismatch at index 3 ($c \neq a$) |
| 6 | 6 | `abca` vs `abaa` | Mismatch at index 2 ($c \neq a$) |
| 7 | 7 | `bcab` vs `abaa` | Mismatch at index 0 |
| 8 | 8 | `caba` vs `abaa` | Mismatch at index 0 |
| 9 | 9 | `abac` vs `abaa` | Mismatch at index 3 ($c \neq a$) |

**Match found at index 3.**

### c. Explain the time complexity of the Brute Force approach for string matching. What are the best-case, worst-case, and average-case scenarios?

**Time Complexity:** $O(n \cdot m)$ where $n$ is text length and $m$ is pattern length.

| Scenario | Complexity | Condition |
|----------|------------|-----------|
| **Best Case** | $O(n)$ | Mismatch occurs at first character of pattern at every shift |
| **Worst Case** | $O(n \cdot m)$ | Pattern matches all but last character at every shift (e.g., $T=$ `AAAA...B`, $P=$ `AAAB`) |
| **Average Case** | $O(n)$ | Random text and pattern |

## 6 _____

### a. Given directed line segments $P_0P_1$ and $P_0P_2$, determine whether $P_0P_1$ is clockwise from $P_0P_2$ with respect to point $P_0$.

Compute the cross product of vectors $\vec{P_0P_1}$ and $\vec{P_0P_2}$:
$$
CP = (x_1 - x_0)(y_2 - y_0) - (x_2 - x_0)(y_1 - y_0)
$$
- If $CP > 0$: $P_0P_1$ is **clockwise** from $P_0P_2$ (assuming standard Cartesian coordinates where $y$ increases upwards).
- If $CP < 0$: $P_0P_1$ is **counter-clockwise** from $P_0P_2$.
- If $CP = 0$: Points are **collinear**.

### b. Write down the impact of Cross product in Line Segment algorithm.

- **Orientation Test:** Determines if a point lies to the left, right, or on a line segment.
- **Intersection Detection:** Used to check if two line segments intersect by verifying if endpoints of one segment lie on opposite sides of the other.
- **Convexity:** Essential for algorithms like Graham Scan to determine left/right turns.

### c. Explain the concept of Convex and non convex in computational geometry. What is the convex hull of a set of points, and why is it important?

**Convex Set:** A set where the line segment connecting any two points in the set lies entirely within the set. All internal angles $\leq 180^\circ$.
**Non-Convex Set:** A set where at least one line segment between two points goes outside the set. At least one internal angle $> 180^\circ$.

**Convex Hull:** The smallest convex polygon that contains all points in a given set.
**Importance:**
- **Collision Detection:** Simplifies complex shapes to convex boundaries.
- **Pattern Recognition:** Shape analysis and feature extraction.
- **Geographic Information Systems (GIS):** Determining boundaries and coverage areas.

### d. What are the common algorithms used to determine if a point lies inside a polygon? Explain one of them briefly.

**Common Algorithms:**
1. **Ray Casting (Crossing Number)**
2. **Winding Number**

**Ray Casting Algorithm:**
- Draw a horizontal ray from the query point to infinity (usually rightwards).
- Count the number of times the ray intersects the polygon edges.
- **Odd Count:** Point is **inside**.
- **Even Count:** Point is **outside**.
- Handles edge cases (vertex intersections) by consistent rules (e.g., count only upward crossings).

## 7 _____

### a. Write down the name of four polynomial and exponential time taking algorithm. Which one is faster? Explain.

**Polynomial Time Algorithms:**
1. **Merge Sort:** $O(n \log n)$
2. **Dijkstra's Algorithm:** $O(V^2)$
3. **Matrix Multiplication:** $O(n^3)$
4. **Kruskal's Algorithm:** $O(E \log V)$

**Exponential Time Algorithms:**
1. **Traveling Salesman (Brute Force):** $O(n!)$
2. **Subset Sum Problem:** $O(2^n)$
3. **N-Queens Problem:** $O(n!)$
4. **Fibonacci (Recursive):** $O(2^n)$

**Comparison:**
**Polynomial time algorithms are faster.**
- **Reason:** Polynomial functions grow much slower than exponential functions as input size $n$ increases. For large $n$, exponential algorithms become computationally infeasible, while polynomial algorithms remain tractable.

### b. How to determine a problem in NP Complete? What are the necessities of NP Completeness in algorithm analysis?

**Determining NP-Completeness:**
A problem is NP-Complete if:
1. **In NP:** A solution can be verified in polynomial time.
2. **NP-Hard:** Every problem in NP can be reduced to it in polynomial time (usually shown by reducing a known NP-Complete problem to it).

**Necessities in Algorithm Analysis:**
- **Hardness Classification:** Identifies problems unlikely to have efficient polynomial-time solutions.
- **Research Direction:** If $P \neq NP$, efforts should focus on approximation or heuristics rather than exact polynomial algorithms.
- **Reduction Tool:** Solving one NP-Complete problem efficiently would solve all NP problems.

### c. Compute the prefix function for KMP algorithm for the following pattern abcabdcdabca.

**Pattern:** $P = \text{abcabdcdabca}$

| Index $i$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|-----------|---|---|---|---|---|---|---|---|---|----|----|----|
| **Char** | a | b | c | a | b | d | c | d | a | b | c | a |
| **$\pi[i]$** | 0 | 0 | 0 | 1 | 2 | 0 | 0 | 0 | 1 | 2 | 3 | 4 |

**Explanation:**
- $\pi[1..3] = 0$ (No proper prefix/suffix match)
- $\pi[4] = 1$ (`a` matches `a`)
- $\pi[5] = 2$ (`ab` matches `ab`)
- $\pi[6] = 0$ (`d` breaks match)
- $\pi[7..8] = 0$
- $\pi[9] = 1$ (`a` matches `a`)
- $\pi[10] = 2$ (`ab` matches `ab`)
- $\pi[11] = 3$ (`abc` matches `abc`)
- $\pi[12] = 4$ (`abca` matches `abca`)

**Result:**
**$\pi = [0, 0, 0, 1, 2, 0, 0, 0, 1, 2, 3, 4]$**

### d. What are the limitations of Backtracking?

**Limitations of Backtracking:**

| Limitation | Description |
|------------|-------------|
| **Exponential Time Complexity** | Worst case $O(b^d)$ where $b$ is branching factor |
| **No Optimality Guarantee** | Finds first solution, not necessarily optimal |
| **Redundant Computation** | Re-explores same subproblems repeatedly |
| **Memory Intensive** | Deep recursion requires significant stack space |
| **Not Suitable for Large Instances** | Performance degrades rapidly with problem size |
| **No Pruning Without Bounds** | Explores entire search space without bounding function |
