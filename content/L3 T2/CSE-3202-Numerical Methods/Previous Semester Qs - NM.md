---
publish: true
---
# Solve for 2022

## 1 _____

### a. Evaluate the sum $S = \sqrt{3} + \sqrt{5} + \sqrt{7}$ to 4 significant digits and find its absolute and relative error.

**1. True Value Calculation:**
First, we find the true value of the sum using high precision:
* $\sqrt{3} \approx 1.7320508$  
* $\sqrt{5} \approx 2.2360680$  
* $\sqrt{7} \approx 2.6457513$  
* $S_{\text{true}} = 1.7320508 + 2.2360680 + 2.6457513 = \mathbf{6.6138701}$  

**2. Approximated Value (to 4 significant digits):**
Rounding the true sum to 4 significant digits gives us our approximated value:
* $S_{\text{approx}} = \mathbf{6.614}$

**3. Error Calculation:**
* **Absolute Error ($E_a$):**
    $$E_a = |S_{\text{true}} - S_{\text{approx}}|$$
    $$E_a = |6.6138701 - 6.614| = \mathbf{0.0001299}$$
* **Relative Error ($E_r$):**
    $$E_r = \frac{E_a}{|S_{\text{true}}|}$$
    $$E_r = \frac{0.0001299}{6.6138701} \approx \mathbf{0.00001964} \text{ (or } 1.964 \times 10^{-5}\text{)}$$

---

### b. Find a root, Correct to three decimal places and lying between 0 and 0.5, of the equation $4e^{-x} - \sin x - 1 = 0$ using the Bisection method.

> **Correction Note:** Let's quickly test the given interval $[0, 0.5]$ with the function $f(x) = 4e^{-x} - \sin x - 1$.  
> $f(0) = 4(1) - 0 - 1 = 3$  
> $f(0.5) = 4e^{-0.5} - \sin(0.5) - 1 = 4(0.6065) - 0.4794 - 1 \approx 0.9466$  
> Because both $f(0)$ and $f(0.5)$ are positive, the Intermediate Value Theorem cannot guarantee a root in this interval, and the Bisection method cannot be initialized here. The root actually lies between **$0.8$ and $0.9$**. I will demonstrate the bisection method on the correct interval $[0.8, 0.9]$ to find your root.

**Bisection Iterations on $[0.8, 0.9]$:**
* $f(0.8) = 0.0800$ (Positive)
* $f(0.9) = -0.1570$ (Negative)

| Iter | $a$ ($+$) | $b$ ($-$) | Midpoint $c$ | $f(c)$ | Sign |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | 0.80000 | 0.90000 | 0.85000 | -0.04153 | Negative |
| **2** | 0.80000 | 0.85000 | 0.82500 | 0.01850 | Positive |
| **3** | 0.82500 | 0.85000 | 0.83750 | -0.01168 | Negative |
| **4** | 0.82500 | 0.83750 | 0.83125 | 0.00336 | Positive |
| **5** | 0.83125 | 0.83750 | 0.83438 | -0.00416 | Negative |
| **6** | 0.83125 | 0.83438 | 0.83281 | -0.00041 | Negative |
| **7** | 0.83125 | 0.83281 | 0.83203 | 0.00148 | Positive |
| **8** | 0.83203 | 0.83281 | 0.83242 | 0.00053 | Positive |

**Result:**
The root converges to **$0.832$** (correct to three decimal places).

---

### c. Find a real root of the equation $x = e^{-x}$ using the Newton-Raphson method, Correct to 5 decimal places.

**Formulation:**
* Function: $f(x) = x - e^{-x} = 0$
* Derivative: $f'(x) = 1 + e^{-x}$
* Newton-Raphson Formula: $x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$

Let's use an initial guess of $x_0 = 0.5$.

**Iterations:**

| $n$ | $x_n$ | $f(x_n)$ | $f'(x_n)$ | $x_{n+1}$ |
| :--- | :--- | :--- | :--- | :--- |
| **0** | 0.500000 | -0.106531 | 1.606531 | 0.566311 |
| **1** | 0.566311 | -0.001305 | 1.567616 | 0.567143 |
| **2** | 0.567143 | 0.000000 | 1.567143 | 0.567143 |

**Result:**
The root, correct to five decimal places, is **$0.56714$**.

## 2 _____

### a. Solve by Gauss-Elimination method:

$3x + y - z = 3$  
$2x - 8y + z = -5$  
$x - 2y + 9z = 8$  

**Step 1: Write the Augmented Matrix**
$$
\begin{bmatrix} 
3 & 1 & -1 & | & 3 \\ 
2 & -8 & 1 & | & -5 \\ 
1 & -2 & 9 & | & 8 
\end{bmatrix}
$$

**Step 2: Swap $R_1$ and $R_3$ (to get a 1 in the pivot position for easier calculation)**
$$
\begin{bmatrix} 
1 & -2 & 9 & | & 8 \\ 
2 & -8 & 1 & | & -5 \\ 
3 & 1 & -1 & | & 3 
\end{bmatrix}
$$

**Step 3: Eliminate $x$ from $R_2$ and $R_3$**
$R_2 \leftarrow R_2 - 2R_1$  
$R_3 \leftarrow R_3 - 3R_1$  
$$
\begin{bmatrix} 
1 & -2 & 9 & | & 8 \\ 
0 & -4 & -17 & | & -21 \\ 
0 & 7 & -28 & | & -21 
\end{bmatrix}
$$

**Step 4: Simplify $R_3$ by dividing by 7**
$R_3 \leftarrow R_3 / 7$  
$$
\begin{bmatrix} 
1 & -2 & 9 & | & 8 \\ 
0 & -4 & -17 & | & -21 \\ 
0 & 1 & -4 & | & -3 
\end{bmatrix}
$$

**Step 5: Swap $R_2$ and $R_3$ (for a simpler pivot)**
$$
\begin{bmatrix} 
1 & -2 & 9 & | & 8 \\ 
0 & 1 & -4 & | & -3 \\ 
0 & -4 & -17 & | & -21 
\end{bmatrix}
$$

**Step 6: Eliminate $y$ from $R_3$**
$R_3 \leftarrow R_3 + 4R_2$  
$$
\begin{bmatrix} 
1 & -2 & 9 & | & 8 \\ 
0 & 1 & -4 & | & -3 \\ 
0 & 0 & -33 & | & -33 
\end{bmatrix}
$$

**Step 7: Back Substitution**
* $-33z = -33 \implies \mathbf{z = 1}$
* $y - 4(1) = -3 \implies \mathbf{y = 1}$
* $x - 2(1) + 9(1) = 8 \implies x + 7 = 8 \implies \mathbf{x = 1}$

**Solution:**
**$x = 1, y = 1, z = 1$**

---

### b. Solve the following system by Gauss-Jacobi method:

$10x - 5y - 2z = 3$  
$4x - 10y + 3z = -3$  
$x + 6y + 10z = -3$  

**1. Check for Diagonal Dominance:**
* $|10| > |-5| + |-2| \implies 10 > 7$ (True)
* $|-10| > |4| + |3| \implies 10 > 7$ (True)
* $|10| > |1| + |6| \implies 10 > 7$ (True)
The system is strictly diagonally dominant, so the Gauss-Jacobi method will converge.

**2. Formulate Iterative Equations:**  
$$x^{(k+1)} = \frac{1}{10} (3 + 5y^{(k)} + 2z^{(k)})$$  
$$y^{(k+1)} = \frac{1}{10} (3 + 4x^{(k)} + 3z^{(k)})$$  
$$z^{(k+1)} = \frac{1}{10} (-3 - x^{(k)} - 6y^{(k)})$$  

**3. Iterations (Starting with $x^{(0)}=0, y^{(0)}=0, z^{(0)}=0$):**

| Iteration ($k$) | $x$ | $y$ | $z$ |
| :--- | :--- | :--- | :--- |
| **0** | 0.0000 | 0.0000 | 0.0000 |
| **1** | 0.3000 | 0.3000 | -0.3000 |
| **2** | 0.3900 | 0.3300 | -0.5100 |
| **3** | 0.3630 | 0.3030 | -0.5370 |
| **4** | 0.3441 | 0.2841 | -0.5181 |
| **5** | 0.3384 | 0.2822 | -0.5049 |

