import React from 'react';

export interface IDashboardViewController {
  context: any;
  userAccount: any;
  setUserAccount: React.Dispatch<React.SetStateAction<any>>;
}
