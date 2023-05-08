import randomWords from 'random-words';

const generateWord = ({
  amount = 1,
  maxLength = 5,
}: {
  amount?: number;
  maxLength?: number;
}) => {
  const word = randomWords({
    exactly: amount,
    maxLength: maxLength,
    formatter: (word) => word.toUpperCase(),
  });
  return word[0];
};

export default generateWord;
