---
publish: true
---
<!-- <h1 align="center">2022</h1> -->

# Solve for 2022

## 1 _____

### a. What is Operating System? What are the main purposes of an Operating System? (1+2)

**Definition:**
An Operating System (OS) is system software that acts as an intermediary between the user and the computer hardware, managing resources and providing common services for applications.

**Main Purposes:**

* **Resource Allocation:** Manages CPU time, memory space, file storage, and I/O devices fairly and efficiently.
* **Hardware Abstraction:** Hides complex hardware details, providing a uniform interface for software.
* **Execution Management:** Controls the execution of user programs to prevent errors and improper system use.
* **Security & Protection:** Safeguards data and protects system resources from unauthorized access.

### b. Write the advantages and disadvantages of Time Sharing Systems and Distributed systems? (4)

**Time Sharing Systems**

| Advantages | Disadvantages |
| :--- | :--- |
| Quick response time for multiple interactive users. | Requires highly complex CPU scheduling and memory management. |
| Reduces CPU idle time via concurrent process execution. | Reliability issues; if the central system fails, all users are affected. |
| Eliminates the need for software duplication across terminals. | Increased difficulty in ensuring data security and protection. |

**Distributed Systems**

| Advantages | Disadvantages |
| :--- | :--- |
| **Fault Tolerance:** Failure of a single node does not halt the entire system. | **Network Dependency:** Severe reliance on network infrastructure; outages cause isolation. |
| **Resource Sharing:** Enables seamless sharing of data and hardware across physical locations. | **Security Risks:** Network data transmission increases vulnerability to interception. |
| **Scalability & Performance:** Computational load can be dynamically distributed across processors. | **Software Complexity:** Developing distributed operating systems and applications is highly difficult. |

### c. What is process? Explain process state with proper diagram. (1+4)

**Definition:**
A process is a program in execution. It is an active entity that includes the program code, the current activity represented by the program counter, and a set of allocated resources.

**Process States:**

* **New:** The process is currently being created and initialized.
* **Ready:** The process is loaded into memory and waiting to be assigned to a processor.
* **Running:** The CPU is actively executing the process's instructions.
* **Waiting (Blocked):** The process cannot execute until a specific event occurs (e.g., waiting for I/O).
* **Terminated:** The process has finished execution and its resources are being deallocated.

<div align="center">
<img src="L3 T2/CSE-3201-Operating Systems/attachments/img_0.png" alt="Process State Transition Diagram">
<br>
<em>Figure: Process state transition diagram showing the lifecycle of a process</em>
</div>

### d. What is System calls? (2)

**Definition:**
System calls are the programmatic interface provided by the operating system. They act as the essential bridge between a user-mode application and the kernel, allowing user-level processes to request privileged operations—such as reading files, executing new programs, or interacting with hardware—that they cannot perform directly.

## 2 _____

### a. Define Turnaround Time, Waiting Time and Response Time. (3)

* **Turnaround Time (TAT):** The total interval from the time of submission of a process to the time of its completion (TAT = Completion Time - Arrival Time).
* **Waiting Time (WT):** The sum of the periods a process spends waiting in the ready queue to acquire the CPU (WT = Turnaround Time - Burst Time).
* **Response Time (RT):** The time elapsed from the submission of a request until the first response is produced or the process gets the CPU for the first time.

### b. Consider the following situation for preemptive approach: Find out average waiting time, response time and turnaround time for SJF, Priority & RR (Time quantum-2) scheduling algorithms. (9)

*(Note: For Priority Scheduling, the standard assumption of "Lower Number = Higher Priority" is applied. For tie-breaking, FCFS / continuing the current process is used.)*

**1. Preemptive SJF (Shortest Remaining Time First)**

| Process | Completion Time | Turnaround Time | Waiting Time | Response Time |
| :--- | :--- | :--- | :--- | :--- |
| **P1** | 10 | 9 | 5 | 5 |
| **P2** | 3 | 3 | 0 | 0 |
| **P3** | 6 | 2 | 1 | 1 |
| **P4** | 5 | 2 | 0 | 0 |
| **P5** | 16 | 10 | 4 | 4 |

* **Average Turnaround Time:** $(9 + 3 + 2 + 2 + 10) / 5 = \mathbf{5.2}$
* **Average Waiting Time:** $(5 + 0 + 1 + 0 + 4) / 5 = \mathbf{2.0}$
* **Average Response Time:** $(5 + 0 + 1 + 0 + 4) / 5 = \mathbf{2.0}$

**2. Preemptive Priority**

| Process | Completion Time | Turnaround Time | Waiting Time | Response Time |
| :--- | :--- | :--- | :--- | :--- |
| **P1** | 8 | 7 | 3 | 2 |
| **P2** | 3 | 3 | 0 | 0 |
| **P3** | 5 | 1 | 0 | 0 |
| **P4** | 10 | 7 | 5 | 5 |
| **P5** | 16 | 10 | 4 | 4 |

* **Average Turnaround Time:** $(7 + 3 + 1 + 7 + 10) / 5 = \mathbf{5.6}$
* **Average Waiting Time:** $(3 + 0 + 0 + 5 + 4) / 5 = \mathbf{2.4}$
* **Average Response Time:** $(2 + 0 + 0 + 5 + 4) / 5 = \mathbf{2.2}$

