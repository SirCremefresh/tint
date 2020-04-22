import { ConsoleCode } from "./consoleCode.enum";

export class ConsoleHelper {
    public static error(text: string): void {
        ConsoleHelper.log(text, ConsoleCode.FgRed);
    }

    public static info(text: string): void {
        ConsoleHelper.log(text, ConsoleCode.FgCyan);
    }

    public static log(text: string, color: string = ConsoleCode.FgWhite): void {
        console.log(color, text, ConsoleCode.Reset);
    }
}