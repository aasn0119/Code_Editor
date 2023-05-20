function run() {

    let htmlCode = document.getElementById("html-code").value;
    let CssCode = document.getElementById("css-code").value;
    let JSCode = document.getElementById("js-code").value;
    let Output = document.getElementById("output");

    Output.contentDocument.body.innerHTML = htmlCode + "<style>" + CssCode + "</style>";

    Output.contentWindow.eval(JSCode);


}