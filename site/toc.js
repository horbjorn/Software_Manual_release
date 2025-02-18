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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="pre.html">pre</a></li><li class="chapter-item expanded affix "><li class="part-title">PowerShell</li><li class="chapter-item expanded "><a href="Powershell.html"><strong aria-hidden="true">1.</strong> PowerShell 7</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="powershell_scripts.html"><strong aria-hidden="true">1.1.</strong> Scripts</a></li><li class="chapter-item expanded "><a href="powershell_tools.html"><strong aria-hidden="true">1.2.</strong> Tools</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="intelli_shell.html"><strong aria-hidden="true">1.2.1.</strong> IntelliShell</a></li><li class="chapter-item expanded "><a href="zoxide.html"><strong aria-hidden="true">1.2.2.</strong> zoxide</a></li><li class="chapter-item expanded "><a href="fzf.html"><strong aria-hidden="true">1.2.3.</strong> fzf</a></li><li class="chapter-item expanded "><a href="ripgrep.html"><strong aria-hidden="true">1.2.4.</strong> ripgrep</a></li><li class="chapter-item expanded "><a href="bat.html"><strong aria-hidden="true">1.2.5.</strong> bat</a></li><li class="chapter-item expanded "><a href="yazi.html"><strong aria-hidden="true">1.2.6.</strong> yazi</a></li><li class="chapter-item expanded "><a href="fd.html"><strong aria-hidden="true">1.2.7.</strong> fd</a></li><li class="chapter-item expanded "><a href="eza.html"><strong aria-hidden="true">1.2.8.</strong> eza</a></li><li class="chapter-item expanded "><a href="glow.html"><strong aria-hidden="true">1.2.9.</strong> glow</a></li></ol></li><li class="chapter-item expanded "><a href="powershell_links_and_junctions.html"><strong aria-hidden="true">1.3.</strong> Links and junctions</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">Windows Terminal</li><li class="chapter-item expanded "><a href="windows_terminal_default_keyboard_shortcuts.html"><strong aria-hidden="true">2.</strong> Default Keyboard Shortcuts</a></li><li class="chapter-item expanded "><a href="windows_terminal_settings.html"><strong aria-hidden="true">3.</strong> Settings</a></li><li class="chapter-item expanded affix "><li class="part-title">PSReadline</li><li class="chapter-item expanded "><a href="ps_readline_settings.html"><strong aria-hidden="true">4.</strong> Settings</a></li><li class="chapter-item expanded affix "><li class="part-title">VS Code</li><li class="chapter-item expanded "><a href="vscode_shortcuts.html"><strong aria-hidden="true">5.</strong> Keyboard Shortcuts</a></li><li class="chapter-item expanded "><a href="vscode_settings.html"><strong aria-hidden="true">6.</strong> Settings</a></li><li class="chapter-item expanded affix "><li class="part-title">Windows</li><li class="chapter-item expanded "><a href="essential_shortcuts.html"><strong aria-hidden="true">7.</strong> Essential Shortcuts</a></li><li class="chapter-item expanded "><a href="desktop_shortcuts.html"><strong aria-hidden="true">8.</strong> Desktop Shortcuts</a></li><li class="chapter-item expanded "><a href="windows_key.html"><strong aria-hidden="true">9.</strong> Windows Key Shortcuts</a></li><li class="chapter-item expanded "><a href="windows_text_shortcut.html"><strong aria-hidden="true">10.</strong> Text Editing shortcuts</a></li><li class="chapter-item expanded "><a href="file_explorer_shortcuts.html"><strong aria-hidden="true">11.</strong> File Explorer Shortcuts</a></li><li class="chapter-item expanded "><a href="cmd_shortcuts.html"><strong aria-hidden="true">12.</strong> CMD Prompt Shortcuts</a></li><li class="chapter-item expanded "><a href="taskbar_shortcuts.html"><strong aria-hidden="true">13.</strong> Taskbar Shortcuts</a></li><li class="chapter-item expanded "><a href="settings_shortcuts.html"><strong aria-hidden="true">14.</strong> Settings Shortcuts</a></li><li class="chapter-item expanded "><a href="multiple_desktops_shortcuts.html"><strong aria-hidden="true">15.</strong> Multiple Desktops Shortcuts</a></li><li class="chapter-item expanded "><a href="dialog_box_shortcuts.html"><strong aria-hidden="true">16.</strong> Dialog Box Shortcuts</a></li><li class="chapter-item expanded "><a href="alt_codes_and_symbols.html"><strong aria-hidden="true">17.</strong> Alt Codes &amp; Symbols</a></li><li class="chapter-item expanded affix "><li class="part-title">Markdown</li><li class="chapter-item expanded "><a href="markdown_syntax.html"><strong aria-hidden="true">18.</strong> Syntax</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="inline_html.html"><strong aria-hidden="true">18.1.</strong> Inline HTML</a></li></ol></li><li class="chapter-item expanded "><a href="mdbook_options.html"><strong aria-hidden="true">19.</strong> mdBook Options</a></li><li class="chapter-item expanded affix "><li class="part-title">Git</li><li class="chapter-item expanded "><a href="git.html"><strong aria-hidden="true">20.</strong> Commands</a></li><li class="chapter-item expanded "><a href="github_cli.html"><strong aria-hidden="true">21.</strong> GitHub CLI</a></li><li class="chapter-item expanded affix "><li class="part-title">RegEx</li><li class="chapter-item expanded "><a href="rust_regex.html"><strong aria-hidden="true">22.</strong> Rust RegEx</a></li><li class="chapter-item expanded affix "><li class="part-title">Browsers</li><li class="chapter-item expanded "><a href="firefox_shortcuts.html"><strong aria-hidden="true">23.</strong> Firefox Shortcuts</a></li><li class="chapter-item expanded "><a href="chrome_shortcuts.html"><strong aria-hidden="true">24.</strong> Chrome Shortcuts</a></li><li class="chapter-item expanded affix "><li class="part-title">Miscellaneous</li><li class="chapter-item expanded "><a href="mpv.html"><strong aria-hidden="true">25.</strong> mpv</a></li><li class="chapter-item expanded "><a href="ffmpeg.html"><strong aria-hidden="true">26.</strong> FFMpeg</a></li><li class="chapter-item expanded "><a href="yt-dlp.html"><strong aria-hidden="true">27.</strong> yt-dlp</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
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
