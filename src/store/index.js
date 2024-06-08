import { createStore } from 'vuex';
import robotsModule from './modules/robots';
import usersModule from './modules/users';

export default createStore({
  state: {
    foo: 'robot-foo',
  },
  modules: {
    robots: robotsModule,
    users: usersModule,
  },
});
