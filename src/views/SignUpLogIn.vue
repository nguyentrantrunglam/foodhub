<template>
  <div class="container">
    <div class="content">
      <div
        class="back-button"
        v-if="enableBackButton"
        @click="handleDirectWelcome"
      ></div>
      <SignUpForm v-if="!enableBackButton"></SignUpForm>
      <LoginForm v-else></LoginForm>
    </div>
    <div class="footer">
      <SocialLogin :socialLogin="socialLogin"></SocialLogin>
    </div>
  </div>
</template>

<script>
import SocialLogin from "@/components/SocialLogin";
import SignUpForm from "@/components/SignUpForm";
import LoginForm from "@/components/LoginForm";

export default {
  components: {
    SocialLogin,
    SignUpForm,
    LoginForm,
  },
  data() {
    return {
      socialLogin: {
        buttons: [
          { id: 1, name: "facebook", class: "facebook" },
          { id: 2, name: "google", class: "google" },
        ],
        title: " Or sign up with",
      },
    };
  },
  computed: {
    enableBackButton() {
      return this.$route.name == "LogIn";
    },
  },
  methods: {
    handleDirectWelcome() {
      this.$router.push({ name: "welcome" });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0px 25px 0px 26px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .back-button {
    height: 38px;
    width: 38px;
    background: #393948;
    border-radius: 10px;
    background-image: url("@/assets/ArrowLeft.svg");
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    margin-top: 37px;
    margin-bottom: 7px;
  }
  .footer {
    margin-bottom: 28px;
  }
}
</style>
