import { HandledRoute, registerPlugin } from "@scullyio/scully"

function aboutIdPlugin(route: string, config = {}): Promise<HandledRoute[]> {
  return Promise.resolve([
    { route: '/about/4' },
    { route: '/about/5' },
    { route: '/about/6' },
    { route: '/about/7' },
    { route: '/about/8' },
  ]);
}

registerPlugin('router', 'aboutIds', aboutIdPlugin);
