---
publish: true
---
# 2022

## 1 _____

### a. Assume, $L(G) = \{a^m b^n \mid m \geq 0 \text{ and } n > 0\}$. Find out the grammar G which produces $L(G)$

**Grammar $G = (V, \Sigma, R, S)$:**

- **Variables ($V$):** $\{S, A\}$
- **Terminals ($\Sigma$):** $\{a, b\}$
- **Start Symbol:** $S$
- **Production Rules ($R$):**
  $$
  \begin{aligned}
  S &\to aS \mid A \\
  A &\to bA \mid b
  \end{aligned}
  $$

**Explanation:**

- $S \to aS$ generates any number of $a$'s ($m \geq 0$).
- $S \to A$ transitions to generating $b$'s.
- $A \to bA \mid b$ ensures at least one $b$ is generated ($n \geq 1$).

### b. Describe the DFA minimization using equivalence theorem for the following figure

**DFA Analysis:**

- **States:** $\{a, b, c, d, e, f\}$
- **Start:** $a$
- **Final States ($F$):** $\{c, d, e\}$
- **Non-Final States ($N$):** $\{a, b, f\}$

**Minimization Steps:**

1. **Initial Partition ($P_0$):** Separate Final and Non-Final states.
    $$P_0 = \{ \{a, b, f\}, \{c, d, e\} \}$$

2. **First Refinement ($P_1$):** Check transitions for each group.
    - **Group $\{a, b, f\}$:**
        - On input `0`: $a \to b \in N$, $b \to a \in N$, $f \to f \in N$. (Consistent)
        - On input `1`: $a \to c \in F$, $b \to d \in F$, $f \to f \in N$. (**Inconsistent**: $f$ goes to $N$, others to $F$)
        - Split $\{a, b, f\}$ into $\{a, b\}$ and $\{f\}$.
    - **Group $\{c, d, e\}$:**
        - On input `0`: $c \to e \in F$, $d \to e \in F$, $e \to e \in F$. (Consistent)
        - On input `1`: $c \to f \in N$, $d \to f \in N$, $e \to f \in N$. (Consistent)
        - $\{c, d, e\}$ remains together.

    $$P_1 = \{ \{a, b\}, \{f\}, \{c, d, e\} \}$$

3. **Second Refinement ($P_2$):**
    - **Group $\{a, b\}$:**
        - On `0`: $a \to b \in \{a, b\}$, $b \to a \in \{a, b\}$.
        - On `1`: $a \to c \in \{c, d, e\}$, $b \to d \in \{c, d, e\}$.
        - Equivalent.
    - No further splits possible.

**Minimized DFA:**

- **States:** $A = \{a, b\}$, $B = \{f\}$, $C = \{c, d, e\}$
- **Start State:** $A$
- **Final State:** $C$
- **Transitions:**
  - $A \xrightarrow{0} A$, $A \xrightarrow{1} C$
  - $B \xrightarrow{0} B$, $B \xrightarrow{1} B$
  - $C \xrightarrow{0} C$, $C \xrightarrow{1} B$

### c. What is a regular expression? Write down the regular expression for your institutional web-mail address

**Regular Expression:**
A formal notation used to describe a set of strings (a regular language) using operators such as union ($+$ or $|$), concatenation, and Kleene star ($*$).

**Institutional Email Regex:**
Assuming a standard format like `username@university.edu`:
$$
\texttt{[a-zA-Z0-9.\_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]\{2,\}}
$$
*(Example: `student.name@niter.edu.bd`)*

---

## 2 _____

### a) Define NFA. Why Non-Determinism is more powerful than DFA?

**Definition of NFA**
A Nondeterministic Finite Automaton (NFA) is a mathematical model of computation that allows for multiple valid transitions for a given input symbol from a single state, as well as transitions that do not require any input ( $\epsilon$-transitions).

Formally, an NFA is defined as a 5-tuple:
$$
\begin{aligned}
M &= (Q, \Sigma, \delta, q_0, F)
\end{aligned}
$$
Where:

- $Q$ is a finite set of states.
- $\Sigma$ is a finite alphabet (the input symbols).
- $\delta: Q \times (\Sigma \cup \{\epsilon\}) \rightarrow \mathcal{P}(Q)$ is the transition function, mapping a state and an input symbol to a *set* of possible next states (the power set of $Q$).
- $q_0 \in Q$ is the start state.
- $F \subseteq Q$ is the set of accept (final) states.

**Why is Non-Determinism "More Powerful" than DFA?**
In terms of strict computational power (the class of languages they can recognize), **NFAs are not more powerful than DFAs**. Both machines recognize exactly the same class of languages: **Regular Languages**. Any NFA can be perfectly translated into an equivalent DFA.

However, non-determinism is considered "more powerful" in terms of **expressiveness, conciseness, and design simplicity**:

1. **Fewer States:** An NFA can represent a language using significantly fewer states. The equivalent DFA might require up to $2^n$ states for an NFA with $n$ states.
2. **Intuitive Design:** NFAs allow us to model "guessing." When searching for a substring, an NFA can guess where the substring begins and branch accordingly, making it vastly easier to design complex pattern-matching machines.

---

### b) Construct a NFA with pair of 0's or pair of 1's as substring

**Goal:** Construct an NFA that accepts strings with "00" or "11" as a substring.
**Constraints:** $Q = \{q_0, q_1, q_2, q_3, q_4\}$, $\Sigma = \{0, 1\}$, Start = $q_0$, $F = \{q_2, q_4\}$.

**Logic & Construction:**
To find "00" or "11" anywhere in the string, the machine stays in the start state until it "guesses" the substring is about to begin.

- **Path 1 (Detecting "00"):** $q_0$ reads **0** and transitions to $q_1$. If it reads another **0**, it transitions to the accept state $q_2$.
- **Path 2 (Detecting "11"):** $q_0$ reads **1** and transitions to $q_3$. If it reads another **1**, it transitions to the accept state $q_4$.
- Once in an accept state ($q_2$ or $q_4$), it loops indefinitely on **0** and **1** because the substring condition has already been met.

**Transition Table:**

| State | Input **0** | Input **1** |
| :--- | :--- | :--- |
| $\rightarrow q_0$ | $\{q_0, q_1\}$ | $\{q_0, q_3\}$ |
| $q_1$ | $\{q_2\}$ | $\emptyset$ |
| $*q_2$ | $\{q_2\}$ | $\{q_2\}$ |
| $q_3$ | $\emptyset$ | $\{q_4\}$ |
| $*q_4$ | $\{q_4\}$ | $\{q_4\}$ |

*(Note: $\rightarrow$ indicates the start state, and $*$ indicates final/accept states).*

---

### c) How does a NFA find the accepting path for a given string? Explain with example

**Processing Logic:**
An NFA finds an accepting path through **computational branching** (parallelism). When an NFA reads an input symbol and has multiple available transitions, it conceptually splits into multiple copies of itself.

- It explores all possible paths simultaneously.
- If a path reaches a state where no valid transition exists for the next input, that specific branch "dies" or is rejected.
- The NFA accepts the given string if **at least one** of the surviving branches ends up in an accept state after the entire input string has been consumed.

**Example:**
Using the NFA from 2(b), let's process the string **"100"**.

1. **Start:** The machine is in the active state $\{q_0\}$.
2. **Read '1':** From $q_0$, the machine can stay in $q_0$ or go to $q_3$. The active states branch to $\{q_0, q_3\}$.
3. **Read '0':** * From $q_0$, it branches to $\{q_0, q_1\}$.
    - From $q_3$, there is no transition for **0** ($\emptyset$), so this branch dies.
    - Active states are now $\{q_0, q_1\}$.
4. **Read '0':**
    - From $q_0$, it branches to $\{q_0, q_1\}$.
    - From $q_1$, it goes to $\{q_2\}$.
    - Active states are now $\{q_0, q_1, q_2\}$.

Since the string is fully read and the set of active states $\{q_0, q_1, q_2\}$ contains an accept state ($q_2$), the string is accepted. The specific accepting path it found was:
$$
\begin{aligned}
q_0 \xrightarrow{1} q_0 \xrightarrow{0} q_1 \xrightarrow{0} q_2
\end{aligned}
$$

---

### d) Convert the following NFA to DFA

**NFA Formal Definition (Extracted from Diagram):**

- **Start State:** $q_0$
- **Accept State:** $q_0$
- **Transitions:**
  - $\delta(q_0, 0) = \{q_1\}$
  - $\delta(q_0, 1) = \emptyset$
  - $\delta(q_1, 0) = \{q_0, q_1\}$
  - $\delta(q_1, 1) = \{q_1\}$

**Step-by-Step Subset Construction:**

1. **Determine the Start State:** The DFA start state is the $\epsilon$-closure of the NFA start state. Since there are no $\epsilon$-transitions, the DFA start state is just $A = \{q_0\}$. Because $q_0$ is an accept state in the NFA, state $A$ will be an accept state in the DFA.
2. **Evaluate Transitions from $A = \{q_0\}$:**
    - On **0**: $\delta(q_0, 0) = \{q_1\}$. Let's call this new state **$B$**.
    - On **1**: $\delta(q_0, 1) = \emptyset$. Let's call this the dead/trap state **$C$**.
3. **Evaluate Transitions from $B = \{q_1\}$:**
    - On **0**: $\delta(q_1, 0) = \{q_0, q_1\}$. Let's call this new state **$D$**. (This is an accept state because it contains $q_0$).
    - On **1**: $\delta(q_1, 1) = \{q_1\}$. This is our existing state $B$.
4. **Evaluate Transitions from $C = \emptyset$:**
    - On **0**: $\emptyset$ (Stays in $C$).
    - On **1**: $\emptyset$ (Stays in $C$).
