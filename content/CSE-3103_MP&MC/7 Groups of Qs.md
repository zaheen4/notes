---
publish: true
---

# Group-1: Introduction & Evolution

### 1. Main features of different generations of computer, 4-bit to 64-bit examples. What is core? Explain core i3, i5. Differences.

**Generations of Computers:**
* **1st Gen (1940-1956):** Vacuum Tubes. Huge, expensive, high heat. Machine language only.
* **2nd Gen (1956-1963):** Transistors. Smaller, faster, cheaper. Assembly language, COBOL, FORTRAN.
* **3rd Gen (1964-1971):** Integrated Circuits (ICs). Miniaturization, keyboards, monitors, OS.
* **4th Gen (1971-Present):** Microprocessors. VLSI. Personal Computers, Internet, GUI.
* **5th Gen (Present-Future):** AI, ULSI, Parallel Processing, Quantum Computing.

**Bit-Size Evolution:**
* **4-bit:** Intel 4004. First microprocessor. Calculator use.
* **8-bit:** Intel 8008, 8085, Z80. 64KB memory addressing.
* **16-bit:** Intel 8086, 80286. 1MB - 16MB memory.
* **32-bit:** Intel 80386, Pentium. 4GB memory. Protected mode.
* **64-bit:** Intel Core 2 Duo, i3/i5/i7, AMD64. $$2^{64}$$ theoretical memory. Standard today.

**Core:** A "Core" is an independent processing unit within a CPU package that reads and executes instructions. A multi-core processor has multiple such units working in parallel.

**Core i3 vs i5:**
* **Core i3:** Entry-level. Typically Dual-core (older) or Quad-core (newer). Supports Hyper-threading (2 threads per core). No Turbo Boost usually. Good for office work/browsing.
* **Core i5:** Mainstream. Typically Quad-core or Hexa-core (6). Supports Turbo Boost (dynamic speed increase). May or may not have Hyper-threading depending on generation. Better for gaming/multitasking.

### 2. Differences between microprocessor and microcontroller. Compare between 8086 and 8085.

**Microprocessor vs. Microcontroller:**

| Feature          | Microprocessor                        | Microcontroller                               |
| :--------------- | :------------------------------------ | :-------------------------------------------- |
| **Architecture** | CPU only. RAM, ROM, I/O are external. | CPU + RAM + ROM + I/O + Timers on one chip.   |
| **Application**  | General purpose (PCs).                | Specific purpose (Washing machines, remotes). |
| **Cost/Power**   | High cost, high power.                | Low cost, battery operated.                   |
| **Example**      | Intel Core i7, 8086.                  | Intel 8051, Arduino (AVR).                    |

**8085 vs. 8086:**

| Feature         | Intel 8085    | Intel 8086                              |
| :-------------- | :------------ | :-------------------------------------- |
| **Data Bus**    | 8-bit         | 16-bit                                  |
| **Address Bus** | 16-bit        | 20-bit                                  |
| **Memory**      | 64 KB         | 1 MB                                    |
| **Pipelining**  | No            | Yes (Instruction Queue)                 |
| **Arithmetic**  | Integer only. | Integer + Multiply/Divide instructions. |

---

# Group-2: 8086 Processor

### 1. Simple internal architecture of 8086 processor (priority on the figure)

The 8086 is split into two asynchronous units:
1.  **Bus Interface Unit (BIU):** Handles physical reading/writing to memory/ports. Contains Segment Registers (CS, DS, SS, ES), Instruction Pointer (IP), and the **Instruction Queue** (6 bytes).
2.  **Execution Unit (EU):** Decodes and executes instructions. Contains General Registers (AX, BX, CX, DX), Index/Pointers (SP, BP, SI, DI), ALU, and Flag Register.

<div align="center">
  <img src="https://www.eeeguide.com/wp-content/uploads/2018/08/8086-Internal-Architecture.jpg" alt="8086 Internal Architecture Diagram">
  <br>
  <em>Figure: 8086 Block Diagram showing BIU and EU</em>
</div>

### 2. Pin diagram or signal diagram of 8086 processor

