const numbersData = {
  generatedNumbers: {
    0: { id: "0", content: "" },
  },
  myDroppableAreas: {
    numGenArea: {
      id: "numGenArea",
      generatedNumbersIds: [],
    },
    listDropArea: {
      id: "listDropArea",
      generatedNumbersIds: Array.from("0".repeat(2)),
    },
  },

  currentNum: 0,
};

export default numbersData;
