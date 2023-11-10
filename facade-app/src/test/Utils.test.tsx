import {
  removeChildByParentElementId,
  appendStaticResourcesToDocument,
  manipulateDOM,
} from "../Utilities/Utils";
import { ResourceType } from "../interface/State";

describe("removeChildByParentElementId()", () => {
  it("should remove all the child elements after calling the removeChildByParentElementId function", () => {
    document.body.innerHTML = `<div id="parent">
      <p>child 1</p>
      <p>child 2</p>
      <p>child 3</p>
    </div>`;
    const parentElement = document.getElementById("parent");
    expect(parentElement?.children?.length).toBe(3);
    removeChildByParentElementId("parent");
    expect(parentElement?.children?.length).toBe(0);
  });
});

describe("appendStaticResourcesToDocument()", () => {
  const selectedLevel = {
    levelIdentifier: "LEVEL_1",
    variant: "SECURE",
    hints: [
      {
        vulnerabilityTypes: [{ identifierType: "CWE", value: "WASC-1" }],
        description: "vulnerability hint 1",
      },
    ],
    resourceInformation: {
      htmlResource: {
        resourceType: ResourceType.HTML,
        isAbsolute: false,
        uri: "/",
      },
      staticResources: [
        {
          resourceType: ResourceType.JAVASCRIPT,
          isAbsolute: false,
          uri: "/dummy_javascript_uri",
        },
        {
          resourceType: ResourceType.CSS,
          isAbsolute: false,
          uri: "/dummy_css_uri",
        },
      ],
    },
  };
  it("should modify the content of an element.", () => {
    document.body.innerHTML = `<div id="scripts"></div><div id="styles"></div>`;
    appendStaticResourcesToDocument(selectedLevel);
    const parentScriptsElement = document.getElementById("scripts");
    const parentStylesElement = document.getElementById("styles");
    expect(parentScriptsElement?.children.length).toBe(1);
    expect(parentStylesElement?.children.length).toBe(1);
  });
});

describe("manipulateDOM()", () => {
  it("should modify the content of an element.", () => {
    document.body.innerHTML = `<div id="parent">
      <p>child 1</p>
    </div>`;
    const parentElement = document.getElementById("parent");
    const content = "<p>modified content</p>";
    manipulateDOM("parent", content);
    expect(parentElement?.innerHTML).toBe(content);
  });
});
