import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            primary: string;
            white: string;
            black: string;
            pink: string;
            red: string;
            orange: string;
            blue: string;
            gray: {
                100: string;
                200: string;
                300: string;
                400: string;
                500: string;
                600: string;
                700: string;
                800: string;
                900: string;
            };
        };
        borderRadius: string;
        fontSizes: {
            small: string;
            medium: string;
            large: string;
            xl: string;
        };
        spacing: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        padding: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        margin: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        borderRadius: {
            small: string;
            medium: string;
            large: string;
        };
        iconSize: number;
    }
}
