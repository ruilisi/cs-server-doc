export default {
  ssr: {},
  hash: true,
  title: 'chatIM',
  mode: 'site',
  favicon: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
  menus: {
    '/guide': [
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
          'guide/manager-history',
          'guide/manager-templates',
        ],
      },
      {
        title: '客服工作台',
        children: [
          'guide/agent-dashboard',
          'guide/agent-chat',
          'guide/agent-history',
          'guide/agent-statistic',
          'guide/agent-templates',
        ],
      },
      {
        title: '个人中心',
        children: [
          'guide/personal-messages',
          'guide/personal-settings',
          'guide/personal-billings',
          'guide/personal-codes',
        ],
      },
      {
        title: '其他',
        children: [],
      },
    ],
    '/en-US/guide': [
      {
        title: 'Introducation',
        children: ['guide/index', 'guide/getting-started'],
      },
      {
        title: 'Manager',
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
        title: 'Agent',
        children: [
          'guide/agent-dashboard',
          'guide/agent-chat',
          'guide/agent-history',
          'guide/agent-statistic',
          'guide/agent-templates',
        ],
      },
      {
        title: 'Personal',
        children: [
          'guide/personal-messages',
          'guide/personal-settings',
          'guide/personal-billings',
          'guide/personal-codes',
        ],
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
      { title: 'Buy Now！', path: 'https://github.com/ruilisi/cs-server-doc' },
    ],
    'zh-CN': [
      null,
      { title: '立刻体验！', path: 'https://github.com/ruilisi/cs-server-doc' },
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
  locales: [['zh-CN', '中文'], ['en-US', 'English'], ['ch-CN-TW','繁体中文']],
};
