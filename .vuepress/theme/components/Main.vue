<template>
  <section class="coverpage">
    <MyTransition :delay="0.04">

      <section class="hero-barishal welcome_area">

        <vue-particles
            color="#3f43fd"
            :particle-opacity="0.6"
            :particles-number="40"
            shape-type="circle"
            :particle-size="4"
            lines-color="#3f43fd"
            :lines-width="1"
            :line-linked="true"
            :line-opacity="0.4"
            :lines-distance="100"
            :move-speed="5"
            :hover-effect="true"
            hover-mode="grab"
            :click-effect="true"
            click-mode="push"/>

        <!-- Background Shape-->
        <div class="background-shapes">
          <div class="box1"></div>
          <div class="box2"></div>
          <div class="box3"></div>
          <div class="dot1"></div>
          <div class="dot2"></div>
          <div class="dot3"></div>
          <div class="dot4"></div>
          <div class="heart1"><i class="lni-heart"></i></div>
          <div class="heart2"><i class="i lni-heart"></i></div>
          <div class="circle1"></div>
          <div class="circle2"></div>
        </div>
        <div class="container h-100">
          <div class="row h-100 justify-content-between align-items-center">
            <div class="col-12 col-md-6">
              <div class="welcome_text_area">
                <h2 class="wow fadeInUp" data-wow-delay="0.2s">
                  <span>StreamX ──</span><br>
                  <span>A magical framework<br>make Flink & Spark easier!</span>
                </h2>
                <h5 class="wow fadeInUp" data-wow-delay="0.3s">
                  The original intention of StreamX is to make the development of Flink easier. provide a one-stop big data solution integrating stream processing, batch processing, data warehouse and data laker.
                </h5>
                <a class="btn streamx-btn btn mt-30" href="https://github.com/streamxhub/streamx" target="_blank"
                   data-wow-delay="0.4s">
                  <i class="lni-github-original"></i>&nbsp;GitHub
                </a>
                <a class="btn streamx-btn btn-purple mt-30 ml-2" href="https://gitee.com/streamxhub/streamx" target="_blank" data-wow-delay="0.4s"
                   style="margin-left: 15px;">
                  <img src="/streamx-docs/assets/icon/gitee.png" class="icon-gitee" >&nbsp;Gitee
                </a>
                <a class="btn streamx-btn btn-green mt-30 ml-2" href="../../../streamx-docs/doc/guide/intro/" data-wow-delay="0.4s"
                   style="margin-left: 15px;">
                  <i class="lni-play"></i>&nbsp;Start
                </a>
                <div style="margin-top: 20px">
                  <a href="https://www.apache.org/licenses/LICENSE-2.0.html">
                    <img src="https://img.shields.io/badge/license-Apache%202-4EB1BA.svg" class="wow fadeInUp" data-wow-delay="0.4s">
                  </a>
                  <img src="https://img.shields.io/github/stars/streamxhub/streamx.svg?sanitize=true"
                       class="wow fadeInUp" data-wow-delay="0.4s">
                  <img src="https://img.shields.io/github/forks/streamxhub/streamx.svg?sanitize=true"
                       class="wow fadeInUp" data-wow-delay="0.4s">
                  <img src="https://img.shields.io/github/downloads/streamxhub/streamx/total"
                       class="wow fadeInUp" data-wow-delay="0.4s">
                  <img src="https://img.shields.io/github/languages/count/streamxhub/streamx"
                       class="wow fadeInUp" data-wow-delay="0.4s">
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="welcome_area_thumb text-center" data-wow-delay="0.2s">
                <a href="https://gitee.com/gvp" target="_blank"><img src="/streamx-docs/assets/img/core-img/gvp2021.png" alt=""></a>
                <a class="video_btn video-btn" style="display: none" href="/streamx-docs/assets/video/streamx-video.mp4" data-wow-delay="0.5s">
                  <i class="lni-play"></i>
                  <span class="video-sonar"></span>
                </a>
              </div>
            </div>
            </div>
        </div>
      </section>
    </MyTransition>

    <MyTransition>
      <section class="showcode_area" id="showcode" style="background-color:#F5F5DE;height: 1050px;">
        <!-- Benefit Top Background-->
        <div class="container" style="margin-top: 80px">

          <div class="row justify-content-center">
            <div class="col-12 col-sm-8 col-lg-6">
              <!-- Section Heading-->
              <div class="section_heading text-center wow fadeInUp" data-wow-delay="0.2s" style="margin-bottom: 15px;">
                <h3>Development scaffold</h3>
                <div class="line"></div>
                <div class="organize-your-sales-content text-center mb-5">
                  <span style="font-size: 25px;">simplicity, efficiently. make development easier</span>
                </div>
              </div>
            </div>
          </div>

          <div class="row justify-content-between" style="padding:50px 0;">
            <!-- Single Work Step-->
            <div class="col-12 col-sm-4 col-md-3">
              <div class="single_work_step">
                <div class="step-icon shadow"><i class="lni-code"></i></div>
                <h5>Write code</h5>
                <p>Start developing code quickly using the streamx</p>
              </div>
            </div>
            <!-- Single Work Step-->
            <div class="col-12 col-sm-4 col-md-3">
              <div class="single_work_step">
                <div class="step-icon shadow"><i class="lni-bug"></i></div>
                <h5>Local Debug</h5>
                <p>Pass in the job configuration,Start the job and quickly debug the code</p>
              </div>
            </div>
            <!-- Single Work Step-->
            <div class="col-12 col-sm-4 col-md-3">
              <div class="single_work_step single_work_step_last">
                <div class="step-icon shadow"><i class="lni-bolt-alt"></i></div>
                <h5>Deployment Job</h5>
                <p>Deployment job to streamx-console to facilitate and quickly manage job</p>
              </div>
            </div>
          </div>

          <div class="row h-100 justify-content-between align-items-center">
            <div class="col-12 col-md-6">
              <div class="code-container" style="height: 350px;">
                <img src="/streamx-docs/assets/img/core-img/code.png"  class="shadow" width="90%">
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="welcome_area_thumb text-center" data-wow-delay="0.2s">
                <img src="/streamx-docs/assets/img/core-img/hero-image.svg" alt="">
              </div>
            </div>
          </div>

        </div>
      </section>
    </MyTransition>

    <MyTransition :delay="0.04">
      <section class="using_benefits_area section_padding_100" id="benefits">
        <!-- Benefit Top Background-->
        <div class="benefit-top-thumbnail"><img src="/streamx-docs/assets/img/core-img/video-bottom.png" alt=""></div>
        <!-- Benefit Top Background-->
        <div class="benefit-bottom-thumbnail"><img src="/streamx-docs/assets/img/core-img/benefit-bottom.png" alt=""></div>
        <div class="container">

          <div class="row justify-content-center">
            <div class="col-12 col-sm-8 col-lg-6">
              <!-- Section Heading-->
              <div class="section_heading white text-center wow fadeInUp" data-wow-delay="0.2s">
                <h3>Product Superiority</h3>
                <div class="line"></div>
              </div>
            </div>
          </div>

          <div class="row" v-if="$frontmatter.features && $frontmatter.features.length">
            <!-- Single Benifits Area-->
            <div class="col-12 col-sm-6 col-lg-4"
                 v-for="(feature, index) in $frontmatter.features"
                 :key="index">
              <div class="single_benifits d-flex wow fadeInUp" data-wow-delay="200ms">
                <div class="icon_box"><i :class="feature.icon"></i></div>
                <div class="benifits_text">
                  <h5>{{ feature.title }}</h5>
                  <p>{{ feature.details }}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </MyTransition>

    <!-- Organize Sales-->
    <MyTransition :delay="0.04">
      <section class="organize-your-sales section_padding_130_80">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-sm-8 col-lg-6">
              <!-- Section Heading-->
              <div class="section_heading text-center">
                <h3>One-stop platform</h3>
                <div class="line"></div>
                <div class="organize-your-sales-content text-center mb-5">
                  <p style="font-size: 25px;">one-stop big data platform</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="organize-your-sales-thumb">
                <div class="slider-box">
                    <swiper class="swiper"
                            ref="mySwiper"
                            style="margin-left: 40px;width: calc(100% - 80px)"
                            :options="swiperOption">
                      <swiper-slide v-for="(item,index) in swiperImage" :key="'swiper-img-'.concat(index)">
                        <img :src="item" style="border: 2px solid rgba(7, 10, 87, 0.1);box-shadow: 0 2px 15px 3px rgba(7, 10, 87, 0.1)">
                      </swiper-slide>
                    </swiper>
                    <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev" @click="handleSwiper(-1)"></div>
                    <div class="swiper-button-next" slot="button-next" @click="handleSwiper(1)"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Support Button-->
        <div class="support-button text-center d-flex align-items-center justify-content-center mt-4 wow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-text" viewBox="0 0 16 16">
          <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
          <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
        </svg>
          <p class="mb-0 px-2"><a href="https://github.com/streamxhub/streamx/issues">遇到问题?</a></p>
        </div>
      </section>
    </MyTransition>

  </section>