The 8086 is a 40-pin DIP chip.
* **AD0-AD15:** Multiplexed Address/Data bus.
* **A16-A19/S3-S6:** Multiplexed Address/Status lines.
* **BHE/S7:** Bus High Enable.
* **MN/MX:** Selects Minimum (single processor) or Maximum (multiprocessor) mode.
* **RD, WR, READY, RESET, CLK, INTR, NMI.**

<div align="center">
  <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221114154946/pindiagramof808611.png" alt="8086 Pin Diagram">
  <br>
  <em>Figure: 8086 Pinout</em>
</div>

### 3. Describe different register of 8086 processor. Flag registers and their functionalities.

**Registers (16-bit):**
* **General Purpose:** AX (Accumulator), BX (Base), CX (Count), DX (Data). Split into High/Low (AH, AL, etc.).
* **Segment:** CS (Code), DS (Data), SS (Stack), ES (Extra). Hold base addresses.
* **Pointers/Index:** SP (Stack Pointer), BP (Base Pointer), SI (Source Index), DI (Destination Index). Hold offsets.
* **IP:** Instruction Pointer (Offset for CS).

**Flag Register:**
* **Status Flags:**
    * **CF (Carry):** Unsigned overflow.
    * **PF (Parity):** Even number of 1s.
    * **AF (Auxiliary):** BCD math carry.
    * **ZF (Zero):** Result is 0.
    * **SF (Sign):** MSB is 1 (Negative).
    * **OF (Overflow):** Signed arithmetic overflow.
* **Control Flags:**
    * **TF (Trap):** Single stepping.
    * **IF (Interrupt):** Enable/Disable INTR.
    * **DF (Direction):** String auto-increment/decrement.

### 4. Difference between minimum and maximum mode. Control signal

* **Minimum Mode (MN/$$\overline{MX}$$ = 1):** The 8086 generates all control signals itself ($$\overline{RD}, \overline{WR}, M/\overline{IO}, ALE, \overline{INTA}$$). Used for simple, single-processor systems.
* **Maximum Mode (MN/$$\overline{MX}$$ = 0):** The 8086 passes status signals ($$\overline{S0}, \overline{S1}, \overline{S2}$$) to an external **8288 Bus Controller**, which generates the control bus. Used for complex, multi-processor systems (with 8087 math coprocessor).

---

# Group-3: Instruction Set

### 1. Classification of instruction set (ex. arithmetic, logic) with examples.

1.  **Data Transfer:** `MOV`, `PUSH`, `POP`, `XCHG`.
2.  **Arithmetic:** `ADD`, `SUB`, `MUL`, `DIV`, `INC`, `DEC`.
3.  **Logical:** `AND`, `OR`, `XOR`, `NOT`, `TEST`.
4.  **Shift/Rotate:** `SHL`, `ROR`, `RCL`.
5.  **String:** `MOVS`, `CMPS`, `SCAS`.
6.  **Program Control (Branching):** `JMP`, `CALL`, `RET`, `JZ`, `LOOP`.
7.  **Processor Control:** `CLC` (Clear Carry), `HLT` (Halt).

### 2. Program on instruction set. & 5. Write a program on assembly language to find out the sum of all even or all odd numbers from 1 to 10.

**Code: Sum of Even Numbers (2 + 4 + 6 + 8 + 10)**

```assembly
DATA SEGMENT
    SUM DW 0      ; Variable to store result
DATA ENDS

CODE SEGMENT
    ASSUME CS:CODE, DS:DATA
START:
    MOV AX, DATA  ; Initialize Data Segment
    MOV DS, AX
    
    MOV CX, 5     ; Counter: 5 even numbers in 1-10 (2,4,6,8,10)
    MOV AX, 0     ; Accumulator for sum
    MOV BX, 2     ; First even number

NEXT:
    ADD AX, BX    ; Add current even number to Sum
    ADD BX, 2     ; Move to next even number
    LOOP NEXT     ; Decrement CX, jump to NEXT if CX != 0
    
    MOV SUM, AX   ; Store result
    MOV AH, 4CH   ; Exit to DOS
    INT 21H
CODE ENDS
END START
```

### 3. Different type of addressing mode with example and calculate effective address calculation(math).