**3. Round Robin (Time Quantum = 2)**
*(Note: New arrivals are added to the ready queue before preempted processes at the same timestamp.)*

| Process | Completion Time | Turnaround Time | Waiting Time | Response Time |
| :--- | :--- | :--- | :--- | :--- |
| **P1** | 10 | 9 | 5 | 1 |
| **P2** | 5 | 5 | 2 | 0 |
| **P3** | 8 | 4 | 3 | 3 |
| **P4** | 7 | 4 | 2 | 2 |
| **P5** | 16 | 10 | 4 | 4 |

* **Average Turnaround Time:** $(9 + 5 + 4 + 4 + 10) / 5 = \mathbf{6.4}$
* **Average Waiting Time:** $(5 + 2 + 3 + 2 + 4) / 5 = \mathbf{3.2}$
* **Average Response Time:** $(1 + 0 + 3 + 2 + 4) / 5 = \mathbf{2.0}$

### c. Write a short note on dispatcher. (2)

**Dispatcher:**
The dispatcher is a highly critical module within the OS kernel that gives control of the CPU to the process selected by the short-term scheduler. Its primary functions involve:

* **Context Switching:** Saving the state of the previously running process and loading the saved state of the newly scheduled process.
* **Mode Switching:** Transitioning the system from kernel mode to user mode to execute the user application safely.
* **Jump to Execution:** Jumping to the appropriate location (program counter) in the user program to restart its execution. 
* **Dispatch Latency:** The dispatcher must be as fast as possible; the time it takes to stop one process and start another is known as dispatch latency.

## 3 _____

### a. Define the following: i) Logical Address space ii) Swapping iii) Internal Fragmentation iv) Segmentation. (6)

* **Logical Address Space:** The complete set of all logical addresses generated by a CPU for a specific program.
* **Swapping:** A memory management technique where a process is temporarily moved out of main memory (RAM) into a backing store (disk) and later brought back into memory for continued execution.
* **Internal Fragmentation:** Unused, wasted memory space that is internal to an allocated block. It occurs when the allocated memory block is slightly larger than the requested memory.
* **Segmentation:** A memory management scheme that divides logical memory into variable-sized segments (e.g., functions, arrays, objects) based on the user's view of the program, rather than fixed-size pages.

### b. Explain the paging basic method with appropriate diagram. (5)

**Paging Basic Method:**
Paging is a memory management scheme that eliminates the need for contiguous allocation of physical memory. 

* **Division:** Physical memory is broken into fixed-sized blocks called **frames**. Logical memory is broken into blocks of the same size called **pages**.
* **Loading:** When a process is executed, its pages are loaded into any available memory frames from the backing store.
* **Address Translation:** Every address generated by the CPU is divided into two parts:
  * **Page Number (p):** Used as an index into a *page table*, which contains the base address of each page in physical memory.
  * **Page Offset (d):** Combined with the base address to define the exact physical memory address.

<div align="center">
<img src="L3 T2/CSE-3201-Operating Systems/attachments/img_1.png" alt="Paging Hardware Diagram">
<br>
<em>Figure: Paging hardware architecture showing logical to physical address translation</em>
</div>

### c. Describe the general dynamic storage allocation strategies (first-fit, best-fit and worst-fit). (3)

The following strategies are used to select a free hole from a list of available memory blocks to satisfy a request of size *n*:

| Strategy | Allocation Description | Key Characteristic |
| :--- | :--- | :--- |
| **First-fit** | Allocates the first available hole that is large enough to satisfy the request. | Generally the fastest algorithm, as it stops searching once a suitable hole is found. |
| **Best-fit** | Allocates the smallest hole that is large enough to satisfy the request. | Must search the entire list; minimizes leftover space but creates very small, unusable fragmented holes. |
| **Worst-fit** | Allocates the largest available hole in memory. | Must search the entire list; leaves behind a large hole that may be more useful for future allocations. |

## 4 _____

### a. Define Swapping, Paging and Segmentation. (6)

* **Swapping:** A memory management process where an entire process is temporarily moved out of main memory (RAM) and stored on a secondary storage device (disk) to free up memory space, and later brought back in to continue execution.
* **Paging:** A memory management scheme that eliminates external fragmentation by dividing physical memory into fixed-size blocks (frames) and logical memory into blocks of the same size (pages). The OS maps logical pages to physical frames.
* **Segmentation:** A memory management technique that divides logical address space into variable-sized components called segments. Each segment represents a logical unit of a program (e.g., main program, function, array), aligning with the user's view of memory.

### b. Draw the resource-allocation graph where P, R and E represent Process, Resource and Edge sets. P= {P1, P2, P3}; R = {R1, R2, R3}; E = {P1->R1, P2->R3, P3->R2, R1->P2, R2->P2, R2->P1, R3->P3}; Resources R1, & R3 have one instance and R2 has two instances. Is there any deadlock? Explain. (4)

<div align="center">
<img src="L3 T2/CSE-3201-Operating Systems/attachments/Gemini_Generated_Image_zhmjwvzhmjwvzhmj.png" alt="Resource Allocation Graph">
<br>
<em>Figure: Resource allocation graph showing the current system state with process and resource assignments</em>
</div>

**Deadlock Analysis: Yes, there is a deadlock.**

