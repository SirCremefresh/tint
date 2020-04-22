import { ConsoleHelper } from "../helper/console/console.helper";

export class Testee {

    private readonly _value: any;

    public constructor(value: any) {
        this._value = value;
    }

    public property(name: string): any {
        const value = this._value[name];

        return {
            should: function(): any {
                return Testee.assertions(value);
            }
        };
    }

    public should(): any {
        return Testee.assertions(this._value);
    }

    private static assertions(value: any): any {
        return {
            be: function(expected: any): boolean { return Testee.evaluateBe(value, expected); },
            notBe: function(expected: any): boolean { return Testee.evaluateNotBe(value, expected); }
        };
    }

    private static evaluateBe(value: any, expected: any): boolean {
        const comparison: () => boolean = () => { return value === expected };
        return Testee.evaluate(comparison, value, expected);
    }

    private static evaluateNotBe(value: any, expected: any): boolean {
        const comparison: () => boolean = () => { return value !== expected };
        return Testee.evaluate(comparison, value, expected);
    }

    private static evaluate(comparison: () => boolean, value: any, expected: any): boolean {
        const equalValue: boolean = comparison();
        if (!equalValue)
            ConsoleHelper.error(`Test failed: expected (${typeof expected}) ${expected} but was (${typeof value}) ${value}`);
        return equalValue;
    }
}

export abstract class BaseTest {
    public abstract runAllTests(): void;
}