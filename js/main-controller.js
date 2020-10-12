function init() {
    createProjects();
    renderThumbnails();
}


function onThumbClicked(projId) {
    var projIdx = findProjIdx(projId);
    renderModal(projIdx);
}


function renderThumbnails() {
    gProjects.forEach((proj) => {
        renderThumnail(proj.title, proj.desc, proj.imgUrl, proj.id, proj.name);
    });
}


function renderThumnail(title, desc, imgUrl, id, name) {
    var strHtml = `        
    <div class="col-md-4 col-sm-6 portfolio-item" onclick="onThumbClicked(${id})">
    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal">
        <div class="portfolio-hover">
            <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
            </div>
        </div>
        <img class="img-fluid" src="img/portfolio/${name}-thumbnail.jpg" alt="">
    </a>
    <div class="portfolio-caption">
        <h4>${title}</h4>
        <p class="text-muted">${desc}</p>
    </div>
</div>
`;
    document.querySelector('.thumbs-section').innerHTML += strHtml;
}


function renderModal(projIdx) {
    var proj = getProj(projIdx);
    var strHtml = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl"></div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 mx-auto">
                            <div class="modal-body">
                                <!-- Project Details Go Here -->
                                <h2>${proj.title}</h2>
                                <p class="item-intro text-muted">${proj.intro}</p>
                                <img class="img-fluid d-block mx-auto" src="${proj.imgUrl}" alt="">
                                <p>${proj.desc}</p>
                                <ul class="list-inline">
                                    <li>Date: ${proj.publishedAt}</li>
                                    <li>Client: Threads</li>
                                    <li>Category: ${proj.labels}</li>
                                </ul>
                               <a href="${proj.projUrl}" target="_blank"> <button class="btn btn-primary" type="button">
                                Check It Out!</button></a>
                                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`;
    document.querySelector('.modal').innerHTML = strHtml;
}