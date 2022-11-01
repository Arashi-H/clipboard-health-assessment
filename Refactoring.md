# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
### The original code contains unneccessary conditional statement. (Why I make this choice)
1. If the event parameter is undefined, there is no need to check candidate whether it is defined or not.
2. If the value of partitionKey of event is not defined, there's no need to check if type of candidate is string because digest function returns string.

### Less conditional statements makes it easier to read and understand. (Why it's more readable)
1. The current code is well-structured using less conditional statements.
2. Using ternary operator makes code more understandable.