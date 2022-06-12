// export const onCreateWebpackConfig = ({
//     actions
// }) => {
//     actions.setWebpackConfig({
//         resolve: {
//             modules: [require('path').resolve(__dirname, 'src'), 'node_modules']
//         }
//     });
// };


// var a = Object.defineProperty;
// var p = Object.getOwnPropertyDescriptor;
// var d = Object.getOwnPropertyNames;
// var c = Object.prototype.hasOwnProperty;
// var y = (e, t) => {
//         for (var o in t) a(e, o, {
//             get: t[o],
//             enumerable: !0
//         })
//     },
//     l = (e, t, o, i) => {
//         if (t && typeof t == "object" || typeof t == "function")
//             for (let n of d(t)) !c.call(e, n) && n !== o && a(e, n, {
//                 get: () => t[n],
//                 enumerable: !(i = p(t, n)) || i.enumerable
//             });
//         return e
//     };
// var m = e => l(a({}, "__esModule", {
//     value: !0
// }), e);
// var x = {};
// y(x, {
//     onClientEntry: () => f
// });
// module.exports = m(x);

// function r(e, {
//     insertAt: t
// } = {}) {
//     if (!e || typeof document > "u") return;
//     let o = document.head || document.getElementsByTagName("head")[0],
//         i = document.createElement("style");
//     i.type = "text/css", t === "top" && o.firstChild ? o.insertBefore(i, o.firstChild) : o.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e))
// }
// r(`.gatsby-remark-prismjs-copy-button-container{touch-action:none;display:flex;justify-content:flex-end;position:relative;top:37px;left:8px;margin-top:-28px;z-index:1;pointer-events:none}.gatsby-remark-prismjs-copy-button{cursor:pointer;pointer-events:initial;font-size:13px;padding:3px 5px 2px;border-radius:3px;transition:background-color .2s ease-in-out;color:#ffffffe0}@media (max-width: 600px){.gatsby-remark-prismjs-copy-button{background:rgb(255,167,196)}}.gatsby-remark-prismjs-copy-button:hover{background:rgb(255,167,196)}.gatsby-remark-prismjs-copy-button.copied{cursor:default;-webkit-animation:opacity-hide-show 1.6s;animation:opacity-hide-show 1.6s}@-webkit-keyframes opacity-hide-show{0%{opacity:1}99%{opacity:0}to{opacity:1}}@keyframes opacity-hide-show{0%{opacity:1}99%{opacity:0}to{opacity:1}}
// `);
// var f = () => {
//     window.gatsbyRemarkCopyToClipboard = async (e, t) => {
//         e.textContent !== "Copied" && (navigator.clipboard.writeText(t.textContent || ""), e.classList.add("copied"), e.textContent = "Copied!", await new Promise(o => {
//             setTimeout(() => {
//                 e.classList.remove("copied"), e.textContent = "Copy", o("done")
//             }, 1500)
//         }))
//     }
// };
// //# sourceMappingURL=gatsby-browser.js.map