document.getElementById("check-btn").addEventListener("click", function() {
    const inputText = document.getElementById("text-input").value.trim();

    if (inputText === "") {
        alert("Please input a value");
        return;
    }

    const cleanText = inputText
        .toLowerCase()  // Convert to lowercase
        .replace(/[^a-z0-9]/g, '');  // Remove non-alphanumeric characters

    const isPalindrome = cleanText === cleanText.split('').reverse().join('');

    const resultText = isPalindrome ? `${inputText} is a palindrome` : `${inputText} is not a palindrome`;
    document.getElementById("result").textContent = resultText;
});
