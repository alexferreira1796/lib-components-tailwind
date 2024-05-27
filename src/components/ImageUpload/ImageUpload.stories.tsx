import React, { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { ImageUpload, ImageProps } from './index';

const meta: Meta<typeof ImageUpload> = {
  title: 'Components/ImageUpload',
  component: ImageUpload,
};
export default meta;

const Template: StoryFn<typeof ImageUpload> = (args) => {
  const [images, setImages] = useState<ImageProps[]>(args.images || []);
  return <ImageUpload {...args} images={images} setImages={setImages} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Upload Images',
  required: false,
  multiple: true,
  images: [],
};

export const SingleImage = Template.bind({});
SingleImage.args = {
  label: 'Upload a Single Image',
  required: true,
  multiple: false,
  images: [],
};

export const WithImages = Template.bind({});
WithImages.args = {
  label: 'Upload Images',
  required: false,
  multiple: true,
  images: [
    {
      file: new File([], 'image1.png'),
      preview: 'https://via.placeholder.com/150',
    },
    {
      file: new File([], 'image2.png'),
      preview: 'https://via.placeholder.com/150',
    },
  ],
};
