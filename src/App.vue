<template>
  <div id="app">
    <router-view class="router-view" v-slot="{ Component }">
      <transition :name="transitionName">
        <keep-alive>
          <component :is="Component" v-if="$route.meta.keepAlive"/>
        </keep-alive>
      </transition>
    </router-view>
    <router-view class="router-view" v-slot="{ Component }">
      <transition :name="transitionName">
        <component :is="Component" v-if="!$route.meta.keepAlive"/>
      </transition>
    </router-view>
  </div>
</template>

<script>
import {reactive, toRefs} from 'vue'
import {useRouter} from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const state = reactive({
      transitionName: 'slide-left'
    })
    router.beforeEach((to, from) => {
      if (to.meta.index > from.meta.index) {
        state.transitionName = 'slide-left' // 向左滑动
      } else if (to.meta.index < from.meta.index) {
        // 由次级到主级
        state.transitionName = 'slide-right'
      } else {
        state.transitionName = ''   // 同级无过渡效果
      }
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>
<style lang="less">
//html, body {
//  height: 100%;
//  overflow-x: hidden;
//  overflow-y: scroll;
//}

.router-view {
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: 0 auto;
  -webkit-overflow-scrolling: touch;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  height: 100%;
  will-change: transform;
  transition: all 500ms;
  position: absolute;
  backface-visibility: hidden;
}

.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
