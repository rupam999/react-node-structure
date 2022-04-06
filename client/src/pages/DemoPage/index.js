import React, { useState } from 'react';
import getDummyData from '../../api/getDummyData';
import Button from '../../components/Button';

const DemoPage = () => {
  const [paragraph, setParagraph] = useState('');
  const [loading, setLoading] = useState(false);

  const showDummyData = async () => {
    setLoading(true);
    try {
      const response = await getDummyData();
      if (response !== -1) {
        setParagraph(response);
      } else {
        setParagraph('Error');
        console.log('Error while getting the data');
      }
    } catch (error) {
      console.log('Error at showDummyDataFunction', error);
    }
    setLoading(false);
  };

  return (
    <div>
      <Button onClick={showDummyData}>Click Me</Button>
      {loading && !paragraph ? <p>Loading</p> : <p>{paragraph}</p>}
    </div>
  );
};

export default DemoPage;
