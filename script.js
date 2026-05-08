const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");

textInput.addEventListener("input", () => {
    const text = textInput.value.trim();

    charCount.textContent = textInput.value.length;

    const words = text === "" ? 0 : text.split(/\s+/).length;
    wordCount.textContent = words;
});