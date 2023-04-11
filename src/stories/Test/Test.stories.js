import { Test } from './Test';

export default {
	title: 'hj/Test',
	component: Test,
	args: {
    title: '테스트',
  }
};

export const Primary = {
  args: {
    primary: true,
    title: '테스트 첫번째',
  }
};

export const Secondary = {
  args: {
    Secondary: true,
    title: '테스트 두번째',
  }
};