# js-for-react-native-11259701
**11259701**

With task 1(first commit):
This code defines a function processArray that takes an array arr of numbers as input. It iterates through each element (num) in the array using a for-of loop. Inside the loop:
1.	It checks if the number is even using the modulo operator (%). If the remainder is zero, the number is even.
2.	If even, it squares the number using multiplication (*) and pushes it to the newArray.
3.	If odd, it triples the number using multiplication by 3 and pushes it to the newArray.
4.	Finally, the function returns the newArray containing the modified elements.

With task 2(second commit):
- This function processes each number in the input array.
    - If the number is even, it squares the number.
    - If the number is odd, it cubes the number.
    - This function takes two arrays: strings and numbers.
    - It checks if both arrays have the same length and throws an error if they don't.
    - It maps over the strings array, modifying each string based on the corresponding number in the numbers array.
    - If the corresponding number is even, it capitalizes the string.
    - If the corresponding number is odd, it converts the string to lowercase.
This code snippet should be placed in arrayManipulation.js. It defines the formatArrayStrings function and demonstrates its usage with example arrays.

With task 3(third commit):
1. It checks if both input arrays (names and modifiedNames) have the same length. If not, it throws an error to ensure data consistency.
2. It utilizes the map function to iterate through the names array.
3. Within the map function, for each name and its corresponding index, a new object is created.
4. The object includes three properties:
-	id: Set to index + 1 to create unique auto-incremented IDs starting from 1.
-	originalName: The original name from the names array.
-	modifiedName: The corresponding modified name from the modifiedNames array at the same index.
-	Return Array: The map function returns a new array containing these user profile objects.
The example usage demonstrates how to call the function with sample data and log the resulting userProfiles array.
Overall, the code effectively creates user profiles with appropriate data based on the provided names and their formatted versions.

