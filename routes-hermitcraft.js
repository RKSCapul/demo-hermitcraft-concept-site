const index_url = '/posts/hermitcraft-concept-site/demo';

const routesHermitcraft = [
  {
    path: `${index_url}/`,
    name: 'hermitcraft-concept-site-demo',
    meta: { layout: 'hermitcraft'},
    component: require('./pages/index.vue').default,
  },
  {
    path: `${index_url}/hermit/:username`,
    name: 'hermitcraft-concept-site-demo-profile',
    meta: { layout: 'hermitcraft'},
    component: require('./pages/hermit.vue').default,
    props: true,
  },
  {
    path: `${index_url}/livestream`,
    name: 'hermitcraft-concept-site-demo-livestream',
    meta: { layout: 'hermitcraft'},
    component: require('./pages/livestream-day.vue').default,
  },
];

export default routesHermitcraft;