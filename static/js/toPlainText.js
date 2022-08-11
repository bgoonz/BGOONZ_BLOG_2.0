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
