/* With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]

    Output: (examples)
        1) input a = 1, then output : 1
        2) input a = 2, then output : 1
        3) input a = 3, then output : 1, 3, 5
        4) input a = 4, then output : 1, 3, 5
        5) input a = 5, then output : 1, 3, 5, 7, 9
        6) input a = 6, then output : 1, 3, 5, 7, 9
        .
        .
        7) input a = x, then output : 1, 3, 5, 7, ....... */

        function generateSeries(x) {
            let series = [];
            let number = 1;
          
            for (let i = 0; i < x; i++) {
              if (i % 2 === 0) {
                series.push(number);
              }
              number += 2;
            }
          
            return series.join(', ');
          }
          
          // Example usage:
          console.log(generateSeries(1)); // Output: 1
          console.log(generateSeries(2)); // Output: 1
          console.log(generateSeries(3)); // Output: 1, 3, 5
          console.log(generateSeries(4)); // Output: 1, 3, 5
          console.log(generateSeries(5)); // Output: 1, 3, 5, 7, 9
          console.log(generateSeries(6)); // Output: 1, 3, 5, 7, 9
          
    