*(The iterations smoothly converge toward the exact solution of approximately $x = 0.341, y = 0.285, z = -0.505$)*

## 3 _____

### a) Evaluate $I = \int_0^1 1/(1 + x) \,dx$ correct to three decimal places using both trapezoidal and Simpson's 1/3 rules with $h = 0.5, 0.25, 0.125$.

**Function:** $f(x) = \frac{1}{1+x}$

**Case 1: $h = 0.5$**
The evaluation points are $x = 0, 0.5, 1.0$.
* $y_0 = f(0) = 1.00000$
* $y_1 = f(0.5) = 0.66667$
* $y_2 = f(1.0) = 0.50000$

* **Trapezoidal Rule:**  
 $I \approx \frac{h}{2} [y_0 + 2y_1 + y_2] = \frac{0.5}{2} [1.0 + 2(0.66667) + 0.5] = 0.25 [2.83334] \approx \mathbf{0.708}$
* **Simpson's 1/3 Rule:**   
 $I \approx \frac{h}{3} [y_0 + 4y_1 + y_2] = \frac{0.5}{3} [1.0 + 4(0.66667) + 0.5] = \frac{0.5}{3} [4.16668] \approx \mathbf{0.694}$

**Case 2: $h = 0.25$**
The evaluation points are $x = 0, 0.25, 0.5, 0.75, 1.0$.
* $y_0 = f(0) = 1.00000$
* $y_1 = f(0.25) = 0.80000$
* $y_2 = f(0.5) = 0.66667$
* $y_3 = f(0.75) = 0.57143$
* $y_4 = f(1.0) = 0.50000$

* **Trapezoidal Rule:**  
 $I \approx \frac{0.25}{2} [1.0 + 2(0.8 + 0.66667 + 0.57143) + 0.5] = 0.125 [5.5762] \approx \mathbf{0.697}$
* **Simpson's 1/3 Rule:**  
 $I \approx \frac{0.25}{3} [1.0 + 4(0.8 + 0.57143) + 2(0.66667) + 0.5] = \frac{0.25}{3} [8.31906] \approx \mathbf{0.693}$

**Case 3: $h = 0.125$**
The evaluation points are $x_0=0$ to $x_8=1.0$ with step $0.125$.
* $y_0 = 1.00000$, $y_1 = 0.88889$,  
* $y_2 = 0.80000$,  
* $y_3 = 0.72727$,  
* $y_4 = 0.66667$,  
* $y_5 = 0.61538$,  
* $y_6 = 0.57143$,  
* $y_7 = 0.53333$,  
* $y_8 = 0.50000$

* **Trapezoidal Rule:**  
 $I \approx \frac{0.125}{2} [1.0 + 2(\sum_{i=1}^7 y_i) + 0.5] = 0.0625 [1.5 + 2(4.80297)] = 0.0625 [11.10594] \approx \mathbf{0.694}$
* **Simpson's 1/3 Rule:**  
 $I \approx \frac{0.125}{3} [(y_0+y_8) + 4(\sum y_{\text{odd}}) + 2(\sum y_{\text{even}})]$  
    $I \approx \frac{0.125}{3} [1.5 + 4(2.76487) + 2(2.03810)] = \frac{0.125}{3} [16.63568] \approx \mathbf{0.693}$

*(Note: The exact analytical value is $\ln(2) \approx 0.693$)*

---

### b) From the following table of values of $x$ and $y$, obtain $dy/dx$ and $d^2y/dx^2$ for $x=1.2$.

Since $x=1.2$ is near the beginning of the table, we use **Newton's Forward Difference Formula**. 

**1. Forward Difference Table:**

| $x$ | $y$ | $\Delta y$ | $\Delta^2 y$ | $\Delta^3 y$ | $\Delta^4 y$ | $\Delta^5 y$ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **1.0** | 2.7183 | 0.6018 | | | | |
| **1.2** | 3.3201 | 0.7351 | 0.1333 | | | |
| **1.4** | 4.0552 | 0.8978 | 0.1627 | 0.0294 | | |
| **1.6** | 4.9530 | 1.0966 | 0.1988 | 0.0361 | 0.0067 | |
| **1.8** | 6.0496 | 1.3395 | 0.2429 | 0.0441 | 0.0080 | 0.0013 |
| **2.0** | 7.3891 | 1.6359 | 0.2964 | 0.0535 | 0.0094 | 0.0014 |
| **2.2** | 9.0250 | | | | | |

Setting $x_0 = 1.2$, the forward differences are:
$\Delta y_0 = 0.7351, \quad \Delta^2 y_0 = 0.1627, \quad \Delta^3 y_0 = 0.0361, \quad \Delta^4 y_0 = 0.0080, \quad \Delta^5 y_0 = 0.0014$
The step size is $h = 0.2$.

**2. First Derivative ($dy/dx$):**
$$
\begin{aligned}
\frac{dy}{dx} &= \frac{1}{h} \left[ \Delta y_0 - \frac{1}{2} \Delta^2 y_0 + \frac{1}{3} \Delta^3 y_0 - \frac{1}{4} \Delta^4 y_0 + \frac{1}{5} \Delta^5 y_0 \right] \\
&= \frac{1}{0.2} \left[ 0.7351 - \frac{0.1627}{2} + \frac{0.0361}{3} - \frac{0.0080}{4} + \frac{0.0014}{5} \right] \\
&= 5 \left[ 0.7351 - 0.08135 + 0.01203 - 0.0020 + 0.00028 \right] \\
&= 5 \left[ 0.66406 \right] = \mathbf{3.3203}
\end{aligned}
$$

**3. Second Derivative ($d^2y/dx^2$):**
$$
\begin{aligned}
\frac{d^2y}{dx^2} &= \frac{1}{h^2} \left[ \Delta^2 y_0 - \Delta^3 y_0 + \frac{11}{12} \Delta^4 y_0 - \frac{5}{6} \Delta^5 y_0 \right] \\
&= \frac{1}{0.04} \left[ 0.1627 - 0.0361 + \frac{11}{12}(0.0080) - \frac{5}{6}(0.0014) \right] \\
&= 25 \left[ 0.1627 - 0.0361 + 0.00733 - 0.00117 \right] \\
&= 25 \left[ 0.13276 \right] = \mathbf{3.3190}
\end{aligned}
$$

## 4 _____

### a) Discuss Euler's method to solve IVP.
Euler's method is the simplest numerical procedure for solving first-order ordinary differential equations (Initial Value Problems) of the form $\frac{dy}{dx} = f(x, y)$ with an initial condition $y(x_0) = y_0$. 

**Concept:** It uses the concept of local linearity. Starting at the initial point $(x_0, y_0)$, it calculates the slope of the tangent line using the function $f(x_0, y_0)$. It then assumes this slope remains constant over a small step size $h$, extending the tangent line to predict the next value. 

**Formula:**
The process is iterated using the relation:
$$y_{n+1} = y_n + h \cdot f(x_n, y_n)$$
where $x_{n+1} = x_n + h$. While easy to implement, it is a first-order method, meaning the global error is proportional to the step size $h$. To achieve high accuracy, $h$ must be kept extremely small.

---

### b) Solve the equation $\frac{dy}{dx} = x + y$, $y(0) = 1$ at point $x = 0.10$.
Since part (a) discussed Euler's Method, we apply it here for a single step to find $y(0.10)$.

* **Given:** $f(x, y) = x + y$, initial values $x_0 = 0, y_0 = 1$. 
* **Step Size:** To reach $x = 0.10$ in one step, $h = 0.10$.

**Calculation:**
$$
\begin{aligned}
y(0.10) &\approx y_1 = y_0 + h \cdot f(x_0, y_0) \\
y_1 &= 1 + 0.10 \cdot (0 + 1) \\
y_1 &= 1 + 0.10 = \mathbf{1.10}
\end{aligned}
$$

*(Note: If calculated using the exact analytical solution $y = 2e^x - x - 1$, the true value is $y(0.1) \approx 1.1103$)*

---

### c) Solve the boundary value problem $y'' - 64y + 10 = 0$ with $y(0) = y(1) = 0$ by finite difference method.

