function revealImage(imageId) {
  let image = document.getElementById(imageId);
  let hideBtn = image.nextElementSibling.querySelector(".hide-btn");
  let revealBtn = document.querySelector(
    `[onclick="revealImage('${imageId}')"]`
  );

  image.style.visibility = "visible";
  image.style.opacity = "1";
  hideBtn.classList.remove("hidden");
  revealBtn.classList.add("hidden");
}

function hideImage(imageId) {
  let image = document.getElementById(imageId);
  let hideBtn = image.nextElementSibling.querySelector(".hide-btn");
  let revealBtn = document.querySelector(
    `[onclick="revealImage('${imageId}')"]`
  );

  image.style.visibility = "hidden";
  image.style.opacity = "0";
  hideBtn.classList.add("hidden");
  revealBtn.classList.remove("hidden");
}
