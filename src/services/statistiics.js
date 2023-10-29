export const calculateStatistics = (alcoholData, objectKey) => {
  // Initialize an empty object to store the statistics.
  const statistics = {};

  // Iterate through the alcohol data to calculate statistics.
  for (const item of alcoholData) {
    // Extract the alcohol class and flavanoids value from the current item.
    const { Alcohol } = item;
    const flavanoids = parseFloat(item[objectKey]);

    // If the alcohol class is not in the statistics object, initialize it.
    if (!statistics[Alcohol]) {
      statistics[Alcohol] = {
        count: 0, // Initialize count to 0.
        sum: 0, // Initialize sum to 0.
        values: [], // Initialize an empty array to store values.
        mean: 0, // Initialize mean to 0.
        median: 0, // Initialize median to 0.
        mode: 0, // Initialize mode to 0.
      };
    }

    // Get a reference to the statistics for the current alcohol class.
    const stats = statistics[Alcohol];

    // Increment the count, update the sum, and store the value in the values array.
    stats.count++;
    stats.sum += flavanoids;
    stats.values.push(flavanoids);
  }

  // Calculate statistics for each alcohol class.
  for (const alcoholClass in statistics) {
    const stats = statistics[alcoholClass];

    // Calculate the mean and round it to 3 decimal places.
    stats.mean = (stats.sum / stats.count).toFixed(3);

    // Calculate the median and round it to 3 decimal places.
    const values = stats.values;
    const length = values.length;
    const middleIndex = Math.floor(length / 2);
    values.sort((a, b) => a - b);

    if (length % 2 === 0) {
      stats.median = (
        (values[middleIndex - 1] + values[middleIndex]) /
        2
      ).toFixed(3);
    } else {
      stats.median = values[middleIndex].toFixed(3);
    }

    // Calculate the mode and round it to 3 decimal places.
    const frequencyMap = new Map();
    let maxFrequency = 0;
    for (const value of values) {
      const frequency = (frequencyMap.get(value) || 0) + 1;
      frequencyMap.set(value, frequency);
      if (frequency > maxFrequency) {
        stats.mode = value;
        maxFrequency = frequency;
      }
    }
    stats.mode = stats.mode.toFixed(3);
  }

  // Return the calculated statistics.
  return statistics;
};
