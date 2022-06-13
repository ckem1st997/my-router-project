<template>
  <!-- CSS animation example -->
  <notifications group="foo-css" position="top center" :speed="500" />

  <div class="row" style="margin-top: 100px"></div>
  <section class="show-image container-fluid">
    <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
      <div class="cardTemplate">
        <div class="row d-flex">
          <div class="col-lg-6">
            <div class="card1 pb-5">
              <div
                class="row px-3 justify-content-center mt-4 mb-5 border-line"
              >
                <img src="https://i.imgur.com/uNGdWHi.png" class="image" />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card2 card border-0 px-4">
              <div class="row mb-4 px-3">
                <h6 class="mb-0 mr-4 mt-2 mb-3" style="padding: 0">
                  Đăng nhập
                </h6>
                <div class="facebook text-center mr-3">
                  <div class="fa fa-facebook"></div>
                </div>
                <div class="twitter text-center mr-3">
                  <div class="fa fa-twitter"></div>
                </div>
                <div class="linkedin text-center mr-3">
                  <div class="fa fa-linkedin"></div>
                </div>
              </div>
              <div class="row px-3 mb-4">
                <div class="line"></div>
                <small class="or text-center">Or</small>
                <div class="line"></div>
              </div>
              <div class="row px-3">
                <label class="mb-1">
                  <h6 class="mb-0 text-sm">Địa chỉ email</h6>
                </label>
                <input
                  class="mb-4"
                  type="text"
                  name="email"
                  v-model.lazy="email"
                  placeholder="Nhập email của bạn ..."
                />
              </div>
              <div class="row px-3">
                <label class="mb-1">
                  <h6 class="mb-0 text-sm">Mật khẩu</h6>
                </label>
                <input
                  type="password"
                  name="password"
                  v-model.lazy="password"
                  placeholder="Nhập mật khẩu"
                />
              </div>
              <div class="row px-3 mb-4">
                <div
                  class="custom-control custom-checkbox custom-control-inline"
                >
                  <input
                    id="chk1"
                    type="checkbox"
                    v-model="remember"
                    name="chk"
                    class="custom-control-input"
                  />
                  <label for="chk1" class="custom-control-label text-sm"
                    >Ghi nhớ</label
                  >
                </div>
                <a href="#" class="mb-0 text-sm p-0 pt-1 text-danger"
                  >Quên mật khẩu?</a
                >
              </div>
              <div class="row mb-3 px-3">
                <button
                  type="submit"
                  v-on:click="signIn"
                  class="btn btn-blue text-center"
                >
                  Đăng nhập
                </button>
              </div>
              <div class="row mb-4 p-1">
                <small class="font-weight-bold"
                  >Bạn chưa có tài khoản
                  <router-link :to="{ name: 'Regitster' }">
                    Đăng ký ngay
                  </router-link>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div style="margin-top: 50px"></div>
</template>

<script>
import LoginService from "../service/Login";
import axios from "axios";
// phần của Cảnh
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      remember: false,
    };
  },
  loginService: null,
  created() {
    this.loginService = new LoginService();
  },
  methods: {
    async signIn() {
      const { email, password, remember } = this;
      const result = {
        username: email,
        password: password,
        remember,
      };
      // gọi hàm login từ file Login
      await this.loginService
        .Login(result)
        .then((data) => {
          console.log(data);

          // check token, nếu tồn tại thì lưu vào local
          if (data.data.token) {
            localStorage.setItem("access_token", data.data.token);
            localStorage.setItem("id_user", data.data.id);

            //
            this.show("foo-css", "success", "Đăng nhập thành công nha !");
            this.successRedirect();
          } else this.show("foo-css", "warn", data.data);
        })
        .catch((error) => {
          console.log(error);
          this.show(
            "foo-css",
            "warn",
            "Tên tài khoản hoặc mật khẩu không chính xác !"
          );
        });
    },
    successRedirect() {
      setTimeout(() => {
        const redirectTo = this.$route.query.redirectTo || { name: "Home" };
        this.$router.push(redirectTo);
      }, 1000);
    },
    show(group, type = "", title = "") {
      const text = `Ngày đặt: ${new Date()}`;
      this.$notify({
        group,
        title: `${title}`,
        text,
        type,
        data: {
          randomNumber: Math.random(),
        },
      });
    },
    clean(group) {
      this.$notify({ group, clean: true });
    },
  },
};
</script>

