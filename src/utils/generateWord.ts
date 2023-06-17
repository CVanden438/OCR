import randomWords from 'random-words';

interface GenerateWord {
  amount?: number;
  maxLength?: number;
}

const generateWord = ({ amount = 1, maxLength = 5 }: GenerateWord) => {
  const word = randomWords({
    exactly: amount,
    maxLength: maxLength,
    formatter: (word) => word.toUpperCase(),
  });
  return word[0];
};

export default generateWord;
