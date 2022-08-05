function toPlainText(html_html_blocks) {
<<<<<<< HEAD
    return !html_html_blocks ?
        '' :
        html_html_blocks
        .map((html_block) => {
            return html_block._type !== 'html_block' || !html_block.children ? '' : html_block.children.map((child) => child.text).join('');
        })
        .join('\n\n');
}
=======
    return !html_html_blocks
        ? ''
        : html_html_blocks
              .map((html_block) => {
                  return html_block._type !== 'html_block' || !html_block.children ? '' : html_block.children.map((child) => child.text).join('');
              })
              .join('\n\n');
}
>>>>>>> 65c20ca7f49855a8140174519342a2219d701b05