**Explanation:**
A deadlock occurs because there are closed circular wait cycles in the graph, and no instances of the requested resources are held by processes outside of these cycles. 

* **Cycle 1:** P1 $\rightarrow$ R1 $\rightarrow$ P2 $\rightarrow$ R3 $\rightarrow$ P3 $\rightarrow$ R2 $\rightarrow$ P1
* **Cycle 2:** P2 $\rightarrow$ R3 $\rightarrow$ P3 $\rightarrow$ R2 $\rightarrow$ P2
* R1 and R3 have only 1 instance each, which are currently held by processes involved in the cycle (P2 and P3, respectively).
* R2 has 2 instances, but both are held by processes within the cycle (P1 and P2).
* Because P3 is waiting for R2, P2 is waiting for R3, and P1 is waiting for R1, none of the processes can execute to completion and release their resources, resulting in a deadlock.

### c. Briefly describe the sequential and random file access mechanism. (4)

**File Access Mechanisms**

| Access Mechanism           | Description                                                                                                                                                      | Key Characteristic                                                                                                     |
| :------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| **Sequential Access**      | Information in the file is processed strictly in order, one record after the other. To read the $n$-th record, the system must read all preceding $n-1$ records. | Based on a tape model of a file; efficient for batch processing but slow for targeted data retrieval.                  |
| **Random (Direct) Access** | The file is viewed as a numbered sequence of blocks or records. The system can read or write any block directly in any order without reading preceding data.     | Based on a disk model; essential for database systems and applications requiring immediate access to specific records. |

## 5 _____

### a. What is virtual memory? Write the advantages of use it. (1+2)

**Definition:**
Virtual memory is a memory management technique that abstracts physical memory into a large, uniform array of storage, allowing the execution of processes that are not completely loaded into main memory (RAM).

**Advantages:**

* **Increased Multiprogramming:** Allows more programs to run concurrently since each program takes up less physical memory.
* **Larger Logical Memory:** Programs can be larger than the actual available physical memory.
* **Efficient Resource Use:** Less I/O is required to load or swap user programs into memory, speeding up system response.

### b. Under what circumstances do page faults occur? (3)

A page fault occurs when a running process attempts to access a page that is part of its logical address space, but that specific page is currently **not loaded into physical memory** (RAM). The hardware traps to the operating system because the page table entry for that logical page has its valid-invalid bit set to *invalid*.

### c. Consider the page-reference string: 1, 2, 3, 4, 2, 1, 5, 2, 1, 2, 3, 3, 2, 1, 2, 3. How many page faults would occur for the following replacement algorithms (assume three frames) i) LRU ii) Optimal. (3+3)

**i) LRU (Least Recently Used) Replacement**

| Reference | 1 | 2 | 3 | 4 | 2 | 1 | 5 | 2 | 1 | 2 | 3 | 3 | 2 | 1 | 2 | 3 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Frame 1** | 1 | 1 | 1 | 4 | 4 | 4 | 5 | 5 | 5 | 5 | 3 | 3 | 3 | 3 | 3 | 3 |
| **Frame 2** | - | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 |
| **Frame 3** | - | - | 3 | 3 | 3 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| **Fault?** | **F** | **F** | **F** | **F** | Hit | **F** | **F** | Hit | Hit | Hit | **F** | Hit | Hit | Hit | Hit | Hit |

* **Total Page Faults (LRU) = 7**

**ii) Optimal Replacement**

| Reference | 1 | 2 | 3 | 4 | 2 | 1 | 5 | 2 | 1 | 2 | 3 | 3 | 2 | 1 | 2 | 3 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Frame 1** | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| **Frame 2** | - | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 |
| **Frame 3** | - | - | 3 | 4 | 4 | 4 | 5 | 5 | 5 | 5 | 3 | 3 | 3 | 3 | 3 | 3 |
| **Fault?** | **F** | **F** | **F** | **F** | Hit | Hit | **F** | Hit | Hit | Hit | **F** | Hit | Hit | Hit | Hit | Hit |

* **Total Page Faults (Optimal) = 6**

### d. What is Belady's anomaly? (2)

**Definition:**
Belady's anomaly is a phenomenon observed in certain page replacement algorithms (most notably the FIFO algorithm) where increasing the number of physical memory frames allocated to a process actually *increases* the number of page faults, contrary to the intuitive expectation that more memory should result in fewer faults.

## 6 _____

### a. What are the differences between logical and physical address space? (2)

| Feature | Logical Address Space | Physical Address Space |
| :--- | :--- | :--- |
| **Generation** | Generated by the CPU during program execution. | Computed by the Memory Management Unit (MMU). |
| **Visibility** | Visible to the user/programmer. | Never directly visible to the user/programmer. |
| **Nature** | Virtual address space. | Actual physical location in main memory (RAM). |
| **Mapping** | Requires translation to access memory. | Used directly to access the memory hardware. |

### b. What is fragmentation? Show the compaction process with diagram. (6)

**Fragmentation:**
Fragmentation is a memory management issue where memory space is used inefficiently, resulting in wasted capacity. It occurs as processes are loaded and removed from memory, breaking free memory space into small, non-contiguous blocks.

* **External Fragmentation:** Total memory space exists to satisfy a request, but it is not contiguous.
* **Internal Fragmentation:** Memory allocated to a process is slightly larger than requested; the excess space within the allocated block is wasted.

