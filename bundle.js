function setSelectOption(theme) {
	const themeSwitcher = document.getElementById("theme-switcher");
	if (themeSwitcher) {
		if (theme === "dark") {
			themeSwitcher.selectedIndex = 2;
		} else if (theme === "light") {
			themeSwitcher.selectedIndex = 1;
		} else if (theme === "system") {
			themeSwitcher.selectedIndex = 0;
		}
	}
}

function setTheme() {
	let system = false;
	let storedTheme = localStorage.getItem("data-theme");

	if (storedTheme === null) {
		system = true;
		storedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";
	}

	if (storedTheme) {
		document.documentElement.setAttribute("data-theme", storedTheme);
		setSelectOption(system ? "system" : storedTheme);
	}
}

function switchTheme(selectedTheme) {
	if (selectedTheme.value === "system") {
		localStorage.removeItem("data-theme");
	} else {
		localStorage.setItem("data-theme", selectedTheme.value);
	}

	setTheme();
}

setTheme();
