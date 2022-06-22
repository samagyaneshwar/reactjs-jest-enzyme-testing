import React from "react";
import { mount, shallow } from "enzyme";
import Todo from "../Todo";
import { generateGuid } from "../utils";

const component = () => {
    const wrapper = mount(<Todo />);
    const addButton = wrapper.find("#todoAddBtn").hostNodes();
    const input = wrapper.find("#todoInput").hostNodes();

    return {
        wrapper,
        addButton,
        input,
    };
};

describe("Todo component", () => {

    it('should render Todo component', () => {
        const component = shallow(<Todo />);
        expect(component).toMatchSnapshot();
    })

    it("should render add button", () => {
        const { addButton } = component();
        expect(addButton).toHaveLength(1);
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

        const todos = wrapper.find(".todo-wrapper").hostNodes();
        expect(todos).toHaveLength(1);
    });

    it("should mark completed", () => {
        const { wrapper, addButton, input } = component();

        input.simulate("change", { target: { value: "sample todo 1" } });
        addButton.simulate("click");

        wrapper.find(".todo-wrapper").hostNodes().first().find(".todo").hostNodes().simulate("click");
        const completed = wrapper.find(".todo-wrapper").hostNodes().first().find(".todo").hostNodes().hasClass("strike");

        expect(completed).toBeTruthy();
    });

    it("should remove todo", () => {
        const { wrapper, addButton, input } = component();

        input.simulate("change", { target: { value: "sample todo 1" } });
        addButton.simulate("click");

        expect(wrapper.find(".todo-wrapper").at(0).exists()).toBeTruthy();

        wrapper.find(".todo-wrapper").at(0).find(".remove").hostNodes().simulate("click");

        expect(wrapper.find(".todo-wrapper").at(0).exists()).toBeFalsy();
    });

    it('generateGuid() should return uuid of length - 36', () => {
        const uuid = generateGuid();
        expect(uuid).toHaveLength(36);
    });
});
