<template>
  <main class="cart mt-3 mb-3">
    <!-- CSS animation example -->
    <notifications group="foo-css" position="top center" :speed="500" />

    <!-- Velocity animation example -->
    <notifications
      group="foo-velocity"
      position="bottom right"
      animation-type="velocity"
      :speed="500"
    />

    <!-- Custom template example -->
    <notifications
      group="custom-template"
      :duration="5000"
      :width="500"
      animation-name="v-fade-left"
      position="top left"
    />
    <h3 class="text-center">Giỏ hàng</h3>
    <div class="cart-info container-fluid">
      <div class="row">
        <div class="list-cart col-12 col-sm-8 container">
          <h5>Cart - {{ ListCart.length }} items</h5>
          <hr />
          <div v-for="item in ListCart" :key="item">
            <div class="row mb-3" :id="'cart' + item.id">
              <div class="cart-product container col-12 col-lg-9">
                <div class="row">
                  <div class="info col-6">
                    <img
                      routerLink="/products/{{item.productID}}/{{slugify(item.name)}}"
                      :src="
                        'http://res.cloudinary.com/imageshared/image/upload/c_scale,f_auto,h_226,q_90,w_226/v1/' +
                        item.image
                      "
                    />
                  </div>
                  <div class="thongso col-6">
                    <p
                      class="fw-bold"
                      routerLink="/products/{{item.productID}}"
                    >
                      {{ item.name }}
                    </p>
                    <p v-if="item.color != null">
                      Color: <span>{{ item.color }}</span>
                    </p>
                    <p v-if="item.size != null">
                      Size: <span>{{ item.size }}</span>
                    </p>
                    <p>
                      Price: <span>{{ item.price }}$</span>
                    </p>
                    <button
                      class="ml-0 btn-primary btn"
                      type="button"
                      color="primary"
                      v-on:click="deleteItemCart(item.id)"
                    >
                      <i class="fas fa-trash"></i>
                    </button>
                    <button class="btn-pink btn" type="button">
                      <i class="fas fa-heart"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="count-product col-5 col-lg-3 mt-2">
                <!-- <button type="button" class="" (click)="truCart($event)">-</button> -->
                <div class="md-form md-outline quantity">
                  <!-- <label for="form1">Số lượng</label> -->
                  <input
                    type="number"
                    id="quantityinput"
                    class="form-control"
                    :value="item.count"
                  />
                </div>
                <!-- <button type="button" (click)="congCart($event)">+</button> -->
                <button
                  type="button"
                  :data-value="item.id"
                  v-on:click="updatequantity"
                  class="w-100 ml-0 btn btn-success"
                  style="padding: 10px"
                >
                  <i class="fa-cart-plus me-1 fas"></i>Cập nhật
                </button>
              </div>
            </div>
            <hr :id="'hr' + item.id" />
          </div>

          <!-- <div class="row">
          <div class="cart-product container col-12 col-lg-9">
            <div class="row">
              <div class="info col-6">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(37).jpg" />
              </div>
              <div class="thongso col-6">
                <p class="fw-bold">Blue denim shirts</p>
                <p>Color: <span>blue</span></p>
                <p>Size: <span>M</span></p>
                <p>Price: <span>19.99$</span></p>
                <button  class="ml-0" type="button" color="primary" >
                  <i fas icon="trash"></i>
                </button>
                <button  type="button" color="pink" >
                  <i fas icon="heart"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="count-product d-flex col-6 col-lg-3">
            <button type="button" class="" (click)="truCart($event)">-</button>
              <div class="md-form md-outline quantity">
                <input type="number" id="form1" class="form-control" mdbInput [value]="1">
                <label for="form1">Số lượng</label>
              </div>
              <button type="button" (click)="congCart($event)">+</button>
          </div>
        </div>

        <hr>
        <div class="row">
          <div class="cart-product container col-12 col-lg-9">
            <div class="row">
              <div class="info col-6">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(38).jpg" />
              </div>
              <div class="thongso col-6">
                <p class="fw-bold">Blue denim shirts</p>
                <p>Color: <span>blue</span></p>
                <p>Size: <span>M</span></p>
                <p>Price: <span>19.99$</span></p>
                <button  class="ml-0" type="button" color="primary" >
                  <i fas icon="trash"></i>
                </button>
                <button  type="button" color="pink" >
                  <i fas icon="heart"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="count-product d-flex col-6 col-lg-3">
            <button type="button" class="" (click)="truCart($event)">-</button>
            <div class="md-form md-outline quantity">
              <input type="number" id="form1" class="form-control" mdbInput [value]="1">
              <label for="form1">Số lượng</label>
            </div>
            <button type="button" (click)="congCart($event)">+</button>
          </div>
        </div> -->
        </div>
        <div class="Summary col-12 col-sm-4">
          <h5>Summary</h5>
          <hr />
          <div class="sum-price">
            <p>
              Tổng tiền: <span>{{ SumPrice }}đ</span>
            </p>
            <p>
              Phí ship:
              <span>{{ SumPrice > 500000 ? 0 : 30000 }}đ</span>
            </p>
            <hr />
            <p class="tt">
              Thanh toán (Đã bao gồm VAT)<span
                >{{ SumPrice > 500000 ? SumPrice : SumPrice + 30000 }}đ</span
              >
            </p>
            <hr />
            <button type="button" class="w-100 ml-0 btn btn-success">
              <i class="fa-cart-plus me-1 fas"></i>THANH TOÁN
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>

  <notifier-container></notifier-container>
