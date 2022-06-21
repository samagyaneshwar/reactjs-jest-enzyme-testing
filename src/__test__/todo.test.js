import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "../App";
import { expect } from "chai";

Enzyme.configure({ adapter: new Adapter() });

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
    it("should render add button", () => {
        const { addButton } = component();
        expect(addButton).have.length(1);
    });

    it("should render input", () => {
        const { input } = component();
        expect(input).have.length(1);
    });

    it("should add todo", () => {
        const { wrapper, addButton, input } = component();

        // add todo
        input.simulate("change", { target: { value: "sample todo" } });
        addButton.simulate("click");

        const todos = wrapper.find(".todo-wrapper");
        expect(todos).have.length(1);
    });

    it("should mark completed", () => {
        const { wrapper, addButton, input } = component();

        input.simulate("change", { target: { value: "sample todo 1" } });
        addButton.simulate("click");

        wrapper.find(".todo-wrapper").first().find(".todo").simulate("click");
        const completed = wrapper.find(".todo-wrapper").first().find(".todo").hasClass("strike");

        expect(completed).to.true;
    });

    it("should remove todo", () => {
        const { wrapper, addButton, input } = component();

        input.simulate("change", { target: { value: "sample todo 1" } });
        addButton.simulate("click");

        expect(wrapper.find(".todo-wrapper").at(0).exists()).to.be.true;

        wrapper.find(".todo-wrapper").at(0).find(".remove").simulate("click");

        expect(wrapper.find(".todo-wrapper").at(0).exists()).to.be.false;
    });
});
