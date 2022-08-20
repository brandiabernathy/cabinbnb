import reviews from './reviews';

export function calculateRatings() {
    const mapData = reviews.reduce((acc, {propertyId, rating}) => {
        const match = acc.get(propertyId);
        match ? 
        match.push(rating) :
        acc.set(propertyId, [rating]);
        return acc;
      }, new Map);

      console.log('mapData', mapData);
      const averageArray = Array.from(mapData, ([propertyId, ratings]) => {
        const rating = ratings.reduce((a : number, r : number) => (a + r))/ratings.length;
        return { propertyId, rating }
      });

      return averageArray;

}