</template>

<style lang="css" scoped>
@import "Main.css";
</style>

<script>
import MyTransition from '@theme/components/MyTransition.vue'
import NavLink from '@theme/components/Navbar/NavLink.vue'
import {navigate} from '@theme/util/navigate'
import {Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'
//import * as monaco from 'monaco-editor'
export default {
  name: "Main",
  components: {MyTransition, NavLink, Swiper, SwiperSlide, directive},
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperIndex: 0,
      swiperImage: [
          '/streamx-docs/assets/img/core-img/streamx-theme.png',
          '/streamx-docs/assets/img/core-img/streamx-flinksql.png',
          '/streamx-docs/assets/img/core-img/flameGraph.jpg',
      ],
      swiperOption: {
        loop: true,
        allowSlideNext: true,
        allowSlidePrev: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar'
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }
      },
    }
  },
  computed: {
    actionLinks() {
      const {action} = this.$frontmatter;
      if (Array.isArray(action))
        return action;
      return [action];
    },
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    this.$nextTick(()=>{
      setInterval(()=>{
        this.swiper.slideNext(2000, false)
      },5000)
    })
    this.showCode()
  },
  methods: {
    navigate(link) {
      navigate(link, this.$router, this.$route);
    },
    handleSwiper(index) {
      if (index === 1) {
        this.swiper.slideNext(2000, false)
      } else {
        this.swiper.slidePrev(2000, false)
      }
    }
  },
}
</script>
