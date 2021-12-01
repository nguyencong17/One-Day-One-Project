let courseApi = 'http://localhost:3000/girls';
fetch(courseApi)
    .then(response => {return response.json()})
    .then(function(course){
        let htmls = course.map(function(item){  
            console.log(item.image);
            return `
            <div class="card course-item" style="width: 18rem;">
            <img src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.description}</p>
              <a href="#" class="btn btn-primary">Học ngay</a>
            </div>
          </div>
            `
        })

        let html = htmls.join('');
        document.getElementById('course-block').innerHTML = html;
    })