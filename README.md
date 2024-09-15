
---

# unique-id-key

A TypeScript module for generating unique random strings. The module provides methods to create numeric, alphabetic, or alphanumeric strings, and it can generate random API keys separated by a special character after every 4th character.

## Installation

Install the package using npm:

```bash
npm install unique-id-key
```

Then, import the module in your project:

```typescript
import { RandomString, RandomNum, AlphaNum, APIKEY, UUID } from 'unique-id-key';
```

## Methods

### `RandomString(length: number, caseType?: "uppercase" | "lowercase")`
Generates a random alphabetic string. You can specify the length of the string and optionally define if it should be uppercase or lowercase. If `caseType` is not provided, the result will include both uppercase and lowercase characters.

#### Parameters:
- `length`: The length of the desired string (number).
- `caseType` (optional): Specify `"uppercase"` for all uppercase letters or `"lowercase"` for all lowercase letters.

#### Example:

```typescript
const any_randomString = RandomString(10);
console.log(any_randomString);
// Example output: "erRogWyRtr"

const uppercase_randomString = RandomString(8, "uppercase");
console.log(uppercase_randomString);
// Example output: "MNTVBSQW"

const lowercase_randomString = RandomString(11, "lowercase");
console.log(lowercase_randomString);
// Example output: "tqwicductda"
```

### `RandomNum(length: number)`
Generates a random numeric string with the specified length.

#### Parameters:
- `length`: The length of the numeric string (number).

#### Example:

```typescript
const random_numeric = RandomNum(10);
console.log(random_numeric);
// Example output: "4836593648"
```

### `RandomAlphaNum(length: number)`
Generates a random alphanumeric string with both letters (uppercase and lowercase) and numbers.

#### Parameters:
- `length`: The length of the alphanumeric string (number).

#### Example:

```typescript
const random_alphanum = RandomAlphaNum(10);
console.log(random_alphanum);
// Example output: "gp2WfI7ihd"
```

### `APIKEY(length: number, separator: string)`
Generates a random API key with a specified length, and inserts a separator after every 4th character.

#### Parameters:
- `length`: The total length of the API key (number).
- `separator`: The character to insert after every 4th character (string).

#### Example:

```typescript
const api_key_1 = APIKEY(16, "-");
console.log(api_key_1);
// Example output: "5TZS-JLG3-325O-1S5B"

const api_key_2 = APIKEY(12, ".");
console.log(api_key_2);
// Example output: "5hQw.tQ1l.yqgH"
```

### `UUID()`
Generates a random UUID (Universally Unique Identifier).

#### Example:

```typescript
const uuid = UUID();
console.log(uuid);
// Example output: "9f5b5672-9a34-4a6b-a52d-dcdfe1d33cb4"
```

---
