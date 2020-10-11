var gProjects = [];
var gNextId = 1;

var proj1 = {
    name: 'Mine Sweeper',
    title: 'Find them all!',
    intro: 'Just dont blow yourself up please!',
    desc: 'find and mark all the mines in the shortest time possible',
    publishedAt: 'sep 2020',
    labels: ['html ', 'css ', 'js '],
    projUrl: './projects/mine-sweeper finel/index.html',
}

var proj2 = {
    name: 'Star Wars',
    title: 'May The Force Be With You',
    intro: 'A fan site for everyone',
    desc: 'Watch art gallery, play Quizes and much more!',
    publishedAt: 'sep 2020',
    labels: ['html ', 'css ', 'js '],
    projUrl: './projects/proj star wars/index.html',
}


function _getNewId() {
    return gNextId++;
}


function createProjects() {
    createProj(proj1.name, proj1.title, proj1.intro, proj1.desc, proj1.publishedAt, proj1.labels, proj1.projUrl);
    createProj(proj2.name, proj2.title, proj2.intro, proj2.desc, proj2.publishedAt, proj2.labels, proj2.projUrl);
}


function findProjIdx(projId) {
    var ProjIdx = gProjects.findIndex((proj) => {
        return proj.id === projId;
    });

    return ProjIdx;
}


function getProj(projIdx) {
    return gProjects[projIdx];
}


function createProj(name, title, intro, desc, publishedAt, labels, projUrl) {
    var proj = {
        id: _getNewId(),
        name,
        title,
        intro,
        desc,
        imgUrl: `img/portfolio/${name}.jpg`,
        publishedAt,
        labels,
        projUrl
    }
    gProjects.push(proj);
}