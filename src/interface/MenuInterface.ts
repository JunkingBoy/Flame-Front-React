import { ExtractProToPieData } from "./ExtractInterface";

interface HeaderSiderProps {
    programNameList: string[];
    onProClick: (proName: string) => void;
}

interface HeaderDataProps {
    programNameList: string[];
    pagePieDataObj: ExtractProToPieData[];
}

export type { HeaderDataProps, HeaderSiderProps }