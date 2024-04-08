// Your code here

const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = '#FF69B5';


// moving the dodger to the left.
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

// move the dodger to the right
function moveDodgerRight () {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left >= 0  && left < 360){
        dodger.style.left = `${left + 1}px`
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });