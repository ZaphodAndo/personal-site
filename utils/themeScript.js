/**
 * Inline script for the <head> that applies a saved theme choice before the first paint,
 * so a manually chosen theme never flashes the system one. No saved choice means the
 * page follows the system setting via `light-dark()` in variables.css.
 */
export const themeScript = `
    <script>
        {
            const applyTheme = () => {
                let theme = null;
                try {
                    theme = localStorage.getItem("theme");
                } catch {}
                if (theme === "light" || theme === "dark") document.documentElement.dataset.theme = theme;
                else delete document.documentElement.dataset.theme;
            };
            applyTheme();
            // Pages restored from the back/forward cache (e.g. closing the menu) don't re-run this script
            addEventListener("pageshow", (event) => event.persisted && applyTheme());
            // Keep other open tabs in step when the theme changes
            addEventListener("storage", (event) => event.key === "theme" && applyTheme());
        }
    </script>
`;