<style scoped>
body {
  color: #000;
  overflow-x: hidden;
  height: 100%;
  background-color: #b0bec5;
  background-repeat: no-repeat;
}

.card0 {
  box-shadow: 0px 4px 8px 0px #757575;
  border-radius: 0px;
}

.card2 {
  margin: 0px 40px;
}

.image {
  width: 360px;
  height: 280px;
}

.border-line {
  border-right: 1px solid #eeeeee;
}

.facebook {
  background-color: #3b5998;
  color: #fff;
  font-size: 18px;
  padding-top: 5px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
}

.twitter {
  background-color: #1da1f2;
  color: #fff;
  font-size: 18px;
  padding-top: 5px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
}

.linkedin {
  background-color: #2867b2;
  color: #fff;
  font-size: 18px;
  padding-top: 5px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
}

.line {
  height: 1px;
  width: 45%;
  background-color: #e0e0e0;
  margin-top: 10px;
}

.or {
  width: 10%;
  font-weight: bold;
}

.text-sm {
  font-size: 14px !important;
}

::placeholder {
  color: #bdbdbd;
  opacity: 1;
  font-weight: 300;
}

:-ms-input-placeholder {
  color: #bdbdbd;
  font-weight: 300;
}

::-ms-input-placeholder {
  color: #bdbdbd;
  font-weight: 300;
}

input,
textarea {
  padding: 10px 12px 10px 12px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin-bottom: 5px;
  margin-top: 2px;
  width: 100%;
  box-sizing: border-box;
  color: #2c3e50;
  font-size: 14px;
  letter-spacing: 1px;
}

input:focus,
textarea:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border: 1px solid #304ffe;
  outline-width: 0;
}

button:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline-width: 0;
}

a {
  color: inherit;
  cursor: pointer;
}

.btn-blue {
  background-color: #1a237e;
  width: 150px;
  color: #fff;
  border-radius: 2px;
}

.btn-blue:hover {
  background-color: #000;
  cursor: pointer;
}

.bg-blue {
  color: #fff;
  background-color: #1a237e;
}

@media screen and (max-width: 991px) {
  .logo {
    margin-left: 0px;
  }

  .image {
    width: 300px;
    height: 220px;
  }

  .border-line {
    border-right: none;
  }

  .card2 {
    border-top: 1px solid #eeeeee !important;
    margin: 0px 15px;
  }
}

/* EXAMPLES */
.notification.n-light {
  margin: 10px;
  margin-bottom: 0;
  border-radius: 3px;
  font-size: 13px;
  padding: 10px 20px;
  color: #495061;
  background: #eaf4fe;
  border: 1px solid #d4e8fd;
}
.notification.n-light .notification-title {
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 10px;
  color: #2589f3;
}
.custom-template {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  text-align: left;
  font-size: 13px;
  margin: 5px;
  margin-bottom: 0;
  align-items: center;
  justify-content: center;
  background: #e8f9f0;
  border: 2px solid #d0f2e1;
}
.custom-template,
.custom-template > div {
  box-sizing: border-box;
}
.custom-template .custom-template-icon {
  flex: 0 1 auto;
  color: #15c371;
  font-size: 32px;
  padding: 0 10px;
}
.custom-template .custom-template-close {
  flex: 0 1 auto;
  padding: 0 20px;
  font-size: 16px;
  opacity: 0.2;
  cursor: pointer;
}
.custom-template .custom-template-close:hover {
  opacity: 0.8;
}
.custom-template .custom-template-content {
  padding: 10px;
  flex: 1 0 auto;
}
.custom-template .custom-template-content .custom-template-title {
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 600;
}
.v-fade-left-enter-active,
.v-fade-left-leave-active,
.v-fade-left-move {
  transition: all 0.5s;
}
.v-fade-left-enter,
.v-fade-left-leave-to {
  opacity: 0;
  transform: translateX(-500px) scale(0.2);
}
.vue-notification {
  margin: 0 5px 5px;
  padding: 10px;
  font-size: 12px;
  color: #fff;
  background: #44a4fc;
  border-left: 5px solid #187fe7;
}
.vue-notification.success {
  background: #68cd86;
  border-left-color: #42a85f;
}
.vue-notification.warn {
  background: #ffb648;
  border-left-color: #f48a06;
}
.vue-notification.error {
  background: #e54d42;
  border-left-color: #b82e24;
}
</style>
