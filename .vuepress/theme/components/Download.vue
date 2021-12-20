<template>
    <!-- Organize Sales-->
    <MyTransition :delay="0.04" class="downpage">
      <!-- Content-->
      <div class="content-wrapper-area bg-white d-flex justify-content-between align-items-center">
        <!-- Content-->
        <div class="main-content" style="margin-top: 220px">
          <div class="container">
            <div class="row justify-content-between align-items-center">
              <div class="col-12 col-md-5"><img src="/assets/img/bg-img/download.jpg" style="width:600px;height: 450px" alt=""></div>
              <div class="col-12 col-md-6">
                <h2>快速开始你的下载</h2>
                <div style="margin-top: 20px">
                  当前版本：v1.0.0 &nbsp;&nbsp;更新日志
                </div>
                <div style="margin-top: 20px">
                  <img src="https://img.shields.io/github/stars/streamxhub/streamx.svg?sanitize=true"
                       class="wow fadeInUp" data-wow-delay="0.4s">
                  <img src="https://img.shields.io/github/forks/streamxhub/streamx.svg?sanitize=true"
                       class="wow fadeInUp" data-wow-delay="0.4s">
                </div>
                <a class="btn streamx-btn btn-blue mt-30" href="https://github.com/streamxhub/streamx" target="_blank"
                   data-wow-delay="0.4s">
                  <i class="lni-download"></i>&nbsp;立即下载
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MyTransition>
</template>

<style lang="css" scoped>
@import "Main.css";
</style>

<script>
import MyTransition from '@theme/components/MyTransition.vue'
export default {
  name: "Main",
  components: {MyTransition},
  data() {
    return {

    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {

  },
}
</script>