5. **Evaluate Transitions from $D = \{q_0, q_1\}$:**
    To find transitions for sets of states, we take the union of their individual transitions:
    - On **0**: $\delta(q_0, 0) \cup \delta(q_1, 0) = \{q_1\} \cup \{q_0, q_1\} = \{q_0, q_1\}$. This is state $D$.
    - On **1**: $\delta(q_0, 1) \cup \delta(q_1, 1) = \emptyset \cup \{q_1\} = \{q_1\}$. This is state $B$.

**Final Equivalent DFA Transition Table:**

| DFA State (Name) | NFA States Included | Input **0** | Input **1** |
| :--- | :--- | :--- | :--- |
| $\rightarrow *A$ | $\{q_0\}$ | $B$ | $C$ |
| $B$ | $\{q_1\}$ | $D$ | $B$ |
| $C$ *(Trap)* | $\emptyset$ | $C$ | $C$ |
| $*D$ | $\{q_0, q_1\}$ | $D$ | $B$ |

---

## 3 _____

### a) What is a Regular Expression? Construct a FA from a RE (a+b)

**Definition of a Regular Expression:**
A Regular Expression (RE) is an algebraic formula that describes a regular language. It defines a search pattern using a sequence of characters and operations such as union ($+$ or $\cup$), concatenation ($\cdot$), and the Kleene star ($*$). It serves as a declarative way to express the strings accepted by a Finite Automaton.

**Construction of FA from RE (a+b):**
The regular expression $(a+b)$ represents a union, meaning the language accepts exactly one character: either an "a" OR a "b".

We can construct a simple Deterministic Finite Automaton (DFA) for this:

- **States:** $Q = \{q_0, q_1, q_{trap}\}$
- **Start State:** $q_0$
- **Accept State:** $F = \{q_1\}$

**Transition Table for (a+b):**

| State | Input **a** | Input **b** |
| :--- | :--- | :--- |
| $\rightarrow q_0$ | $q_1$ | $q_1$ |
| $*q_1$ | $q_{trap}$ | $q_{trap}$ |
| $q_{trap}$ | $q_{trap}$ | $q_{trap}$ |

*(Note: The machine reads either 'a' or 'b' to reach the accept state. Any subsequent input sends it to a trap state since the string length must be exactly 1).*

---

### b) Output for 1's complement of the string 1011 and Transition Table

**Transition Table for the Provided Moore Machine:**
Based on the diagram, the output is tied to the state itself (format: $State / Output$).

| Current State | Input **0** | Input **1** | Output |
| :--- | :--- | :--- | :--- |
| $\rightarrow q_0$ | $q_1$ | $q_2$ | **0** |
| $q_1$ | $q_1$ | $q_2$ | **1** |
| $q_2$ | $q_1$ | $q_2$ | **0** |

**Finding the Output for Input String "1011":**
In a Moore machine, the machine outputs the value of the state it transitions into upon reading each input bit.

1. **Initial:** Start at $q_0$ (Initial output is 0, usually discarded when used as a bitwise transducer).
2. **Read '1':** Transition $q_0 \xrightarrow{1} q_2$. Output at $q_2$ is **0**.
3. **Read '0':** Transition $q_2 \xrightarrow{0} q_1$. Output at $q_1$ is **1**.
4. **Read '1':** Transition $q_1 \xrightarrow{1} q_2$. Output at $q_2$ is **0**.
5. **Read '1':** Transition $q_2 \xrightarrow{1} q_2$. Output at $q_2$ is **0**.

**Final Output String:**
The generated output string for the input 1011 is **0100**, which is correctly the 1's complement of the input.

---

### c) Design a Mealy machine for the binary string 111000 and show transition table

To design a sequence detector for "111000", we need states to track the successful prefix of the sequence. In a Mealy machine, the output is placed on the transition itself, and we output **1** only when the final '0' of the sequence is read.

**State Definitions:**

- $q_0$: Initial state (no part of sequence matched)
- $q_1$: Matched "1"
- $q_2$: Matched "11"
- $q_3$: Matched "111"
- $q_4$: Matched "1110"
- $q_5$: Matched "11100"

**Mealy Machine Transition Table:**

| Current State | Input **0** (Next State, Output) | Input **1** (Next State, Output) |
| :--- | :--- | :--- |
| $\rightarrow q_0$ | $q_0$, **0** | $q_1$, **0** |
| $q_1$ | $q_0$, **0** | $q_2$, **0** |
| $q_2$ | $q_0$, **0** | $q_3$, **0** |
| $q_3$ | $q_4$, **0** | $q_3$, **0** *(keeps prefix "111")* |
| $q_4$ | $q_5$, **0** | $q_1$, **0** |
| $q_5$ | $q_0$, **1** *(Sequence Found!)* | $q_1$, **0** |

---

### d) Differentiate between Mealy machine and Moore machine

| Feature | Mealy Machine | Moore Machine |
| :--- | :--- | :--- |
| **Output Dependency** | Output depends on both the **current state** and the **current input**. | Output depends **only** on the **current state**. |
| **State Output Labeling** | Output is associated with the transition edges. | Output is associated with the state itself. |
| **Number of States** | Generally requires **fewer** states to perform a given task. | Generally requires **more** states to perform the same task. |
| **Output Timing** | Output changes asynchronously/immediately as the input transitions. | Output changes synchronously when the machine fully settles into a new state. |
| **Length of Output** | For an input string of length $n$, the output string is of length **$n$**. | For an input string of length $n$, the output string is of length **$n+1$** (due to the initial state's output). |

---

## 4 _____

### a) Find a Regular expression corresponding to each of the following subsets

*(Note: For subsets (i) and (iv), the alphabet $\Sigma = \{0, 1\}$ is assumed based on standard conventions. For (ii) and (iii), the alphabet is explicitly or implicitly $\Sigma = \{a, b\}$.)*

**i) Write the regular expression for $L = \{w \mid w \text{ contains at least } 1\}$**
Assuming this means "contains at least one '1'", the string can have any combination of 0s and 1s before and after the mandatory '1'.
**Regular Expression:** `(0+1)* 1 (0+1)*`

**ii) Write the regular expression for $L = \{w \mid w \text{ contain at least two a's or exactly 2 b's}\}$**
This language is the union of two independent conditions. We construct the expression for each and combine them using the union operator (`+`).

- **Condition 1 (At least two 'a's):** `(a+b)* a (a+b)* a (a+b)*`
- **Condition 2 (Exactly two 'b's):** `a* b a* b a*` (Any number of 'a's can surround the two mandatory 'b's)

**Regular Expression:** `((a+b)* a (a+b)* a (a+b)*) + (a* b a* b a*)`

**iii) Write the Regular expression for the language $L = \{ab^n w \mid n \ge 3, w \in \{a, b\} ^+\}$**
*(Note: Interpreting the typographical spacing "ab nw" as $ab^n w$ based on standard formal language notation).*

- The string must start with `a`.
- Followed by at least 3 `b`s: `bbb b*`
- Followed by $w$, which is any non-empty string of 'a's and 'b's ($\{a, b\}^+$): `(a+b)(a+b)*`

**Regular Expression:** `a bbb b* (a+b)(a+b)*`

**iv) Write the regular expression for $L = \{w \mid w \text{ contains a single } 1\}$**
The string must contain exactly one '1', meaning all other characters must be '0's.
**Regular Expression:** `0* 1 0*`

---

### b) Using pumping lemma, prove that the language $A = \{a^n b^n \mid n \ge 0\}$ is not regular

**Proof by Contradiction:**

1. **Assume $A$ is regular:** If it is regular, it must satisfy the Pumping Lemma for regular languages. Let $p$ be the pumping length given by the lemma.
2. **Choose a string $s$:** We select the string $s = a^p b^p$.
    - Clearly, $s \in A$ because it has an equal number of 'a's and 'b's.
    - The total length of $s$ is $2p$, which is strictly $\ge p$.
3. **Apply the Pumping Lemma:** The lemma states that $s$ can be divided into three parts, $s = xyz$, satisfying three conditions:
    - $|y| > 0$ (The pumped part $y$ cannot be empty)
    - $|xy| \le p$ (The first two parts must be contained within the first $p$ characters)
    - $xy^i z \in A$ for all $i \ge 0$
4. **Analyze $y$:** Because our chosen string $s$ starts with $p$ consecutive 'a's ($a^p$) and we know $|xy| \le p$, the entire substring $xy$ must consist solely of 'a's. Consequently, the string $y$ consists only of 'a's. Let $y = a^k$ for some integer $k > 0$.
5. **Pump the string:** Let's test the lemma by choosing $i = 2$ (pumping up). The pumped string becomes $xy^2z$.
    - By adding another copy of $y$, we add $k$ more 'a's to the string.
    - The new string now has $p + k$ 'a's and exactly $p$ 'b's.
    - Since $k > 0$, it is a fact that $p + k \neq p$.
6. **Conclusion:** The pumped string $xy^2z = a^{p+k} b^p$ does not have an equal number of 'a's and 'b's. Therefore, $xy^2z \notin A$. This directly violates the third condition of the Pumping Lemma.

Because a contradiction has been reached, our initial assumption must be false. **The language $A = \{a^n b^n \mid n \ge 0\}$ is not regular.**

---

### c) How the pumping lemma is implemented in the context-free languages?

While the regular Pumping Lemma focuses on loops in a finite state machine, the **Context-Free Pumping Lemma** is implemented based on the repeating structures found within **Parse Trees** (or derivation trees) in Context-Free Grammars (CFGs).

**The Formal Mechanism:**
If a language $L$ is context-free, there exists a pumping length $p$ such that any string $s \in L$ of length $|s| \ge p$ can be divided into five distinct parts:
$$
\begin{aligned}
s = uvxyz
\end{aligned}
$$

This division guarantees three conditions:

1. $uv^i xy^i z \in L$ for all $i \ge 0$
2. $|vy| > 0$ (either $v$ or $y$ must be non-empty)
3. $|vxy| \le p$

