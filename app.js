let counters = document.querySelectorAll(".counter"); // Select all content box classes
let time = 300; // Declare a variable for storeing time

// All content box number changing by forEach method and a setTimeout function
counters.forEach(counter => {
    let updateCount = () => {
    let target = +counter.getAttribute('data-target');
    let count = +counter.innerText;
    let increment = target /time;
    if (count< target) {
      let result = Math.ceil(count +increment);
      counter.innerText = result;
      setTimeout(updateCount, 10)
    }else {
      counter.innerText = target;
    }
  };
  updateCount();
})

// For changing the heading text
let healthCondition = document.querySelector(".health");
setTimeout(()=>{
  healthCondition.innerText = "You are FIT!"
}, 4000)

