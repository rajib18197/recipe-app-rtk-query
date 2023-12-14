// Create API's
const generateUniqueNumber = function () {
  const previousUniqueNumbers = [];

  let random = Math.random();

  while (previousUniqueNumbers.includes(random)) {
    random = Math.random();
  }

  return Number(random.toFixed(3));
};

const sortBy = function (arr, field) {
  const sorted = arr.sort((a, b) => a[Object.keys(a)] - b[Object.keys(b)]);
  // console.log(sorted);
  return sorted;
};

const randomizeSample = function (arr) {
  const mapArr = arr.reduce((acc, cur) => {
    const randomNumber = generateUniqueNumber();
    const obj = { [cur]: randomNumber };
    return [...acc, obj];
  }, []);

  const sortedArr = sortBy(mapArr.slice());

  // console.log(mapArr);
  // console.log(sortedArr);
  return sortedArr;
};

/****** Each inviduals has [Equal and non-zero] probability of being selected. ******/
const rollNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Consume API's
const samples = randomizeSample(rollNumbers);
// console.log(samples);

const selectedCandidates = samples.slice(0, 5); // (5, 10);
console.log(selectedCandidates);

// অনেক প্রজেক্টেই আমাদের FormData অবজেক্ট নিয়ে কাজ করতে হয়। নেস্টেড Data বারবার, লুপ চালিয়ে append করতে গিয়ে আমরা অনেকেই বিরক্ত হয়ে যাই। আর এই সমস্যা সমাধান করতে, আমি নিজের জন্য একটি সিম্পল ফর্ম ড্যাটা এসাইনার বানিয়ে নিলাম। যেটা রিকার্সিভলি যেকোন ফর্ম ড্যাটা যত ডিপলিই নেস্টেড হোক না কেন, সুন্দর করে proper key-value আকারে সাজিয়ে FormData অবজেক্ট রিটার্ন করে।
// Check it now.
// একটা স্টার দিতে ভুলবেন না যদি আপনার কাজে লেগে থাকে। 😀
// https://www.github.com/RejownAhmed/Js-form-data-assigner
