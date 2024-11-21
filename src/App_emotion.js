import { ThemeProvider, useTheme } from "@emotion/react";
import { css } from "@emotion/react"; // Import css for better readability

const isDark = false;

const theme = {
    colors: {
        primary: isDark ? "white" : "darkorange",
        background: isDark ? "darkorange" : "white",
    },
    borderRadius: isDark ? "4px" : "none",
};

const SomeText = (props) => {
    const theme = useTheme();
    const { colors, borderRadius } = theme;

    const styles = css`
        color: ${colors.primary};
        background-color: ${colors.background};
        border: 2px solid black;
        border-radius: ${borderRadius};
        padding: 4px 10px;
        cursor: pointer;
    `;

    return (
        <div css={styles} {...props}>
            {props.children}
        </div>
    );
};

const App_emotion = () => (
    <ThemeProvider theme={theme}>
        <SomeText>Ganti Tema</SomeText>
    </ThemeProvider>
);
export default App_emotion