**How it works (The Parse Tree Implementation):**

- **Sufficient Height:** If a string is sufficiently long (longer than $p$), its generated parse tree must be tall enough to branch extensively.
- **Pigeonhole Principle on Variables:** Because any CFG only has a finite number of non-terminal variables, a sufficiently tall parse tree guarantees that at least one variable (let's call it $A$) must repeat on a single path from the root down to a leaf node.
- **The Subtrees:** * The "upper" occurrence of variable $A$ derives the substring $vxy$.
  - The "lower" occurrence of variable $A$ derives just the substring $x$.
- **The Pumping Action:** Because both nodes represent the exact same variable $A$, the rules of the grammar inherently allow us to substitute one subtree for the other without breaking syntactic validity:
  - **Pumping Down ($i=0$):** We replace the upper $A$ subtree with the lower $A$ subtree. This removes $v$ and $y$, yielding the valid string **$uxz$**.
  - **Pumping Up ($i \ge 2$):** We replace the lower $A$ subtree with a copy of the upper $A$ subtree. This duplicates $v$ and $y$, yielding valid strings like **$uv^2xy^2z$**, **$uv^3xy^3z$**, etc.

Because these substitutions rely purely on the established production rules of the grammar, all resulting pumped strings are guaranteed to belong to the context-free language.

---

## 5 _____

### a) Find out whether the following problem is decidable or not, "Is a number 'm' prime"?

**Answer: Yes, the problem is decidable.**

**Reasoning:**
A problem is decidable if there exists a Turing Machine (an algorithm) that will always halt and correctly output "yes" or "no" for any given input. To determine if a number $m$ is prime, we can construct an algorithm that tests if $m$ is divisible by any integer from $2$ up to $\sqrt{m}$.

- If a divisor is found, the machine halts and rejects (outputs "no").
- If no divisor is found after checking all possibilities, the machine halts and accepts (outputs "yes").
Because this process is guaranteed to terminate for any input $m$, the primality testing problem is completely decidable.

### b) Find a reduced grammar equivalent to the grammar G

**Given Productions:**
$S \rightarrow AC \mid B$
$A \rightarrow a$
$C \rightarrow c \mid BC$
$E \rightarrow aA \mid e$

**Step 1: Eliminate Non-Generating Symbols**
A symbol is generating if it can derive a string of terminal symbols.

- $A \rightarrow a$ (A is generating)
- $C \rightarrow c$ (C is generating)
- $E \rightarrow e$ (E is generating)
- $B$ has no production rules, so **$B$ is non-generating**.
- $S \rightarrow AC$ (Since A and C are generating, S is generating).

We remove any rules containing $B$:
$S \rightarrow AC$ (Removed $S \rightarrow B$)
$A \rightarrow a$
$C \rightarrow c$ (Removed $C \rightarrow BC$)
$E \rightarrow aA \mid e$

**Step 2: Eliminate Unreachable Symbols**
A symbol is reachable if it can be reached from the start state $S$.

- From $S$, we can reach $A$ and $C$ (via $S \rightarrow AC$).
- $E$ cannot be reached from $S$ or any symbol reachable from $S$. **$E$ is unreachable.**

We remove all rules associated with $E$.

**Final Reduced Grammar:**
$S \rightarrow AC$
$A \rightarrow a$
$C \rightarrow c$

### c) What is the ambiguity of CFG? Explain with example

**Definition:**
A Context-Free Grammar (CFG) is considered **ambiguous** if there exists at least one string in the language generated by the grammar that has **more than one valid parse tree** (or equivalently, more than one distinct leftmost derivation). Ambiguity implies that the grammar can interpret the syntactic structure of a string in multiple ways.

**Example:**
Consider the grammar for simple arithmetic expressions:
$E \rightarrow E + E \mid E * E \mid id$

Let's evaluate the string **$id + id * id$**. This string can be parsed in two different ways depending on operator precedence:

1. **Parse Tree 1 (Addition prioritized):** Evaluates as $(id + id) * id$.
    $E \Rightarrow E * E \Rightarrow E + E * E \Rightarrow id + id * id$
2. **Parse Tree 2 (Multiplication prioritized):** Evaluates as $id + (id * id)$.
    $E \Rightarrow E + E \Rightarrow E + E * E \Rightarrow id + id * id$

Because the same string can be derived through two entirely different tree structures, the grammar is ambiguous.

### d) Derivation sequence and parse tree for CFG

**Given CFG:**
$S \rightarrow ASB \mid c$
$A \rightarrow \epsilon \mid aA$
$B \rightarrow \epsilon \mid bB$

**Derivation Sequence for the string "acb" (Leftmost):**
$$
\begin{aligned}
S &\Rightarrow ASB && \text{(Using } S \rightarrow ASB \text{)} \\
&\Rightarrow aASB && \text{(Using } A \rightarrow aA \text{)} \\
&\Rightarrow a\epsilon SB && \text{(Using } A \rightarrow \epsilon \text{)} \\
&\Rightarrow aSB && \text{(Simplification)} \\
&\Rightarrow acB && \text{(Using } S \rightarrow c \text{)} \\
&\Rightarrow acbB && \text{(Using } B \rightarrow bB \text{)} \\
&\Rightarrow acb\epsilon && \text{(Using } B \rightarrow \epsilon \text{)} \\
&\Rightarrow acb && \text{(Final String)}
\end{aligned}
$$

**Parse Tree:**

```text
           S
        /  |  \
       /   |   \
      A    S    B
     / \   |   / \
    a   A  c  b   B
        |         |
        ε         ε
```

---

## 6 _____

### a) Define Turing Machine and explain its Tuples

**Definition:**
A Turing Machine (TM) is a mathematical model of computation that describes an abstract machine. It manipulates symbols on a strip of tape according to a table of rules. Despite its simplicity, a Turing Machine can be adapted to simulate the logic of any computer algorithm, making it the foundational model for computability.

**The 7-Tuple Definition:**
Formally, a Turing Machine is defined as $M = (Q, \Sigma, \Gamma, \delta, q_0, B, F)$ where:

1. **$Q$**: A finite, non-empty set of states.
2. **$\Sigma$**: The input alphabet (a finite set of symbols), not containing the blank symbol.
3. **$\Gamma$**: The tape alphabet, which includes all symbols in $\Sigma$ plus the blank symbol and any special tape markers ($\Sigma \subset \Gamma$).
4. **$\delta$**: The transition function. It maps $Q \times \Gamma \rightarrow Q \times \Gamma \times \{L, R\}$. Based on the current state and the symbol being read, it dictates the next state, the symbol to write, and the direction to move the head (Left or Right).
5. **$q_0$**: The initial start state ($q_0 \in Q$).
6. **$B$**: The blank symbol. It fills the infinite portions of the tape not containing the input ($B \in \Gamma$, $B \notin \Sigma$).
7. **$F$**: The set of final or accepting states ($F \subseteq Q$).

### b) Convert the following CFG into CNF

**Given CFG:**
$$
\begin{aligned}
S &\rightarrow ASA \mid aB \\
A &\rightarrow B \mid S \\
B &\rightarrow b \mid \epsilon
\end{aligned}
$$

**Step 1: Eliminate $\epsilon$-productions**

- **Nullable variables:** $B \rightarrow \epsilon$, which implies $A \rightarrow \epsilon$ is possible (since $A \rightarrow B$).
- Replace instances of nullable variables $A$ and $B$ on the right-hand side with $\epsilon$ to create new rules:
    $S \rightarrow ASA \mid SA \mid AS \mid S \mid aB \mid a$
    $A \rightarrow B \mid S$
    $B \rightarrow b$

**Step 2: Eliminate Unit Productions**

- **Current unit productions:** $S \rightarrow S$, $A \rightarrow B$, $A \rightarrow S$.
- Remove $S \rightarrow S$ as it is redundant.
- Replace $A \rightarrow B$ with the non-unit right-hand side of $B$: $A \rightarrow b$
- Replace $A \rightarrow S$ with the non-unit right-hand side of $S$: $A \rightarrow ASA \mid SA \mid AS \mid aB \mid a$
- **Updated Rules:**
    $S \rightarrow ASA \mid SA \mid AS \mid aB \mid a$
    $A \rightarrow b \mid ASA \mid SA \mid AS \mid aB \mid a$
    $B \rightarrow b$

**Step 3: Convert to Chomsky Normal Form (CNF)**
CNF restricts rules to either $X \rightarrow YZ$ (two non-terminals) or $X \rightarrow x$ (one terminal).

- Create a variable for the terminal 'a': Let $C_a \rightarrow a$
- For the sequence $ASA$, create a new variable $D \rightarrow SA$. Then $ASA$ becomes $AD$.
- **Final CNF Rules:**
    $S \rightarrow AD \mid SA \mid AS \mid C_aB \mid a$
    $A \rightarrow b \mid AD \mid SA \mid AS \mid C_aB \mid a$
    $B \rightarrow b$
    $C_a \rightarrow a$
    $D \rightarrow SA$

### c) Construct a TM to accept the language $L = \{0^n 1^n 2^n \mid n \ge 1\}$

**Logic & Algorithm:**
To verify equal quantities of 0s, 1s, and 2s in sequence, the Turing Machine uses a multi-pass marking strategy. We will mark a `0` as `X`, a `1` as `Y`, and a `2` as `Z`.

1. **State $q_0$ (Process 0):** Read `0`, replace it with `X`, and move Right to $q_1$. (If it reads `Y` instead, it means all `0`s are processed; move to verification state $q_4$).
2. **State $q_1$ (Find 1):** Scan Right over `0`s and `Y`s. When it finds a `1`, replace it with `Y`, and move Right to $q_2$.
3. **State $q_2$ (Find 2):** Scan Right over `1`s and `Z`s. When it finds a `2`, replace it with `Z`, and move Left to $q_3$.
4. **State $q_3$ (Rewind):** Scan Left over `Z`s, `1`s, `Y`s, and `0`s until it finds the marked `X`. Move Right to $q_0$ (to start the next pass).
5. **State $q_4$ (Verify):** Scan Right over any remaining `Y`s and `Z`s. If it encounters a blank space ($B$) without seeing any unprocessed `0`s, `1`s, or `2`s, move to the Accept state.

**Formal Transition Table ($\delta$):**

| Current State | Input Tape Symbol | Next State | Write Symbol | Head Move |
| :--- | :--- | :--- | :--- | :--- |
| **$q_0$** | `0` | $q_1$ | `X` | R |
| | `Y` | $q_4$ | `Y` | R |
| **$q_1$** | `0` | $q_1$ | `0` | R |
| | `Y` | $q_1$ | `Y` | R |
| | `1` | $q_2$ | `Y` | R |
| **$q_2$** | `1` | $q_2$ | `1` | R |
| | `Z` | $q_2$ | `Z` | R |
| | `2` | $q_3$ | `Z` | L |
| **$q_3$** | `0`, `1`, `Y`, `Z` | $q_3$ | *(Same)* | L |
| | `X` | $q_0$ | `X` | R |
| **$q_4$** | `Y`, `Z` | $q_4$ | *(Same)* | R |
| | `B` (Blank) | **$q_{accept}$** | `B` | R |

---

## 7 _____

### a) Define CYK algorithm. Test the string "baaba" using the CYK algorithm

**Definition of CYK Algorithm:**
The Cocke-Younger-Kasami (CYK) algorithm is a highly efficient parsing algorithm used to determine if a specific string can be generated by a given Context-Free Grammar (CFG). It relies on dynamic programming and requires the grammar to be in **Chomsky Normal Form (CNF)** (where all rules are either $V \rightarrow VV$ or $V \rightarrow \text{terminal}$). It builds a triangular table from the bottom up, calculating which variables can derive increasingly longer substrings of the input until it checks if the Start symbol can derive the entire string.

**Given Grammar (in CNF):**
$S \rightarrow AB \mid BC$
$A \rightarrow BA \mid a$
$B \rightarrow CC \mid b$
$C \rightarrow AB \mid a$

**Testing String:** $w = \text{baaba}$ (Length $n=5$)

**CYK Table Construction:**
We build a table $X_{i, j}$ where $i$ is the starting position of the substring, and $j$ is the length of the substring.

| Length ($j$) | Substrings derived from Variables |
| :--- | :--- |
| **5** | $X_{1,5} = \{S, A, C\}$ |
| **4** | $X_{1,4} = \emptyset$ | $X_{2,4} = \{S, A, C\}$ |
| **3** | $X_{1,3} = \emptyset$ | $X_{2,3} = \{B\}$ | $X_{3,3} = \{B\}$ |
| **2** | $X_{1,2} = \{S, A\}$ | $X_{2,2} = \{B\}$ | $X_{3,2} = \{S, C\}$ | $X_{4,2} = \{S, A\}$ |
| **1** | $X_{1,1} = \{B\}$ | $X_{2,1} = \{A, C\}$ | $X_{3,1} = \{A, C\}$ | $X_{4,1} = \{B\}$ | $X_{5,1} = \{A, C\}$ |
| **Input String**| **b** ($w_1$) | **a** ($w_2$) | **a** ($w_3$) | **b** ($w_4$) | **a** ($w_5$) |

**Step-by-Step Derivation Breakdown:**

- **Row 1 (Length 1):** Map terminals directly to rules.
  - $w_1$ ('b') is generated by $B$.
  - $w_2, w_3, w_5$ ('a') are generated by $A$ and $C$.
  - $w_4$ ('b') is generated by $B$.

- **Row 2 (Length 2):** Combine adjacent cells from Row 1.
  - $X_{1,2}$ (combining $w_1, w_2$): $X_{1,1} \times X_{2,1} = B \times \{A, C\} = \{BA, BC\}$. From rules, $BA$ comes from $A$, and $BC$ comes from $S$. Result: $\{S, A\}$.
  - $X_{2,2}$ (combining $w_2, w_3$): $\{A, C\} \times \{A, C\} = \{AA, AC, CA, CC\}$. Only $CC$ has a rule ($B \rightarrow CC$). Result: $\{B\}$.
  - $X_{3,2}$ (combining $w_3, w_4$): $\{A, C\} \times B = \{AB, CB\}$. $AB$ comes from $S$ and $C$. Result: $\{S, C\}$.
  - $X_{4,2}$ (combining $w_4, w_5$): $B \times \{A, C\} = \{BA, BC\}$. Result: $\{S, A\}$.

- **Row 3 (Length 3):** Split substrings into two parts.
  - $X_{1,3}$: $(X_{1,1} \times X_{2,2}) \cup (X_{1,2} \times X_{3,1}) = \{BB\} \cup \{AA, AC, SA, SC\}$. None yield rules. Result: $\emptyset$.
  - $X_{2,3}$: $(X_{2,1} \times X_{3,2}) \cup (X_{2,2} \times X_{4,1}) = \{AS, AC, CS, CC\} \cup \{BB\}$. $CC$ yields $B$. Result: $\{B\}$.
  - $X_{3,3}$: $(X_{3,1} \times X_{4,2}) \cup (X_{3,2} \times X_{5,1}) = \{AA, AS, CA, CS\} \cup \{SA, SC, CA, CC\}$. $CC$ yields $B$. Result: $\{B\}$.

- **Row 4 (Length 4):** * $X_{1,4}$: Testing splits $(1,3), (2,2), (3,1)$. All valid combinations result in pairs with no matching RHS in the grammar. Result: $\emptyset$.
  - $X_{2,4}$: Combinations yield $\{AB, CB\} \cup \{BA, BS\} \cup \{BA, BC\}$. $AB$ yields $S, C$; $BA$ yields $A$; $BC$ yields $S$. Result: $\{S, A, C\}$.

- **Row 5 (Length 5 - Final String):**
  - $X_{1,5}$: Testing splits $(1,4), (2,3), (3,2), (4,1)$.
  - $(X_{1,1} \times X_{2,4}) = B \times \{S, A, C\} = \{BS, BA, BC\}$. Yields $A$ (from $BA$) and $S$ (from $BC$).
  - $(X_{1,2} \times X_{3,3}) = \{S, A\} \times B = \{SB, AB\}$. Yields $S, C$ (from $AB$).
  - Result union: $\{S, A, C\}$.

**Conclusion:**
Since the Start symbol **$S$** is present in the final top cell ($X_{1,5}$), the string "baaba" is **accepted** and is in the language $L(G)$.

### b) Construct a PDA from the following CFG

**Given Variables & Productions:**
$G = (\{S, X\}, \{a, b\}, P, S)$
$S \rightarrow XS \mid \epsilon$
$A \rightarrow aXb \mid Ab \mid ab$

*(Note: There appears to be a typographical mismatch in the exam question, as the variable set defines $\{S, X\}$ but the productions utilize $S, X,$ and $A$. For the PDA construction, we directly convert the provided production strings into stack operations regardless of reachability.)*

**Construction (Empty Stack Method):**
We construct a non-deterministic Pushdown Automaton (PDA) with a single state $q$ that acts as a top-down parser.
$M = (\{q\}, \{a, b\}, \{S, X, A, a, b\}, \delta, q, S, \emptyset)$

The transition function $\delta$ is defined by three main rules:

1. **Variable Expansions:** For every grammar rule $V \rightarrow \gamma$, add a transition that replaces $V$ on the stack with the string $\gamma$ without consuming input.
2. **Terminal Matching:** For every terminal symbol, add a transition that pops it from the stack when it reads the matching symbol from the input string.

**Transition Functions ($\delta$):**

- **From Production $S \rightarrow XS \mid \epsilon$:**
  - $\delta(q, \epsilon, S) = \{(q, XS), (q, \epsilon)\}$
- **From Production $A \rightarrow aXb \mid Ab \mid ab$:**
  - $\delta(q, \epsilon, A) = \{(q, aXb), (q, Ab), (q, ab)\}$
- **Terminal Matches (to pop symbols when read):**
  - $\delta(q, a, a) = \{(q, \epsilon)\}$
  - $\delta(q, b, b) = \{(q, \epsilon)\}$

### c) Compare between Computability and Complexity

| Feature | Computability Theory | Complexity Theory |
| :--- | :--- | :--- |
| **Core Question** | **Can** a problem be solved by a computer? | **How efficiently** can a problem be solved? |
| **Primary Focus** | Determining the theoretical limits of what algorithms can and cannot do. | Analyzing the amount of resources (time, memory/space) required to run an algorithm. |
| **Key Concepts** | Decidability, Halting Problem, Turing Machines, Recursive vs. Recursively Enumerable languages. | Big-O Notation, Polynomial time, Non-deterministic polynomial time, Resource bounding. |
| **Common Classifications** | Decidable (Solvable), Semi-Decidable, Undecidable (Unsolvable). | **P** (Polynomial), **NP** (Nondeterministic Polynomial), **NP-Complete**, **NP-Hard**. |
| **Resource Constraints** | Assumes infinite time and infinite memory. | Strictly bounded by finite time and finite memory. |
| **Example Problem** | "Is there an algorithm that can tell if a given program will run forever or eventually halt?" | "Can the shortest path between all cities be calculated in polynomial time?" |

---

# 2023

## 1 _____

### a) Define Alphabets, Strings and Language with suitable example in the Automata theory.

**1. Alphabet ($\Sigma$)**
An alphabet is a finite, non-empty set of distinct symbols. These symbols are the building blocks used to form strings.

* **Example:** The standard binary alphabet is **$\Sigma = \{0, 1\}$**. Another example is the lowercase English alphabet **$\Sigma = \{a, b, c, \dots, z\}$**.

**2. String (or Word)**
A string is a finite sequence of symbols chosen from a specific alphabet. The length of a string $w$, denoted as $|w|$, is the number of symbols it contains. The empty string, containing zero symbols, is denoted by $\epsilon$ (epsilon).

* **Example:** Over the alphabet $\Sigma = \{0, 1\}$, a valid string could be **$w = 0110$** with a length of $|w| = 4$.

**3. Language ($L$)**
A language is a set of strings all of which are generated from a specific alphabet. A language can be finite or infinite. The set of all possible strings over an alphabet $\Sigma$ is denoted as $\Sigma^*$ (Kleene closure). Therefore, any language $L$ over $\Sigma$ is a subset of $\Sigma^*$ ($L \subseteq \Sigma^*$).

* **Example:** Over $\Sigma = \{0, 1\}$, a language $L$ could be defined as the set of all strings starting with '1'. So, **$L = \{1, 10, 11, 100, 101, \dots\}$**.

### b) Determine the language for the following statements:

**i. The set of binary numbers whose value is a prime.**
This language consists of strings of 0s and 1s that, when interpreted as base-2 integers, equal a prime number (2, 3, 5, 7, 11, ...).
**$L_1 = \{w \in \{0, 1\}^* \mid \text{val}(w) \text{ is a prime number}\}$**
*(Example strings in $L_1$: $10$ (2), $11$ (3), $101$ (5), $111$ (7), $1011$ (11))*

**ii. The set of strings of 0's & 1's with an equal number of each.**
If we let $n_0(w)$ represent the count of '0's in a string $w$, and $n_1(w)$ represent the count of '1's, the language is defined mathematically as:
**$L_2 = \{w \in \{0, 1\}^* \mid n_0(w) = n_1(w)\}$**
*(Example strings in $L_2$: $\epsilon, 01, 10, 0011, 0101, 1001, \dots$)*

**iii. The set of strings with having 101 as substring.**
A string has '101' as a substring if it can be broken down into some prefix $x$, the exact string '101', and some suffix $y$.
**$L_3 = \{w \in \{0, 1\}^* \mid w = x101y \text{ for some } x, y \in \{0, 1\}^*\}$**
*(Equivalently, using regular expressions, this language is generated by $(0+1)^* 101 (0+1)^*$)*

### c) Construct a DFA over $\{a,b\}$ accepting $\{baa, ab, abb\}$

Because this is a finite language, the Deterministic Finite Automaton (DFA) will act like a tree structure (a Trie) for the valid strings, with all invalid deviations leading to a single "trap" or "dead" state.

**Logic & Path Mapping:**

* Path for **baa**: $q_0 \xrightarrow{b} q_1 \xrightarrow{a} q_2 \xrightarrow{a} q_3$ (Accept)
* Path for **ab**: $q_0 \xrightarrow{a} q_4 \xrightarrow{b} q_5$ (Accept)
* Path for **abb**: extends from 'ab': $q_5 \xrightarrow{b} q_6$ (Accept)
* Any other input at any state must route to a non-accepting trap state ($q_{trap}$) that loops infinitely on $\{a, b\}$.

**Formal DFA Definition:**
$$
\begin{aligned}
M &= (Q, \Sigma, \delta, q_0, F)
\end{aligned}
$$
Where:

* $Q = \{q_0, q_1, q_2, q_3, q_4, q_5, q_6, q_{trap}\}$
* $\Sigma = \{a, b\}$
* $q_0$ is the start state.
* $F = \{q_3, q_5, q_6\}$ are the accept states.

**Transition Table:**

| State | Input **a** | Input **b** |
| :--- | :--- | :--- |
| $\rightarrow q_0$ | $q_4$ | $q_1$ |
| $q_1$ | $q_2$ | $q_{trap}$ |
| $q_2$ | $q_3$ | $q_{trap}$ |
| $*q_3$ | $q_{trap}$ | $q_{trap}$ |
| $q_4$ | $q_{trap}$ | $q_5$ |
| $*q_5$ | $q_{trap}$ | $q_6$ |
| $*q_6$ | $q_{trap}$ | $q_{trap}$ |
| $q_{trap}$ | $q_{trap}$ | $q_{trap}$ |

### d) Design a NFA for the language over $\{0,1\}$ that have at least two consecutive 0's or 1's.

"At least two consecutive 0's or 1's" means the string must contain either "00" or "11" as a substring. This is structurally identical to the logic applied in question 2(b).

**Construction Logic:**
The NFA will stay in the initial state $q_0$, non-deterministically guessing when the sequence "00" or "11" is about to start.

* To detect "00", it branches to $q_1$ upon reading `0`, and then to an accept state $q_2$ upon reading another `0`.
* To detect "11", it branches to $q_3$ upon reading `1`, and then to an accept state $q_4$ upon reading another `1`.
* Once it reaches an accept state, it remains there for any further input.

**NFA Transition Table:**

| State | Input **0** | Input **1** |
| :--- | :--- | :--- |
| $\rightarrow q_0$ | $\{q_0, q_1\}$ | $\{q_0, q_3\}$ |
| $q_1$ | $\{q_2\}$ | $\emptyset$ |
| $*q_2$ | $\{q_2\}$ | $\{q_2\}$ |
| $q_3$ | $\emptyset$ | $\{q_4\}$ |
| $*q_4$ | $\{q_4\}$ | $\{q_4\}$ |

---

## 2 _____

### a) Grammar Construction for $L(G) = \{a^m b^n \mid m \ge 0 \text{ and } n > 0\}$

To generate strings where any number of 'a's (including zero) are followed by at least one 'b', we design a Context-Free Grammar $G = (V, \Sigma, P, S)$.

* **Variables ($V$):** $\{S, B\}$
* **Terminals ($\Sigma$):** $\{a, b\}$
* **Start Symbol:** $S$

**Production Rules ($P$):**
$$
\begin{aligned}
S &\rightarrow aS \mid B \\
B &\rightarrow bB \mid b
\end{aligned}
$$

*Explanation:* * The rule $S \rightarrow aS$ allows for the generation of $m$ number of 'a's.

* Releasing $S$ to $B$ stops generating 'a's and switches to generating 'b's.
* The rule $B \rightarrow bB \mid b$ ensures that at least one 'b' is generated ($n > 0$) before termination.

---

### b) DFA Minimization using Equivalence Theorem

First, we extract the initial state properties and transition table from the given state diagram:

* **Start State:** $a$
* **Final States ($F$):** $\{c, d, e\}$ (indicated by double circles)
* **Non-Final States ($Q-F$):** $\{a, b, f\}$

**Initial Transition Table:**

| State | Input **0** | Input **1** |
| :--- | :--- | :--- |
| $\rightarrow a$ | $b$ | $c$ |
| $b$ | $a$ | $d$ |
| $*c$ | $e$ | $f$ |
| $*d$ | $e$ | $f$ |
| $*e$ | $e$ | $f$ |
| $f$ | $f$ | $f$ |

**Step 1: 0-Equivalence ($\Pi_0$)**
Divide the states into two groups: non-final and final states.
$$
\begin{aligned}
P_1 &= \{a, b, f\} \\
P_2 &= \{c, d, e\} \\
\Pi_0 &= \{\{a, b, f\}, \{c, d, e\}\}
\end{aligned}
$$

**Step 2: 1-Equivalence ($\Pi_1$)**
Check if states within the same group transition to the same group under inputs **0** and **1**.

* **For group $P_1 = \{a, b, f\}$:**
  * $a \xrightarrow{0} b \in P_1$ and $a \xrightarrow{1} c \in P_2$
  * $b \xrightarrow{0} a \in P_1$ and $b \xrightarrow{1} d \in P_2$
  * $f \xrightarrow{0} f \in P_1$ and $f \xrightarrow{1} f \in P_1$
  * *Result:* States $a$ and $b$ behave identically, but $f$ goes to a different group on input **1**. Therefore, $f$ must be split into its own partition.

* **For group $P_2 = \{c, d, e\}$:**
  * $c \xrightarrow{0} e \in P_2$ and $c \xrightarrow{1} f \in P_1$
  * $d \xrightarrow{0} e \in P_2$ and $d \xrightarrow{1} f \in P_1$
  * $e \xrightarrow{0} e \in P_2$ and $e \xrightarrow{1} f \in P_1$
  * *Result:* States $c, d, e$ behave identically, so they remain together.

$$
\begin{aligned}
\Pi_1 &= \{\{a, b\}, \{f\}, \{c, d, e\}\}
\end{aligned}
$$

**Step 3: 2-Equivalence ($\Pi_2$)**
Re-test the groups against the newly refined blocks of $\Pi_1$.

* **Check $\{a, b\}$:**
  * $a \xrightarrow{0} b \in \{a,b\}$ and $a \xrightarrow{1} c \in \{c,d,e\}$
  * $b \xrightarrow{0} a \in \{a,b\}$ and $b \xrightarrow{1} d \in \{c,d,e\}$
  * *Result:* They remain equivalent.
* **Check $\{c, d, e\}$:**
  * All three states transition to group $\{c,d,e\}$ on **0** and group $\{f\}$ on **1**.
  * *Result:* They remain equivalent.

$$
\begin{aligned}
\Pi_2 &= \{\{a, b\}, \{f\}, \{c, d, e\}\}
\end{aligned}
$$

Since $\Pi_1 = \Pi_2$, the minimization process has converged. The equivalent combined states are **$A = [a, b]$**, **$B = [c, d, e]$**, and **$C = [f]$**.

**Minimized DFA Transition Table:**

| Minimized State | Input **0** | Input **1** |
| :--- | :--- | :--- |
| $\rightarrow A$ | $A$ | $B$ |
| $*B$ | $B$ | $C$ |
| $C$ | $C$ | $C$ |

---

### c) Regular Expressions & Institutional Web-Mail Patterns

**What is a Regular Expression?**
A Regular Expression (RE) is a formal algebraic notation used to specify and describe the set of strings that constitute a regular language. It uses terminal characters combined with structural operations such as union ($+$), concatenation ($\cdot$), and Kleene closure ($*$).

**Institutional Web-Mail Address Representation:**
Most institutional email addresses follow a structured format like `student.id@university.edu` or `username@dept.univ.edu.bd`.

Let's assume a standard alphabet $\Sigma = \{a, b, \dots, z, 0, 1, \dots, 9, @, .\}$.
We define helper shorthands for readability:

* $\text{letter} = (a + b + \dots + z)$
* $\text{digit} = (0 + 1 + \dots + 9)$
* $\text{character} = (\text{letter} + \text{digit})$

If your typical institutional email follows the format **`username.id@univ.edu`** (e.g., `cse202601@univ.edu`), its formal **Regular Expression** is:
$$
\begin{aligned}
\text{RE} &= \text{letter}(\text{character})^* \cdot \text{digit}(\text{digit})^* \cdot @ \cdot \text{univ} \cdot . \cdot \text{edu}
\end{aligned}
$$

In standard computational regex notation (as used in programming models), it translates directly to:
**`^[a-z0-9.]+@[a-z0-9.-]+\.[a-z]{2,4}$`**

---

## 3 _____

### (a) Consider the following regular expressions and construct the finite automaton.

**i) $a(a|b)^*Block$**
This language accepts any string that begins with the character **a**, followed by any combination of **a** and **b**.

