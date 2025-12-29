---
publish: true
---
<h1 align="center">CT1</h1>

### 1. Describe pin numbers 14, 25, and 32 and draw the 8086 microprocessor's pin diagram. (4)

**Pin Descriptions:**

* **Pin 14 (AD2):** This pin is part of the multiplexed Address/Data bus. During the first clock cycle ($$T_1$$), it carries the address bit **A2**. During subsequent cycles ($$T_2, T_3, T_4$$), it carries data bit **D2**.
* **Pin 25 (ALE / QS0):** The function depends on the operating mode (set by pin 33, MN/$$\overline{MX}$$):
    * **In Minimum Mode:** It acts as **ALE (Address Latch Enable)**. It provides a pulse to latch the address from the multiplexed AD bus into external latches.
    * **In Maximum Mode:** It acts as **QS0 (Queue Status)**. Along with QS1, it provides status information about the internal instruction queue to external coprocessors.
* **Pin 32 ($$\overline{RD}$$):** This is the **Read** control signal (Active Low). When low, it indicates that the processor is performing a memory or I/O read operation, signaling devices to drive data onto the data bus.

**Pin Diagram:**

<div align="center">
  <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221114154946/pindiagramof808611.png" alt="Pin Diagram of 8086 Microprocessor">
  <br>
  <em>Figure: 8086 Microprocessor Pin Configuration (40-pin DIP)</em>
</div>

---

### 2. Give a brief explanation of the various 8086 MP addressing modes using an example. (4)

Addressing modes define how the operand (data) is specified in an instruction.

1.  **Immediate:** Data is part of the instruction.
    * *Example:* `MOV AX, 1234H` (Move value 1234H directly to AX).
2.  **Register:** Data is stored in a register.
    * *Example:* `MOV AX, BX` (Move content of BX to AX).
3.  **Direct:** The effective address (offset) is given directly.
    * *Example:* `MOV AX, [1234H]` (Move data from memory location 1234H to AX).
4.  **Register Indirect:** The address is held in a register (BX, BP, SI, or DI).
    * *Example:* `MOV AX, [BX]` (Move data from address stored in BX to AX).
5.  **Based:** Uses base registers (BX or BP) plus a displacement.
    * *Example:* `MOV AX, [BX + 04H]`.
6.  **Indexed:** Uses index registers (SI or DI) plus a displacement.
    * *Example:* `MOV AX, [SI + 04H]`.
7.  **Based Indexed:** Combines a base register and an index register.
    * *Example:* `MOV AX, [BX + SI]`.

---

### 3. List the names of the several instruction sets that are available for the 8086 microprocessor. (4)

The 8086 instructions are categorized into the following groups:

1.  **Data Transfer Instructions:** (e.g., `MOV`, `PUSH`, `POP`, `XCHG`).
2.  **Arithmetic Instructions:** (e.g., `ADD`, `SUB`, `MUL`, `DIV`, `INC`, `DEC`).
3.  **Bit Manipulation / Logical Instructions:** (e.g., `AND`, `OR`, `XOR`, `NOT`, `TEST`, shifts/rotates like `ROR`, `SHL`).
4.  **String Instructions:** (e.g., `MOVS`, `LODS`, `STOS`, `CMPS`).
5.  **Program Execution Transfer (Branch) Instructions:** (e.g., `JMP`, `CALL`, `RET`, `JZ`, `LOOP`).
6.  **Processor Control Instructions:** (e.g., `STC`, `CLC`, `HLT`, `NOP`).

---

### 4. Using a diagram, describe the use and purpose of the control and status flags in the 8086 microprocessor's flag register. (4)

The Flag Register is a 16-bit register containing 9 active flags divided into two categories.

**1. Status Flags (Conditional):** Reflect the result of ALU operations.
* **CF (Carry Flag):** Set if there is a carry out of MSB or borrow.
* **PF (Parity Flag):** Set if the lower byte has an even number of 1s.
* **AF (Auxiliary Carry):** Carry from bit 3 to bit 4 (used in BCD).
* **ZF (Zero Flag):** Set if the result is zero.
* **SF (Sign Flag):** Set if the result is negative (MSB is 1).
* **OF (Overflow Flag):** Set if a signed arithmetic overflow occurs.

