// This is label constants containing all the label HTML element for further modifications...
const labels = document.querySelectorAll(".form-control label");

// This is for dynamically adding the wave animation to its each letter of the label name...
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${(idx + 1) * 50}ms;">${letter}</span>`
    )
    .join("");
});
