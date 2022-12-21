<template>
  <div class="form">
    <div class="title">Sign Up</div>
    <div class="inputs-form">
      <InputForm></InputForm>
      <InputForm></InputForm>
      <InputForm></InputForm>
    </div>
    <div class="button">
      <ButtonForm :name="'sign up'"></ButtonForm>
      <div class="already" @click="handleDirectLogin">
        Already have an account?
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
    handleDirectLogin() {
      this.$router.push({ name: "LogIn" });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  margin-top: 98px;
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
    margin-bottom: 33px;
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
    }
    .already:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>
