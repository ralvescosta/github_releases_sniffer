import React from 'react';
import {SettingsScreen} from './presenter/settings.screen';
import {SettingsViewController} from './interfaces/settings.view.controller';

export const SettingsModule = () => {
  const settingsViewController = new SettingsViewController();
  return <SettingsScreen viewController={settingsViewController} />;
};
