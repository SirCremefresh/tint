import { Injectable } from "../helper/decorator/injection/injectable.decorator";
import { TesteeTest } from "./testee.test";
import { MapperTest } from "./mapper.test";
import { BaseTest } from "./base.test";

@Injectable()
export class Test extends BaseTest {

    private _testeeTest: TesteeTest;
    private _mapperTest: MapperTest;

    public constructor(testeeTest: TesteeTest, mapperTest: MapperTest) {
        super();
        this._testeeTest = testeeTest;
        this._mapperTest = mapperTest;
    }

    public runAllTests() {
        this._testeeTest.runAllTests();
        this._mapperTest.runAllTests();
    }
}