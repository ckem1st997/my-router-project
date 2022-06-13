<template>
  <div class="wrapper">
    <div class="sidebar">
      <div class="user">
        <img alt="Vue logo" src="../assets/logo.png" class="img_logo" />
        <div class="logo">
          <p>Nguyễn Thu Trang</p>
          <p>hihahoho123@gmail.com</p>
        </div>
      </div>
      <div>
        <ul class="item-sidebar">
          <li><a href="">Hồ sơ của tôi</a></li>
          <li><a href="">Đơn hàng của tôi</a></li>
          <li><a href="">Số địa chỉ</a></li>
          <li><a href="">Hạng thành viên</a></li>
          <li><a href="">Nhiệm vụ</a></li>
          <li><a href="">Vouchers</a></li>
          <li><a href="">Nhận xét của tôi</a></li>
          <li><a href="">Sản phẩm yêu thích</a></li>
          <li><a href="">Thông báo</a></li>
          <li><a href="">Kiểm tra đơn hàng</a></li>
          <li><a href="">Đổi mật khẩu</a></li>
          <li>
            <button v-on:click="dx" class="btn btn-danger">Đăng xuất</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <h3>Hồ sơ của tôi</h3>
      <form>
        <div class="item-form">
          <label for="">Họ và tên</label>
          <input
            :value="name"
            type="text"
            placeholder="Nhập họ và tên"
          />
        </div>
        <div class="item-form">
          <label for="">Email</label>
          <input type="email" :value="email" placeholder="Nhập email" />
        </div>
        <div class="item-form">
          <label for="">Số điện thoại</label>
          <input
            :value="mobile"
            type="text"
            placeholder="Nhập số điện thoại"
          />
        </div>
        <div class="item-form">
          <label for="">Địa chỉ</label>
          <input type="text" :value="dc" placeholder="Nhập địa chỉ" />
        </div>
        <!-- <div class="item-form gender">
          <label for="" class="d-block">Giới tính</label>
          <input type="radio" name="gender" value="male" />
          <label for="">Nữ</label>
          <input type="radio" name="gender" value="female" class="female" />
          <label for="">Nam</label>
          <input type="radio" name="gender" value="genderless" class="female" />
          <label for="">Giới tính khác</label>
        </div>
        <div class="item-form">
          <label for="">Ảnh đại diện</label>
          <input type="file" name="image" />
        </div> -->
        <button type="">Hủy bỏ</button>
        <button>Xác nhận</button>
      </form>
    </div>
  </div>
</template>


<script>
import axios from "axios";
// phần của Trang
export default {
  data: () => ({
    name: "",
    dc: "",
    mobile: 0,
    email: "",
    count: 1,
    info: null,
  }),
  components: {},
  async created() {
    // lấy token
    const checkau = localStorage.getItem("access_token");
    // lấy id user
    const checkuser = localStorage.getItem("id_user");
    // tạo chuỗi xác thực để gửi đến serve
    const AuthStr = "Bearer ".concat(checkau);
    const url = "http://apivuejs.somee.com/accountapi/User/" + checkuser + "";
    // call api từ url và send token để xác thực bằng phương thức get
    await axios
      .get(url, { headers: { Authorization: AuthStr } })
      // gán dữ liệu trả về vào các biến
      .then((res) => {
        // nếu dữ liệu khác null thì gán, hông thì thôi
        (this.name = res.data.name ?? res.data.name);
        this.email = res.data.email ?? res.data.email;
        this.dc = res.data.address ?? res.data.address;
        this.mobile = res.data.mobile ?? res.data.mobile;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    dem() {
      this.count = this.count + 1;
    },
    dx() {
      localStorage.removeItem("access_token");
      localStorage.removeItem("id_user");
      this.$router.push("/");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #30221f;
  /* margin-top: 60px; */
}
h3 {
  color: rgb(26, 26, 26);
}
/* img {
  width: 128px;
  height: 78px;
  margin-right: 10%;
} */

.wrapper {
  width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
}
.sidebar {
  width: 25%;
}
.content {
  width: 65%;
}
.img_logo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 10px;
}
.wrapper p,
h3 {
  margin: unset;
}
.content h3 {
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
}

.item-form {
  margin: 30px 0;
}
.item-form label {
  display: block;
  font-weight: 600;
  margin-bottom: 5px;
}
.item-form input {
  width: 100%;
  padding: 10px;
  outline: none;
}
.gender input {
  width: unset;
}
.gender label {
  display: inline;
}
.gender .d-block {
  display: block;
}
.female {
  margin-left: 30px;
}
.content button {
  padding: 10px 30px;
  border: 1px solid rgb(75, 74, 74);
  color: rgb(75, 74, 74);
  background: #ffffff;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 17px;
  font-weight: 600;
}
.content button:hover {
  background: rgb(248, 140, 149);
  color: #ffffff;
}
.user {
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(128, 128, 128);
}
.item-sidebar {
  padding: 0;
}
.item-sidebar li {
  padding: 8px 5px;
  list-style: none;
}
.item-sidebar li a {
  text-decoration: none;
  color: black;
  font-size: 16px;
}
.item-sidebar li:hover a {
  color: rgb(248, 140, 149);
}
</style>
