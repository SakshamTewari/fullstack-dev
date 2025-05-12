/*

1.  *****
    *****
    *****
    *****
    *****
*/

function pattern1(r, c) {
  for (let i = 0; i < r; i++) {
    let row = '';
    for (let j = 0; j < c; j++) {
      row += '*';
    }
    console.log(row);
  }
}

pattern1(5, 5);

/*

2.  *
    **
    ***
    ****
    *****
*/

function pattern2(r) {
  for (let i = 0; i < r; i++) {
    let row = '';
    for (let j = 0; j <= i; j++) {
      row += '*';
    }
    console.log(row);
  }
}

pattern2(5);

/*

3.  *****
    ****
    ***
    **
    *
*/

function pattern3(r) {
  for (let i = r; i > 0; i--) {
    let row = '';
    for (let j = i; j > 0; j--) {
      row += '*';
    }
    console.log(row);
  }
}

pattern3(5);

/*

4.  1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5
*/

function pattern4(r) {
  for (let i = 1; i <= r; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += j + ' ';
    }
    console.log(row.trim());
  }
}

pattern4(5);

/*

5.  *
    **
    ***
    ****
    *****
    ****
    ***
    **
    *
*/

function pattern5(r) {
  for (let i = 1; i <= (r + 1) / 2; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += '*';
    }
    console.log(row);
  }

  for (let i = (r + 1) / 2 - 1; i >= 1; i--) {
    let row = '';
    for (let j = i; j >= 1; j--) {
      row += '*';
    }
    console.log(row);
  }
}

pattern5(13);

/*

6.       *
        **
       ***
      ****
     *****
*/

function pattern6(r) {
  for (let i = r; i >= 1; i--) {
    let row = '';
    //  Add space first
    for (let j = 1; j < i; j++) {
      row += ' ';
    }
    //  Add stars later
    for (let k = 1; k <= r - i + 1; k++) {
      row += '*';
    }
    console.log(row);
  }
}

pattern6(5);

/*

7.   *****
      ****
       ***
        **
         *
*/

function pattern7(r) {
  for (let i = 1; i <= r; i++) {
    let row = '';

    for (let j = 1; j < i; j++) {
      row += ' ';
    }

    for (let k = 1; k <= r - i + 1; k++) {
      row += '*';
    }
    console.log(row);
  }
}

pattern7(5);

/*

8.      *
       ***
      *****
     *******
    *********
*/

function pattern8(r) {
  for (let i = r; i >= 1; i--) {
    let row = '';

    for (let j = 1; j < i; j++) {
      row += ' ';
    }

    for (let k = 1; k <= r - i + 1; k++) {
      row += '*';
    }

    for (let l = 1; l <= r - i; l++) {
      row += '*';
    }
    console.log(row);
  }
}

pattern8(5);

/*

9.  *********
     *******
      *****
       ***
        *


10.      *
        * *
       * * *
      * * * *
     * * * * *


11.  * * * * *
      * * * *
       * * *
        * *
         *


12.  * * * * *
      * * * *
       * * *
        * *
         *
         *
        * *
       * * *
      * * * *
     * * * * *


13.      *
        * *
       *   *
      *     *
     *********


14.  *********
      *     *
       *   *
        * *
         *


15.      *
        * *
       *   *
      *     *
     *       *
      *     *
       *   *
        * *
         *


16.           1
            1   1
          1   2   1
        1   3   3   1
      1   4   6   4   1


17.      1
        212
       32123
      4321234
       32123
        212
         1


18.   **********
      ****  ****
      ***    ***
      **      **
      *        *
      *        *
      **      **
      ***    ***
      ****  ****
      **********


19.    *        *
       **      **
       ***    ***
       ****  ****
       **********
       ****  ****
       ***    ***
       **      **
       *        *


20.    ****
       *  *
       *  *
       *  *
       ****

21.    1
       2  3
       4  5  6
       7  8  9  10
       11 12 13 14 15

22.    1
       0 1
       1 0 1
       0 1 0 1
       1 0 1 0 1

23.        *      *
         *   *  *   *
       *      *      *

24.    *        *
       **      **
       * *    * *
       *  *  *  *
       *   **   *
       *   **   *
       *  *  *  *
       * *    * *
       **      **
       *        *

25.       *****
         *   *
        *   *
       *   *
      *****

26.   1 1 1 1 1 1
      2 2 2 2 2
      3 3 3 3
      4 4 4
      5 5
      6

27.   1 2 3 4  17 18 19 20
        5 6 7  14 15 16
          8 9  12 13
            10 11

28.      *
        * *
       * * *
      * * * *
     * * * * *
      * * * *
       * * *
        * *
         *

29.      
       *        *
       **      **
       ***    ***
       ****  ****
       **********
       ****  ****
       ***    ***
       **      **
       *        *

30.         1
          2 1 2
        3 2 1 2 3
      4 3 2 1 2 3 4
    5 4 3 2 1 2 3 4 5


31.      4 4 4 4 4 4 4  
         4 3 3 3 3 3 4   
         4 3 2 2 2 3 4   
         4 3 2 1 2 3 4   
         4 3 2 2 2 3 4   
         4 3 3 3 3 3 4   
         4 4 4 4 4 4 4   

32.    E
       D E
       C D E
       B C D E
       A B C D E

33.    a
       B c
       D e F
       g H i J
       k L m N o
     
34.    E D C B A
       D C B A
       C B A
       B A
       A
       
35.    1      1
       12    21
       123  321
       12344321

*/
