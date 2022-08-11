/**
 * It takes an array of blocks, and returns a string of all the text in the HTML blocks
 * @param html_html_blocks - The array of html_block objects from the Sanity document.
 * @returns the text of the html_block children.
 */
function toPlainText(html_html_blocks) {
  return !html_html_blocks
    ? ""
    : html_html_blocks
        .map((html_block) => {
          return html_block._type !== "html_block" || !html_block.children
            ? ""
            : html_block.children.map((child) => child.text).join("");
        })
        .join("\n\n");
}
