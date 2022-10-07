import {
  // getResource,
  removeChildByParentElementId,
  appendStaticResourcesToDocument,
  manipulateDOM,
} from "../Utilities/Utils";
import { ResourceType } from "../interface/State";

// interface CallbackParams {
//   isSuccessful: boolean;
//   data?: any;
//   error?: any;
// }

// const mockData = { res: [] };

// This test is not working in this jest version. But it is working on latest version. This is a bug.
// https://github.com/facebook/jest/issues/11607
// https://github.com/facebook/create-react-app/issues/10094

// describe("getResource()", () => {
//   it("should call the callback function with the obj when isJson is true", (done) => {
//     //@ts-ignore
//     const fetchMock = jest.spyOn(global, "fetch").mockResolvedValueOnce({
//       ok: true,
//       json: jest.fn().mockResolvedValue(mockData),
//     });
//     const endpoint = "/dummy_endpoint";
//     const cb = ({ isSuccessful, data, error }: CallbackParams) => {
//       try {
//         expect(fetchMock).toHaveBeenCalled();
//         expect(fetchMock).toHaveBeenCalledWith(endpoint);
//         expect(isSuccessful).toBe(true);
//         expect(data).toBeTruthy();
//         expect(data).toBe(mockData);
//         expect(error).toBeFalsy();
//         done();
//       } catch (err) {
//         done(err);
//       }
//     };
//     getResource(endpoint, cb, true);
//   });

//   it("should call the callback function with the text when isJson is true", (done) => {
//     //@ts-ignore
//     const fetchMock = jest.spyOn(global, "fetch").mockRejectedValueOnce({
//       ok: false,
//       json: jest.fn().mockResolvedValue(mockData),
//     });
//     const endpoint = "/dummy_endpoint";
//     const cb = ({ isSuccessful, data, error }: CallbackParams) => {
//       try {
//         expect(fetchMock).toHaveBeenCalled();
//         expect(fetchMock).toHaveBeenCalledWith(endpoint);
//         expect(isSuccessful).toBe(false);
//         expect(data).toBeFalsy();
//         expect(error).toBeTruthy();
//         done();
//       } catch (err) {
//         done(err);
//       }
//     };
//     getResource(endpoint, cb, true);
//   });
// });

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
        description: "vulnerability hint 1"
      },
    ],
    resourceInformation: {
      htmlResource: {
        resourceType: ResourceType.HTML,
        isAbsolute: false,
        uri: "/"
      },
      staticResources: [
        {
          resourceType: ResourceType.JAVASCRIPT,
          isAbsolute: false,
          uri: "/dummy_javascript_uri"
        },
        {
          resourceType: ResourceType.CSS,
          isAbsolute: false,
          uri: "/dummy_css_uri"
        }
      ]
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