**Compaction Process:**
Compaction is a solution to external fragmentation. The OS reshuffles memory contents to place all free memory together in one large, contiguous block. This is only possible if relocation is dynamic and done at execution time.

<div align="center">
<img src="L3 T2/CSE-3201-Operating Systems/attachments/img_2.png" alt="Memory Compaction Process">
<br>
<em>Figure: Memory state before and after the compaction process, showing consolidation of free space</em>
</div>

### c. Write down the formula of effective access time (EAT). (3)

Assuming a paging system with a Translation Look-aside Buffer (TLB):

$$
EAT = (H \times (T + M)) + ((1 - H) \times (T + 2M))
$$

Where:

* $H$ = TLB Hit Ratio (probability of finding the page number in the TLB)
* $1 - H$ = TLB Miss Ratio
* $T$ = TLB Access Time
* $M$ = Memory Access Time

### d. Now, if, TLB search takes 20 ns; memory access takes 100ns; hit ratio 90%. Calculate the effective access time. (3)

Given data:

* TLB Access Time ($T$) = 20 ns
* Memory Access Time ($M$) = 100 ns
* Hit Ratio ($H$) = 90% = 0.90
* Miss Ratio ($1 - H$) = 10% = 0.10

**Calculation:**

1. **Time for TLB Hit:** $T + M = 20 + 100 = 120$ ns
2. **Time for TLB Miss:** $T + 2M = 20 + (2 \times 100) = 220$ ns

$$
EAT = (0.90 \times 120) + (0.10 \times 220)
$$
$$
EAT = 108 + 22
$$
$$
EAT = 130 \text{ ns}
$$

## 7 _____

### a. Suppose that a system has five process p0 to p4, and three resource A, B, C. Resource Type A has 10 instances, B has 5 instances, C has 7 instances. Considering available given data apply Resource-Request Algorithm and find out a safe state process sequence. (5)

