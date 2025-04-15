
export const ThemeToggleView = ({ theme, toggleTheme, OPTIONS }) => {

    if (OPTIONS.DARK == theme) return (<button onClick={toggleTheme}>oscuro 🌙</button>)
    if (OPTIONS.LIGHT == theme) return (<button onClick={toggleTheme}>claro ☀️</button>)

}
