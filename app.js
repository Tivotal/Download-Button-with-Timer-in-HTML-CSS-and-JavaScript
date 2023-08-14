/* Created by Tivotal */

let downloadBtn = document.querySelector(".download-btn");
let fileUrl =
  "https://drive.google.com/uc?rxport=download&id=19X3uD-ZrjLH92eLahPX-iaHIeI0QtCTo";

let initTimer = () => {
  if (downloadBtn.classList.contains("disable-timer")) {
    return (location.href = fileUrl);
  }

  //getting data from button
  let timer = downloadBtn.dataset.time;

  //adding timer class to button
  downloadBtn.classList.add("timer");

  //updating button html
  downloadBtn.innerHTML = `Your download will begin in
  <b>${timer}</b> seconds`;

  //starting countdown
  let initCount = setInterval(() => {
    if (timer > 0) {
      timer--;

      return (downloadBtn.innerHTML = `Your download will begin in
      <b>${timer}</b> seconds`);
    }

    //clearing the timer
    clearInterval(initCount);

    //passing file url as location href
    location.href = fileUrl;

    //updating button html
    downloadBtn.innerHTML = `Your file is downloading...`;

    setTimeout(() => {
      //replacing timer class with disable-timer
      downloadBtn.classList.replace("timer", "disable-timer");

      //updating button html
      downloadBtn.innerHTML = `  <span class="icon bx bx-arrow-to-bottom"></span>
      <span class="text">Download File</span>`;
    }, 3000);
  }, 1000);
};

downloadBtn.addEventListener("click", initTimer);
