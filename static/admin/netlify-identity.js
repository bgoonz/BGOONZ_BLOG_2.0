<<<<<<< HEAD
/**
 * This script is taken from:
 * https://www.netlifycms.org/docs/add-to-your-site/#add-the-netlify-identity-widget
 */
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", function (user) {
    if (!user) {
      window.netlifyIdentity.on("login", function () {
        document.location.href = "/admin/";
      });
    }
  });
}
=======
/**
 * This script is taken from:
 * https://www.netlifycms.org/docs/add-to-your-site/#add-the-netlify-identity-widget
 */
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", function (user) {
    if (!user) {
      window.netlifyIdentity.on("login", function () {
        document.location.href = "/admin/";
      });
    }
  });
}
>>>>>>> eb4e776211cb70e9dd66aac61069ac7a52f1de84
