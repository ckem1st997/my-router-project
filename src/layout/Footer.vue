<template>
  <footer id="sticky-footer" class="py-4 text-white" style="background-color: #2a78bc;">
    <div class="text-center mb-3">
      <small>Copyright &copy; NHÓM 06</small>
    </div>
    <div class="text-center mb-3">
      <small>THIẾT KẾ WEB USING VUEJS 3</small>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="form-group">
            <i class="fas fa-database mb-3 me-1"></i>
            <label>THÀNH VIÊN</label>
          </div>
          <div class="form-group">
            <i class="fas fa-graduation-cap me-1"></i>
            <label>Nguyễn Khả Hợp</label>
          </div>
          <div class="form-group">
            <i class="fas fa-graduation-cap me-1"></i>
            <label>Nguyễn Thu Trang</label>
          </div>
          <div class="form-group">
            <i class="fas fa-graduation-cap me-1"></i>
            <label>Phạm Văn Hiếu</label>
          </div>
          <div class="form-group">
            <i class="fas fa-graduation-cap me-1"></i>
            <label>Bùi Lê Cảnh</label>
          </div>
          <div class="form-group">
            <i class="fas fa-graduation-cap me-1"></i>
            <label>Trần Duy Linh</label>
          </div>
        </div>

        <div class="col-6 text-end">
          <div class="form-group mb-3 ">
            <i class="fas fa-glass-cheers"></i> <label>LỚP</label>
          </div>
          <div class="form-group">
            <i class="fas fa-database  me-1"></i>
            <label> DCCTPM62C</label>
          </div>
          <div class="form-group">
            <i class="fas fa-database  me-1"></i>
            <label> DCCTPM62C</label>
          </div>
          <div class="form-group">
            <i class="fas fa-database  me-1"></i>
            <label> DCCTPM62C</label>
          </div>
          <div class="form-group">
            <i class="fas fa-database me-1"></i>
            <label> DCCTPM62C</label>
          </div>
          <div class="form-group">
            <i class="fas fa-database  me-1"></i>
            <label> DCCTPM62D</label>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  props: {
    msg: String,
  },
};
</script>
