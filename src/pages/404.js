import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

const NotFound = () => {
  useEffect(() => {
    navigate('/');
  }, []);

  return <></>;
};

export default NotFound;
