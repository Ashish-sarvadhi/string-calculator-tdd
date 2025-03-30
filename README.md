# String Calculator - TDD Kata

This project implements a **String Calculator** using **Test-Driven Development (TDD)**.

## 🚀 Getting Started

### 1️⃣ Install Dependencies
```sh
npm install
```

### 2️⃣ Run Tests
```sh
npm test
```

## 📁 Project Structure
```
string-calculator-tdd/
│── src/                # Source code
│   ├── stringCalculator.js  # Main calculator logic
│── tests/              # Test files
│   ├── stringCalculator.test.js  # Jest tests
│── package.json        # Project dependencies and scripts
│── README.md           # Documentation
```

## ✅ TDD Steps Implemented
1. **Handle empty string** → `""` returns `0`
2. **Handle single number** → `"1"` returns `1`
3. **Handle two numbers** → `"1,2"` returns `3`
4. **Support multiple numbers** → `"1,2,3,4"` returns `10`
5. **Handle new lines as delimiters** → `"1\n2,3"` returns `6`
6. **Support custom delimiters** → `"//;\n1;2"` returns `3`
7. **Throw error for negative numbers** → `"1,-2"` → `"negative numbers not allowed -2"`

## 🛠️ How It Works
- The `add(numbers)` function processes a string of numbers.
- Uses TDD principles: **Write a test → Write code → Refactor**.
- Uses **Jest** for unit testing.

## 📌 Notes
- Frequent Git commits show step-by-step TDD progression.
- Follow best practices from [Incubyte's TDD resources](https://incubyte.co/inspiration).

