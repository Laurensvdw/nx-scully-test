import { ScullyConfig } from '@scullyio/scully';
import './scully/plugins/about-plugin';
import './scully/plugins/blogs-plugin';

export const config: ScullyConfig = {
  projectRoot: "./apps/test1/src",
  projectName: "test1",
  outDir: './dist/static',
  routes: {
    '/about/:id': {
      type: 'aboutIds',
    },
    '/blogs/:id': {
      type: 'blogIds',
    },
  },
};