* **DFA Transition Table:**

| State | Input **a** | Input **b** |
| :--- | :--- | :--- |
| $\rightarrow q_0$ | $q_1$ | $q_{trap}$ |
| $*q_1$ | $q_1$ | $q_1$ |
| $q_{trap}$ | $q_{trap}$ | $q_{trap}$ |

**ii) $(a|b)ab^*$**
This language accepts strings that start with either **a** or **b**, followed strictly by an **a**, and ending with any number of **b**s.

* **DFA Transition Table:**

| State | Input **a** | Input **b** |
| :--- | :--- | :--- |
| $\rightarrow q_0$ | $q_1$ | $q_1$ |
| $q_1$ | $q_2$ | $q_{trap}$ |
| $*q_2$ | $q_{trap}$ | $q_2$ |
| $q_{trap}$ | $q_{trap}$ | $q_{trap}$ |

**iii) $1(0+1)^*0$**
This language matches any binary string that begins with **1** and ends with **0**.

* **DFA Transition Table:**

| State | Input **0** | Input **1** |
| :--- | :--- | :--- |
| $\rightarrow q_0$ | $q_{trap}$ | $q_1$ |
| $q_1$ | $q_2$ | $q_1$ |
| $*q_2$ | $q_2$ | $q_1$ |
| $q_{trap}$ | $q_{trap}$ | $q_{trap}$ |

