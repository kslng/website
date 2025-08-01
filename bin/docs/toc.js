// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">Introduction</a></li><li class="chapter-item expanded "><a href="tutorial/hello-world.html"><strong aria-hidden="true">1.</strong> Hello World in KSL</a></li><li class="chapter-item expanded "><a href="type/index.html"><strong aria-hidden="true">2.</strong> Understanding Types</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="type/integers.html"><strong aria-hidden="true">2.1.</strong> Integers</a></li><li class="chapter-item expanded "><a href="type/floats.html"><strong aria-hidden="true">2.2.</strong> Floats</a></li><li class="chapter-item expanded "><a href="type/booleans.html"><strong aria-hidden="true">2.3.</strong> Booleans</a></li><li class="chapter-item expanded "><a href="type/more.html"><strong aria-hidden="true">2.4.</strong> Others</a></li></ol></li><li class="chapter-item expanded "><a href="type/casting.html"><strong aria-hidden="true">3.</strong> Type Casting</a></li><li class="chapter-item expanded "><a href="function/index.html"><strong aria-hidden="true">4.</strong> Functions</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="function/define.html"><strong aria-hidden="true">4.1.</strong> Definition</a></li><li class="chapter-item expanded "><a href="function/return.html"><strong aria-hidden="true">4.2.</strong> Returns</a></li><li class="chapter-item expanded "><a href="function/attributes.html"><strong aria-hidden="true">4.3.</strong> Attributes</a></li><li class="chapter-item expanded "><a href="function/inline-calls.html"><strong aria-hidden="true">4.4.</strong> Inline Calls</a></li></ol></li><li class="chapter-item expanded "><a href="attribute/index.html"><strong aria-hidden="true">5.</strong> Function Attributes</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="attribute/entry.html"><strong aria-hidden="true">5.1.</strong> Entry</a></li><li class="chapter-item expanded "><a href="attribute/no-fail.html"><strong aria-hidden="true">5.2.</strong> No Fail</a></li></ol></li><li class="chapter-item expanded "><a href="expression/index.html"><strong aria-hidden="true">6.</strong> Expressions</a></li><li class="chapter-item expanded "><a href="variable/index.html"><strong aria-hidden="true">7.</strong> Variables</a></li><li class="chapter-item expanded "><a href="conditional/index.html"><strong aria-hidden="true">8.</strong> Conditionals</a></li><li class="chapter-item expanded "><a href="loop/index.html"><strong aria-hidden="true">9.</strong> Loops</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="loop/for.html"><strong aria-hidden="true">9.1.</strong> For</a></li><li class="chapter-item expanded "><a href="loop/while.html"><strong aria-hidden="true">9.2.</strong> While</a></li></ol></li><li class="chapter-item expanded "><a href="using/index.html"><strong aria-hidden="true">10.</strong> Libraries</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="using/import.html"><strong aria-hidden="true">10.1.</strong> Import</a></li><li class="chapter-item expanded "><a href="using/links.html"><strong aria-hidden="true">10.2.</strong> Links</a></li></ol></li><li class="chapter-item expanded "><a href="namespace/index.html"><strong aria-hidden="true">11.</strong> Namespaces</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
