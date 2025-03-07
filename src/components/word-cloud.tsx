import { client } from '@/libs/twitter';
import { cache } from 'react';

export const getTrends = cache(async () => {
  try {
    const response = await client.v2.get('/users/personalized_trends');
    return response;
  } catch (error) {
    console.error('트렌드 데이터를 가져오는 중 오류 발생:', error);
    throw error;
  }
});

export default async function WordCloud() {
  try {
    const trends = await getTrends();
    console.log(trends);
  } catch (error) {
    console.error(error);
  }

  return (
    <div>
      <div>word-cloud</div>
    </div>
  );
}
