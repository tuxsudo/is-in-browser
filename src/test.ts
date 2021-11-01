import isInBrowser, { isBrowser, isDeno, isJsDom, isNode } from ".";

test("isInBrowser", () => {
  // jest runs jsdom, so true
  expect(isBrowser).toBe(true);
  expect(isInBrowser).toBe(true);

  // jest runs jsdom
  expect(isJsDom).toBe(true);

  expect(isBrowser && !isJsDom).toBe(false);

  // jest runs on Node, so true
  expect(isNode).toBe(true);

  // jest runs on Deno, so true
  expect(isDeno).toBe(true);

  // jest runs JSDOm, so true
});
