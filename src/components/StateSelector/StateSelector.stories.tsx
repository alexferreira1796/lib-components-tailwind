import React, { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import StateSelector from './index';

const meta: Meta<typeof StateSelector> = {
  title: 'Components/StateSelector',
  component: StateSelector,
};
export default meta;

const Template: StoryFn<typeof StateSelector> = (args) => {
  const [selectedState, setSelectedState] = useState<string>(args.selectedState || '');
  return <StateSelector {...args} selectedState={selectedState} setSelectedState={setSelectedState} />;
};

export const Default = Template.bind({});
Default.args = {
  selectedState: '',
};

export const WithSelectedState = Template.bind({});
WithSelectedState.args = {
  selectedState: 'sp',
};