*(Note: The question implies the standard textbook Banker's Algorithm dataset. The solution below assumes the standard Allocation and Max matrices for this classic problem, yielding an initial Available vector of A=3, B=3, C=2).*

**Need Matrix Calculation (Need = Max - Allocation):**

| Process | Allocation (A B C) | Max (A B C) | Need (A B C) |
| :--- | :--- | :--- | :--- |
| **P0** | 0 1 0 | 7 5 3 | 7 4 3 |
| **P1** | 2 0 0 | 3 2 2 | 1 2 2 |
| **P2** | 3 0 2 | 9 0 2 | 6 0 0 |
| **P3** | 2 1 1 | 2 2 2 | 0 1 1 |
| **P4** | 0 0 2 | 4 3 3 | 4 3 1 |

**Safe Sequence Derivation:**

1. **Initial Available:** (3, 3, 2)
2. **Step 1:** P1's Need (1, 2, 2) $\le$ Available (3, 3, 2). P1 executes.
   * New Available = (3, 3, 2) + Allocation(P1) (2, 0, 0) = **(5, 3, 2)**
3. **Step 2:** P3's Need (0, 1, 1) $\le$ Available (5, 3, 2). P3 executes.
   * New Available = (5, 3, 2) + Allocation(P3) (2, 1, 1) = **(7, 4, 3)**
4. **Step 3:** P4's Need (4, 3, 1) $\le$ Available (7, 4, 3). P4 executes.
   * New Available = (7, 4, 3) + Allocation(P4) (0, 0, 2) = **(7, 4, 5)**
5. **Step 4:** P2's Need (6, 0, 0) $\le$ Available (7, 4, 5). P2 executes.
   * New Available = (7, 4, 5) + Allocation(P2) (3, 0, 2) = **(10, 4, 7)**
6. **Step 5:** P0's Need (7, 4, 3) $\le$ Available (10, 4, 7). P0 executes.
   * Final Available = (10, 4, 7) + Allocation(P0) (0, 1, 0) = **(10, 5, 7)** (Matches total resources)

**Safe State Process Sequence:** `<P1, P3, P4, P2, P0>`

### b. What are the storage device hierarchy? Write the disadvantages and advantages of contiguous memory allocation. (3+2)

**Storage Device Hierarchy (Fastest/Costliest to Slowest/Cheapest):**

1. CPU Registers
2. Cache Memory
3. Main Memory (RAM)
4. Solid State Drives (SSD) / Flash Memory
5. Magnetic Disks (HDD)
6. Optical Disks / Magnetic Tapes

**Contiguous Memory Allocation:**

| Advantages | Disadvantages |
| :--- | :--- |
| **Speed:** Extremely fast read performance since entire files/processes are stored in successive disk/memory blocks. | **External Fragmentation:** Leaves small, unusable holes of memory scattered throughout the system. |
| **Simplicity:** Easy to implement and manage; requires minimal hardware support (only base and limit registers). | **Size Constraints:** Difficult to dynamically grow a file or process if the adjacent space is already occupied. |

### c. What is Process Control Block (PCB)? Show the diagram showing CPU switch from process to process. (1+3)

**Process Control Block (PCB):**
A PCB (or Task Control Block) is a critical data structure in the operating system kernel that stores all information necessary to manage a specific process. It acts as the repository for any process-specific data, including process state, program counter, CPU registers, CPU scheduling information, memory-management information, accounting information, and I/O status.

<div align="center">
<img src="L3 T2/CSE-3201-Operating Systems/attachments/img_3.png" alt="CPU Context Switch Diagram">
<br>
<em>Figure: CPU context switch detailing the state save and restore operations between processes</em>
</div>

<br>

# Solve for 2023

## 1 _____

### a. Define the necessity of an operating system, along with its structures and functions. (4)

**Necessity:**
An Operating System (OS) is essential to act as an intermediary between user applications and the complex computer hardware. It provides a convenient environment for users to execute programs and ensures the efficient, fair allocation of system resources.

**Common Structures:**

* **Monolithic Kernel:** All OS services run in the main kernel thread in a single memory space (high performance, low fault tolerance).
* **Microkernel:** Only essential services (IPC, basic scheduling) are in the kernel; other services run in user space (highly reliable, performance overhead).
* **Layered Approach:** The OS is divided into a hierarchy of layers, where layer $i$ only uses services from layer $i-1$ (easier debugging).
* **Modular (Loadable Kernel Modules):** Core kernel with dynamically loadable components (combines performance with flexibility).

**Core Functions:**

* **Process Management:** CPU scheduling, process creation/termination, synchronization, and deadlock handling.
* **Memory Management:** Tracking memory usage, allocating/deallocating space, and managing virtual memory/paging.
* **File & Storage Management:** Organizing files into directories, access control, and managing disk space.
* **Device Management (I/O):** Managing device drivers, interrupts, and buffering.

### b. Provide a comparative analysis between multiprogramming and multitasking. (4)

**Comparative Analysis**

| Feature | Multiprogramming | Multitasking (Time-Sharing) |
| :--- | :--- | :--- |
| **Primary Goal** | Maximize CPU utilization by keeping the CPU busy. | Enhance response time and allow multiple users to interact with the system simultaneously. |
| **Concept** | Multiple programs are loaded into memory. CPU switches to another process only when the current one waits (e.g., for I/O). | A logical extension of multiprogramming. The CPU switches rapidly between processes based on a fixed time quantum. |
| **User Interaction** | Minimal to none during execution (traditionally batch systems). | High user interaction; each user feels they have dedicated use of the CPU. |
| **Context Switching** | Triggered by process blocking (I/O or termination). | Triggered by hardware interrupts (timer expiration) or process blocking. |

### c. Write short notes on: context switching and system calls, with appropriate examples. (6)

**1. Context Switching:**
Context switching is the process of storing the state (context) of the currently running process or thread so that it can be restored and resumed later, and then loading the saved state of the newly scheduled process. The context is stored in the Process Control Block (PCB).

* **Example:** Process A is running. A timer interrupt occurs. The OS saves Process A's registers and program counter to PCB_A, loads Process B's saved state from PCB_B into the hardware registers, and resumes Process B.

<div align="center">
<img src="L3 T2/CSE-3201-Operating Systems/attachments/img_4.png" alt="Context Switch Mechanism">
<br>
<em>Figure: Mechanism of a CPU context switch between two processes showing state saving and restoring</em>
</div>

**2. System Calls:**
System calls provide the programmatic interface between a user-space application and the services provided by the OS kernel. Since user applications run in an unprivileged "user mode," they must request the OS to perform privileged tasks (like hardware access) on their behalf by trapping into "kernel mode."

* **Example:** A C program wants to read a file. It calls the `read()` function in the standard library, which executes a system call (e.g., `sys_read`). The OS takes over in kernel mode, reads the data from the disk, places it in the program's buffer, and returns control to the user program.

## 2 _____

### a. Distinguish between preemptive and Non-preemptive scheduling. (2)

| Feature | Preemptive Scheduling | Non-Preemptive Scheduling |
| :--- | :--- | :--- |
| **Execution** | OS can interrupt a running process and move it to the ready queue. | Once a process acquires the CPU, it holds it until termination or moving to a waiting state. |
| **Overhead** | High overhead due to frequent context switching. | Low overhead as context switching only occurs voluntarily. |
| **Starvation** | Can cause starvation for low-priority processes. | Can cause starvation for processes waiting behind a long burst time process. |
| **Use Case** | Essential for real-time and time-sharing systems. | Suitable for batch processing systems. |

### b. Consider the following situation for preemptive approach: Find out average waiting time, response time and turnaround time for Priority & Shortest Job First (SJF) scheduling algorithms. (7)

*(Assumptions applied: For SJF, FCFS is used as a tie-breaker. For Priority, lower number indicates higher priority).*

**1. Preemptive SJF (Shortest Remaining Time First)**

| Process | Completion Time | Turnaround Time | Waiting Time | Response Time |
| :--- | :--- | :--- | :--- | :--- |
| **P1** | 24 | 22 | 16 | 16 |
| **P2** | 5 | 4 | 0 | 0 |
| **P3** | 7 | 4 | 2 | 2 |
| **P4** | 18 | 18 | 11 | 0 |
| **P5** | 12 | 8 | 3 | 3 |

* **Average Turnaround Time:** $(22 + 4 + 4 + 18 + 8) / 5 = \mathbf{11.2}$
* **Average Waiting Time:** $(16 + 0 + 2 + 11 + 3) / 5 = \mathbf{6.4}$
* **Average Response Time:** $(16 + 0 + 2 + 0 + 3) / 5 = \mathbf{4.2}$

**2. Preemptive Priority**

| Process | Completion Time | Turnaround Time | Waiting Time | Response Time |
| :--- | :--- | :--- | :--- | :--- |
| **P1** | 8 | 6 | 0 | 0 |
| **P2** | 13 | 12 | 8 | 0 |
| **P3** | 10 | 7 | 5 | 5 |
| **P4** | 24 | 24 | 17 | 0 |
| **P5** | 18 | 14 | 9 | 9 |

* **Average Turnaround Time:** $(6 + 12 + 7 + 24 + 14) / 5 = \mathbf{12.6}$
* **Average Waiting Time:** $(0 + 8 + 5 + 17 + 9) / 5 = \mathbf{7.8}$
* **Average Response Time:** $(0 + 0 + 5 + 0 + 9) / 5 = \mathbf{2.8}$

### c. What criteria we should follow for CPU scheduling? Briefly Describe. (5)

The objective of an effective CPU scheduling algorithm is to maximize efficiency and fairness based on the following five criteria:

* **CPU Utilization:** The system should keep the CPU as busy as possible, ideally ranging from 40% (light load) to 90% (heavy load).
* **Throughput:** The number of processes that complete their execution per time unit. This should be maximized.
* **Turnaround Time:** The total time elapsed from the submission of a process to its completion. This should be minimized.
* **Waiting Time:** The sum of the periods a process spends waiting in the ready queue. The scheduling algorithm only affects waiting time, not execution or I/O time, so this must be minimized.
* **Response Time:** The time from the submission of a request until the first response is produced. This is particularly critical to minimize in interactive or time-sharing systems.

## 3 _____

### a. Define virtual memory and page fault. (4)

* **Virtual Memory:** A memory management capability that provides an idealized abstraction of the storage resources that are actually available on a given machine. It separates logical memory from physical memory, allowing the execution of processes that are not completely in main memory and enabling programs to be larger than the actual physical RAM.
* **Page Fault:** A hardware trap/interrupt raised by the Memory Management Unit (MMU) when a running program attempts to access a memory page that is mapped in its logical address space but is not currently loaded into physical memory.

### b. Case 1: Memory Size = 600 bytes, Page Size = 200 bytes. Case 2: Memory Size = 800 bytes, Page Size = 200 Bytes. Reference String is 8 0 1 2 0 3 1 4 2 3 0 3 2 1 2 3 4 0 1. Which Case will show better performance for Least Recently Used (LRU) Page Replacement algorithm? Explain. (7)

**Frame Calculation:**

* **Case 1:** 600 bytes / 200 bytes = **3 Frames**
* **Case 2:** 800 bytes / 200 bytes = **4 Frames**

**Case 1: LRU with 3 Frames**

| Ref | 8 | 0 | 1 | 2 | 0 | 3 | 1 | 4 | 2 | 3 | 0 | 3 | 2 | 1 | 2 | 3 | 4 | 0 | 1 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **F1** | 8 | 8 | 8 | 2 | 2 | 2 | 1 | 1 | 1 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 4 | 4 | 4 |
| **F2** | - | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 4 | 4 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 0 | 0 |
| **F3** | - | - | 1 | 1 | 1 | 3 | 3 | 3 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 |
| **F?** | **F** | **F** | **F** | **F** | Hit | **F** | **F** | **F** | **F** | **F** | **F** | Hit | Hit | **F** | Hit | Hit | **F** | **F** | **F** |

* **Total Page Faults (Case 1) = 14**

**Case 2: LRU with 4 Frames**

| Ref | 8 | 0 | 1 | 2 | 0 | 3 | 1 | 4 | 2 | 3 | 0 | 3 | 2 | 1 | 2 | 3 | 4 | 0 | 1 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **F1** | 8 | 8 | 8 | 8 | 8 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 1 |
| **F2** | - | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 4 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 4 | 4 |
| **F3** | - | - | 1 | 1 | 1 | 1 | 1 | 1 | 2 | 2 | 2 | 2 | 2 | 1 | 1 | 1 | 1 | 0 | 0 |
| **F4** | - | - | - | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 |
| **F?** | **F** | **F** | **F** | **F** | Hit | **F** | Hit | **F** | **F** | Hit | **F** | Hit | Hit | **F** | Hit | Hit | **F** | **F** | **F** |

* **Total Page Faults (Case 2) = 12**

**Conclusion:**
**Case 2** shows better performance because it results in fewer page faults (12) compared to Case 1 (14). LRU is a stack algorithm, meaning it does not suffer from Belady's Anomaly; therefore, increasing the number of available memory frames (from 3 to 4) inherently increases the probability of finding a referenced page in memory, thereby reducing the page fault rate.

### c. What is TLB? What is the function of TLB? (3)

* **Definition:** A Translation Look-aside Buffer (TLB) is a small, specialized, and highly fast hardware cache located inside the Memory Management Unit (MMU).
* **Function:** Its primary function is to store recently accessed page-table entries (logical-to-physical address mappings). When the CPU generates a logical address, the MMU first checks the TLB. If a hit occurs, the physical address is retrieved immediately, bypassing the slow process of accessing the full page table in main memory.

## 4 _____

### a. Illustrate the term "Deadlock". List the conditions that lead to deadlock. (4)

**Definition:**
A deadlock is a system state where a set of processes are permanently blocked because each process is holding a resource and waiting to acquire another resource that is currently held by another process in the same set.

**Conditions for Deadlock (Coffman Conditions):**
A deadlock can arise if and only if the following four conditions hold simultaneously:

1. **Mutual Exclusion:** At least one resource must be held in a non-shareable mode (only one process can use it at a time).
2. **Hold and Wait:** A process must be holding at least one resource and waiting to acquire additional resources held by other processes.
3. **No Preemption:** Resources cannot be forcibly removed from a process; they can only be released voluntarily by the process holding them.
4. **Circular Wait:** A closed chain of two or more processes exists, where each process is waiting for a resource held by the next process in the chain.

### b. Define the Process Control Block (PCB) and explain it with a diagram. (4)

**Definition:**
A Process Control Block (PCB) is a dedicated data structure created and maintained by the Operating System for every active process. It serves as the repository for any process-specific information required to manage the process's execution and lifecycle. Key components include the process state, program counter, CPU registers, CPU scheduling info, memory management info, and I/O status.

<div align="center">
<img src="L3 T2/CSE-3201-Operating Systems/attachments/img_5.jpg" alt="Structure of a Process Control Block">
<br>
<em>Figure: Typical structure of a Process Control Block (PCB) containing process execution context</em>
</div>

### c. Using Banker's algorithm, answer the following questions: (6)

| Process | Max        | Allocation | Available  |
| :------ | :--------- | :--------- | :--------- |
|         | A, B, C, D | A, B, C, D | A, B, C, D |
| P0      | 6, 0, 1, 2 | 4, 0, 0, 1 | 3, 2, 1, 1 |
| P1      | 2, 7, 5, 0 | 1, 1, 0, 0 |            |
| P2      | 2, 3, 5, 6 | 1, 2, 5, 4 |            |
| P3      | 1, 6, 5, 3 | 0, 6, 3, 3 |            |
| P4      | 1, 6, 5, 6 | 0, 2, 1, 2 |            |

**i) How many resources of type A, B, C and D are there?**
Total Resources = Sum of Allocated Resources + Available Resources

