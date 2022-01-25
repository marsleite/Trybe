const sumRandomNumbers = () => {
  const myArray = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 50) + 1 
  );
  const sum = myArray.map((number) => number * number).reduce((acc, value) => acc += value, 0);

  if (sum >= 8000) {
    throw new Error();
  }

  return sum;
};

const sumArrayFromSum = (sum) => [2, 3, 5, 10].map((number) => sum / number)
  .reduce((number, acc) => number + acc);

  const fetchPromise = async () => {
    try {
      const sum = await sumRandomNumbers();
      const sumFromSum = await sumArrayFromSum(sum);
    } catch (error) {
      console.log('è mais de 8 mil!')
    }
  }

  fetchPromise();