// js/footer.js
(function () {
  // subfolder-safe base path (works locally and on GitHub Pages)
  const parts = location.pathname.split("/");
  if (parts.length && /\.html?$/.test(parts[parts.length - 1])) parts.pop();
  const basePath = parts.join("/") || "/";
  const join = (a, b) =>
    (a.endsWith("/") ? a.slice(0, -1) : a) + "/" + (b.startsWith("/") ? b.slice(1) : b);

  const mount = document.getElementById("footer");
  if (!mount) return;

  fetch(join(basePath, "footer.html"), { cache: "no-store" })
    .then((r) => r.text())
    .then((html) => {
      mount.innerHTML = html;
      // set year after injection
      const y = mount.querySelector("#date");
      if (y) y.textContent = new Date().getFullYear();
    })
    .catch((e) => {
      console.error("Footer load failed:", e);
    });
})();
