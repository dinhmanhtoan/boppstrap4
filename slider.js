

      


var slider = document.querySelectorAll(".slider img");
var left = document.querySelector(".left");
var right = document.querySelector(".right");
// var count = 2;

// var leg = 2;
// cach thu nhat;
// function cach1() {
//     right.addEventListener("click",function () {
//         for (let index = 0; index < slider.length; index++) {
//             const element = slider[index];
//             element.classList.remove("active");
//         }
//         if (leg-count<2) {
//             slider[leg-count+1].classList.add("active");
//         }
//         if (leg-count>=2) {
//             count=2;
//             slider[leg-count].classList.add("active");
//             count++;
//         }
//         count--;
    
//     });
//     left.addEventListener("click",function () {
//         for (let index = 0; index < slider.length; index++) {
//             const element = slider[index];
//             element.classList.remove("active");
//         }
//         if (leg-count>0) {
//             slider[leg-count-1].classList.add("active");
       
//         }
//         if (leg-count<=0) {
//             count=0;
//             slider[leg-count].classList.add("active");
//             count--;
//         }
//         count++;
//     });
// }
// cach1();


// var count2 = 0;
// var islider = 0;
// function cach2() {
//     right.addEventListener("click",function () {
//         for (let index = 0; index < slider.length; index++) {
//             const element = slider[index];
//             element.classList.remove("active");
//         }
//        if (islider<=1) {
//         let next = slider[islider].nextElementSibling;
//             next.classList.add("active")
//        }
//         if (islider>1) {
//             islider=0;
//             slider[islider].classList.add("active");
//             islider--;
//         } 
//             islider++;    
//     })
//     left.addEventListener("click",function () {
//         for (let index = 0; index < slider.length; index++) {
//             const element = slider[index];
//             element.classList.remove("active");
//         }
//        if (islider>=1) {
//         let pev = slider[islider].previousElementSibling;
//             pev.classList.add("active")
//        }
//         if (islider<1) {
//             islider=2;
//             slider[islider].classList.add("active");
//             islider++;
//         } 
//             islider--;    
//     })
// }
// cach2()
// cach thu 2


// cach 3
//   Animation

// function cach3() {  
//     var count3 = 1 ;
//     function abc() {
//         for (let index = 0; index < slider.length; index++) {
//             const element = slider[index];
//             element.classList.remove("active");
            
//         }
//         count3++;
//         if (count3 > slider.length) {count3 = 1}
//         slider[count3-1].classList.add("active");
//     }
//     setInterval(abc,1000);
 
//     }
// cach3();


//cach4
     // left.onclick =  function () {
    //     bbb(-1);
    // } 
    // right.onclick = function () {
    //     bbb(1);
    // } 
 
    left.addEventListener("click",function () {
        bbb(-1);
    }
    );
    right.addEventListener("click",function () {
        bbb(1);
    });
    var count = 1; 
    aaa(count);
    function bbb(n) { 
  
        aaa(count += n);
    }

    function aaa(n) {
    
        if (n > slider.length) {count = 1}
        if (n < 1) {count = slider.length}
        for (let index = 0; index < slider.length; index++) {
            const element = slider[index];
            element.classList.remove("active");
        }
        slider[count-1].classList.add("active");
    }

