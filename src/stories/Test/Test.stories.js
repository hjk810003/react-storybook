import { Test } from './Test';

export default {
	title: 'hj/Test',
	component: Test,
	tags: ['autodocs'],
  argTypes: {}
};

export const Primary = {
  args: {
    title: '테스트 첫번째',
  }
};

export const Secondary = {
  args: {
    title: '테스트 두번째',
  }
};