</template>
<script>
// phần của Hiếu
import CartService from "../service/Cart";
import axios from "axios";
export default {
  data: () => ({
    ListCart: [],
    SumPrice: 0,
    // lấy ra id của cart được tạo bởi Hợp
    idCart: localStorage.getItem("idCart"),
  }),
  cartService: null,
  async created() {
    // tạo một đối tượng mới
    this.cartService = new CartService();
    // call api từ url với tham số truyền vào là idcart để lấy ra danh sách sản phẩm có trong giỏ hàng
    const url = "http://apigate.somee.com/";
    await axios
      .get(url + "api/Carts/" + this.idCart + "")
      .then((data) => {
        this.ListCart = data.data;
        // tính tổng tiền từ dữ liệu mà API trả về
        data.data.forEach((element) => {
          this.SumPrice += element.price * element.count;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    updatequantity(evt) {
      //  console.log(id)
      //  console.log(evt.target.getAttribute("data-value"));
      //  console.log(evt.target.parentNode.children[0].children[0].value);
      const id = evt.target.getAttribute("data-value");
      const sl = evt.target.parentNode.children[0].children[0].value;
      const data = this.ListCart.find((x) => x.id == id);
      if (data) {
        const temp = this.SumPrice - data.price * data.count;
        data.count = sl;
        if (confirm("Bạn có muốn cập nhật !"))
          this.cartService.updateCart(id, data).then((response) => {
            // console.log(response)
            if (response) {
              this.show("foo-css", "success", "Cập nhật thành công nha !");
              this.SumPrice = temp + data.count * data.price;
            } else this.show("foo-css", "warn", "Cập nhật thất bại nha !");
          });
      }
    },
    deleteItemCart(id) {
      if (confirm("Bạn có muốn xoá sản phẩm này hông !"))
        this.cartService.deleteItemCart(id).then((response) => {
          if (response) {
            const temp = this.ListCart.find((x) => x.id == id);
            if (temp) this.SumPrice -= temp.price * temp.count;
            this.show("foo-css", "success", "Xoá thành công nha !");
            var del = document.getElementById("cart" + id + "");
            del?.remove();

            document.getElementById("hr" + id + "").remove();
          } else this.show("foo-css", "warn", "Xoá thất bại nha !");
        });
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
@media (max-width: 768px) {
  .cart .cart-info {
    font-size: 12px !important;
  }
}
.cart .cart-info .list-cart .cart-product .thongso button {
  padding: 7px 20px 7px 20px !important;
  font-size: 23px !important;
}
.cart .cart-info .list-cart .cart-product .thongso p span {
  font-weight: 600;
}
.cart .cart-info .Summary .sum-price p {
  display: flex;
  justify-content: space-between;
}
.cart .cart-info .Summary .sum-price p span {
  font-weight: bold;
}
.cart .cart-info .Summary .sum-price p.tt {
  font-weight: bold;
}
.btn-success {
  background-color: #00c851 !important;
  color: #fff;
}
.btn {
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
  padding: 0.84rem 2.14rem;
  font-size: 0.81rem;
  transition: all 0.2s ease-in-out;
  margin: 0.375rem;
  border: 0;
  border-radius: 0.125rem;
  cursor: pointer;
  text-transform: uppercase;
  white-space: normal;
  word-wrap: break-word;
  color: white;
}
.count-product .quantity {
  margin-top: 0;
  margin-left: 5px;
  margin-right: 5px;
}
.md-form.md-outline {
  position: relative;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
.md-form {
  margin-bottom: 2rem;
}
.md-form {
  position: relative;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
.md-form.md-outline input[type="date"],
.md-form.md-outline input[type="datetime-local"],
.md-form.md-outline input[type="email"],
.md-form.md-outline input[type="number"],
.md-form.md-outline input[type="password"],
.md-form.md-outline input[type="search-md"],
.md-form.md-outline input[type="search"],
.md-form.md-outline input[type="tel"],
.md-form.md-outline input[type="text"],
.md-form.md-outline input[type="time"],
.md-form.md-outline input[type="url"],
.md-form.md-outline textarea.md-textarea {
  transition: all 0.3s;
  outline: none;
  box-shadow: none;
  border: 1px solid #dadce0;
  border-radius: 4px;
  background-color: initial;
  box-sizing: border-box;
}
.md-form.md-outline .form-control {
  padding: 0.375rem 0.75rem;
}
.md-form input[type="date"],
.md-form input[type="datetime-local"],
.md-form input[type="email"],
.md-form input[type="number"],
.md-form input[type="password"],
.md-form input[type="search-md"],
.md-form input[type="search"],
.md-form input[type="tel"],
.md-form input[type="text"],
.md-form input[type="time"],
.md-form input[type="url"],
.md-form textarea.md-textarea {
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  outline: none;
  box-shadow: none;
  border: none;
  border-bottom: 1px solid #ced4da;
  border-radius: 0;
  box-sizing: initial;
  background-color: initial;
}
.md-form .form-control {
  margin: 0 0 0.5rem;
  border-radius: 0;
  padding: 0.6rem 0 0.4rem;
  background-color: initial;
  height: auto;
}

.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
button,
input {
  overflow: visible;
}
button,
input,
optgroup,
select,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
.md-form.md-outline label.active {
  transform: translateY(-13px) scale(0.8);
  background: #fff;
  font-weight: 500;
  padding-right: 5px;
  padding-left: 5px;
  left: 8px;
}
.md-form label:not(.form-check-label).active {
  max-width: 123%;
}
.md-form label.active {
  color: #757575;
}
.md-form.md-outline label {
  font-size: 1rem !important;
  position: absolute;
  top: 0;
  left: 0;
  padding-left: 10px;
  transition: transform 0.2s ease-out, color 0.2s ease-out,
    max-width 0.2 ease-out;
  transform-origin: 0 100%;
  transform: translateY(9px);
  cursor: text;
  color: #757575;
}
.md-form label:not(.form-check-label) {
  transition: transform 0.2s ease-out, color 0.2s ease-out,
    max-width 0.2s ease-out;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
}
.md-form label.active {
  transform: translateY(-14px) scale(0.8);
}
.md-form label.active {
  font-size: 1rem;
}
.md-form label {
  left: 0;
}
.md-form label {
  position: absolute;
  top: 0;
  font-size: 1rem;
  transition: transform 0.2s ease-out, color 0.2s ease-out;
  transform-origin: 0 100%;
  transform: translateY(12px);
  cursor: text;
  color: #757575;
}
label {
  display: inline-block;
  margin-bottom: 0.5rem;
}
.md-form input[type="date"] + label:after,
.md-form input[type="datetime-local"] + label:after,
.md-form input[type="email"] + label:after,
.md-form input[type="number"] + label:after,
.md-form input[type="password"] + label:after,
.md-form input[type="search-md"] + label:after,
.md-form input[type="search"] + label:after,
.md-form input[type="tel"] + label:after,
.md-form input[type="text"] + label:after,
.md-form input[type="time"] + label:after,
.md-form input[type="url"] + label:after,
.md-form textarea.md-textarea + label:after {
  content: "";
  position: absolute;
  top: 65px;
  display: block;
  opacity: 0;
  transition: opacity 0.2s ease-out, color 0.2s ease-out;
}
.btn-pink {
  background-color: #ec407a !important;
  color: #fff;
}
.btn-primary {
  background-color: #4285f4 !important;
  color: #fff;
}
.sub-button {
  display: inline-block;
  float: right;
  background: #e54d42;
  padding: 4px;
  box-shadow: 0 5px 15px 0px rgba(46, 61, 73, 0.1);
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
