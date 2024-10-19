export const groupByLane = (data: Record<string, any>) => {
  return (data || []).reduce((acc: { [x: string]: any[]; }, currentValue: { lane: any; }) => {
    const laneKey = currentValue.lane;
    if (!acc[laneKey]) {
      acc[laneKey] = [];
    }
    acc[laneKey].push(currentValue);
    return acc;
  }, {});
};