<template>
  <div class="login-container">
    <div class="home">
      <div class="racingLoader-wrap">
        <div class="title">
          <div class="tip">RONALDOXZB SERVE IS <span>RUNING</span></div>
        </div>
        <svg viewBox="0 0 178 40" width="178" height="20">
          <!-- dash included behind the car
          ! be sure to delay the animation of the path after the dashes on the right side of the car
            -->
          <path
            class="air"
            d="M 46 16.5 h -20 a 8 8 0 0 1 0 -16"
            fill="none"
            stroke="#E85725"
            stroke-width="1"
            stroke-linejoin="round"
            stroke-linecap="round"
          />

          <!-- wrap the svg describing the car in a group
          this to translate the car horizontally within the wrapping svg
            -->
          <g id="car">
            <!-- svg describing the race car in a container 118 wide and 28.125 tall
              .125 due to the 2.25 width of the stroke
      
              position in the bottom center of the wrapping svg
              -->
            <svg
              viewBox="0 0 118 28.125"
              x="30"
              y="11.725"
              width="118"
              height="28.125"
            >
              <defs>
                <!-- circle repeated for the wheel -->
                <circle id="circle" cx="0" cy="0" r="1" />
                <!-- wheel
                      three overlapping circles describing the parts of the wheel
                      in between the circles add path elements to detail the graphic
                  -->
                <g id="wheel">
                  <use href="#circle" fill="#1E191A" transform="scale(10)" />
                  <use href="#circle" fill="#ee2c79" transform="scale(5)" />
                  <!-- inner shadow -->
                  <path
                    fill="#1E191A"
                    stroke="#1E191A"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    opacity="0.2"
                    stroke-dashoffset="0"
                    d="M -3.5 0 a 4 4 0 0 1 7 0 a 3.5 3.5 0 0 0 -7 0"
                  />
                  <use href="#circle" fill="#1E191A" transform="scale(1.5)" />
                  <!-- yellow stripe
                          include stroke-dasharray values totalling the circumference of the circle
                          this to use the dash-offset property and have the stripe rotate around the center while keeping its shape
                          ! explicitly set the stroke-dashoffset property to 0 for the other path elements (in this way the stroke-dashoffset attribute added through the <use> element affects only this path)
                    -->
                  <path
                    fill="none"
                    stroke="#F9B35C"
                    stroke-width="0.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="20 14 8 5"
                    d="M 0 -7.5 a 7.5 7.5 0 0 1 0 15 a 7.5 7.5 0 0 1 0 -15"
                  />
                  <!-- outer glow (from a hypothetical light source) -->
                  <path
                    fill="none"
                    stroke="#fff"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    opacity="0.1"
                    stroke-dashoffset="0"
                    d="M -6.5 -6.25 a 10 10 0 0 1 13 0 a 9 9 0 0 0 -13 0"
                  />
                </g>
              </defs>
              <!-- group describing the pilot's helmet
                  translate in the middle of the cockpit
                -->
              <g transform="translate(51.5 11.125)">
                <path
                  stroke-width="2"
                  stroke="#1E191A"
                  fill="#EF3F33"
                  d="M 0 0 v -2 a 4.5 4.5 0 0 1 9 0 v 2"
                />
                <rect fill="#1E191A" x="3.25" y="-3" width="5" height="3" />
              </g>

              <!-- group describing the car -->
              <g transform="translate(10 24.125)">
                <!-- shadow below the car
                      ! change the transform-origin of the shadow to animate it from the top center
                      the idea is to skew the shadow as the car moves
                  -->
                <g transform="translate(59 0)">
                  <path
                    id="shadow"
                    opacity="0.7"
                    fill="#1E191A"
                    d="M -64 0 l -4 4 h 9 l 8 -1.5 h 100 l -3.5 -2.5"
                  />
                </g>
                <!-- path describing the frame of the car
                      ! do not add a stroke at the bottom of the frame
                      additional lines are overlapped to detail the belly of the vehicle
                  -->
                <path
                  fill="#009c6a"
                  stroke="#1E191A"
                  stroke-width="2.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M 0 0 v -10 l 35 -13 v 5 l 4 0.5 l 0.5 4.5 h 35.5 l 30 13"
                />

                <!-- wings -->
                <g
                  fill="#fff"
                  stroke="#1E191A"
                  stroke-width="2.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M -6 0 v -22 h 10 z" />
                  <path d="M 105 0 h -3 l -12 -5.2 v 6.2 h 12" />
                </g>

                <!-- grey areas to create details around the car's dashes -->
                <g fill="#949699" opacity="0.7">
                  <rect x="16" y="-6" width="55" height="6" />
                  <path d="M 24 -14 l 13 -1.85 v 1.85" />
                </g>

                <!-- dashes included sparingly on top of the frame -->
                <g
                  fill="none"
                  stroke="#1E191A"
                  stroke-width="2.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke-dasharray="30 7 42" d="M 90 0 h -78" />
                  <path d="M 39.5 -13 h -15" />
                </g>

                <!-- elements describing the side of the car -->
                <path
                  fill="#fff"
                  stroke="#1E191A"
                  stroke-width="2.25"
                  stroke-linejoin="round"
                  d="M 48.125 -6 h -29 v 6 h 29"
                >
                  <!-- .125 to tuck the path behind the rectangle and avoid a pixel disconnect as the svg is scaled -->
                </path>

                <rect
                  x="48"
                  y="-7.125"
                  width="6.125"
                  height="7.125"
                  fill="#1E191A"
                />

                <!-- rear view mirror -->
                <g fill="#1E191A">
                  <rect x="60" y="-15" width="1" height="6" />
                  <rect x="56.5" y="-17.5" width="6" height="2.5" />
                </g>
              </g>

              <!-- group describing the wheels, positioned at the bottom of the graphic and at either end of the frame -->
              <g class="wheels" transform="translate(0 18.125)">
                <g transform="translate(10 0)">
                  <use href="#wheel" />
                </g>

                <g transform="translate(87 0)">
                  <!-- add an offset to rotate the yellow stripe around the center -->
                  <use href="#wheel" stroke-dashoffset="-22" />
                </g>
              </g>
            </svg>
          </g>

          <!-- dashes included above and around the race car
          ! include them in order from right to left
          this allows to rapidly assign an increasing delay in the script, to have the dashes animated in sequence
            -->
          <g
            fill="none"
            stroke-width="1"
            stroke-linejoin="round"
            stroke-linecap="round"
          >
            <!-- right side -->
            <path
              class="air"
              stroke="#E85725"
              d="M 177.5 34 h -10 q -16 0 -32 -8"
            />

            <path
              class="air"
              stroke="#949699"
              d="M 167 28.5 c -18 -2 -22 -8 -37 -10.75"
            />

            <path class="air" stroke="#949699" d="M 153 20 q -4 -1.7 -8 -3" />

            <path
              class="air"
              stroke="#E85725"
              d="M 117 16.85 c -12 0 -12 16 -24 16 h -8"
            >
              <!-- around (117 29.85) where the right wheel is centered -->
            </path>

            <!-- left side -->
            <path class="air" stroke="#949699" d="M 65 12 q -5 3 -12 3.8" />

            <path
              class="air"
              stroke="#949699"
              stroke-dasharray="9 10"
              d="M 30 13.5 h -2.5 q -5 0 -5 -5"
            />

            <path class="air" stroke="#949699" d="M 31 33 h -10" />

            <path class="air" stroke="#949699" d="M 29.5 23 h -12" />
            <path class="air" stroke="#949699" d="M 13.5 23 h -6" />

            <path class="air" stroke="#E85725" d="M 28 28 h -27.5" />
          </g>
        </svg>
        <el-form
          ref="loginForm"
          :model="loginForm"
          :rules="loginRules"
          class="login-form"
          auto-complete="on"
          label-position="left"
        >
          <el-form-item prop="username">
            <span class="svg-container">
              <svg-icon icon-class="user" />
            </span>
            <el-input
              ref="username"
              v-model="loginForm.username"
              placeholder="Username"
              name="username"
              type="text"
              tabindex="1"
              auto-complete="on"
            />
          </el-form-item>

          <el-form-item prop="password">
            <span class="svg-container">
              <svg-icon icon-class="password" />
            </span>
            <el-input
              :key="passwordType"
              ref="password"
              v-model="loginForm.password"
              :type="passwordType"
              placeholder="Password"
              name="password"
              tabindex="2"
              auto-complete="on"
              @keyup.enter.native="handleLogin"
            />
            <span class="show-pwd" @click="showPwd">
              <svg-icon
                :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
              />
            </span>
          </el-form-item>

          <el-button
            :loading="loading"
            type="primary"
            style="width:100%;margin-bottom:30px;"
            @click.native.prevent="handleLogin"
            >Login</el-button
          >
        </el-form>
      </div>
      <div class="footer-bar">
        <p>
          <a
            href="http://beian.miit.gov.cn/"
            target="_blank"
            rel="external nofollow"
            >浙ICP备2021018538号-2</a
          >
        </p>
        <p>
          <a
            href="https://github.com/ronaldoxzb/"
            target="_blank"
            rel="external nofollow"
            >CREATE BY RONALDOXZB</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!value) {
        callback(new Error("Please enter the  user name"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error("Password can not be less than 5 digits"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "admin",
        password: ""
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword }
        ]
      },
      loading: false,
      passwordType: "password",
      redirect: undefined
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("user/login", this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || "/" });
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss">
$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

