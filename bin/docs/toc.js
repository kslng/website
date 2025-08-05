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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> Introduction</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="setup/index.html"><strong aria-hidden="true">2.</strong> Getting Started</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="setup/installing.html"><strong aria-hidden="true">2.1.</strong> Installing KSL</a></li><li class="chapter-item expanded "><a href="setup/configure.html"><strong aria-hidden="true">2.2.</strong> Configuring KSL</a></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded "><a href="tutorial/index.html"><strong aria-hidden="true">3.</strong> Tutorials</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="tutorial/hello-world.html"><strong aria-hidden="true">3.1.</strong> Hello World in KSL</a></li><li class="chapter-item expanded "><a href="tutorial/if-statement.html"><strong aria-hidden="true">3.2.</strong> If Statement</a></li><li class="chapter-item expanded "><a href="tutorial/for-loop.html"><strong aria-hidden="true">3.3.</strong> For Loops</a></li><li class="chapter-item expanded "><a href="tutorial/while-loop.html"><strong aria-hidden="true">3.4.</strong> While Loops</a></li><li class="chapter-item expanded "><a href="tutorial/rock-paper-scissors.html"><strong aria-hidden="true">3.5.</strong> Rock, Paper, Scissors</a></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded "><a href="comments/index.html"><strong aria-hidden="true">4.</strong> Comments</a></li><li class="chapter-item expanded "><a href="type/index.html"><strong aria-hidden="true">5.</strong> Understanding Types</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="type/integers.html"><strong aria-hidden="true">5.1.</strong> Integers</a></li><li class="chapter-item expanded "><a href="type/floats.html"><strong aria-hidden="true">5.2.</strong> Floats</a></li><li class="chapter-item expanded "><a href="type/booleans.html"><strong aria-hidden="true">5.3.</strong> Booleans</a></li><li class="chapter-item expanded "><a href="type/references.html"><strong aria-hidden="true">5.4.</strong> References</a></li><li class="chapter-item expanded "><a href="type/more.html"><strong aria-hidden="true">5.5.</strong> Others</a></li></ol></li><li class="chapter-item expanded "><a href="variable/index.html"><strong aria-hidden="true">6.</strong> Variables</a></li><li class="chapter-item expanded "><a href="expression/index.html"><strong aria-hidden="true">7.</strong> Expressions</a></li><li class="chapter-item expanded "><a href="function/index.html"><strong aria-hidden="true">8.</strong> Functions</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="function/define.html"><strong aria-hidden="true">8.1.</strong> Definition</a></li><li class="chapter-item expanded "><a href="function/return.html"><strong aria-hidden="true">8.2.</strong> Returns</a></li><li class="chapter-item expanded "><a href="function/attributes.html"><strong aria-hidden="true">8.3.</strong> Attributes</a></li><li class="chapter-item expanded "><a href="function/inline-calls.html"><strong aria-hidden="true">8.4.</strong> Inline Calls</a></li></ol></li><li class="chapter-item expanded "><a href="conditional/index.html"><strong aria-hidden="true">9.</strong> Conditionals</a></li><li class="chapter-item expanded "><a href="loop/index.html"><strong aria-hidden="true">10.</strong> Loops</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="loop/for.html"><strong aria-hidden="true">10.1.</strong> For</a></li><li class="chapter-item expanded "><a href="loop/while.html"><strong aria-hidden="true">10.2.</strong> While</a></li></ol></li><li class="chapter-item expanded "><a href="type/casting.html"><strong aria-hidden="true">11.</strong> Type Casting</a></li><li class="chapter-item expanded "><a href="attribute/index.html"><strong aria-hidden="true">12.</strong> Function Attributes</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="attribute/entry.html"><strong aria-hidden="true">12.1.</strong> Entry</a></li><li class="chapter-item expanded "><a href="attribute/no-fail.html"><strong aria-hidden="true">12.2.</strong> No Fail</a></li></ol></li><li class="chapter-item expanded "><a href="using/index.html"><strong aria-hidden="true">13.</strong> Libraries</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="using/import.html"><strong aria-hidden="true">13.1.</strong> Import</a></li><li class="chapter-item expanded "><a href="using/links.html"><strong aria-hidden="true">13.2.</strong> Links</a></li></ol></li><li class="chapter-item expanded "><a href="namespace/index.html"><strong aria-hidden="true">14.</strong> Namespaces</a></li><li class="chapter-item expanded "><a href="ffi/index.html"><strong aria-hidden="true">15.</strong> FFI Concepts</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="std/index.html"><strong aria-hidden="true">16.</strong> Standard Library</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="std/io.html"><strong aria-hidden="true">16.1.</strong> IO</a></li><li class="chapter-item expanded "><a href="std/fs.html"><strong aria-hidden="true">16.2.</strong> FS</a></li><li class="chapter-item expanded "><a href="std/env.html"><strong aria-hidden="true">16.3.</strong> ENV</a></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded "><a href="compiler/index.html"><strong aria-hidden="true">17.</strong> Compiler Internals</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="compiler/compiling.html"><strong aria-hidden="true">17.1.</strong> Compiling the Compiler</a></li><li class="chapter-item expanded "><a href="compiler/compile-stdlib.html"><strong aria-hidden="true">17.2.</strong> Compiling KSL-STDLIB</a></li><li class="chapter-item expanded "><a href="compiler/name-mangling.html"><strong aria-hidden="true">17.3.</strong> Name Mangling Convention</a></li><li class="chapter-item expanded "><a href="compiler/fractstrike-gc.html"><strong aria-hidden="true">17.4.</strong> What is fractstrike</a></li><li class="chapter-item expanded "><a href="compiler/expr-semantics.html"><strong aria-hidden="true">17.5.</strong> Expression Semantics</a></li><li class="chapter-item expanded "><a href="compiler/error-codes.html"><strong aria-hidden="true">17.6.</strong> Error Codes</a></li></ol></li></ol>';
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
