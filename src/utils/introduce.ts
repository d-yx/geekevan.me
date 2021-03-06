import { isDark } from "./tools";

export interface Introduce {
    words: string;
    keyword: string[];
    color: string[];
    weight: number;
}

export const myIntroduce: Introduce[] = [
    {
        words: "Hi, I'm GeekEvan.",
        keyword: ["GeekEvan π"],
        color: ["#7DB9DE"],
        weight: 10,
    },
    {
        words: "I'm a student in Chongqing.",
        keyword: ["Student π¨βπ", "Chongqing"],
        color: ["#E03C8A", "#FFB11B"],
        weight: 6,
    },
    {
        words: "I'm learning Vue.js and Vite.",
        keyword: ["Vue.js", "Viteβ‘"],
        color: ["#3eaf7c", "#ba38fe"],
        weight: 7,
    },
    {
        words: "Music and movie are my favorite!",
        keyword: ["Music π΅", "Movies π₯"],
        color: ["#B481BB", "#F19483"],
        weight: 6,
    },
    {
        words: "I also like math and physics.",
        keyword: ["Math π", "Physics β"],
        color: ["#61dafb", "#dd0031"],
        weight: 5,
    },
];