**iv) $0^*0(1|0)^*11$**
This regular expression simplifies to $0^+(0|1)^*11$, meaning the string must start with at least one **0** and terminate with the sequence **11**.

* **DFA Transition Table:**

| State | Input **0** | Input **1** |
| :--- | :--- | :--- |
| $\rightarrow q_0$ | $q_1$ | $q_{trap}$ |
| $q_1$ | $q_1$ | $q_2$ |
| $q_2$ | $q_1$ | $q_3$ |
| $*q_3$ | $q_1$ | $q_3$ |
| $q_{trap}$ | $q_{trap}$ | $q_{trap}$ |

### (b) Convert the following RE into its equivalent DFA – $11(0+1)^*0$

**Design Logic:**
The language requires strings to start with exactly **11**, followed by any sequence of binary digits, and must explicitly end with a **0**.

* $q_0$ is the start state.
* $q_1$ is reached after reading the first **1**.
* $q_2$ is reached after reading the prefix **11**.
* $q_3$ is the final accepting state because it represents a valid string ending in **0** after a valid **11** prefix.
* $q_{trap}$ handles any invalid prefix violations.

**Equivalent DFA Transition Table:**

| State | Input **0** | Input **1** |
| :--- | :--- | :--- |
| $\rightarrow q_0$ | $q_{trap}$ | $q_1$ |
| $q_1$ | $q_{trap}$ | $q_2$ |
| $q_2$ | $q_3$ | $q_2$ |
| $*q_3$ | $q_3$ | $q_2$ |
| $q_{trap}$ | $q_{trap}$ | $q_{trap}$ |

