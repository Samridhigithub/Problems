/*  With a single integer as the input, generate the following 
until a = x [series of numbers as shown in below examples]

    Output: (examples)
        1) input a = 1, then output : 1
        2) input a = 2, then output : 1, 3
        3) input a = 3, then output : 1, 3, 5
        4) input a = 4, then output : 1, 3, 5, 7
        .
        .
        5) input a = x, then output : 1, 3, 5, 7, ....... */

        function generateSeries(x) {
            let series = [];
            let number = 1;
          
            for (let i = 0; i < x; i++) {
              series.push(number);
              number += 2;
            }
          
            return series.join(', ');
          }
          
        // Example usage:
        console.log(generateSeries(1)); // Output: 1
        console.log(generateSeries(2)); // Output: 1, 3
        console.log(generateSeries(3)); // Output: 1, 3, 5
        console.log(generateSeries(4)); // Output: 1, 3, 5, 7
          