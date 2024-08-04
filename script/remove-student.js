import { students } from "./show-form-change.js";

students.forEach(student => {

  var removeBtn = student.querySelector('.btn-remove');

  removeBtn.addEventListener('click', () => {
      swal({
          title: "Bạn chắn chứ?",
          text: "Nếu xóa đi, bạn sẽ không thể khôi phục lại dữ liệu này!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            swal("Hoàn thành! Dữ liệu của bạn đã được xóa", {
              icon: "success",
            });
            student.parentElement.removeChild(student);
          }
        });
  });
});