**1. Setup & Discretization:**

We replace the continuous derivative $y''$ with its central finite difference approximation:
$$y_i'' \approx \frac{y_{i+1} - 2y_i + y_{i-1}}{h^2}$$


Substitute this into the differential equation $y_i'' - 64y_i = -10$:  
$$\frac{y_{i+1} - 2y_i + y_{i-1}}{h^2} - 64y_i = -10$$  
$$y_{i-1} - (2 + 64h^2)y_i + y_{i+1} = -10h^2$$  

**2. Choosing Step Size ($h$):**

Let's divide the domain $[0, 1]$ into 4 equal subintervals, giving a step size of $h = 0.25$.  
This choice simplifies the equation beautifully because $h^2 = \frac{1}{16}$:
* $64h^2 = 64 \left(\frac{1}{16}\right) = 4$
* $-10h^2 = -10 \left(\frac{1}{16}\right) = -0.625$

The iterative equation simplifies to:
$$y_{i-1} - 6y_i + y_{i+1} = -0.625$$

**3. Generating the System of Equations:**

The interior nodes are $x_1 = 0.25, x_2 = 0.50, x_3 = 0.75$.
The boundary conditions are $y_0 = 0$ and $y_4 = 0$.

Applying the simplified equation to the interior nodes:
* **For $i=1$ ($x=0.25$):** $0 - 6y_1 + y_2 = -0.625$ 
* **For $i=2$ ($x=0.50$):** $y_1 - 6y_2 + y_3 = -0.625$
* **For $i=3$ ($x=0.75$):** $y_2 - 6y_3 + 0 = -0.625$

Due to boundary symmetry, $y_1 = y_3$. We substitute $y_3$ with $y_1$ in the second equation:  
$$2y_1 - 6y_2 = -0.625 \implies y_1 - 3y_2 = -0.3125$$

**4. Solving the System:**

We now have a simple 2x2 system:
1)  $-6y_1 + y_2 = -0.625$
2)  $y_1 - 3y_2 = -0.3125$

Multiply equation (1) by 3:

$-18y_1 + 3y_2 = -1.875$  

Add this to equation (2):

$-17y_1 = -2.1875 \implies y_1 = \frac{2.1875}{17} \approx \mathbf{0.1287}$

Substitute $y_1$ back into equation (1) to find $y_2$:
$y_2 = -0.625 + 6(0.1287) = -0.625 + 0.7722 \approx \mathbf{0.1471}$

**Final Solution:**
* $y(0.25) \approx \mathbf{0.1287}$
* $y(0.50) \approx \mathbf{0.1471}$
* $y(0.75) \approx \mathbf{0.1287}$


## 5 _____

### a. Solve Laplace's equation $u_{xx} + u_{yy} = 0$ for the following Figure.

**Grid Layout:**

| Boundary | Values |
|----------|--------|
| **Top** | 50, 100, 100, 100, 50 |
| **Bottom** | 0, 0, 0, 0, 0 |
| **Left** | 0, 0, 0, 0 |
| **Right** | 0, 0, 0, 0 |

**Five-Point Finite Difference Formula:**

$$
u_{i,j} = \frac{1}{4}(u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1})
$$

**System of Equations:**

| Unknown | Equation |
|---------|----------|
| $u_1$ | $4u_1 - u_2 - u_4 = 0$ |
| $u_2$ | $-u_1 + 4u_2 - u_3 - u_5 = 0$ |
| $u_3$ | $-u_2 + 4u_3 - u_6 = 0$ |
| $u_4$ | $-u_1 + 4u_4 - u_5 - u_7 = 0$ |
| $u_5$ | $-u_2 - u_4 + 4u_5 - u_6 - u_8 = 0$ |
| $u_6$ | $-u_3 - u_5 + 4u_6 - u_9 = 0$ |
| $u_7$ | $-u_4 + 4u_7 - u_8 = 100$ |
| $u_8$ | $-u_5 - u_7 + 4u_8 - u_9 = 100$ |
| $u_9$ | $-u_6 - u_8 + 4u_9 = 100$ |

**Symmetry Consideration:**

The problem is symmetric about the vertical centerline ($x = 2$):
- $u_1 = u_3$
- $u_4 = u_6$
- $u_7 = u_9$

**Reduced System (6 equations, 6 unknowns):**

$$
\begin{aligned}
4u_1 - u_2 - u_4 &= 0 \\
-2u_1 + 4u_2 - u_5 &= 0 \\
-u_1 + 4u_4 - u_5 - u_7 &= 0 \\
-u_2 - 2u_4 + 4u_5 - u_8 &= 0 \\
-u_4 + 4u_7 - u_8 &= 100 \\
-u_5 - 2u_7 + 4u_8 &= 100
\end{aligned}
$$

**Solution:**

| Unknown | Exact Value | Approximate |
|---------|-------------|-------------|
| $u_1 = u_3$ | $\frac{50}{7}$ | **7.14** |
| $u_2$ | $\frac{275}{28}$ | **9.82** |
| $u_4 = u_6$ | $\frac{75}{4}$ | **18.75** |
| $u_5$ | $25$ | **25.00** |
| $u_7 = u_9$ | $\frac{300}{7}$ | **42.86** |
| $u_8$ | $\frac{1475}{28}$ | **52.68** |

**Final Grid:**

| Col1 | Col2 | Col3 | Col4 | Col5 |
|------|------|------|------|------|
| 50 | 100 | 100 | 100 | 50 |
| 0 | **7.14** | **9.82** | **7.14** | 0 |
| 0 | **18.75** | **25.00** | **18.75** | 0 |
| 0 | **42.86** | **52.68** | **42.86** | 0 |
| 0 | 0 | 0 | 0 | 0 |

### b. Solve the Poisson equation $u_{xx} + u_{yy} = -10(x^2 + y^2 + 10)$ in the domain of the following Figure.

**Given:**
- Domain: $0 \leq x \leq 3$, $0 \leq y \leq 3$
- Grid spacing: $h = 1$
- Boundary condition: $u = 0$ on all boundaries
- Source function: $f(x,y) = -10(x^2 + y^2 + 10)$

**Interior Points:**

| Point | Coordinates | $f(x,y)$ |
|-------|-------------|----------|
| A ($u_1$) | (1, 1) | $-10(1 + 1 + 10) = -120$ |
| B ($u_2$) | (2, 1) | $-10(4 + 1 + 10) = -150$ |
| C ($u_3$) | (1, 2) | $-10(1 + 4 + 10) = -150$ |
| D ($u_4$) | (2, 2) | $-10(4 + 4 + 10) = -180$ |

**Five-Point Formula for Poisson Equation:**

$$
4u_{i,j} - u_{i+1,j} - u_{i-1,j} - u_{i,j+1} - u_{i,j-1} = h^2 f_{i,j}
$$

**System of Equations:**

$$
\begin{aligned}
4u_1 - u_2 - u_3 &= -120 \\
-u_1 + 4u_2 - u_4 &= -150 \\
-u_1 + 4u_3 - u_4 &= -150 \\
-u_2 - u_3 + 4u_4 &= -180
\end{aligned}
$$

**Symmetry:** $u_2 = u_3$ (symmetric about $x = y$ diagonal)

**Reduced System:**

$$
\begin{aligned}
4u_1 - 2u_2 &= -120 \\
-u_1 + 4u_2 - u_4 &= -150 \\
-2u_2 + 4u_4 &= -180
\end{aligned}
$$

**Solving:**

$$
\begin{aligned}
\text{From (1): } u_1 &= \frac{u_2}{2} - 30 \\
\text{From (3): } u_4 &= \frac{u_2}{2} - 45 \\
\text{Substitute into (2): } -\left(\frac{u_2}{2} - 30\right) + 4u_2 - \left(\frac{u_2}{2} - 45\right) &= -150 \\
3u_2 + 75 &= -150 \\
u_2 &= -75
\end{aligned}
$$

**Results:**

| Point | Value |
|-------|-------|
| $u_1$ (A) | $\frac{u_2}{2} - 30 = -37.5 - 30 =$ **$-67.5$** |
| $u_2$ (B) | **$-75$** |
| $u_3$ (C) | **$-75$** |
| $u_4$ (D) | $\frac{u_2}{2} - 45 = -37.5 - 45 =$ **$-82.5$** |

