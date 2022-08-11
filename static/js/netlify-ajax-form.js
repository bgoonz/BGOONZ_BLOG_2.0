document.forms.fileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const result = document.querySelector(".result");
  fetch("/", {
    body: new FormData(event.target),
    method: "POST",
  })
    .then(() => {
      result.innerText = "Success";
    })
    .catch((error) => {
      result.innerText = `Failed: ${error}`;
    });
});
