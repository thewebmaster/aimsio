$(document).ready(function(){
    $.getJSON("/assets/resume.json", function(data) {
        console.log(data);
        $("div#main div.main-profile").load("/components/profile.html", function() {
            $("img.profile-image").attr('src', data.header.image);
            $("h3.full-name").append(data.header.name);
            $("h4.role").append(data.header.role);
            $("h6.experience-in-it").append(data.header.experienceInIt);
            $("h6.experience-in-cs").append(data.header.experienceInCs);
        });
        $("div#main div.main-work-experiences").load("/components/work-experiences.html", function() {
            $("div.experiences").load("/components/sub/work-experience.html");
        });
        $("div#main div.main-education").load("/components/education.html", function() {
            $("span.degree").append(data.education.degree);
            $("span.school").append(data.education.school);
        });

        }
        )
    });
);


