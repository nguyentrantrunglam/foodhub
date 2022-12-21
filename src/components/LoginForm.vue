<template>
  <div class="form">
    <div class="title">Login</div>
    <div class="inputs-form">
      <InputForm></InputForm>
      <InputForm></InputForm>
    </div>
    <div class="forgot">Forgot password?</div>
    <div class="button">
      <ButtonForm :name="'login'"></ButtonForm>
      <div class="already">
        Don’t have an account? <span @click="handleDirectSignUp">Sign Up</span>
      </div>
    </div>
  </div>
</template>

<script>
import InputForm from "@/components/InputForm";
import ButtonForm from "@/components/ButtonForm";

export default {
  components: {
    InputForm,
    ButtonForm,
  },
  methods: {
    handleDirectSignUp() {
      this.$router.push({ name: "SignUp" });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  margin-top: 105px;
  .title {
    font-weight: 600;
    font-size: 36.4127px;
    line-height: 120%;
    color: #ffffff;
    margin-bottom: 31px;
  }
  .inputs-form {
    display: flex;
    flex-direction: column;
    gap: 29px;
    margin-bottom: 19px;
  }
  .forgot {
    margin-bottom: 45px;
    text-align: right;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    text-align: right;
    color: #adadb8;
    cursor: pointer;
  }
  .button {
    display: flex;
    flex-direction: column;
    align-items: center;
    .already {
      margin-top: 33px;
      font-weight: 500;
      font-size: 14px;
      line-height: 14px;
      text-align: center;
      color: #adadb8;
      span {
        color: #fe724c;
        cursor: pointer;
        font-weight: 600;
      }
    }
    // .already:hover {
    //   text-decoration: underline;
    //   cursor: pointer;
    // }
  }
}
</style>
