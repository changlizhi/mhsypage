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
import Containerf from '@/components/container/Containerf'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/containerf',
    component: Containerf
  }, {
    path: '/',
    name: 'default',
    // component: Indexnone
    redirect: '/indexnone'
  }, {
    path: '/indexnone',
    name: 'Indexnone',
    component: Indexnone,
    redirect: '/indexnone/hanfuxin',
    children: [{
      path: 'hanfuxin',
      component: Hanfuxin
    }]
  }, {
    path: '/indexf',
    name: 'Indexf',
    component: Indexf,
    redirect: '/indexf/jianyi',
    children: [{
      path: 'jianyi',
      component: Jianyi
    }, {
      path: 'goumai',
      component: Goumai
    }, {
      path: 'wode',
      component: Wode
    }]
  }, {
    path: '/indexh',
    name: 'Indexh',
    component: Indexh
  }, {
    path: '/indexhf',
    component: Indexhf,
    redirect: '/indexhf/dongtai',
    children: [{
      path: 'dongtai',
      component: Dongtai
    }, {
      path: 'liaotian',
      component: Liaotian
    }, {
      path: 'fuxing',
      component: Fuxing
    }]
  }]
})
