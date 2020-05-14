const ROOT_HTML_ELEMENT_ID = "greeter";

let greeter: HTMLElement | null = document.getElementById(ROOT_HTML_ELEMENT_ID); // Please forgive the Non-Null Assertion Operator

if (!greeter) {
  throw new Error(
    "HTML template is in wrong format: " +
      `Element with {ROOT_HTML_ELEMENT_ID} id not found.`,
  );
}
if (greeter) {
  greeter.innerText = "Hello world!";
}