**Final Grid:**

| Col1 | Col2 | Col3 | Col4 |
|------|------|------|------|
| 0 | 0 | 0 | 0 |
| 0 | **-67.5** | **-75** | 0 |
| 0 | **-75** | **-82.5** | 0 |
| 0 | 0 | 0 | 0 |

## 6 _____

### a. From the Taylor series for $y(x)$, find $y(0.1)$ correct to four decimal places if $y(x)$ satisfies $y' = x - y^2$ and $y(0) = 1$.

**Given:**
- $y' = x - y^2$
- $y(0) = 1$
- Find $y(0.1)$

**Taylor Series Formula:**
$$
y(x) = y(0) + x y'(0) + \frac{x^2}{2!} y''(0) + \frac{x^3}{3!} y'''(0) + \frac{x^4}{4!} y^{(4)}(0) + \cdots
$$

**Derivatives at $x = 0$:**

| Derivative | Expression | Value at $x=0$ |
|------------|------------|----------------|
| $y'(x)$ | $x - y^2$ | $0 - 1^2 = -1$ |
| $y''(x)$ | $1 - 2yy'$ | $1 - 2(1)(-1) = 3$ |
| $y'''(x)$ | $-2(y')^2 - 2yy''$ | $-2(-1)^2 - 2(1)(3) = -8$ |
| $y^{(4)}(x)$ | $-6y'y'' - 2yy'''$ | $-6(-1)(3) - 2(1)(-8) = 34$ |

**Substitute into Taylor Series:**
$$
\begin{aligned}
y(0.1) &= 1 + (0.1)(-1) + \frac{(0.1)^2}{2}(3) + \frac{(0.1)^3}{6}(-8) + \frac{(0.1)^4}{24}(34) \\
&= 1 - 0.1 + 0.015 - 0.0013333 + 0.0001417 \\
&= 0.9138084
\end{aligned}
$$

**Result:**
**$y(0.1) = 0.9138$**

### b. Using the modified Euler method find the value of $y$ satisfying the equation, $dy/dx = \log_e(x+y)$ for $x = 1.2$ and $x = 1.4$, correct to four decimal places, take $h = 0.2$ and $y(1) = 2$.

**Given:**
- $f(x,y) = \log_e(x+y)$
- $x_0 = 1, y_0 = 2$
- $h = 0.2$
- Find $y(1.2)$ and $y(1.4)$