* Total Allocated = (4+1+1+0+0, 0+1+2+6+2, 0+0+5+3+1, 1+0+4+3+2) = (6, 11, 9, 10)
* Available = (3, 2, 1, 1)
* **Total Resources (A, B, C, D) = (9, 13, 10, 11)**

**ii) What are the contents of need matrix?**
Need = Max - Allocation

| Process | Need (A, B, C, D) |
| :--- | :--- |
| **P0** | 2, 0, 1, 1 |
| **P1** | 1, 6, 5, 0 |
| **P2** | 1, 1, 0, 2 |
| **P3** | 1, 0, 2, 0 |
| **P4** | 1, 4, 4, 4 |

**iii) Find if the system is in safe state? If it is, find the safe sequence.**
Yes, the system is in a **safe state**.

**Safe Sequence Calculation:**
Initial Available = (3, 2, 1, 1)

1. **Step 1:** P0 Need (2, 0, 1, 1) <= Available (3, 2, 1, 1). **P0 Executes.**
   * New Available = (3, 2, 1, 1) + Allocation (4, 0, 0, 1) = **(7, 2, 1, 2)**
2. **Step 2:** P2 Need (1, 1, 0, 2) <= Available (7, 2, 1, 2). **P2 Executes.**
   * New Available = (7, 2, 1, 2) + Allocation (1, 2, 5, 4) = **(8, 4, 6, 6)**
