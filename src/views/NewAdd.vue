<template>
  <div class="add-box">
    <sHeader name="就诊人" :noback="false"/>
    <div class="main">
      <van-tabs   color="#3299ff"  title-active-color="#3299ff"   :line-height="2" title-inactive-color="black"   :animated="true" v-model:active="active">
        <van-tab  title="成人">
            <write :isDefault="true"/>
        </van-tab>
        <van-tab  title="儿童">
          <write :isDefault="false"/>
        </van-tab>
      </van-tabs>
    </div>
    <div class="footer">
      <div style="display: flex;height:40px;background: #3299ff;" @click="save">
        <span style="margin: auto;font-size: 16px;color: #FFFFFF;">提交</span>
      </div>
    </div>
  </div>
</template>

<script>
import sHeader from '@/components/SimpleHeader'
import write from '@/components/Write'
import {ref} from 'vue';
export default {
name: "NewAdd",
  components:{
    sHeader,
    write
  },
  setup() {
    const active = ref(0);
    const save=()=>{

    }
    return {
      save,
      active
    };
  },
}
</script>

<style scoped>
  .add-box{
    display: flex;
    flex: 1;
    flex-direction: column;
    background: #f5f6f9;
  }
  .main{
    display: flex;
    flex-direction: column;
    flex:1;
  }
  .footer{
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: flex-end;
  }
</style>