1.  **Immediate:** `MOV AX, 1234H`.
2.  **Register:** `MOV AX, BX`.
3.  **Direct:** `MOV AX, [1234H]`. EA = 1234H.
4.  **Register Indirect:** `MOV AX, [BX]`. EA = Content of BX.
5.  **Based:** `MOV AX, [BX + 10H]`. EA = BX + 10H.
6.  **Indexed:** `MOV AX, [SI + 10H]`. EA = SI + 10H.
7.  **Based Indexed:** `MOV AX, [BX + SI]`. EA = BX + SI.

**Math Example:**
If $$DS = 2000H, BX = 1000H, SI = 0010H, Displacement = 05H$$.
Instruction: `MOV AX, [BX][SI] + 05H`.
**Effective Address (Offset)** = $$BX + SI + 05H = 1000 + 0010 + 0005 = 1015H$$.
**Physical Address** = $$(DS \times 10H) + EA = 20000H + 1015H = 21015H$$.

### 4. suppose ax and bx are numbers. The value of flag register while computing SUB, AL, BL / SUM AL, BL.

Let's assume: $$AL = 05H$$, $$BL = 02H$$.

**Operation: SUB AL, BL (5 - 2 = 3)**
* Result = 03H.
* **ZF (Zero):** 0 (Result not zero).
* **CF (Carry):** 0 (No borrow).
* **SF (Sign):** 0 (Positive).

Let's assume: $$AL = 01H$$, $$BL = 02H$$.

**Operation: SUB AL, BL (1 - 2 = -1 or FFH)**
* Result = FFH.
* **CF:** 1 (Borrow needed).
* **SF:** 1 (Negative result).
* **ZF:** 0.

---

# Group-4: Memory interface & operation

### 1 & 2. Mention the steps of memory read/write operation with timing diagram.

**Instruction:** `MOV AX, [BX]` (Memory Read).
1.  **T1:** CPU outputs Address on AD bus. Asserts ALE.
2.  **T2:** CPU floats AD bus (to receive data). Asserts $$\overline{RD}$$ (Read).
3.  **T3:** Wait state (if memory is slow). Memory puts data on bus.
4.  **T4:** CPU reads data. $$\overline{RD}$$ goes high.

**Instruction:** `MOV [BX], AX` (Memory Write).
1.  **T1:** Address output. ALE pulse.
2.  **T2:** CPU outputs Data on AD bus. Asserts $$\overline{WR}$$ (Write).
3.  **T3:** Wait state. Data stabilizes.
4.  **T4:** Memory latches data. $$\overline{WR}$$ goes high.

<!-- <div align="center">
  <img src="REPLACE_WITH_LINK" alt="Memory Read/Write Timing Diagram">
  <br>
  <em>Figure: Bus Timing Diagram</em>
</div> -->

### 3. What is memory interface. Interface a 1KB memory with processor. [at 8000X location]

Memory interfacing involves connecting the CPU address bus to memory address pins (decoding) and data bus to data pins, along with control signals (RD/WR).

**Design for 1KB at 80000H:**
* **Size:** 1 KB = 1024 Bytes = $$2^{10}$$. Needs address lines **A0-A9**.
* **Processor:** 8086 has A0-A19.
* **Address Range:** 80000H to 803FFH.
* **Decoding Logic:**
    * Lines A19-A10 must select the chip.
    * **80000H Binary:** `1000 0000 0000 0000 0000`
    * Pattern: A19=1, A18-A10=0.
    * Use a NAND/AND gate logic connected to Chip Select ($$\overline{CS}$$) that activates only when this pattern appears on the high address lines.

### 4. Even Bank, Odd bank of memory. (Figure)

To allow 16-bit data transfer in one cycle, memory is split into two 8-bit banks.
* **Even Bank (Low):** Connected to D0-D7. Enabled by **A0 = 0**. Stores data at even addresses (0, 2, 4).
* **Odd Bank (High):** Connected to D8-D15. Enabled by **$$\overline{BHE}$$ = 0**. Stores data at odd addresses (1, 3, 5).

