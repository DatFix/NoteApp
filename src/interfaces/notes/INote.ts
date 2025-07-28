import type { IBase } from "../others/IBase";

export interface INote extends IBase {
    id: string;
    title: string;
    content: string;
    category: string;
}