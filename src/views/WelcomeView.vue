<template>
  <div class="welcome">
    <Transition name="fade">
      <LoadingApp class="loading" v-if="isLoading"></LoadingApp>
    </Transition>
    <div v-if="!isLoading" class="welcome-screen">
      <div class="overlay">
        <button class="skip" @click="handleDirectLogin">Skip</button>
        <div class="welcome-to">Welcome to <span>FoodHub</span></div>
        <div class="description">
          Your favourite foods delivered fast at your door.
        </div>
        <SocialLogin :socialLogin="socialLogin"></SocialLogin>
        <div class="button-login-email" @click="startOnboarding">
          Start with email or phone
        </div>
        <div class="have-account">
          Already have an account? <span>Sign In</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingApp from "@/components/LoadingApp";
import SocialLogin from "@/components/SocialLogin";

export default {
  name: "WelcomeView",
  components: {
    LoadingApp,
    SocialLogin,
  },
  data() {
    return {
      isLoading: true,
      socialLogin: {
        buttons: [
          { id: 1, name: "facebook", class: "facebook" },
          { id: 2, name: "google", class: "google" },
        ],
        title: " sign in with",
      },
    };
  },
  created() {
    this.setLoading();
  },
  methods: {
    setLoading() {
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
    startOnboarding() {
      this.$router.push({ name: "OnBoarding" });
    },
    handleDirectLogin() {
      this.$router.push({ name: "LogIn" });
    },
  },
};
</script>
<style lang="scss" scoped>
.welcome {
  height: 100%;
  .loading {
    position: absolute;
  }
  .welcome-screen {
    background-image: url("@/assets/welcome-background.svg");
    height: 100%;
    .overlay {
      background: linear-gradient(
        179.79deg,
        rgba(73, 77, 99, 0) 38.82%,
        #191b2f 101.9%
      );
      height: 100%;
      font-weight: 700;
      font-size: 53px;
      line-height: 120%;
      padding: 0px 27px 0 30px;
      .skip {
        margin-top: 20px;
        background: #ffffff;
        box-shadow: 17.8734px 17.8734px 35.7469px rgba(211, 209, 216, 0.25);
        border-radius: 27.4059px;
        padding: 10px 14px 11px;
        color: #fe724c;
        border: none;
        cursor: pointer;
        margin-left: 262px;
      }
      .welcome-to {
        margin-top: 120px;
        color: #111719;
        span {
          color: #fe724c;
        }
      }
      .description {
        font-weight: 500;
        font-size: 18px;
        line-height: 150%;
        color: #30384f;
        opacity: 0.87;
        width: 266px;
        margin-bottom: 187px;
      }
      .button-login-email {
        font-weight: 500;
        font-size: 17px;
        line-height: 17px;
        text-align: center;
        color: #fefefe;
        background: rgba(255, 255, 255, 0.3);
        border: 1px solid #ffffff;
        border-radius: 30px;
        padding: 18px 0px 19px 0px;
        margin-top: 23px;
        cursor: pointer;
      }
      .have-account {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 14px;
        color: #fefefe;
        text-align: center;
        margin-top: 28px;
        span {
          text-decoration: underline;
          cursor: pointer;
          font-weight: 500;
        }
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
