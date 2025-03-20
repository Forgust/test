function mergeAndCountTags(arr1, arr2) {
  const allArr = [...arr1, ...arr2];
  return allArr.reduce((acc, item) => {
    if (!item || typeof item !== "string") {
      return acc;
    }
    if (typeof acc[item] === "undefined") {
      acc[item] = 1;
    } else {
      acc[item] += 1;
    }
    return acc;
  }, {});
}

console.log(
  mergeAndCountTags(
    ["react", "javascript", "react", null, "", 2, 3],
    ["javascript", "typescript"]
  )
);
