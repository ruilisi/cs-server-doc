export default {
  ssr: {},
  hash: true,
  title: 'dumi',
  mode: 'site',
  favicon: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
  menus: {
    '/zh-CN/guide': [
      {
        title: '介绍',
        children: ['guide/index', 'guide/getting-started'],
      },
      {
        title: '管理员工作台',
        children: [
          'guide/manager-dashboard',
          'guide/manager-develop',
          'guide/manager-agent',
          'guide/manager-statistic',
          'guide/manager-usage',
          'guide/manager-price',
          'guide/manager-templates',
        ],
      },
      {
        title: '客服工作台',
        children: [
          
        ],
      },
      {
        title: '开发指南',
        children: [],
      },
      {
        title: '其他',
        children: [],
      },
    ],
    '/guide': [
      {
        title: 'Introducation',
        children: [],
      },
      {
        title: 'How to write a demo',
        children: [],
      },
      {
        title: 'Control and generate',
        children: [
        ],
      },
      {
        title: 'More usage',
        children: [],
      },
      {
        title: 'Others',
        children: [],
      },
    ],
  },
  navs: {
    'en-US': [
      null,
      { title: 'GitHub', path: 'https://github.com/umijs/dumi' },
      { title: 'Changelog', path: 'https://github.com/umijs/dumi/releases' },
    ],
    'zh-CN': [
      null,
      { title: 'GitHub', path: 'https://github.com/umijs/dumi' },
      { title: '更新日志', path: 'https://github.com/umijs/dumi/releases' },
    ],
  },
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
  scripts: ['https://v1.cnzz.com/z_stat.php?id=1278653578&web_id=1278653578'],
  analytics: {
    ga: 'UA-128069695-2',
  },
  styles: ['a[title=站长统计] { display: none; }'],
  exportStatic: {},
  sitemap: {
    hostname: 'https://d.umijs.org',
  },
};
