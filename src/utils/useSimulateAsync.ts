const getRandomInt = (min:number, max:number):number => Math.floor(Math.random() * (max - min + 1)) + min;

const useSimulateAsync = async (data:object) => {
  const delay = (ms:number) =>
    new Promise((res, rej) =>
      setTimeout(getRandomInt(1, 5) > 2 ? res : rej, ms)
    );
  await delay(getRandomInt(500, 2000));

  return data;
};

export default useSimulateAsync;
