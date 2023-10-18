const numbersData = {
  generatedNumbers: {
    1: 1,
    2: 2,
    3: 3,
  },
  droppableAreas: {
    genArea: {
      id: "genArea",
      generatedNumbersIds: [1, 2, 3],
    },
    dropArea: {
      id: "dropArea",
      generatedNumbersIds: [],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["genArea, dropArea"],
};

export default numbersData;
