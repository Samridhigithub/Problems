/* Get the total count of number listed in the dictionary which is multiple of [1,2,3,4,5,6,7,8,9]
    (examples)
    input: [1,2,8,9,12,46,76,82,15,20,30]
    Output:
        {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1} */

        function countMultiples(numbers) {
            const multiples = {
              1: 0,
              2: 0,
              3: 0,
              4: 0,
              5: 0,
              6: 0,
              7: 0,
              8: 0,
              9: 0,
            };
          
            for (let number of numbers) {
              for (let i = 1; i <= 9; i++) {
                if (number % i === 0) {
                  multiples[i]++;
                }
              }
            }
          
            return multiples;
          }
          
          // Example usage:
          const numbers = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
          console.log(countMultiples(numbers));
          // Output: {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1}
          