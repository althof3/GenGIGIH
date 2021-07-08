const secondTaskTime = (time) => {
  console.log("second call started");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("second call finish");
    }, time);
  });
};

const thirdTaskTime = (time) => {
  console.log("third call started");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("third call finish");
    }, time);
  });
};

const countAveTime = (time) => {
  const value = countAverage();
  setTimeout(() => {
    console.log("average is ..");
    console.log(value);
    document.getElementById("result").innerHTML = value;
  }, time);
};

const mainTaskPromises = async () => {
  console.log("calculation start");

  secondTaskTime(2000)
    .then((task2) => {
      console.log(task2);
      return thirdTaskTime(5000);
    })
    .then((task3) => {
      console.log(task3);
    });

  countAveTime(5000);
};
