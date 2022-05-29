<script>
          // Get the button:
          mybutton = document.getElementById("scrollBtn");
          // When the user scrolls down 20px from the top of the document, show the button
          window.onscroll = function () {
            scrollFunction();
          };
          function scrollFunction() {
            if (
              document.body.scrollTop > 20 ||
              document.documentElement.scrollTop > 20
            ) {
              mybutton.style.display = "block";
            } else {
              mybutton.style.display = "none";
            }
          }
          // When the user clicks on the button, scroll to the top of the document
          function topFunction() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
          }
        </script>
        <script>
          window.addEventListener("DOMContentLoaded", (event) => {
            console.log("DOM fully loaded and parsed");
            const scrollToTop = () => {
              const c =
                document.documentElement.scrollTop || document.body.scrollTop;
              if (c > 0) {
                window.requestAnimationFrame(scrollToTop);
                window.scrollTo(0, c - c / 8);
              }
            };
            scrollToTop();
          });
        </script>
<button id="scrollBtn" title="Go to top" onclick="topFunction()" style="display: block;">
          Back To Top
        </button>





before </head>
utterance-issue-comments
<script src="https://utteranc.es/client.js"
        repo="bgoonz/BGOONZ_BLOG_2.0"
        issue-term="url"
        label="comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>