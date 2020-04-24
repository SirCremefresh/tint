import { ConsoleStyleCode } from "./consoleStyleCode.enum";

export class ConsoleHelper {
    public static error(text: string): void {
        ConsoleHelper.log(text, ConsoleStyleCode.FgRed);
    }

    public static info(text: string): void {
        ConsoleHelper.log(text, ConsoleStyleCode.FgCyan);
    }

    public static log(text: string, color: string = ConsoleStyleCode.FgWhite): void {
        console.log(color, text, ConsoleStyleCode.Reset);
    }
}