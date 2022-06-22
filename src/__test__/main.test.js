import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import MainComponent from "../MainComponent";

describe("MainComponent", () => {
    it("should render MainComponent", () => {
        const component = renderer.create(<MainComponent />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});