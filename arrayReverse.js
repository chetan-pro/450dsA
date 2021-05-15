const inputHold = document.querySelector("input");

inputHold.addEventListener("change", (e) => {
  let arr = e.target.value.split(",");
  console.log(arr);
  let revArr = []
  for (let i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  console.log(revArr);
});