**2. Control Flags:** Set by the programmer to control CPU operation.
* **TF (Trap Flag):** Enables single-step execution for debugging.
* **IF (Interrupt Flag):** Enables/Disables maskable interrupts (`INTR`).
* **DF (Direction Flag):** Controls string processing direction (0=Increment, 1=Decrement).

<div align="center">
  <img src="[https://via.placeholder.com/600x200?text=8086+Flag+Register+Format](https://via.placeholder.com/600x200?text=8086+Flag+Register+Format)" alt="8086 Flag Register">
  <br>
  <em>Figure: 8086 Flag Register Layout showing Status and Control Flags</em>
</div>

---

### 5. Give an example to illustrate mNemonics and Compare between mNemonics & Assembly language. (4)

**Example:**
* **Mnemonic:** `MOV`, `ADD`, `SUB`. These are short, human-readable abbreviations for operation codes (opcodes).
* **Illustration:** In the instruction `ADD AX, BX`, the word `ADD` is the **mnemonic** indicating the addition operation.

**Comparison:**

| Feature | Mnemonics | Assembly Language |
| :--- | :--- | :--- |
| **Definition** | Symbolic representations of machine opcodes (e.g., `MOV` for `100010`). | A low-level programming language that uses mnemonics, directives, and labels. |
| **Scope** | Refers specifically to the command keyword. | Refers to the entire syntax, structure, and rule set for writing programs. |
| **Components** | Just the operation name (e.g., `INC`). | Mnemonics + Operands + Directives (`.data`) + Comments. |

---

### 6. Write down the full abbreviations or function: (4)

* **a. CLC:** **Clear Carry Flag**. (Sets CF = 0).
* **b. JNZ:** **Jump if Not Zero**. (Jumps if ZF = 0).
* **c. JMP:** **Unconditional Jump**. (Jumps to the target address regardless of flags).
* **d. MOV:** **Move**. (Copies data from source to destination).
* **e. HLT:** **Halt**. (Stops the processor until an interrupt or reset occurs).
* **f. STI:** **Set Interrupt Flag**. (Sets IF = 1, enabling maskable interrupts).

---

<h1 align="center">CT2</h1>

### 1. Describe the features and functional block diagram of 8051 microcontroller. (5)

**Features:**
* **8-bit CPU:** Optimized for control applications.
* **Memory:** 4 KB On-chip Program Memory (ROM) and 128 Bytes On-chip Data Memory (RAM).
* **I/O Ports:** Four 8-bit bidirectional ports (P0, P1, P2, P3).
* **Timers/Counters:** Two 16-bit timers (Timer 0 and Timer 1).
* **Serial Port:** One full-duplex UART (TxD, RxD).
* **Interrupts:** 5 interrupt sources (2 external, 2 timer, 1 serial).
* **Clock:** On-chip oscillator.

**Block Diagram:**

<div align="center">
  <img src="[https://via.placeholder.com/600x400?text=8051+Microcontroller+Block+Diagram](https://via.placeholder.com/600x400?text=8051+Microcontroller+Block+Diagram)" alt="8051 Block Diagram">
  <br>
  <em>Figure: Functional Block Diagram of 8051 Microcontroller</em>
</div>

---

### 2. Give a brief explanation of Modes of DMAC, its advantage-disadvantage. (5)

Direct Memory Access Controller (DMAC) transfers data between memory and I/O without constant CPU intervention.

**Modes:**
1.  **Burst Mode:** The DMAC takes control of the bus and transfers the **entire block** of data before releasing the bus back to the CPU.
    * *Advantage:* High data throughput.
    * *Disadvantage:* CPU is completely blocked for a long time; system response time suffers.
