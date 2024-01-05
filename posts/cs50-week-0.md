---
title: "CS50: Week 0 notes"
subtitle: "Harvard's Introduction to Computer science week 0 notes."
date: "2024-01-04"
color: '#7dd3fc'
---

## Source code

- Code that humans write.

## Machine code

- Computers only understand instructions in Binary, machine code.
```
Source code -> COMPILER -> Machine code
```
## Quality code

- Correctness
- Design
- Style

## Terminal: Command Line interface

code program.c (create new file)
make program (compile)
./program 
\\n creates a new line

### Libraries like stdio.h and cs50.h

Libraries is like a outside code that you can import.

### = Means Assignment, not Equality

<mark style="background: #ADCCFFA6;">string</mark> answer = <mark style="background: #BBFABBA6;">get_string</mark>("What's your name? ");

### %s is a placeholder in C

### To use %, you need to use two

[[## Data Types]] - Primitives

- bool
- char
- double
- float 
- int 
- long 
- string
 
## [[Conditionals]]

```c
if (x < y)
{
	printf("x is less than y\n");
}
```
## [[Variables]]

Variables store the value for you. You need to set the data type manually.

Here is how you can simplify:
```c 
int counter = 0;
counter = counter + 1; -> counter += 1; -> counter++; or counter--;
```
## [[Loops]]

- ### [[While Loop]]
A while loop keeps doing an action until the conditions aren't met anymore.

- ### [[For Loop]]
For implies "here comes a loop"

- ### [[Nested Loops]]

- ### [[Do While Loop]]
```c
do
{
	n = get_int("Size: ");
}
while (n < 1);
```

## Declaring constant 
Put "const" before the assignment, so the value can't change later.
```c
const int n = 3;
```
## Pseudocode

Use // to write comments and make a Pseudocode.

## Abstraction: Create functions
Void: It means that the function does not take any inputs.
```c

```