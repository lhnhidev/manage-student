import { students } from "./index.js";

students.forEach(student => {

  var removeBtn = student.querySelector('[id*=remove-]');

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
            // fetch ()
            var idStudent = (student.id).replace('student-', '');
            fetch ('http://localhost:3000/student' + `/${idStudent}`, {
              method: 'DELETE'
            })
              .then (response => response.json());      
            student.parentElement.removeChild(student);
          }
        });
  });
});