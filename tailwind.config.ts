import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "node_modules/@zach.codes/react-calendar/dist/**/*.js",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    daisyui: {
        themes: [
            {
                rusec: {
                    primary: "#ff5757",

                    secondary: "#780b08",

                    accent: "#b1a494",

                    neutral: "#e5e7eb",

                    "base-100": "#4a0402",

                    info: "#06b6d4",

                    success: "#4ade80",

                    warning: "#fde047",

                    error: "#ff0000",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
export default config;
