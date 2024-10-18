export const groupByLane = (data: Record<string, any>) => {
  return (data || []).reduce((acc: { [x: string]: any[]; }, currentValue: { lane: any; }) => {
    const ageKey = currentValue.lane; // Now grouping by age
    if (!acc[ageKey]) {
      acc[ageKey] = [];
    }
    acc[ageKey].push(currentValue);

    return acc;
  }, {});
};
