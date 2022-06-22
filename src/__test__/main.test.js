import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Main from "../Main";

describe("Main component", () => {
    it("should render Main component", () => {
        const component = renderer.create(<Main />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});