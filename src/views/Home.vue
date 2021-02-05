<template>
  <div class="home-box">
    <sHeader name="就诊人"/>
    <div class="main">
      <div class="list-row-layout">
        <div class="list-row">
          <div>
            <p style="font-size: 14px;">
              <span>金灿灿</span>
              <span class="decoration">本人</span>
              <span style="margin-left: 6px;color: #3299ff;">(默认)</span>
            </p>
            <p style="color: #999; margin-top: 10px">142601199412139117</p>
          </div>
          <img src="@/assets/forward.svg" style="width: 9px;height:17px;">
        </div>
      </div>
      <div style="display: flex; margin-top: 20px">
        <p class="add" @click="newAdd">
          <span style="margin: auto;">+新增就诊人</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import sHeader from '@/components/SimpleHeader'
import {useRouter} from "vue-router";
export default {
 name: "Home",
  props:{

  },
  components:{
   sHeader
  },
  setup(){
   const router  = useRouter();
    const goTo = (r, query) => {
      router.push({ path: r, query: query || {} })
    }
   const newAdd=()=>{
      goTo('/add',{})
   }
   return{
     newAdd
   }
  }
}
</script>

<style scoped lang="less">
@import '../common/style/mixin';
.home-box{
  display: flex;
  flex-direction: column;
  flex:1;
  background: #f5f6f9;
}
.decoration{
  margin-left: 6px;
  border-radius: 3px;
  color: #3299ff;
  background: #E1F0FF;
  padding:2px 4px 2px 4px;
}

.list-row-layout{
  display: flex;
  height: 80px;
  background: #fff;
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: column;
  justify-content: center;
  .border-1px(#eee);
}
.add{
  width: 160px;
  height:40px;
  font-size: 14px;
  color: #3299ff;
  border: 1px solid rgba(50,153,255,17);
  border-radius: 40px;
  margin: auto;
  background: #fff;
  display: flex;
}
.list-row{
   .fj();
   align-items: center;
}
</style>
