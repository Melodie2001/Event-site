const dbProviders = {
  async getAllData(collectionName) {
   
    return [
      {
        id: "1",
        data: {
          date: {
            toDate: () => new Date("2025-11-20"),
          },
          ville: "Paris",
          pays: "France",
          lieux: "Zénith",
        },
      },
      {
        id: "2",
        data: {
          date: {
            toDate: () => new Date("2025-12-05"),
          },
          ville: "Lyon",
          pays: "France",
          lieux: "Halle Tony Garnier",
        },
      },
    ];
  },
};

export default dbProviders;