3. **Step 3:** P3 Need (1, 0, 2, 0) <= Available (8, 4, 6, 6). **P3 Executes.**
   * New Available = (8, 4, 6, 6) + Allocation (0, 6, 3, 3) = **(8, 10, 9, 9)**
4. **Step 4:** P1 Need (1, 6, 5, 0) <= Available (8, 10, 9, 9). **P1 Executes.**
   * New Available = (8, 10, 9, 9) + Allocation (1, 1, 0, 0) = **(9, 11, 9, 9)**
5. **Step 5:** P4 Need (1, 4, 4, 4) <= Available (9, 11, 9, 9). **P4 Executes.**
   * Final Available = (9, 11, 9, 9) + Allocation (0, 2, 1, 2) = **(9, 13, 10, 11)** (Matches total resources)

**Safe Sequence:** `<P0, P2, P3, P1, P4>`

## 5 _____

### a. Briefly describe swapping and compaction process with diagram. (6)

* **Swapping:** A memory management process where an entire process is temporarily moved out of main memory (RAM) to a backing store (disk) to free up memory, and later brought back in to continue execution.
* **Compaction:** A technique used to overcome external fragmentation. The OS shuffles memory contents to consolidate all free memory into a single, large contiguous block, allowing larger processes to be loaded.

<div align="center">
<img src="L3 T2/CSE-3201-Operating Systems/attachments/Pastedimage20260605142220.png" alt="Swapping and Compaction Mechanisms">
<br>
<em>Figure: Memory management operations showing process swapping to disk and memory compaction</em>
</div>

### b. What is the formula for effective access time (EAT) for a demand-page memory? (2)

The formula for Effective Access Time (EAT) in a demand-paged memory system is:

$$
EAT = (1 - p) \times ma + p \times \text{page fault service time}
$$

