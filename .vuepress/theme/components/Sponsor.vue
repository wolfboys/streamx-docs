<template>
  <!-- Organize Sales-->
  <MyTransition :delay="0.04" class="downpage">
    <!-- Content-->
      <div class="content-wrapper-area ripple bg-white d-flex justify-content-between align-items-center">
        <div class="overlay"></div>
        <!-- Content-->
        <div class="main-content" style="margin-top: 90px">
          <div class="container">
            <div class="col-12">
              <!-- Section Heading-->
              <div class="section_heading text-center">
                <div style="font-size: 2.5rem;margin-bottom: 1px;margin-top: 10px;color: #000000d9">帮我们做的更好</div>
                <div class="line" style="width: 300px;margin-top: 10px;margin-bottom: 10px;"></div>
              </div>
            </div>
            <div class="row justify-content-between align-items-center">
              <div class="col-12 sponsor-text">
                &nbsp;&nbsp;&nbsp;&nbsp;StreamX 是采用 Apache LICENSE 2.0 许可的开源项目, 旧时王谢堂前燕,飞入寻常百姓家,让大公司有能力研发使用的项目,现在人人都可以使用.
                流批一体,湖仓一体,数据湖是大数据领域的趋势,

                &nbsp;&nbsp;StreamX 虽离这个目标还有一段距离,但我们始终坚信: 道阻且长,行则将至,行而不辍,未来可期。我们是一帮认真做开源的人,没有噱头没有套路。
                能够坚持开源是一件非常不容易的事情，如果您正在使用它们，适当的打赏赞助是很有必要的，用爱发电不是一件可以持久的事情，为了您的项目能够持续使用它们，那么请作者喝一杯咖啡吧。
                每笔捐助我们都会显示出来,供项目的开发社区的建设使用, 同时也欢迎企业捐助, 我们会在新版发布时鸣谢, 感谢支持!
              </div>
              <div class="col-12" style="margin-top: 100px;text-align: center">
                <img src="./assets/img/wechatPay.png" width="200px">
                <img src="./assets/img/aliPay.png" width="200px" style="margin-left: 20px;">
              </div>
            </div>
          </div>
        </div>
        <div class="content-wrapper-end">
        </div>
      </div>
  </MyTransition>
</template>

<style lang="css" scoped>
@import "Main.css";
.content-wrapper-area {
  background-color: #FFFFFF;
  background-size: 100% auto,100% auto;
}
.main-content {
  font-weight: 500;
  color: #FFFFFF;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.sponsor-text {
  font-size: 1rem;
  line-height: 2.5rem;
  color: #000000d9;
}
</style>

<script>
import MyTransition from '@theme/components/MyTransition.vue'

export default {
  name: "Sponsor",
  components: {MyTransition},
}
</script>


