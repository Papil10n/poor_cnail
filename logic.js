let snail = function(array) {
   if (array[0][0] === 0) {return []}
   else if (array.length === 1) {return [1]}
   else {
      let mainArray = [];

      let lastVerticalArr = [];
      let lastHorizontalArr = [];

      let firstVerticalArr = [];
      let secondHorizontalArr = [];
      let preLastVerticalArr = [];
      let preLastHorizontalArr = [];
      let secondVerticalArr = [];
      let thirdHorizontalArr = [];
      let foursVerticalArr = [];
      let foursHorizontalArr = [];

      // 1
      for (let item of array[0]) {
         mainArray.push(item);
      }

      // 2
      for (let item of array) {
         lastVerticalArr.push(item[item.length - 1]);
      }
      mainArray.push(...lastVerticalArr.splice(1, lastVerticalArr.length));

      // 3
      for (let item of array[array.length - 1]) {
         lastHorizontalArr.push(item);
      }
      lastHorizontalArr = lastHorizontalArr.reverse().slice(1, lastHorizontalArr.length);
      mainArray.push(...lastHorizontalArr);

      // 4
      for (let item of array) {
         firstVerticalArr.push(item[0]);
      }
      mainArray.push(...firstVerticalArr.reverse().slice(1, firstVerticalArr.length - 1));

      //5
      for (let item of array[1]) {
         secondHorizontalArr.push(item);
      } 
      mainArray.push(...secondHorizontalArr.slice(1, secondHorizontalArr.length - 1));


      if (array.length > 3) {
         // 6 
         for (let item of array)  {
            preLastVerticalArr.push(item[item.length - 2]);
         }
         mainArray.push(...preLastVerticalArr.slice(2, preLastVerticalArr.length - 1));

         // 7
         for (let item of array[array.length - 2]) {
            preLastHorizontalArr.push(item);
         }
         mainArray.push(...preLastHorizontalArr.reverse().slice(2, preLastHorizontalArr.length - 1));

         if (array.length > 4) {
            // 8
            for (let item of array) {
               secondVerticalArr.push(item[1])
            }
            mainArray.push(...secondVerticalArr.reverse().slice(2, secondVerticalArr.length - 2))

            // 9
            for (let item of array[2]) {
               thirdHorizontalArr.push(item)
            }
            mainArray.push(...thirdHorizontalArr.slice(2, thirdHorizontalArr.length - 2))

               
            if (array.length > 5) {
               // 10
               for (let item of array) {
                  foursVerticalArr.push(item[3])
               }
               mainArray.push(...foursVerticalArr.slice(3, foursVerticalArr.length - 2))

               // 11
               for (let item of array[3]) {
                  foursHorizontalArr.push(item)
               }
               mainArray.push(...foursHorizontalArr.reverse().slice(3, foursHorizontalArr.length - 2))

               return mainArray


            } else {
               return mainArray
            }

         } else {
            return mainArray
         }

      } else {
         return mainArray
      }
   }
 }

 
//  console.log(snail([[0]]))
//  console.log(snail([[1]]))
 console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
 console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]))
 console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]))

