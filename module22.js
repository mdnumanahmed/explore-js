{
  const heights = [60, 70, 66, 65, 50, 55];
  function lowestHeight(numbers) {
    let min = numbers[0];
    for (const num of numbers) {
      if (num < min) {
        min = num;
      }
    }
    return min;
  }
  const lowest = lowestHeight(heights);
  console.log(lowest);
}