### (c) Construct the left-most and right-most derivations and parse trees for the following grammar

**Given Grammar:**
$$
\begin{aligned}
S &\rightarrow aB \mid bA \\
A &\rightarrow aS \mid bAA \mid a \\
B &\rightarrow bS \mid aBB \mid b
\end{aligned}
$$
**Target String:** `aaabbabbba`

**1. Left-most Derivation (LMD):**
In a leftmost derivation, the leftmost non-terminal is always replaced first.
$$
\begin{aligned}
S &\Rightarrow aB \\
&\Rightarrow aaBB \\
&\Rightarrow aaaBBB \\
&\Rightarrow aaabBB \\
&\Rightarrow aaabbSB \\
&\Rightarrow aaabbaBB \\
&\Rightarrow aaabbabB \\
&\Rightarrow aaabbabbS \\
&\Rightarrow aaabbabbbA \\
&\Rightarrow aaabbabbba
\end{aligned}
$$

**2. Right-most Derivation (RMD):**
In a rightmost derivation, the rightmost non-terminal is always replaced first.
$$
\begin{aligned}
S &\Rightarrow aB \\
&\Rightarrow aaBB \\
&\Rightarrow aaBbS \\
&\Rightarrow aaBbbA \\
&\Rightarrow aaBbba \\
&\Rightarrow aaaBBbba \\
&\Rightarrow aaaBbSbba \\
&\Rightarrow aaaBbaBbba \\
&\Rightarrow aaaBbabbba \\
&\Rightarrow aaabbabbba
\end{aligned}
$$

**3. Parse Tree Representing both Derivations:**

```text
               S
             /   \
            a     B
                / | \
               a  B  B
                 /|\  \
                a B B  bS
                  | |  / \
                  b b b   A
                          |
                          a
```

---

## 4 _____

### a) What is the ambiguity of CFG? Explain with example.

**Definition:**
A Context-Free Grammar (CFG) is said to be **ambiguous** if there exists at least one string in its language that can be generated with **more than one distinct leftmost derivation** (or equivalently, more than one distinct rightmost derivation or more than one distinct parse tree). Ambiguity is a property of the grammar, not necessarily the language itself.

**Example:**
Consider the following grammar $G$ for basic mathematical expressions:
$$
E \rightarrow E + E \mid E \times E \mid \text{id}
$$
Let's evaluate the string: **$\text{id} + \text{id} \times \text{id}$**

This string can yield two entirely different parse trees because the grammar doesn't specify operator precedence:

* **Derivation Path 1 (Prioritizes multiplication):**
    $$
    E \Rightarrow E + E \Rightarrow \text{id} + E \Rightarrow \text{id} + E \times E \Rightarrow \text{id} + \text{id} \times E \Rightarrow \text{id} + \text{id} \times \text{id}
    $$
    This structure interprets the operation as $\text{id} + (\text{id} \times \text{id})$.

* **Derivation Path 2 (Prioritizes addition):**
    $$
    E \Rightarrow E \times E \Rightarrow E + E \times E \Rightarrow \text{id} + E \times E \Rightarrow \text{id} + \text{id} \times E \Rightarrow \text{id} + \text{id} \times \text{id}
    $$
    This structure interprets the operation as $(\text{id} + \text{id}) \times \text{id}$.

Because a single input string produces multiple distinct syntactic structural interpretations, this grammar is verified as **ambiguous**.

### b) Explain PUSH and POP operation in a Push Down Automata with example.

A Pushdown Automaton (PDA) extends the capabilities of a Finite Automaton by incorporating an external memory structure called a **Stack**. The machine manipulates this stack using two primary memory operations based on Last-In, First-Out (LIFO) access:

**1. PUSH Operation**
The PUSH operation adds a new symbol onto the top of the stack. In formal transition notation, if the machine reads an input symbol $a$, encounters stack top $Z_0$, and replaces it with $X Z_0$, it has pushed symbol $X$ onto the stack.

* **Formal notation:** $\delta(q, a, Z_0) = (p, XZ_0)$

**2. POP Operation**
The POP operation removes the top symbol from the stack. In formal transition notation, replacing the top stack symbol $Z_0$ with the empty string ($\epsilon$) means that symbol has been discarded, exposing the symbol right beneath it.

* **Formal notation:** $\delta(q, a, Z_0) = (p, \epsilon)$

**Example Application:**
Consider a PDA designed to accept the language $L = \{a^n b^n \mid n \ge 1\}$.

* **When reading $a$s:** The machine uses the **PUSH** operation to store every 'a' encountered onto the stack as a marker $X$.
    $$
    \delta(q_0, a, Z_0) = (q_0, XZ_0) \quad \text{and} \quad \delta(q_0, a, X) = (q_0, XX)
    $$
* **When reading $b$s:** The machine transitions to a matching state and uses the **POP** operation to consume one stack marker $X$ for each 'b' processed.
    $$
    \delta(q_0, b, X) = (q_1, \epsilon) \quad \text{and} \quad \delta(q_1, b, X) = (q_1, \epsilon)
    $$

If the input ends precisely when the initial stack marker $Z_0$ is exposed, the number of $a$s perfectly matches the number of $b$s.

### c) Construct a PDA from the following CFG

**Given Grammar Configuration:**

* $G = (\{S, X\}, \{a, b\}, P, S)$ 
* Productions ($P$):
    $$
    \begin{aligned}
    S &\rightarrow XS \mid \epsilon \\
    A &\rightarrow aXb \mid Ab \mid ab
    \end{aligned}
    $$

