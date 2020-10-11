function initPage() {
    renderProjects();
}

function renderModal(projId) {
   console.log('getProjById', projId)
    var proj = getProjByName(projId);
    var htmlStr = '';
    htmlStr = `
    <div class="portfolio-modal modal fade" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal" onclick=onCloseModal();>
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
              
                <h2>${proj.name}</h2>
                <p class="item-intro text-muted">${proj.title}</p>
                <img class="rounded mx-auto d-block proj-img" src="img/portfolio/01-full.jpg" alt="">
                <p>${proj.desc}</p>
                <ul class="list-inline">
                  <li>Date: ${proj.publishedAt}</li>
                  <li>Category: Illustration</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button" onclick=onCloseModal()>
                    <i class="fa fa-times"></i>
                    Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
    document.querySelector('.modals').innerHTML = htmlStr;
    document.querySelector('.modal').classList.add('show');
}

function renderProjects() {
    //console.log('gProjects', gProjects);
    console.log('gProjects', gProjects);
    var htmlStr = '';
    htmlStr = gProjects.map(function (proj) {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" onclick=renderModal('${proj.name}');>
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${proj.name}</h4>
          <p class="text-muted">${proj.title}</p>
        </div>
      </div>`;
    });

    document.querySelector('.row-projects').innerHTML = htmlStr;
}


function onCloseModal() {
    document.querySelector('.modal').classList.remove('show');
}
