import Vue from 'vue';
import App from 'src/app';

describe('App.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><app></app></div>',
      components: { App }
    }).$mount();
    expect(vm.$el.querySelector('h1').textContent).to.contain('sls-use-vue-ui');
    expect(vm.$el.querySelector('p').textContent).to.contain('使用测试的vueui');
  });
});