*(Note: There is a clear typographical error in the provided exam question where production rules reference non-terminal variable $A$, but the formal tuple defines the non-terminal set as $\{S, X\}$. To retain complete technical accuracy for parsing logic, we will convert the rules precisely as written using standard Top-Down Empty Stack construction).*

**PDA Construction Rules:**
We design a single-state PDA $M = (\{q\}, \Sigma, \Gamma, \delta, q, S, \emptyset)$ where:

* $\Sigma = \{a, b\}$ (Input alphabet)
* $\Gamma = \{S, X, A, a, b\}$ (Stack alphabet)

**Defined Transition Functions ($\delta$):**

* **For Non-Terminal $S$ productions:**
    $$
    \delta(q, \epsilon, S) = \{(q, XS), (q, \epsilon)\}
    $$
* **For Non-Terminal $A$ productions:**
    $$
    \delta(q, \epsilon, A) = \{(q, aXb), (q, Ab), (q, ab)\}
    $$
* **Terminal Matching and Elimination Operations:**
    $$
    \begin{aligned}
    \delta(q, a, a) &= \{(q, \epsilon)\} \\
    \delta(q, b, b) &= \{(q, \epsilon)\}
    \end{aligned}
    $$

### d) Proof that, "The union of two regular set is also regular"

**Proof using Regular Expressions:**

1. **Premise Definition:** Let $S_1$ and $S_2$ be two regular sets. By definition, every regular set corresponds directly to a regular expression. Let $R_1$ be the regular expression representing $S_1$ ($L(R_1) = S_1$), and let $R_2$ be the regular expression representing $S_2$ ($L(R_2) = S_2$).
2. **Definition of Operators:** According to the formal definition of regular expressions, if $R_1$ and $R_2$ are valid regular expressions, then their algebraic union, denoted as **$(R_1 + R_2)$** or **$(R_1 \cup R_2)$**, is inherently a valid regular expression.
3. **Language of the Union:** The language defined by this combined regular expression is:
    $$
    L(R_1 + R_2) = L(R_1) \cup L(R_2) = S_1 \cup S_2
    $$
4. **Conclusion:** Since the set $S_1 \cup S_2$ can be completely described by a valid regular expression $(R_1 + R_2)$, **the union of two regular sets is structurally guaranteed to be a regular set.**

**Alternative Structural Proof using Finite Automata:**

