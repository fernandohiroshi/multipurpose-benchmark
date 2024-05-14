export type BenchmarkData = {
  title: string;
  date1: BenchmarkItemData;
  date2: BenchmarkItemData;
  date3: BenchmarkItemData;
  date4: BenchmarkItemData;
  date5: BenchmarkItemData;
};

type BenchmarkItemData = {
  value: number;
};

export const BenchmarkData: BenchmarkData[] = [
  {
    title: "My Linux OS tier list",
    date1: {
      value: 100,
    },
    date2: {
      value: 80,
    },
    date3: {
      value: 60,
    },
    date4: {
      value: 40,
    },
    date5: {
      value: 20,
    },
  },
];
