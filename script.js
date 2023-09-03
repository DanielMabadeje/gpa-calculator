var courses = []
var coursesHtml = document.getElementById("courses");
var gpaHtml = document.getElementById("gpa");
var tcp = 0; //total credit point
var tnu = 0; //Totsal Number Of Units






   // Example starter JavaScript for disabling form submissions if there are invalid fields
   (function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          event.preventDefault();
          event.stopPropagation();
          addCourse(event, serializeData())
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();


  function serializeData() {
    data = {
        course_code : document.getElementsByName('course_code')[0].value ?? "Course 1",
        course_name : document.getElementsByName('course_name')[0].value ?? "",
        credit_load : document.getElementsByName('credit_load')[0].value,
        score : document.getElementsByName('score')[0].value,
        grade : document.getElementsByName('grade')[0].value  
    }
    return data;
  }


function calculateGPA() {
    for (let index = 0; index < courses.length; index++) {
        cu_gp = parseFloat(courses[index].credit_load) * parseFloat(courses[index].grade);
        tnu = tnu + parseFloat(courses[index].credit_load)
        tcp = parseFloat(tcp) + parseFloat(cu_gp);
        console.log(tcp, tnu, cu_gp)
    }
    gpaHtml.innerHTML = parseFloat(tcp/tnu);
}


function addCourse(event, course) {
    addtoCourses(course)
    addToCoursesHtml(course)

    $('form').get(0).reset()
}

function addToCoursesHtml(course) {
    html = `<tr>
                <th scope="row">1</th>
                <td>${course.course_code}</td>
                <td>${course.course_name}</td>
                <td>${course.credit_load}</td>
                <td>${course.score}</td>
                <td>${course.grade}</td>
            </tr>`
    coursesHtml.innerHTML += html;
}


function addtoCourses(object) {
    return courses.push(object);
}

function getPoint(grade) {
    switch (grade) {
        case "A":
            return 5;
            break;
        case "B":
            return 4;
            break;
        case "C":
            return 3;
            break;
        case "D":
            return 2;
            break;
        default:
            return 0;
            break;
    }
}