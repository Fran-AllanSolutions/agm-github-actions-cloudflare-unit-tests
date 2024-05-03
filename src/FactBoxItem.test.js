import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import FactBoxItem from "./FactBoxItem";

test("Should render FactBoxItem", () => {
  const wrapper = mount(FactBoxItem, {
    props: {
      label: "Title",
      value: "Value",
    },
  });

  expect(wrapper.text()).toContain("Title");
  expect(wrapper.text()).toContain("Value");
});
