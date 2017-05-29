import Vue from 'vue'
import Router from 'vue-router'
import Indexnone from '@/components/index/Indexnone'
import Indexf from '@/components/index/Indexf'
import Indexh from '@/components/index/Indexh'
import Indexhf from '@/components/index/Indexhf'
import Dongtai from '@/components/dongtai/Dongtai'
import Fuxing from '@/components/fuxing/Fuxing'
import Goumai from '@/components/goumai/Goumai'
import Hanfuxin from '@/components/hanfuxin/Hanfuxin'
import Jianyi from '@/components/jianyi/Jianyi'
import Liaotian from '@/components/liaotian/Liaotian'
import Wode from '@/components/wode/Wode'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'default',
    // component: Indexnone
    redirect: '/indexnone'
  }, {
    path: '/indexnone',
    name: 'Indexnone',
    component: Indexnone,
    children: [{
      path: 'indexnone/hanfuxin',
      name: 'Hanfuxin',
      component: Hanfuxin
    }]
  }, {
    path: '/indexf',
    name: 'Indexf',
    component: Indexf,
    children: [{
      path: '/indexf/jianyi',
      name: 'Jianyi',
      component: Jianyi
    }, {
      path: '/indexf/goumai',
      name: 'Goumai',
      component: Goumai
    }, {
      path: '/indexf/wode',
      name: 'Wode',
      component: Wode
    }]
  }, {
    path: '/indexh',
    name: 'Indexh',
    component: Indexh
  }, {
    path: '/indexhf',
    name: 'Indexhf',
    component: Indexhf,
    children: [{
      path: '/indexhf/dongtai',
      name: 'Dongtai',
      component: Dongtai
    }, {
      path: '/indexhf/liaotian',
      name: 'Liaotian',
      component: Liaotian
    }, {
      path: '/indexhf/fuxing',
      name: 'Fuxing',
      component: Fuxing
    }]
  }]
})
