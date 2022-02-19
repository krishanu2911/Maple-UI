try {
    hljs.highlightAll();
    const snippet = document.querySelectorAll("pre code");
    snippet.forEach((codeBlock) => {
        let code = codeBlock.innerHTML;
        code = code.replaceAll("<", "&LT");
        codeBlock.innerHTML = code;
    });
} catch (err) {
    if (err.message.includes('Cannot read properties of null')) console.error(err);
    else throw err;
}

document.onload = setTheme();