1. Let $M_1 = (Q_1, \Sigma, \delta_1, q_1, F_1)$ be a Finite Automaton that recognizes $S_1$.
2. Let $M_2 = (Q_2, \Sigma, \delta_2, q_2, F_2)$ be a Finite Automaton that recognizes $S_2$. Assume $Q_1 \cap Q_2 = \emptyset$.
3. We can construct a new Nondeterministic Finite Automaton $M_{\text{union}}$ to recognize $S_1 \cup S_2$ by creating a new absolute start state $q_0'$ and connecting it to the old start states via empty transitions ($\epsilon$-transitions):
    $$
    M_{\text{union}} = (Q_1 \cup Q_2 \cup \{q_0'\}, \Sigma, \delta_{\text{new}}, q_0', F_1 \cup F_2)
    $$
    Where $\delta_{\text{new}}$ retains all internal transitions of $M_1$ and $M_2$, adding:
    $$
    \delta_{\text{new}}(q_0', \epsilon) = \{q_1, q_2\}
    $$
4. Since $M_{\text{union}}$ is a valid finite automaton that accepts exactly $S_1 \cup S_2$, the union of two regular sets is proven closed and regular.

---

## 5 _____

### a) Write the formal definition of Turing Machine.

A Turing Machine (TM) is an abstract mathematical model of computation that operates on an infinite tape with a read-write head. Formally, a Turing Machine is defined as a 7-tuple:

$$
\begin{aligned}
M = (Q, \Sigma, \Gamma, \delta, q_0, B, F)
\end{aligned}
$$

Where each component is defined as follows:

* **$Q$**: A finite, non-empty set of states.
* **$\Sigma$**: The input alphabet, a finite set of symbols allowed in the initial input string (does not contain the blank symbol $B$).
* **$\Gamma$**: The tape alphabet, a finite set of symbols that can be written to the tape, where $\Sigma \subset \Gamma$ and $B \in \Gamma$.
* **$\delta$**: The transition function, defined as:
    $$
    \begin{aligned}
    \delta: Q \times \Gamma \rightarrow Q \times \Gamma \times \{L, R\}
    \end{aligned}
    $$
    Given a current state and tape symbol, it dictates the next state, the symbol to write, and the head movement direction (**L**eft or **R**ight).
* **$q_0$**: The initial start state ($q_0 \in Q$).
* **$B$**: The blank symbol ($B \in \Gamma$), which populates the unused infinite portions of the tape.
* **$F$**: The set of final or accepting states ($F \subseteq Q$).

### b) Design a Turing Machine that accepts Even Palindromes over the alphabet $\Sigma=\{a,b\}$

An even palindrome is a string that reads the same forward and backward and has an even length (e.g., $aa$, $bb$, $abba$, $baab$). 

**Algorithm/Strategy:**

1. **Read the leftmost character** in state $q_0$. Mark it by replacing it with a blank ($B$). 
2. If it was an `a`, transition to state $q_a$ to search for its matching partner at the end. If it was a `b`, transition to state $q_b$.
3. **Scan right** over all intermediate `a`s and `b`s until hitting the trailing blank ($B$).
4. Step one position left to look at the last actual character of the string.
    * In state $q_{comp\_a}$, verify the character is an `a`. If true, clear it to $B$ and head back left (state $q_{rev}$).
    * In state $q_{comp\_b}$, verify the character is a `b`. If true, clear it to $B$ and head back left (state $q_{rev}$).
    * If a mismatch occurs, the machine halts and rejects.
5. **Scan left** (state $q_{rev}$) until reaching the leftmost blank ($B$), then step right and repeat the entire loop.
6. If state $q_0$ reads a blank ($B$) immediately at the start of a cycle, it means all characters have been successfully matched in pairs. The machine enters **$q_{accept}$**.

**Transition Table ($\delta$):**

| Current State | Input `a` | Input `b` | Input `B` (Blank) |
| :--- | :--- | :--- | :--- |
| **$\rightarrow q_0$** | $(q_a, B, R)$ | $(q_b, B, R)$ | $(q_{accept}, B, R)$ |
| **$q_a$** | $(q_a, a, R)$ | $(q_a, b, R)$ | $(q_{comp\_a}, B, L)$ |
| **$q_b$** | $(q_b, a, R)$ | $(q_b, b, R)$ | $(q_{comp\_b}, B, L)$ |
| **$q_{comp\_a}$**| $(q_{rev}, B, L)$ | $\emptyset$ (Reject) | $\emptyset$ (Reject) |
| **$q_{comp\_b}$**| $\emptyset$ (Reject) | $(q_{rev}, B, L)$ | $\emptyset$ (Reject) |
| **$q_{rev}$** | $(q_{rev}, a, L)$ | $(q_{rev}, b, L)$ | $(q_0, B, R)$ |
| **$q_{accept}$** | — | — | — |

### c) Convert the following CFG into CNF: $S \rightarrow ASA \mid aB, A \rightarrow B \mid S, B \rightarrow b \mid \epsilon$

**Step 1: Eliminate $\epsilon$-productions**
Identify the nullable variables. Since $B \rightarrow \epsilon$, $B$ is nullable. Because $A \rightarrow B$, $A$ is also nullable. $S$ is not nullable.
Now, add versions of rules deleting these nullable variables:

* $S \rightarrow ASA \mid SA \mid AS \mid S \mid aB \mid a$
* $A \rightarrow B \mid S$
* $B \rightarrow b$

**Step 2: Eliminate Unit Productions**
Identify the unit chains: $S \rightarrow S$, $A \rightarrow B$, and $A \rightarrow S$.

* Remove the redundant self-loop $S \rightarrow S$.
* Resolve $A \rightarrow B$: Replace it with the non-unit components of $B$, yielding $A \rightarrow b$.
* Resolve $A \rightarrow S$: Replace it with the non-unit components of $S$.
The updated production set becomes:
* $S \rightarrow ASA \mid SA \mid AS \mid aB \mid a$
* $A \rightarrow b \mid ASA \mid SA \mid AS \mid aB \mid a$
* $B \rightarrow b$

**Step 3: Restructure into Chomsky Normal Form (CNF)**
CNF rules must strictly look like $X \rightarrow YZ$ or $X \rightarrow x$.

1. Introduce a terminal-mapping variable for $a$: **$C_a \rightarrow a$**.
2. Replace $aB$ with **$C_aB$**.
3. Break down any long 3-variable strings ($ASA$) by introducing a placeholder: **$D \rightarrow SA$**. Thus, $ASA$ simplifies to **$AD$**.

**Final CNF Production Rules:**
$$
\begin{aligned}
S &\rightarrow AD \mid SA \mid AS \mid C_aB \mid a \\
A &\rightarrow b \mid AD \mid SA \mid AS \mid C_aB \mid a \\
B &\rightarrow b \\
C_a &\rightarrow a \\
D &\rightarrow SA
\end{aligned}
$$

---

## 6 _____

### (a) Convert the following Context Free Grammar into Chomsky Normal Form

**Given CFG:**
$$
\begin{aligned}
S &\rightarrow ASA \mid aB \\
A &\rightarrow B \mid S \\
B &\rightarrow b \mid \epsilon
\end{aligned}
$$

**Step 1: Eliminate $\epsilon$-productions**

* Nullable variables are $B$ (since $B \rightarrow \epsilon$) and $A$ (since $A \rightarrow B \rightarrow \epsilon$).
* Rewriting the rules to account for missing $A$ or $B$ symbols yields:
    $S \rightarrow ASA \mid SA \mid AS \mid S \mid aB \mid a$
    $A \rightarrow B \mid S$
    $B \rightarrow b$

**Step 2: Eliminate Unit Productions**

* Remove the unit loop $S \rightarrow S$.
* Resolve $A \rightarrow B$ by replacing it with the non-unit right-hand side of $B$: $A \rightarrow b$.
* Resolve $A \rightarrow S$ by substituting it with all remaining non-unit right-hand side expressions of $S$.
* Updated rules:
    $S \rightarrow ASA \mid SA \mid AS \mid aB \mid a$
    $A \rightarrow b \mid ASA \mid SA \mid AS \mid aB \mid a$
    $B \rightarrow b$

**Step 3: Restructure into Chomsky Normal Form (CNF)**

* Introduce a placeholder variable for the terminal: $C_a \rightarrow a$.
* Break down the three-variable sequence $ASA$ by creating $D \rightarrow SA$, making it $AD$.
* **Final CNF Production Rules:**
    **$S \rightarrow AD \mid SA \mid AS \mid C_aB \mid a$**
    **$A \rightarrow b \mid AD \mid SA \mid AS \mid C_aB \mid a$**
    **$B \rightarrow b$**
    **$C_a \rightarrow a$**
    **$D \rightarrow SA$**

### (b) Consider the given grammar and Convert to Chomsky Normal Form

**Given CFG:**
$$
\begin{aligned}
S &\rightarrow ASB \\
A &\rightarrow aAS \mid a \mid \epsilon \\
B &\rightarrow SbS \mid A \mid bb
\end{aligned}
$$

**Step 1: Eliminate $\epsilon$-productions**

* $A$ is directly nullable ($A \rightarrow \epsilon$). This cascades to make $B$ nullable too because of the unit rule $B \rightarrow A$. $S$ is not nullable.
* Re-evaluating paths without the nullable variables gives:
    $S \rightarrow ASB \mid SB \mid AS$ *(Note: removing both leaves $S \rightarrow S$, which is omitted)*
    $A \rightarrow aAS \mid aS \mid a$
    $B \rightarrow SbS \mid A \mid bb$

**Step 2: Eliminate Unit Productions**

* The remaining unit production is $B \rightarrow A$. We replace $A$ with all its current valid non-unit derivations:
    $S \rightarrow ASB \mid SB \mid AS$
    $A \rightarrow aAS \mid aS \mid a$
    $B \rightarrow SbS \mid bb \mid aAS \mid aS \mid a$

**Step 3: Convert to Chomsky Normal Form (CNF)**

* Introduce terminal variables: $C_a \rightarrow a$ and $C_b \rightarrow b$.
* Substitute variables into the rules and split combinations longer than two non-terminals:
  * For $S \rightarrow ASB$, create $D_1 \rightarrow SB \implies AD_1$
  * For $A \rightarrow C_aAS$ and $B \rightarrow C_aAS$, create $D_2 \rightarrow AS \implies C_aD_2$
  * For $B \rightarrow SC_bS$, create $D_3 \rightarrow C_bS \implies SD_3$

* **Final CNF Production Rules:**
    **$S \rightarrow AD_1 \mid SB \mid AS$**
    **$A \rightarrow C_aD_2 \mid C_aS \mid a$**
    **$B \rightarrow SD_3 \mid C_bC_b \mid C_aD_2 \mid C_aS \mid a$**
    **$C_a \rightarrow a$**
    **$C_b \rightarrow b$**
    **$D_1 \rightarrow SB$**
    **$D_2 \rightarrow AS$**
    **$D_3 \rightarrow C_bS$**

### (c) Construct the CFG for having any number of b's over the set $\Sigma = \{b\}$

"Any number of b's" includes the empty string ($\epsilon$), a single $b$, or any infinite repetition of $b$ ($b, bb, bbb, \dots$). This describes the regular language language $L = \{b\}^*$.

The equivalent Context-Free Grammar is defined as $G = (\{S\}, \{b\}, P, S)$ with the production rules:

**$S \rightarrow bS \mid \epsilon$**

---

## 7 _____

### a) Construct a PDA from the following CFG: $G=(\{S,X\}, \{a,b\}, P, S)$ where, the productions are - $S \rightarrow XS \mid \epsilon, A \rightarrow aXb \mid Ab \mid ab.$

*Note: There is a typographical mismatch in the exam question where the production rules introduce a non-terminal variable $A$, but the formal variable set is defined only as $\{S, X\}$. To construct the Pushdown Automaton accurately based on the given rules, we apply the standard top-down parsing technique via the empty stack method.*

We design a single-state PDA $M = (\{q\}, \Sigma, \Gamma, \delta, q, S, \emptyset)$ where:

* $\Sigma = \{a, b\}$ (Input alphabet)
* $\Gamma = \{S, X, A, a, b\}$ (Stack alphabet)
* $S$ is the start stack symbol.

**Transition Functions ($\delta$):**

* **Variable Expansion Transitions (Non-terminals):**
    $$
    \begin{aligned}
    \delta(q, \epsilon, S) &= \{(q, XS), (q, \epsilon)\} \\
    \delta(q, \epsilon, A) &= \{(q, aXb), (q, Ab), (q, ab)\}
    \end{aligned}
    $$
* **Terminal Matching Transitions:**
    $$
    \begin{aligned}
    \delta(q, a, a) &= \{(q, \epsilon)\} \\
    \delta(q, b, b) &= \{(q, \epsilon)\}
    \end{aligned}
    $$

### b) Compare between computability and complexity.

| Feature | Computability Theory | Complexity Theory |
| :--- | :--- | :--- |
| **Fundamental Question** | **Can** a given problem be solved by a computer algorithm at all? | **How much time and memory** does a computer need to solve the problem? |
| **Core Objective** | Distinguishes between solvable and unsolvable mathematical problems. | Classifies solvable problems based on their computational resource requirements. |
| **Primary Resource Constraints** | Assumes unbounded execution time and infinite storage memory. | Bounded strictly by finite time (processor cycles) and finite space (memory). |
| **Key Classifications** | Decidable vs. Undecidable (e.g., The Halting Problem). | Complexity classes: **P**, **NP**, **NP-Complete**, **PSPACE**. |
| **Theoretical Model** | Standard Turing Machine (TM). | Time-bounded and Space-bounded deterministic/nondeterministic Turing Machines. |

### c) Using Pumping Lemma, prove that the language $A = \{a^n b^n \mid n \ge 0\}$ is not regular.

**Proof by Contradiction:**

1. **Assumption:** Assume the language $A$ is regular. Therefore, it must satisfy the Pumping Lemma for regular languages with a pumping length $p$.
2. **String Selection:** Choose a string $s = a^p b^p$. This string is explicitly a member of $A$ because the number of $a$s equals the number of $b$s, and its length is $|s| = 2p \ge p$.
3. **Decomposition:** According to the lemma, any such valid string $s$ can be split into three parts, $s = xyz$, subject to the following constraints:
    * $|y| > 0$
    * $|xy| \le p$
    * $xy^i z \in A$ for all $i \ge 0$
4. **Characterizing $y$:** Because the string $s$ begins with $p$ copies of $a$, and the constraint dictates that the combined length of $x$ and $y$ cannot exceed $p$ ($|xy| \le p$), the substring $xy$ must be made up entirely of $a$s. Consequently, $y$ consists solely of $a$s. Let $y = a^k$ where $k \ge 1$.
5. **Pumping Violation:** Let's choose to pump up by setting $i = 2$. The resulting string is $xy^2z$.
    * By replicating $y$, we introduce $k$ additional $a$s to the front of the string.
    * The new string structural form becomes $a^{p+k} b^p$.
6. **Conclusion:** Because $k \ge 1$, the quantity of $a$s ($p+k$) is strictly greater than the quantity of $b$s ($p$). Therefore, $xy^2z \notin A$. This direct contradiction of the third lemma condition proves our initial assumption false. **The language $A = \{a^n b^n \mid n \ge 0\}$ is not regular.**

### d) Describe about the Context Free Language Closure Properties.

Context-Free Languages (CFLs) possess distinct closure properties under standard set-theoretic and string operations. 

**Operations under which CFLs are CLOSED:**

* **Union:** If $L_1$ and $L_2$ are CFLs, then $L_1 \cup L_2$ is also a CFL. 
  * *Proof Idea:* If $S_1$ and $S_2$ are the start symbols of the respective grammars, we can create a new start symbol $S_{\text{new}} \rightarrow S_1 \mid S_2$.
* **Concatenation:** If $L_1$ and $L_2$ are CFLs, then $L_1 \cdot L_2$ is also a CFL.
  * *Proof Idea:* A new start symbol rule can be written as $S_{\text{new}} \rightarrow S_1 S_2$.
* **Kleene Closure (Star):** If $L$ is a CFL, then $L^*$ is also a CFL.
  * *Proof Idea:* If $S$ is the original start symbol, the new grammar utilizes $S_{\text{new}} \rightarrow S S_{\text{new}} \mid \epsilon$.

**Operations under which CFLs are NOT CLOSED:**

* **Intersection:** If $L_1$ and $L_2$ are CFLs, $L_1 \cap L_2$ is **not necessarily** a CFL.
  * *Counterexample:* Consider $L_1 = \{a^n b^n c^m \mid n, m \ge 1\}$ and $L_2 = \{a^m b^n c^n \mid n, m \ge 1\}$, which are both valid CFLs. Their intersection yields $L_1 \cap L_2 = \{a^n b^n c^n \mid n \ge 1\}$, which is a well-known non-context-free language.
* **Complement:** If $L$ is a CFL, its complement $\Sigma^* - L$ is **not necessarily** a CFL.
  * *Justification:* By De Morgan's Laws, $L_1 \cap L_2 = \overline{\overline{L_1} \cup \overline{L_2}}$. If complementation were closed, intersection would also be closed by extension, which it is not.
