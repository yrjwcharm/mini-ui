<template>
  <div class="write-box">
      <div class="main">
        <p style=" height: 44px;line-height: 44px;">
          <span style="margin-left: 20px;font-size: 12px;color: #999">*请填写真实信息,以免影响您就诊</span>
        </p>
        <p class="list-row clearFloat">
          <span style="float:left;">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</span>
          <input  type="text" style="float: right ;text-align: right" v-model="name" placeholder="请填写正确的姓名">
        </p>
        <p class="list-row clearFloat">
          <span style="float:left;">身份证号</span>
          <input  type="text" style="float: right ;text-align: right" v-model="name" placeholder="请填写真实身份证号">
        </p>
        <div class="list-row clearFloat">
          <span style="float:left;">关&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;系</span>
          <p style="float: right">
          <input readonly   type="text" style=" height: 42px; text-align:right; font-size: 14px;" v-model="name" placeholder="请选择就诊人关系">
            <img src="@/assets/forward.svg" style="margin-left: 4px; width: 9px;height:16px;">
         </p>
        </div>
        <p class="list-row clearFloat">
          <span style="float:left;">选择地址</span>
          <img src="@/assets/location.png" style="position:relative; top:10px; float: right; width: 14px;height:18px;">
        </p>
        <p class="list-row" style="display: flex;flex:1">
          <input readonly   type="text" style="flex:1;font-size: 14px;" v-model="name" placeholder="详细地址：如道路、门牌号、小区、楼栋号、单元室">
        </p>
        <p class="list-row clearFloat" style="display: flex;flex:1">
          <span style="float:left;">手机号码</span>
          <input  type="tel"  style=" flex:1;float: right ;text-align: center" v-model="name" placeholder="请填写正确手机号用于接收短信通知">
        </p>
        <div class="list-item">
          <p>
            <span style="color: #333;font-size: 14px;">图片验证码</span>
            <input type="number" style="flex:1;text-align: center; font-size: 14px;" placeholder="请输入图片验证码">
         </p>
          <p class="code-view">
<!--            <img :src="imgCode" alt="" class="img-code">-->
          </p>
        </div>
        <p v-if="isDefault" class="list-item" style="margin-top: 10px">
          <span style="color:#3299FF;font-size: 14px;">设为默认就诊人</span>
          <van-switch v-model="checked" :size="20"  active-color="#3299ff"/>
        </p>
      </div>
  </div>
</template>

<script>
import {reactive, toRefs} from "vue";

export default {
  name: "Write",
  props:{
    isDefault:{
      type:Boolean,
      default: false
    }
  },
  setup(){
    const state = reactive({
      name:'',
      idCard:'',
      phone:'',
      imgCode:null,
      checked:true,
    })

    return {
      ...toRefs(state),
    }

  }
}
</script>

<style scoped lang="less">
@import "../common/style/mixin.less";

  .write-box{
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  .list-row{
      font-size: 14px;
      padding: 0 20px 0 20px;
      height: 44px;
      background: #fff;
      line-height: 44px;
      border-bottom:  1px solid #eee;
      //.border-1px(#333)
  }
  .main{
    display: flex;
    flex-direction: column;
    flex:1;
  }
  .list-item{
    height: 44px;
    line-height: 44px;
    background: #fff;
    .fj();
    flex:1;
    padding: 0 20px 0 20px;
    border-bottom:  1px solid #eee;
    align-items: center;

  }
.code-view{
  border: 1px dashed #3299FF;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92px;
}
.img-code{
  height: 30px;
  border: 0;
  width: 90px;
}
</style>