.home {
  height: 100vh;
  width: 100vw;
  background: #333030;
}

.racingLoader-wrap {
  display: grid;
  justify-content: center;
  align-content: space-between;
  width: 100%;
  height: 80%;
}

.racingLoader-wrap > svg {
  width: 55vw;
  height: auto;
  --stroke-dash: 46;
  --stroke-dash-negative: -46;
  margin: 0 auto;
}

/* on the svg element set up a default value for the --stroke-dash and --stroke-dash-negative attributes
46 roughly being the length of the longest path.air
*/

/* animate the car to move slightly forwards and backwards */
g#car {
  transform: translateX(-3px);
  animation: translate 2s ease-in-out infinite;
}

/* animate the shadow to skew  toward the left */
path#shadow {
  animation: skew 2s ease-in-out infinite;
}

/* animate the wheels to spin  clockwise*/
g.wheels use {
  animation: rotate 2s linear infinite;
}

/* animate the dashes of air to briefly show them and then hide them from view */
path.air {
  /* starting from the values described by the --stroke-dash property
  ! the property is updated for each path in the script
  */
  stroke-dasharray: var(--stroke-dash);
  stroke-dashoffset: var(--stroke-dash);
  /* ! the delay of the animation is also set up in the script  */
  animation: offset 2s linear infinite;
  /* opacity to hide the obnoxious dots otherwise shown on firefox and edge */
  opacity: 0;
}