2.  **Cycle Stealing Mode:** The DMAC takes control of the bus for **one byte transfer** (steals one cycle) and then returns control to the CPU. It keeps alternating.
    * *Advantage:* CPU is not blocked for long periods; background tasks continue.
    * *Disadvantage:* Slower transfer rate than burst mode.
3.  **Demand Transfer Mode:** Similar to block mode, but transfers continue only as long as the I/O device asserts a Demand Request signal (DREQ).

---

### 3. Define paging and explain how paging works. (5)

**Definition:**
Paging is a memory management scheme that eliminates the need for contiguous allocation of physical memory. It divides the logical (virtual) memory into fixed-size blocks called **Pages** and physical memory into fixed-size blocks called **Frames**.

**How it Works:**
1.  **Logical Address:** Generated by the CPU, consisting of a **Page Number ($$p$$)** and a **Page Offset ($$d$$)**.
2.  **Page Table:** The OS maintains a Page Table that maps every logical **Page Number** to a physical **Frame Number** in the main memory.
3.  **Translation:**
    * The CPU sends the Page Number ($$p$$) to the Page Table.
    * The Page Table looks up $$p$$ and outputs the corresponding Frame Number ($$f$$).
4.  **Physical Address:** The Frame Number ($$f$$) is combined with the original Offset ($$d$$) to form the actual Physical Address in memory.

---

### 4. Explain Functional Description, Interrupt Sequence and Cascading process of Intel 8259 PIC. (5)

**Functional Description:**
The 8259 **Programmable Interrupt Controller (PIC)** manages up to 8 interrupt requests (IR0-IR7), resolves priorities, and passes a single INT signal to the CPU. It contains:
* **IRR (Interrupt Request Register):** Stores incoming interrupt requests.
* **IMR (Interrupt Mask Register):** Stores bits to mask (disable) specific interrupts.
* **ISR (In-Service Register):** Tracks interrupts currently being processed.
* **Priority Resolver:** Determines which pending interrupt is highest priority.

**Interrupt Sequence:**
1.  Device asserts IRQ line. 8259 checks mask (IMR) and priority.
2.  8259 sends **INT** signal to CPU.
3.  CPU responds with **$$\overline{INTA}$$** (Interrupt Acknowledge) pulse.
4.  8259 sets the corresponding bit in ISR.
5.  CPU sends second **$$\overline{INTA}$$**.
6.  8259 places the **Interrupt Vector Number** on the data bus.
7.  CPU reads vector and jumps to the Interrupt Service Routine.

**Cascading:**
To support more than 8 interrupts (up to 64), one **Master** 8259 controls the CPU, and **Slave** 8259s connect to the Master's IR lines (IR0-IR7). The Master uses the **CAS0-CAS2** lines to address the specific Slave during the INTA sequence so the Slave can release the vector.

---

### 5. Explain BSR Mode of the programmable peripheral interface (8255A) with necessary diagrams. (5)

**BSR (Bit Set/Reset) Mode:**
The BSR mode is used to set or reset individual bits of **Port C** only. It does not affect Ports A or B. This is useful for control applications where single-bit manipulation (like toggling an LED or a strobe line) is needed.

**Control Word Format (D7 = 0):**
To enter BSR mode, the control word written to the Control Register must have the Most Significant Bit (**D7**) set to **0**.

* **D7:** 0 (Active BSR Mode).
* **D6, D5, D4:** Don't care (usually 0).
* **D3, D2, D1:** **Bit Select**. These 3 bits determine which bit of Port C (PC0-PC7) to modify.
    * 000 = PC0 ... 111 = PC7.
* **D0:** **Set/Reset**.
    * 1 = Set bit to 1.
    * 0 = Reset bit to 0.

<div align="center">
  <img src="[https://via.placeholder.com/600x200?text=8255+BSR+Mode+Control+Word](https://via.placeholder.com/600x200?text=8255+BSR+Mode+Control+Word)" alt="8255 BSR Control Word">
  <br>
  <em>Figure: 8255 BSR Mode Control Word Format (D7=0)</em>
</div>
