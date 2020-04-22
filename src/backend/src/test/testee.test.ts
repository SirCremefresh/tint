import { Injectable } from "../decorator/injection/injectable.decorator";
import { BaseTest, Testee } from "./base.test";

@Injectable()
export class TesteeTest extends BaseTest {

    public runAllTests() {
        this.test_shouldBe_simpleString();
        this.test_shouldBe_simpleNumber();
        this.test_shouldNotBe_simpleNumber();
        this.test_shouldBe_simpleObject();
        this.test_shouldNotBe_simpleObject();
    }

    public test_shouldBe_simpleString() {
        const value = "Test";
        const testee = new Testee(value);
        testee.should().be(value);
    }

    public test_shouldBe_simpleNumber() {
        const value = 10;
        const testee = new Testee(value);
        testee.should().be(value);
    }

    public test_shouldNotBe_simpleNumber() {
        const value = 10;
        const testee = new Testee(value);
        testee.should().notBe("10");
    }

    public test_shouldBe_simpleObject() {
        const value = {
            pNumber: 20,
            pString: "ObjTest"
        };
        const testee = new Testee(value);

        testee.should().be(value);
        testee.property("pNumber").should().be(value.pNumber);
        testee.property("pString").should().be(value.pString);
    }

    public test_shouldNotBe_simpleObject() {
        const value = {
            pNumber: 30,
            pString: "ObjTest2"
        };
        const testee = new Testee(value);

        testee.should().notBe({ pNumber: 40, pString: "ObjTest2"});
        testee.property("pNumber").should().notBe("30");
        testee.property("pString").should().notBe(true);
    }
}