/* keyframe animations
! be sure to have the animations overlap as to show a realistic behavior
- as the car moves right the wheels spin faster, the shadow skews left, the dashes of air appear in sequence
- as the car moves left the wheels spin slower while the shadow returns to its resting place
*/
@keyframes translate {
  50% {
    transform: translateX(3px);
  }

  100% {
    transform: translateX(-3px);
  }
}

@keyframes skew {
  50% {
    transform: skewX(-20deg);
  }
}

@keyframes rotate {
  50% {
    transform: rotate(4turn);
  }

  100% {
    transform: rotate(6turn);
  }
}

/* beside animating the stroke-dashoffset property rapidly change the opacity to show the dashes and hide them when they are removed by changing the offset property
otherwise the dashes would still be partially visible on firefox and edge (at least)
*/
@keyframes offset {
  1% {
    opacity: 1;
  }

  15% {
    stroke-dashoffset: 0;
    opacity: 1;
  }

  24% {
    opacity: 1;
  }

  25% {
    opacity: 0;
    /* ! on chrome and firefox the calc() function allows to compute the negative value, but Edge seems to prefer having another variable instead */
    /* stroke-dashoffset: calc(var(--stroke-dash) * -1px); */
    stroke-dashoffset: var(--stroke-dash-negative);
  }

  100% {
    stroke-dashoffset: var(--stroke-dash-negative);
  }
}

.title {
  text-align: center;
  color: #d9d9d9;
  display: flex;
  font-size: 30px;
  margin: 0 auto;
  width: 90%;
  flex-flow: column;
  align-items: center;
  margin-top: 100px;
}
.head {
  width: 100%;
  font-size: 30px;
  text-align: center;
  margin: 20px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

.head > a {
  text-decoration: none;
  color: #009c6a;
}

.tip > span {
  color: #009c6a;
}
.footer-bar {
  p {
    margin: 10px auto;
    font-size: 14px;
    width: 80%;
    display: block;
  }
  text-align: center;
  margin: 3% auto;

  width: 80%;
  line-height: 14px;
  overflow: hidden;
  font-family: Avenir, Chinese Quote, -apple-system, BlinkMacSystemFont,
    Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue,
    Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-variant: tabular-nums;
}
.footer-bar a {
  color: hsla(0, 0%, 100%, 0.65);
  margin-left: 4px;
}
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 60%;
    margin: 0 auto;
    margin-top: 20px;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
