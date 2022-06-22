import React from "react";
import { mount, shallow } from "enzyme";
import App from "../App";

const component = () => {
    const wrapper = mount(<App />);
    const addButton = wrapper.find("#todoAddBtn");
    const input = wrapper.find("#todoInput");

    return {
        wrapper,
        addButton,
        input,
    };
};

describe("App component", () => {

    it('should render App component', () => {
        const component = shallow(<App />);
        expect(component).toMatchSnapshot();
    })

    it("should render add button", () => {
        const { addButton } = component();
        expect(addButton).toHaveLength(1)
    });

    it("should render input", () => {
        const { input } = component();
        expect(input).toHaveLength(1);
    });

    it("should add todo", () => {
        const { wrapper, addButton, input } = component();

        // add todo
        input.simulate("change", { target: { value: "sample todo" } });
        addButton.simulate("click");

        const todos = wrapper.find(".todo-wrapper");
        expect(todos).toHaveLength(1);
    });

    it("should mark completed", () => {
        const { wrapper, addButton, input } = component();

        input.simulate("change", { target: { value: "sample todo 1" } });
        addButton.simulate("click");

        wrapper.find(".todo-wrapper").first().find(".todo").simulate("click");
        const completed = wrapper.find(".todo-wrapper").first().find(".todo").hasClass("strike");

        expect(completed).toBeTruthy();
    });

    it("should remove todo", () => {
        const { wrapper, addButton, input } = component();

        input.simulate("change", { target: { value: "sample todo 1" } });
        addButton.simulate("click");

        expect(wrapper.find(".todo-wrapper").at(0).exists()).toBeTruthy();

        wrapper.find(".todo-wrapper").at(0).find(".remove").simulate("click");

        expect(wrapper.find(".todo-wrapper").at(0).exists()).toBeFalsy();
    });
});