<div align="center">
  <img src="https://care4you.in/wp-content/uploads/2022/03/Figure-1-Odd-Even-Banks.png" alt="Even and Odd Memory Bank Interfacing">
  <br>
  <em>Figure: Even/Odd Banking</em>
</div>

---

# Group-5: I/O operation

### 1. How to connect I/O devices with processor.

Two methods:
1.  **Memory Mapped I/O:** I/O devices are treated as memory locations (using MOV instructions). Uses full address bus.
2.  **I/O Mapped I/O (Isolated):** Uses separate instructions (`IN`, `OUT`) and separate control signals ($$\overline{IOR}, \overline{IOW}$$). Uses only 8 or 16 bits of address.

### 2. Define interrupt vector table, service routine, handle mechanism

* **Interrupt Vector Table (IVT):** A table located at `00000H` in memory containing 256 entries. Each entry (4 bytes) stores the address (CS:IP) of an Interrupt Service Routine (ISR).
* **Service Routine (ISR):** A subroutine code specifically written to handle a specific interrupt event (e.g., keyboard press).
* **Handling Mechanism:**
    1.  Device asserts Interrupt.
    2.  CPU finishes current instruction.
    3.  CPU pushes Flags, CS, IP to Stack.
    4.  CPU reads Vector Number. Looks up IVT.
    5.  Jumps to ISR Address.
    6.  ISR executes `IRET` to return.

### 3. DMA operation. Guided memory access. Methods of DMA operation.

**Direct Memory Access (DMA):** Allows peripherals to transfer data directly to/from memory without CPU intervention, increasing speed.
**Steps:**
1.  Device requests DMA (DRQ).
2.  DMA Controller requests Bus (HOLD).
3.  CPU grants Bus (HLDA).
4.  DMA transfers data.
5.  DMA releases Bus.

**Methods:**
* **Burst Mode:** Entire block transferred at once.
* **Cycle Stealing:** One byte transferred per cycle (CPU runs in between).

### 4. PPI (Programmable Peripheral Interface) block diagram

The **Intel 8255** PPI expands I/O ports.
* **Data Bus Buffer:** Connects to CPU D0-D7.
* **Read/Write Control:** Connects to RD/WR.
* **Group A / Group B Controls:** Manage ports.
* **Ports:**
    * **Port A (8-bit):** Input/Output.
    * **Port B (8-bit):** Input/Output.
    * **Port C (8-bit):** Split into Upper/Lower, Input/Output/Handshake signals.

### 5. Interrupt controller. How multiple interrupt is managed

The **Intel 8259 PIC** (Programmable Interrupt Controller) manages multiple interrupts.
* It accepts up to 8 IRQ lines (IR0-IR7).
* It has a **Priority Resolver** to decide which interrupt to service first if multiple occur.
* It masks specific interrupts via IMR.
* It sends a single INT signal to the CPU and provides the vector number.

---

# Group-6: Microcontroller (8051)

### 1. Block diagram of 8051 microcontroller and their function

Contains:
* **CPU:** 8-bit arithmetic.
* **ROM:** 4KB on-chip code.
* **RAM:** 128 bytes on-chip data.
* **I/O:** 4 Ports (P0-P3).
* **Timers:** T0, T1 (16-bit).
* **Serial:** TXD/RXD.
* **Interrupts:** External and Internal.

<div align="center">
  <img src="https://aninditadhikary.files.wordpress.com/2011/01/8051blockdiagram.png" alt="8051 Block Diagram">
  <br>
  <em>Figure: 8051 Architecture</em>
</div>

### 2. Describe and Differences among different registers of 8051.

* **A (Accumulator):** Math operations.
* **B Register:** Multiplication/Division.
* **DPTR (Data Pointer):** 16-bit pointer for external memory.
* **PC (Program Counter):** 16-bit address of next instruction.
* **SP (Stack Pointer):** Points to stack in RAM.
* **PSW (Program Status Word):** Flag register (Carry, Parity, Overflow, Bank Select).

### 3. Instruction set of 8051