* $p$ = Probability of a page fault ($0 \le p \le 1$)
* $ma$ = Memory access time

### c. If memory access time is 800ns. Average page fault service time is 20 milliseconds. And, If 3 access out of 1000 causes the page fault, what will be the effective access time (EAT)? (3)

**Given Data:**

* Memory access time ($ma$) = $800 \text{ ns}$
* Page fault service time = $20 \text{ ms} = 20,000,000 \text{ ns}$
* Page fault rate ($p$) = $3 / 1000 = 0.003$

**Calculation:**
$$
EAT = (1 - 0.003) \times 800 + 0.003 \times 20,000,000
$$
$$
EAT = (0.997 \times 800) + 60,000
$$
$$
EAT = 797.6 + 60,000
$$
$$
EAT = 60,797.6 \text{ ns}
$$

### d. What is the difference between internal and external fragmentation? (3)

| Feature | Internal Fragmentation | External Fragmentation |
| :--- | :--- | :--- |
| **Definition** | Unused memory within a specifically allocated block (block is larger than requested). | Total free memory exists to satisfy a request, but it is not contiguous. |
| **Occurrence** | Happens in fixed-size partition schemes (e.g., Paging). | Happens in variable-size partition schemes (e.g., Segmentation). |
| **Solution** | Best-fit allocation can reduce it, but it cannot be entirely eliminated if block sizes are fixed. | Compaction (if dynamic relocation is supported) or Paging. |

## 6 _____

### a. Define demand paging. Explain how to measure the performance of demand paging. (4)

* **Definition:** Demand paging is a virtual memory management system where pages are not loaded into main memory until they are explicitly requested (demanded) during program execution.
* **Performance Measurement:** Measured using Effective Access Time (EAT). The performance is heavily dependent on the page fault rate ($p$). If $p$ is close to 0, EAT is close to the physical memory access time. If $p$ is high, EAT drastically increases due to the massive overhead of disk I/O required to service page faults.

### b. List the reasons for page faults and the steps to handle them. (4)

**Reasons for Page Faults:**

* The requested page has been swapped out to the backing store.
* The process is attempting to access a valid memory address for the first time (demand paging).

**Steps to Handle:**

1. Check the internal page table to determine if the reference was valid or invalid.
2. If the page is valid but missing, a trap is triggered to the operating system.
3. The OS locates a free physical frame in main memory.
4. The OS schedules a disk operation to read the desired page into the newly allocated frame.
5. Once the disk read completes, the OS updates the page table to indicate the page is now in memory (valid bit set).
6. Restart the instruction that caused the trap.

### c. Consider the following page reference string and three empty frames, calculate the number of page faults using the LRU algorithm: 7,0,1,2,0,3,0,4,2,3,0,3,2,1,2,0,1,7,0,1. (6)

**LRU Replacement Trace (3 Frames):**

| Ref | 7 | 0 | 1 | 2 | 0 | 3 | 0 | 4 | 2 | 3 | 0 | 3 | 2 | 1 | 2 | 0 | 1 | 7 | 0 | 1 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **F1** | 7 | 7 | 7 | 2 | 2 | 2 | 2 | 4 | 4 | 4 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| **F2** | - | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 7 | 7 | 7 |
| **F3** | - | - | 1 | 1 | 1 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 0 | 0 | 0 | 0 | 0 |
| **F?** | **F** | **F** | **F** | **F** | Hit | **F** | Hit | **F** | **F** | Hit | **F** | Hit | Hit | **F** | Hit | **F** | Hit | **F** | Hit | Hit |

* **Total Page Faults (LRU) = 12**

## 7 _____

### a. What is Dispatcher? (2)

The dispatcher is a critical operating system module that gives control of the CPU to the process selected by the short-term scheduler. It is responsible for context switching, switching to user mode, and jumping to the proper location in the user program to restart execution.

### b. Draw the diagram of a context switch and describe how it works. (4)

**How it works:**
When an interrupt occurs, the system saves the current context (registers, program counter, state) of the executing process into its Process Control Block (PCB). The OS then selects a new process, loads its saved context from its respective PCB into the hardware registers, and resumes execution.

<div align="center">
<img src="L3 T2/CSE-3201-Operating Systems/attachments/img_6.png" alt="Context Switch Diagram">
<br>
<em>Figure: CPU state save and restore operations during a context switch between two processes</em>
</div>

### c. What are the process scheduling queues of and their functions? (4)

* **Job Queue:** Contains all the processes currently residing in the system.
* **Ready Queue:** Contains processes that are loaded into main memory and are actively waiting to be assigned to a CPU for execution.
* **Device/Waiting Queue:** Contains processes that are blocked from executing because they are waiting for a specific event to occur (e.g., an I/O device to become available).

### d. What are the process states and their operation? Show the process state with a diagram. (4)

* **New:** The process is actively being created.
* **Ready:** The process is loaded in memory and waiting to be dispatched to a processor.
* **Running:** The CPU is executing the process's instructions.
* **Waiting:** The process is blocked, waiting for an event (like I/O completion).
* **Terminated:** The process has finished execution and is releasing resources.

<div align="center">
<img src="L3 T2/CSE-3201-Operating Systems/attachments/img_7.png" alt="Process State Transition Diagram">
<br>
<em>Figure: Five-state process lifecycle and transition paths</em>
</div>