**Modified Euler Formula (Heun's Method):**
$$
y_{n+1} = y_n + \frac{h}{2} \left[ f(x_n, y_n) + f(x_{n+1}, y_n + h f(x_n, y_n)) \right]
$$

**Iteration 1: Find $y(1.2)$**

| Step | Calculation | Value |
|------|-------------|-------|
| $f(x_0, y_0)$ | $\log_e(1 + 2)$ | $1.098612$ |
| Predictor $y^*$ | $2 + 0.2(1.098612)$ | $2.219722$ |
| $f(x_1, y^*)$ | $\log_e(1.2 + 2.219722)$ | $1.229546$ |
| Corrector $y_1$ | $2 + 0.1(1.098612 + 1.229546)$ | $2.232816$ |

**$y(1.2) = 2.2328$**

**Iteration 2: Find $y(1.4)$**

| Step | Calculation | Value |
|------|-------------|-------|
| $f(x_1, y_1)$ | $\log_e(1.2 + 2.232816)$ | $1.233347$ |
| Predictor $y^*$ | $2.232816 + 0.2(1.233347)$ | $2.479485$ |
| $f(x_2, y^*)$ | $\log_e(1.4 + 2.479485)$ | $1.355619$ |
| Corrector $y_2$ | $2.232816 + 0.1(1.233347 + 1.355619)$ | $2.491713$ |

**$y(1.4) = 2.4917$**

**Summary Table:**

| $x$ | $y(x)$ |
|-----|--------|
| 1.0 | 2.0000 |
| 1.2 | **2.2328** |
| 1.4 | **2.4917** |

## 7 _____

### a. Compute $y(0.2)$ by Runge-Kutta method of 4th order for the differential equation $\frac{dy}{dx} = xy + y^2, y(0) = 1$.

**Given:**
- $f(x,y) = xy + y^2$
- $x_0 = 0, y_0 = 1, h = 0.2$

**RK4 Formulas:**
$$
\begin{aligned}
k_1 &= h f(x_0, y_0) \\
k_2 &= h f(x_0 + h/2, y_0 + k_1/2) \\
k_3 &= h f(x_0 + h/2, y_0 + k_2/2) \\
k_4 &= h f(x_0 + h, y_0 + k_3) \\
y_1 &= y_0 + \frac{1}{6}(k_1 + 2k_2 + 2k_3 + k_4)
\end{aligned}
$$

**Step Calculations:**

| Step | Expression | Value |
|------|------------|-------|
| $k_1$ | $0.2 \times f(0, 1) = 0.2 \times (0 + 1)$ | $0.200000$ |
| $k_2$ | $0.2 \times f(0.1, 1.1) = 0.2 \times (0.11 + 1.21)$ | $0.264000$ |
| $k_3$ | $0.2 \times f(0.1, 1.132) = 0.2 \times (0.1132 + 1.281424)$ | $0.278925$ |
| $k_4$ | $0.2 \times f(0.2, 1.278925) = 0.2 \times (0.255785 + 1.635649)$ | $0.378287$ |

**Final Calculation:**
$$
\begin{aligned}
y(0.2) &= 1 + \frac{1}{6}(0.200000 + 2(0.264000) + 2(0.278925) + 0.378287) \\
&= 1 + \frac{1.664137}{6} \\
&= 1.277356
\end{aligned}
$$

**Result:**
**$y(0.2) = 1.2774$**

### b. The velocity $v$ ms$^{-1}$ of a moving car is given at fixed intervals of time $t$ (second) as follows. Find the distance covered by the car in 12 seconds.

**Given Data:**

| $t$ | 0 | 2 | 4 | 6 | 8 | 10 | 12 |
|-----|---|---|---|---|---|----|----|
| $v$ | 4 | 6 | 16 | 34 | 60 | 94 | 136 |

**Method:** Simpson's 1/3 Rule (since $n=6$ is even)
$$
\text{Distance} = \int_0^{12} v \, dt \approx \frac{h}{3} \left[ (v_0 + v_6) + 4(v_1 + v_3 + v_5) + 2(v_2 + v_4) \right]
$$

**Calculation:**
$$
\begin{aligned}
\text{Distance} &= \frac{2}{3} \left[ (4 + 136) + 4(6 + 34 + 94) + 2(16 + 60) \right] \\
&= \frac{2}{3} \left[ 140 + 4(134) + 2(76) \right] \\
&= \frac{2}{3} \left[ 140 + 536 + 152 \right] \\
&= \frac{2}{3} \times 828 \\
&= 552
\end{aligned}
$$

**Result:**
**Distance = 552 meters**

### c. What do you mean by interpolation? Apply Lagrange's formula to find the form of the function $f(x)$ using the following table:

**Interpolation:**
Interpolation is a method of estimating unknown values that fall between known data points. It constructs new data points within the range of a discrete set of known data points.

**Given Data:**

| $x$ | 0 | 1 | 2 | 3 | 4 |
|-----|---|---|---|---|---|
| $f(x)$ | 3 | 6 | 11 | 18 | 27 |

**Lagrange's Interpolation Formula:**
$$
f(x) = \sum_{i=0}^{4} f(x_i) L_i(x) \quad \text{where} \quad L_i(x) = \prod_{j \neq i} \frac{x - x_j}{x_i - x_j}
$$

**Basis Polynomials:**

| $i$ | $L_i(x)$ Expression | Simplified Coefficient |
|-----|---------------------|------------------------|
| 0 | $\frac{(x-1)(x-2)(x-3)(x-4)}{(0-1)(0-2)(0-3)(0-4)}$ | $\frac{1}{24}(x-1)(x-2)(x-3)(x-4)$ |
| 1 | $\frac{(x-0)(x-2)(x-3)(x-4)}{(1-0)(1-2)(1-3)(1-4)}$ | $-\frac{1}{6}x(x-2)(x-3)(x-4)$ |
| 2 | $\frac{(x-0)(x-1)(x-3)(x-4)}{(2-0)(2-1)(2-3)(2-4)}$ | $\frac{1}{4}x(x-1)(x-3)(x-4)$ |
| 3 | $\frac{(x-0)(x-1)(x-2)(x-4)}{(3-0)(3-1)(3-2)(3-4)}$ | $-\frac{1}{6}x(x-1)(x-2)(x-4)$ |
| 4 | $\frac{(x-0)(x-1)(x-2)(x-3)}{(4-0)(4-1)(4-2)(4-3)}$ | $\frac{1}{24}x(x-1)(x-2)(x-3)$ |

**Substitute Values:**
$$
\begin{aligned}
f(x) &= 3L_0(x) + 6L_1(x) + 11L_2(x) + 18L_3(x) + 27L_4(x) \\
&= \frac{3}{24}P_0(x) - \frac{6}{6}P_1(x) + \frac{11}{4}P_2(x) - \frac{18}{6}P_3(x) + \frac{27}{24}P_4(x)
\end{aligned}
$$

**Simplification:**
Expanding and combining terms yields:
$$
f(x) = x^2 + 2x + 3
$$

**Verification:**
- $f(0) = 0 + 0 + 3 = 3$ ✓
- $f(1) = 1 + 2 + 3 = 6$ ✓
- $f(2) = 4 + 4 + 3 = 11$ ✓
- $f(3) = 9 + 6 + 3 = 18$ ✓
- $f(4) = 16 + 8 + 3 = 27$ ✓

**Result:**
**$f(x) = x^2 + 2x + 3$**


# Solve for 2023

## 1 _____

### a. Find the real root of the equation $\cos x = 3x - 1$ correct to five decimal point using Fixed Point Iteration method.

**Formulation:**
Rewrite the equation in the form $x = g(x)$:


$$3x = \cos x + 1 \implies x = \frac{\cos x + 1}{3}$$


Let $g(x) = \frac{\cos x + 1}{3}$. Since $|g'(x)| = \left|-\frac{\sin x}{3}\right| \le \frac{1}{3} < 1$, the iteration will converge. We will use an initial guess of $x_0 = 0.6$ (in radians).

**Iterations:**
$x_{n+1} = \frac{\cos(x_n) + 1}{3}$

| $n$ | $x_n$ | $x_{n+1} = g(x_n)$ |
| :--- | :--- | :--- |
| 0 | 0.600000 | 0.608445 |
| 1 | 0.608445 | 0.606873 |
| 2 | 0.606873 | 0.607157 |
| 3 | 0.607157 | 0.607106 |
| 4 | 0.607106 | 0.607115 |
| 5 | 0.607115 | 0.607114 |
| 6 | 0.607114 | 0.607114 |

**Result:**
The root, correct to five decimal places, is **$0.60711$**.

### b. Find the solution to the following system of equation using the Gauss-Seidel Method correct to four decimal places.
$6x + 15y + 2z = 72$
$x + y + 54z = 110$
$27x + 6y - z = 85$

**Rearrangement for Diagonal Dominance:**
To ensure convergence, rearrange the equations so the strictly largest coefficients are on the diagonal:
1. $27x + 6y - z = 85 \implies x_{new} = \frac{85 - 6y_{old} + z_{old}}{27}$
2. $6x + 15y + 2z = 72 \implies y_{new} = \frac{72 - 6x_{new} - 2z_{old}}{15}$
3. $x + y + 54z = 110 \implies z_{new} = \frac{110 - x_{new} - y_{new}}{54}$

**Iterations (Starting with $x_0=0, y_0=0, z_0=0$):**

| Iteration | $x$ | $y$ | $z$ |
| :--- | :--- | :--- | :--- |
| **0** | 0.0000 | 0.0000 | 0.0000 |
| **1** | 3.1481 | 3.5407 | 1.9132 |
| **2** | 2.4322 | 3.5720 | 1.9258 |
| **3** | 2.4257 | 3.5729 | 1.9260 |
| **4** | 2.4255 | 3.5730 | 1.9260 |
| **5** | 2.4255 | 3.5730 | 1.9260 |

**Result:**
The solution is **$x = 2.4255, y = 3.5730, z = 1.9260$**.

## 2 _____

### a. Solve the following equations using Gauss-Jordan Elimination method:
$2x_1 + x_2 - 3x_3 = 11$
$4x_1 - 2x_2 + 3x_3 = 8$
$-2x_1 + 2x_2 - x_3 = -6$

**Step 1: Augmented Matrix**


$$\begin{bmatrix} 2 & 1 & -3 & | & 11 \\ 4 & -2 & 3 & | & 8 \\ -2 & 2 & -1 & | & -6 \end{bmatrix}$$

**Step 2: Eliminate $x_1$ from Rows 2 and 3**

$R_2 \leftarrow R_2 - 2R_1$
$R_3 \leftarrow R_3 + R_1$
$$\begin{bmatrix} 2 & 1 & -3 & | & 11 \\ 0 & -4 & 9 & | & -14 \\ 0 & 3 & -4 & | & 5 \end{bmatrix}$$

**Step 3: Normalize Pivot Rows 1 and 2**


$R_1 \leftarrow R_1 / 2$
$R_2 \leftarrow R_2 / -4$
$$\begin{bmatrix} 1 & 0.5 & -1.5 & | & 5.5 \\ 0 & 1 & -2.25 & | & 3.5 \\ 0 & 3 & -4 & | & 5 \end{bmatrix}$$

**Step 4: Eliminate $x_2$ from Rows 1 and 3**


$R_1 \leftarrow R_1 - 0.5R_2$
$R_3 \leftarrow R_3 - 3R_2$
$$\begin{bmatrix} 1 & 0 & -0.375 & | & 3.75 \\ 0 & 1 & -2.25 & | & 3.5 \\ 0 & 0 & 2.75 & | & -5.5 \end{bmatrix}$$

**Step 5: Normalize Pivot Row 3**


$R_3 \leftarrow R_3 / 2.75$
$$\begin{bmatrix} 1 & 0 & -0.375 & | & 3.75 \\ 0 & 1 & -2.25 & | & 3.5 \\ 0 & 0 & 1 & | & -2 \end{bmatrix}$$

**Step 6: Eliminate $x_3$ from Rows 1 and 2**


$R_1 \leftarrow R_1 + 0.375R_3$
$R_2 \leftarrow R_2 + 2.25R_3$
$$\begin{bmatrix} 1 & 0 & 0 & | & 3 \\ 0 & 1 & 0 & | & -1 \\ 0 & 0 & 1 & | & -2 \end{bmatrix}$$

**Result:**
**$x_1 = 3, x_2 = -1, x_3 = -2$**

### b. Find a root of the equation $x^6 - x - 1 = 0$ using Secant method approximations: $x_0 = 2$ and $x_1 = 1$.

**Secant Method Formula:**


$$x_{n+1} = x_n - f(x_n) \frac{x_n - x_{n-1}}{f(x_n) - f(x_{n-1})}$$
Given $f(x) = x^6 - x - 1$, $x_0 = 2$, and $x_1 = 1$.

**Iterations:**

| $n$ | $x_{n-1}$ | $x_n$ | $f(x_{n-1})$ | $f(x_n)$ | $x_{n+1}$ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | 2.000000 | 1.000000 | 61.000000 | -1.000000 | 1.016129 |
| **2** | 1.000000 | 1.016129 | -1.000000 | -0.915359 | 1.190578 |
| **3** | 1.016129 | 1.190578 | -0.915359 | 0.657424 | 1.117656 |
| **4** | 1.190578 | 1.117656 | 0.657424 | -0.166687 | 1.132532 |
| **5** | 1.117656 | 1.132532 | -0.166687 | -0.018610 | 1.134654 |
| **6** | 1.132532 | 1.134654 | -0.018610 | -0.000739 | 1.134724 |
| **7** | 1.134654 | 1.134724 | -0.000739 | -0.000001 | 1.134724 |

**Result:**
The root converges to **$1.13472$**.

## 3 _____

### a. Find a root of the equation $x^3 - 3x - 5 = 0$ using the Newton-Raphson method, correct up to four decimal places, starting with $x_0 = 2$.

**Formulation:**
* Function: $f(x) = x^3 - 3x - 5$
* Derivative: $f'(x) = 3x^2 - 3$
* Newton-Raphson Formula: $x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$

**Iterations:**

| $n$ | $x_n$ | $f(x_n)$ | $f'(x_n)$ | $x_{n+1}$ |
| :--- | :--- | :--- | :--- | :--- |
| **0** | 2.0000 | -3.0000 | 9.0000 | 2.3333 |
| **1** | 2.3333 | 0.7037 | 13.3333 | 2.2806 |
| **2** | 2.2806 | 0.0195 | 12.6034 | 2.2790 |
| **3** | 2.2790 | 0.0000 | 12.5820 | 2.2790 |

**Result:**
The root, correct to four decimal places, is **$2.2790$**.

### b. Solve the following system of linear equations using Cholesky's factorization method.

> **Note on Cholesky Method:** The Cholesky factorization ($A=LL^T$) mathematically requires a symmetric positive-definite matrix. The given matrix is not symmetric ($A_{12} \neq A_{21}$). The solution below uses the general **LU Decomposition (Doolittle Method)** to solve the system, as standard Cholesky is impossible here.

**System:**
$2x - 6y + 8z = 24$
$5x + 4y - 3z = 2$
$3x + y + 2z = 16$

**1. LU Decomposition ($A = LU$):**


$$A = \begin{bmatrix} 2 & -6 & 8 \\ 5 & 4 & -3 \\ 3 & 1 & 2 \end{bmatrix}$$


Using the Doolittle algorithm, we decompose $A$ into Lower ($L$) and Upper ($U$) triangular matrices:


$$L = \begin{bmatrix} 1 & 0 & 0 \\ 2.5 & 1 & 0 \\ 1.5 & \frac{10}{19} & 1 \end{bmatrix}, \quad U = \begin{bmatrix} 2 & -6 & 8 \\ 0 & 19 & -23 \\ 0 & 0 & \frac{40}{19} \end{bmatrix}$$

**2. Solve $Ly = B$ (Forward Substitution):**


$$\begin{bmatrix} 1 & 0 & 0 \\ 2.5 & 1 & 0 \\ 1.5 & \frac{10}{19} & 1 \end{bmatrix} \begin{bmatrix} y_1 \\ y_2 \\ y_3 \end{bmatrix} = \begin{bmatrix} 24 \\ 2 \\ 16 \end{bmatrix}$$
* $y_1 = \mathbf{24}$
* $2.5(24) + y_2 = 2 \implies y_2 = \mathbf{-58}$
* $1.5(24) + \frac{10}{19}(-58) + y_3 = 16 \implies 36 - \frac{580}{19} + y_3 = 16 \implies y_3 = \mathbf{\frac{200}{19}}$

**3. Solve $Ux = y$ (Backward Substitution):**


$$\begin{bmatrix} 2 & -6 & 8 \\ 0 & 19 & -23 \\ 0 & 0 & \frac{40}{19} \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 24 \\ -58 \\ \frac{200}{19} \end{bmatrix}$$
* $\frac{40}{19}z = \frac{200}{19} \implies \mathbf{z = 5}$
* $19y - 23(5) = -58 \implies 19y = 57 \implies \mathbf{y = 3}$
* $2x - 6(3) + 8(5) = 24 \implies 2x + 22 = 24 \implies \mathbf{x = 1}$

**Result:**
**$x = 1, y = 3, z = 5$**

## 4 _____

### a. Evaluate $\int_0^1 e^{-x^2} dx$ by using Simpson's 1/3 and Simpson's 3/8 rule taking n=4.

> **Note on Simpson's 3/8 Rule:** The 3/8 rule requires the number of subintervals ($n$) to be a multiple of 3. It cannot be mathematically applied to $n=4$ subintervals. To demonstrate the method, the 3/8 calculation below assumes $n=3$. 

**1. Simpson's 1/3 Rule (using $n=4$):**
* Step size $h = \frac{1 - 0}{4} = 0.25$
* $x_0 = 0.00 \implies y_0 = 1.00000$
* $x_1 = 0.25 \implies y_1 = 0.93941$
* $x_2 = 0.50 \implies y_2 = 0.77880$
* $x_3 = 0.75 \implies y_3 = 0.56978$
* $x_4 = 1.00 \implies y_4 = 0.36788$

$$I \approx \frac{h}{3} [y_0 + 4(y_1 + y_3) + 2(y_2) + y_4]$$  
$$I \approx \frac{0.25}{3} [1.00000 + 4(0.93941 + 0.56978) + 2(0.77880) + 0.36788]$$  
$$I \approx 0.08333 [1.00000 + 6.03676 + 1.55760 + 0.36788] \approx \mathbf{0.74686}$$  

**2. Simpson's 3/8 Rule (demonstration using $n=3$):**
* Step size $h = \frac{1 - 0}{3} = \frac{1}{3}$
* $x_0 = 0 \implies y_0 = 1.00000$
* $x_1 = 1/3 \implies y_1 = 0.89484$
* $x_2 = 2/3 \implies y_2 = 0.64118$
* $x_3 = 1 \implies y_3 = 0.36788$

$$I \approx \frac{3h}{8} [y_0 + 3y_1 + 3y_2 + y_3]$$  
$$I \approx \frac{1}{8} [1.00000 + 3(0.89484) + 3(0.64118) + 0.36788]$$  
$$I \approx 0.125 [1.00000 + 2.68452 + 1.92354 + 0.36788] \approx \mathbf{0.74699}$$  

### b. Use the Runge-Kutta method of 4th order for the differential equation $\frac{dy}{dx} = \frac{y^2-x^2}{y^2+x^2}$ with $y(0) = 1$ at $x = 0.2$ and $x = 0.4$.

**Formulation:**
* $f(x,y) = \frac{y^2-x^2}{y^2+x^2}$
* $x_0 = 0, y_0 = 1$, Step size $h = 0.2$

**Step 1: Calculate $y(0.2)$**

| Stage | $x$ formula | $y$ formula | Calculation | Value |
| :--- | :--- | :--- | :--- | :--- |
| **$k_1$** | $x_0 = 0$ | $y_0 = 1$ | $0.2 \left( \frac{1^2 - 0^2}{1^2 + 0^2} \right)$ | 0.20000 |
| **$k_2$** | $x_0 + h/2 = 0.1$ | $y_0 + k_1/2 = 1.1$ | $0.2 \left( \frac{1.1^2 - 0.1^2}{1.1^2 + 0.1^2} \right)$ | 0.19672 |
| **$k_3$** | $x_0 + h/2 = 0.1$ | $y_0 + k_2/2 = 1.09836$ | $0.2 \left( \frac{1.09836^2 - 0.1^2}{1.09836^2 + 0.1^2} \right)$ | 0.19671 |
| **$k_4$** | $x_0 + h = 0.2$ | $y_0 + k_3 = 1.19671$ | $0.2 \left( \frac{1.19671^2 - 0.2^2}{1.19671^2 + 0.2^2} \right)$ | 0.18913 |

$$y(0.2) = y_0 + \frac{1}{6}(k_1 + 2k_2 + 2k_3 + k_4)$$  
$$y(0.2) = 1 + \frac{1}{6}(0.20000 + 0.39344 + 0.39342 + 0.18913) = \mathbf{1.19600}$$  

**Step 2: Calculate $y(0.4)$**

| Stage | $x$ formula | $y$ formula | Calculation | Value |
| :--- | :--- | :--- | :--- | :--- |
| **$k_1$** | $x_1 = 0.2$ | $y_1 = 1.19600$ | $0.2 \left( \frac{1.19600^2 - 0.2^2}{1.19600^2 + 0.2^2} \right)$ | 0.18912 |
| **$k_2$** | $x_1 + h/2 = 0.3$ | $y_1 + k_1/2 = 1.29056$ | $0.2 \left( \frac{1.29056^2 - 0.3^2}{1.29056^2 + 0.3^2} \right)$ | 0.17949 |
| **$k_3$** | $x_1 + h/2 = 0.3$ | $y_1 + k_2/2 = 1.28575$ | $0.2 \left( \frac{1.28575^2 - 0.3^2}{1.28575^2 + 0.3^2} \right)$ | 0.17935 |
| **$k_4$** | $x_1 + h = 0.4$ | $y_1 + k_3 = 1.37535$ | $0.2 \left( \frac{1.37535^2 - 0.4^2}{1.37535^2 + 0.4^2} \right)$ | 0.16881 |

$$y(0.4) = y_1 + \frac{1}{6}(k_1 + 2k_2 + 2k_3 + k_4)$$  
$$y(0.4) = 1.19600 + \frac{1}{6}(0.18912 + 0.35898 + 0.35870 + 0.16881) = \mathbf{1.37527}$$  


## 5 _____

### a. Solve the following system of linear equations using Cramer's rule:
$5x - 2y + 9z = -7$


$-2x + y - 4z = 5$


$3x - 10y - 8z = 0$



**1. Calculate the main determinant ($D$):**  
$$
\begin{aligned}
D &= \begin{vmatrix} 5 & -2 & 9 \\ -2 & 1 & -4 \\ 3 & -10 & -8 \end{vmatrix} \\
D &= 5(1(-8) - (-4)(-10)) - (-2)(-2(-8) - (-4)(3)) + 9(-2(-10) - 1(3)) \\
D &= 5(-8 - 40) + 2(16 + 12) + 9(20 - 3) \\
D &= 5(-48) + 2(28) + 9(17) = -240 + 56 + 153 = \mathbf{-31}
\end{aligned}
$$

**2. Calculate the determinants for each variable ($D_x, D_y, D_z$):**  
$$
\begin{aligned}
D_x &= \begin{vmatrix} -7 & -2 & 9 \\ 5 & 1 & -4 \\ 0 & -10 & -8 \end{vmatrix} \\
D_x &= -7(-8 - 40) - (-2)(-40 - 0) + 9(-50 - 0) \\
D_x &= -7(-48) + 2(-40) - 450 = 336 - 80 - 450 = \mathbf{-194}
\end{aligned}
$$



$$
\begin{aligned}
D_y &= \begin{vmatrix} 5 & -7 & 9 \\ -2 & 5 & -4 \\ 3 & 0 & -8 \end{vmatrix} \\
D_y &= 5(-40 - 0) - (-7)(16 - (-12)) + 9(0 - 15) \\
D_y &= -200 + 7(28) - 135 = -200 + 196 - 135 = \mathbf{-139}
\end{aligned}
$$



$$
\begin{aligned}
D_z &= \begin{vmatrix} 5 & -2 & -7 \\ -2 & 1 & 5 \\ 3 & -10 & 0 \end{vmatrix} \\
D_z &= 5(0 - (-50)) - (-2)(0 - 15) + (-7)(20 - 3) \\
D_z &= 5(50) + 2(-15) - 7(17) = 250 - 30 - 119 = \mathbf{101}
\end{aligned}
$$



**3. Apply Cramer's Rule Formula ($x = D_x/D$, etc.):**
* $x = \frac{-194}{-31} = \mathbf{\frac{194}{31}}$
* $y = \frac{-139}{-31} = \mathbf{\frac{139}{31}}$
* $z = \frac{101}{-31} = \mathbf{-\frac{101}{31}}$

---

### b. Using Taylor series method with the first five terms in the expansion find $y(0.1)$ correct to three decimal place, given that $\frac{dy}{dx} = e^x - y^2$, $y(0)=1$.

**Formulation:**
The Taylor series expansion up to the first five terms is:


$$y(x) \approx y_0 + h y'_0 + \frac{h^2}{2!} y''_0 + \frac{h^3}{3!} y'''_0 + \frac{h^4}{4!} y^{(4)}_0$$


Given $x_0 = 0$, $y_0 = 1$, and step size $h = 0.1$.

**Calculate Derivatives at $x=0$:**
1.  **$y$ term:** $y_0 = \mathbf{1}$
2.  **1st Derivative:** $y' = e^x - y^2$
    * $y'_0 = e^0 - (1)^2 = 1 - 1 = \mathbf{0}$
3.  **2nd Derivative:** $y'' = e^x - 2yy'$
    * $y''_0 = e^0 - 2(1)(0) = 1 - 0 = \mathbf{1}$
4.  **3rd Derivative:** $y''' = e^x - 2(y'^2 + yy'')$
    * $y'''_0 = e^0 - 2(0^2 + (1)(1)) = 1 - 2 = \mathbf{-1}$
5.  **4th Derivative:** $y^{(4)} = e^x - 2(2y'y'' + y'y'' + yy''') = e^x - 6y'y'' - 2yy'''$
    * $y^{(4)}_0 = e^0 - 6(0)(1) - 2(1)(-1) = 1 - 0 + 2 = \mathbf{3}$

**Substitute into Taylor Series:**
$$
\begin{aligned}
y(0.1) &\approx 1 + (0.1)(0) + \frac{(0.1)^2}{2}(1) + \frac{(0.1)^3}{6}(-1) + \frac{(0.1)^4}{24}(3) \\
y(0.1) &\approx 1 + 0 + 0.005 - 0.0001667 + 0.0000125 \\
y(0.1) &\approx 1.0048458
\end{aligned}
$$

**Result:**
Correct to three decimal places, $y(0.1) = \mathbf{1.005}$.

## 6 _____

### a. Find $y(0.2)$ for $y' = x - y^2$, $y(0) = 1$, with step length $0.1$ using Modified Euler method.

Using the Predictor-Corrector approach for the Modified Euler Method:
* $f(x, y) = x - y^2$
* $x_0 = 0, y_0 = 1, h = 0.1$

**Step 1: Calculate $y$ at $x_1 = 0.1$**
* **Predictor:** $y_1^{(0)} = y_0 + h f(x_0, y_0) = 1 + 0.1(0 - 1^2) = \mathbf{0.9}$

* **Corrector 1:** $y_1^{(1)} = y_0 + \frac{h}{2}[f(x_0, y_0) + f(x_1, y_1^{(0)})]$
    * $y_1^{(1)} = 1 + 0.05[-1 + (0.1 - 0.9^2)] = 1 + 0.05(-1.71) = \mathbf{0.9145}$

* **Corrector 2:** $y_1^{(2)} = 1 + 0.05[-1 + (0.1 - 0.9145^2)] = 1 + 0.05(-1.7363) = \mathbf{0.9132}$

* **Corrector 3:** $y_1^{(3)} = 1 + 0.05[-1 + (0.1 - 0.9132^2)] = 1 + 0.05(-1.7339) = \mathbf{0.9133}$

*(Converged: $y_1 \approx 0.9133$)*

**Step 2: Calculate $y$ at $x_2 = 0.2$**
* **Predictor:** $y_2^{(0)} = y_1 + h f(x_1, y_1) = 0.9133 + 0.1(0.1 - 0.9133^2) = \mathbf{0.8399}$
* **Corrector 1:** $y_2^{(1)} = y_1 + \frac{h}{2}[f(x_1, y_1) + f(x_2, y_2^{(0)})]$
    * $f(x_1, y_1) = 0.1 - 0.9133^2 = -0.7341$
    * $f(x_2, y_2^{(0)}) = 0.2 - 0.8399^2 = -0.5054$
    * $y_2^{(1)} = 0.9133 + 0.05[-0.7341 - 0.5054] = 0.9133 + 0.05(-1.2395) = \mathbf{0.8513}$
* **Corrector 2:** $y_2^{(2)} = 0.9133 + 0.05[-0.7341 + (0.2 - 0.8513^2)] = 0.9133 + 0.05(-1.2588) = \mathbf{0.8504}$
* **Corrector 3:** $y_2^{(3)} = 0.9133 + 0.05[-0.7341 + (0.2 - 0.8504^2)] = 0.9133 + 0.05(-1.2573) = \mathbf{0.8504}$

**Result:**
$y(0.2) \approx \mathbf{0.8504}$.

---

### b. Use Picard's method up to $3^{rd}$ approximation to find the value of $y$ when $x = 0.25$, given that $\frac{dy}{dx} = x^2y - y$ and $y(0) = 1$.

**Formulation:**
The integral equation for Picard's method is $y_n(x) = y_0 + \int_0^x f(t, y_{n-1}(t)) dt$.
* $f(t, y) = y(t^2 - 1)$
* $y_0(x) = 1$

**1st Approximation ($y_1$):**
$$
\begin{aligned}
y_1(x) &= 1 + \int_0^x (1)(t^2 - 1) dt \\
y_1(x) &= 1 + \left[ \frac{t^3}{3} - t \right]_0^x = \mathbf{1 - x + \frac{x^3}{3}}
\end{aligned}
$$

**2nd Approximation ($y_2$):**
$$
\begin{aligned}
y_2(x) &= 1 + \int_0^x \left( 1 - t + \frac{t^3}{3} \right) (t^2 - 1) dt \\
y_2(x) &= 1 + \int_0^x \left( t^2 - 1 - t^3 + t + \frac{t^5}{3} - \frac{t^3}{3} \right) dt \\
y_2(x) &= 1 + \int_0^x \left( -1 + t + t^2 - \frac{4t^3}{3} + \frac{t^5}{3} \right) dt \\
y_2(x) &= \mathbf{1 - x + \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{3} + \frac{x^6}{18}}
\end{aligned}
$$

**3rd Approximation ($y_3$):**
$$
\begin{aligned}
y_3(x) &= 1 + \int_0^x \left( 1 - t + \frac{t^2}{2} + \frac{t^3}{3} - \frac{t^4}{3} + \frac{t^6}{18} \right) (t^2 - 1) dt \\
y_3(x) &= 1 + \int_0^x \left( -1 + t + \frac{t^2}{2} - \frac{4t^3}{3} + \frac{5t^4}{6} + \frac{t^5}{3} - \frac{7t^6}{18} + \frac{t^8}{18} \right) dt \\
y_3(x) &= \mathbf{1 - x + \frac{x^2}{2} + \frac{x^3}{6} - \frac{x^4}{3} + \frac{x^5}{6} + \frac{x^6}{18} - \frac{x^7}{18} + \frac{x^9}{162}}
\end{aligned}
$$

**Evaluate at $x = 0.25$:**
Substitute $x = 0.25$ (or $\frac{1}{4}$) into the 3rd approximation polynomial:
$$
\begin{aligned}
y_3(0.25) &= 1 - 0.25 + \frac{(0.25)^2}{2} + \frac{(0.25)^3}{6} - \frac{(0.25)^4}{3} + \frac{(0.25)^5}{6} + \dots \\
y_3(0.25) &\approx 1 - 0.25 + 0.03125 + 0.002604 - 0.001302 + 0.000163 + 0.000014 \\
y_3(0.25) &\approx \mathbf{0.7827}
\end{aligned}
$$

## 7 _____

### a. Use Euler's method to compute $y(0.9)$ from the following differential equation: $\frac{dy}{dx} = x^2, y(0) = 1$ and $h = 0.3$.

**Formulation:**
* Euler's Method Formula: $y_{n+1} = y_n + h \cdot f(x_n, y_n)$
* Given: $f(x, y) = x^2$, Initial condition $x_0 = 0, y_0 = 1$, Step size $h = 0.3$. Target is $x = 0.9$.

**Iterations:**

* **Step 1 ($n=0$): Calculate $y$ at $x_1 = 0.3$**
    $$x_0 = 0, \quad y_0 = 1$$
    $$f(x_0, y_0) = 0^2 = 0$$
    $$y_1 = y(0.3) = y_0 + h \cdot f(x_0, y_0) = 1 + 0.3(0) = \mathbf{1}$$

* **Step 2 ($n=1$): Calculate $y$ at $x_2 = 0.6$**
    $$x_1 = 0.3, \quad y_1 = 1$$
    $$f(x_1, y_1) = 0.3^2 = 0.09$$
    $$y_2 = y(0.6) = y_1 + h \cdot f(x_1, y_1) = 1 + 0.3(0.09) = 1 + 0.027 = \mathbf{1.027}$$

* **Step 3 ($n=2$): Calculate $y$ at $x_3 = 0.9$**
    $$x_2 = 0.6, \quad y_2 = 1.027$$
    $$f(x_2, y_2) = 0.6^2 = 0.36$$
    $$y_3 = y(0.9) = y_2 + h \cdot f(x_2, y_2) = 1.027 + 0.3(0.36) = 1.027 + 0.108 = \mathbf{1.135}$$

**Result:**
$$y(0.9) = \mathbf{1.135}$$

---

### b. Use Picard's method to solve $\frac{dy}{dx} = x + y^2, y(0) = 1$ up to $3^{rd}$ approximation.

**Formulation:**
Picard's iterative formula is: $y_n(x) = y_0 + \int_{0}^{x} f(t, y_{n-1}(t)) \, dt$
* Given: $f(t, y) = t + y^2$, $x_0 = 0$, $y_0 = 1$.

**1st Approximation ($y_1$):**
$$
\begin{aligned}
y_1(x) &= 1 + \int_0^x (t + y_0^2) \, dt \\
y_1(x) &= 1 + \int_0^x (t + 1^2) \, dt \\
y_1(x) &= 1 + \left[ \frac{t^2}{2} + t \right]_0^x = \mathbf{1 + x + \frac{x^2}{2}}
\end{aligned}
$$

**2nd Approximation ($y_2$):**
$$
\begin{aligned}
y_2(x) &= 1 + \int_0^x (t + y_1(t)^2) \, dt \\
y_2(x) &= 1 + \int_0^x \left[ t + \left(1 + t + \frac{t^2}{2}\right)^2 \right] \, dt \\
y_2(x) &= 1 + \int_0^x \left[ t + \left( 1 + t^2 + \frac{t^4}{4} + 2t + t^2 + t^3 \right) \right] \, dt \\
y_2(x) &= 1 + \int_0^x \left( 1 + 3t + 2t^2 + t^3 + \frac{t^4}{4} \right) \, dt \\
y_2(x) &= 1 + \left[ t + \frac{3t^2}{2} + \frac{2t^3}{3} + \frac{t^4}{4} + \frac{t^5}{20} \right]_0^x \\
y_2(x) &= \mathbf{1 + x + \frac{3x^2}{2} + \frac{2x^3}{3} + \frac{x^4}{4} + \frac{x^5}{20}}
\end{aligned}
$$

**3rd Approximation ($y_3$):**
$$
\begin{aligned}
y_3(x) &= 1 + \int_0^x (t + y_2(t)^2) \, dt \\
y_3(x) &= 1 + \int_0^x \left[ t + \left( 1 + t + \frac{3t^2}{2} + \frac{2t^3}{3} + \frac{t^4}{4} + \frac{t^5}{20} \right)^2 \right] \, dt
\end{aligned}
$$
Expanding the integrand and integrating term by term yields the full 3rd approximation polynomial:
$$y_3(x) = \mathbf{1 + x + \frac{3}{2}x^2 + \frac{4}{3}x^3 + \frac{13}{12}x^4 + \frac{49}{60}x^5 + \frac{13}{30}x^6 + \frac{233}{1260}x^7 + \frac{29}{480}x^8 + \frac{31}{2160}x^9 + \frac{1}{400}x^{10} + \frac{1}{4400}x^{11}}$$

---

### c. Write down the formula for Modified Euler's method.

The Modified Euler method (also known as Heun's method or the predictor-corrector method) is given by a two-step formula to calculate $y_{n+1}$:

**1. Predictor Equation** (calculates an initial estimate using standard Euler):
$$y_{n+1}^{(0)} = y_n + h \cdot f(x_n, y_n)$$

**2. Corrector Equation** (improves the estimate by averaging the slopes):
$$y_{n+1}^{(k+1)} = y_n + \frac{h}{2} \left[ f(x_n, y_n) + f(x_{n+1}, y_{n+1}^{(k)}) \right]$$

*(Note: The corrector step can be iterated $k$ times until the value converges, or simply applied once. If applied once, the combined formula is $y_{n+1} = y_n + \frac{h}{2} [ f(x_n, y_n) + f(x_{n+1}, y_n + hf(x_n, y_n)) ]$ ).*