* **Data Transfer:** `MOV A, R0`, `MOVX` (External), `PUSH`.
* **Arithmetic:** `ADD A, R1`, `SUBB`, `MUL AB`, `DIV AB`.
* **Logical:** `ANL`, `ORL`, `XRL`, `CPL` (Complement).
* **Boolean (Bit):** `SETB P1.0`, `CLR`.
* **Branching:** `SJMP`, `LJMP`, `JZ`, `CJNE` (Compare Jump if Not Equal).

### 4. How to send data from one port to another to display LED.

To read from Port 1 and send to Port 2 (LEDs):
```assembly
MOV A, P1    ; Read Input Port 1
MOV P2, A    ; Write to Output Port 2
```

### 5. Program of 8051 for LED blinking

```assembly
ORG 0000H
LOOP:
    SETB P1.0    ; Turn LED ON (Pin High)
    ACALL DELAY  ; Wait
    CLR P1.0     ; Turn LED OFF (Pin Low)
    ACALL DELAY  ; Wait
    SJMP LOOP    ; Repeat

DELAY:           ; Simple loop delay
    MOV R0, #255
    DJNZ R0, $
    RET
END
```

### 6. Program of 8051 to count from 1 to 10.

```assembly
ORG 0000H
MOV A, #00H      ; Start count at 0
MOV R0, #10      ; Count up to 10

NEXT:
    INC A        ; Increment Accumulator
    MOV P1, A    ; Display count on Port 1
    ACALL DELAY
    DJNZ R0, NEXT ; Decrement R0, Repeat if not 0
    
HERE: SJMP HERE   ; Stop
END
```

---

# Group-7: PLC

### 1. What is PLC? Internal architecture and block diagram of PLC and their functionality

**PLC (Programmable Logic Controller):** A ruggedized computer used for industrial automation (assembly lines, robots).
**Architecture:**
* **CPU:** Processes program logic.
* **Power Supply:** Converts AC to DC.
* **Memory:** Stores ladder logic.
* **Input Module:** Connects sensors/switches (Isolates high voltage).
* **Output Module:** Connects motors/lights (Relays/Triacs).

<div align="center">
  <img src="https://media.geeksforgeeks.org/wp-content/uploads/20231220033019/Structure-of-PLC.png" alt="PLC Block Diagram">
  <br>
  <em>Figure: PLC Structure</em>
</div>

### 2. Functionality of different component of PLC basis on input and output.

* **Inputs (Sensors):** Detect physical conditions (Limit switch, Push button, Temp sensor). Convert to digital signal for CPU.
* **CPU:** Reads inputs, executes "Ladder Logic" (Rung by Rung), updates internal memory.
* **Outputs (Actuators):** Take digital signal from CPU, convert to power signal to drive loads (Solenoid valve, Motor starter, Lamp).

### 3. Design a ladder program to control a traffic sign, washing machine functionality, filling up water tank.

**Example: Filling up Water Tank**
* **Inputs:** Start Button (I1), Low Level Sensor (I2), High Level Sensor (I3).
* **Output:** Pump Motor (Q1).

**Ladder Logic Logic:**
1.  If Start (I1) is pressed OR Pump is already ON (Latching).
2.  AND Water Level is NOT High (I3 / NC contact).
3.  Then Turn ON Pump (Q1).

```text
   I1 (Start)      I3 (High Level - NC)      Q1 (Pump)
---| |-------------|/|-----------------------( )---
   |
   Q1 (Latch)
---| |---
```

### 4. Different types of sensors ex. light, water.

1.  **Proximity Sensors:** Inductive (Metal), Capacitive (Any material).
2.  **Photoelectric Sensors:** Detect light beam interruption (Conveyor belts).
3.  **Float Switch:** Detects water level.
4.  **Thermocouple/RTD:** Temperature.
5.  **Limit Switch:** Mechanical contact detection.

### 5. Function of Input and output module of PLC.

* **Input Module:**
    * Bridge between real-world high voltage (e.g., 24V DC, 120V AC) sensors and low voltage (5V) CPU.
    * Provides **Opto-isolation** to protect the CPU from spikes.
    * Filters noise (debouncing).
* **Output Module:**
    * Bridge between CPU and high power actuators.
    * Amplifies signal using Relays, Transistors, or Triacs.
    * Provides isolation and fuse protection.
