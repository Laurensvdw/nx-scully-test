import { HandledRoute, registerPlugin } from "@scullyio/scully"

function blogIdPlugin(route: string, config = {}): Promise<HandledRoute[]> {
  return Promise.resolve([
    { route: '/blogs/testing' },
    { route: '/blogs/testing-bananas' }
  ]);
}

registerPlugin('router', 'blogIds', blogIdPlugin);
