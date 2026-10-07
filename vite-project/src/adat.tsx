export type AllapotTipus = "folyamatban" | "törölve" | "kész" | "létrehozva";
export interface TodoTipus {
    id: number;
    tennivalo: string;
    allapot: AllapotTipus;
}

export const TODOLISTA: TodoTipus[] = [
    { id: 1, tennivalo: "Tanulni a dolgozatra ", allapot: "folyamatban" },
    { id: 2, tennivalo: "contexes feladat önállóan ", allapot: "létrehozva" },
    { id: 3, tennivalo: "takarítás ", allapot: "kész" }
];