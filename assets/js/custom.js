$(document).ready(function(){
    $.getJSON("/assets/resume.json", function(data) {
        $("div#main div.main-profile").load("/components/profile.html", function() {
            $("img.profile-image").attr('src', data.header.image);
            $("h3.full-name").text(data.header.name);
            $("h4.role").text(data.header.role);
            $("h6.experience-in-it").text(data.header.experienceInIt);
            $("h6.experience-in-cs").text(data.header.experienceInCs);
        });

        $("div#secondary div.secondary-contact-details").load("/components/contact-details.html", function() {
            $("span.email").text(data.header.email);
            $("span.phone").text(data.header.phone);
            $("span.address").text(data.header.address);
            $("p.languages").text(data.header.languages);
        });

        $("div#main div.main-work-experiences").load("/components/work-experiences.html", function() {
            $.get("/components/sub/work-experience.html", function(workExperienceTemplate) {
                $.each(data.main.workExperiences, function(index, workExperience) {
                    var indexedClass = "work-experience-" + index;
                    $("div.experiences").append(workExperienceTemplate);
                    $("div.work-experience").attr('class', indexedClass);
                    $("." + indexedClass + " span.title").text(workExperience.title);
                    $("." + indexedClass + " span.company").text(workExperience.company);
                    $("." + indexedClass + " span.location-work").text(workExperience.locationWork);
                    $("." + indexedClass + " p.duration-work").text(workExperience.durationWork);
                    $.each(workExperience.responsibilities, function(_index, responsibility) {
                        $("." + indexedClass + " ul.responsibilities").append("<li>" + responsibility + "</li>");
                    });
                });
            });
        });

        $("div#main div.main-educations").load("/components/educations.html", function() {
            $.get("/components/sub/education.html", function(educationTemplate) {
                $.each(data.main.educations, function(index, education) {
                    var indexedClass = "education-" + index;
                    $("div.educations").append(educationTemplate);
                    $("div.education").attr('class', indexedClass);
                    $("." + indexedClass + " span.degree").text(education.degree);
                    $("." + indexedClass + " span.school").text(education.school);
                    $("." + indexedClass + " span.location-school").text(education.locationSchool);
                    $("." + indexedClass + " p.duration-school").text(education.durationSchool);
                    $.each(education.specializations, function(_index, specialization) {
                        $("." + indexedClass + " ul.specialization").append("<li>" + specialization + "</li>");
                    });
                });
            });
        });

        $("div#main div.main-certifications").load("/components/certificates.html", function() {
            $.each(data.main.certificates, function(_index, certificate) {
                $("div.certs ul.certifications").append("<li>" + certificate + "</li>");
            });
        });

        $("div#main div.main-courses").load("/components/courses.html", function() {
            $.get("/components/sub/course.html", function(courseTemplate) {
                $.each(data.main.courses, function(index, course) {
                    var indexedClass = "course-" + index;
                    $("div.courses").append(courseTemplate);
                    $("div.course").attr("class", indexedClass);
                    $("." + indexedClass + " p.course-name").text(course.name);
                    $.each(course.modules, function(_index, module) {
                        $("." + indexedClass + " ul.course-modules").append("<li>" + module + "</li>");
                    });
                });
            });
        });

        $("div#main div.main-computer-skills").load("/components/computerskills.html", function () {
            $.get("/components/sub/skill.html", function(skillTemplate) {
                $.each(data.main.computerSkills, function(index, computerSkill) {
                    var indexedClass = "skill-" + index; 
                    $("div.computer-skills").append(skillTemplate);
                    $("div.skill").attr("class", indexedClass);
                    $("." + indexedClass + " p.skill-name").text(computerSkill.skill);
                    $("." + indexedClass + " div.rating").attr({
                        'aria-valuenow': computerSkill.skillRating,
                        'style': 'width: ' + computerSkill.skillRating + '%'
                    });
                    $.each(computerSkill.skillDesc, function (_index, skill) {
                        $("." + indexedClass + " ul.skill-desc").append("<li>" + skill + "</li>");
                    });
                });
            });
        });
        
        $("div#main div.main-webdevelopment").load("/components/webskills.html", function () {
            $.get("/components/sub/webskill.html", function(webSkillTemplate) {
                $.each(data.main.webDevelopmentSkills, function(index, webDevelopmentSkill){
                    var indexedClass = "web-skill-" + index;
                    $("div.web-skills").append(webSkillTemplate);
                    $("div.web-skill").attr("class", indexedClass);
                    $("." + indexedClass + " p.web-skill-name").text(webDevelopmentSkill.technology);
                    $("." + indexedClass + " div.rating").attr({
                        'aria-valuenow': webDevelopmentSkill.rating,
                        'style': 'width: ' + webDevelopmentSkill.rating + '%'
                    });
                });
            });
        });

        $("div#main div.main-attributes").load("/components/attributes.html", function () {
            $.get("/components/sub/attribute.html", function(attributeTemplate) {
                $.each(data.main.attributes, function(index, attribute) {
                    var indexedClass = "attribute" + index;
                    $("div.attributes").append(attributeTemplate);
                    $("div.attribute").attr("class", indexedClass);
                    $("." + indexedClass + " p.attribute-name").text(attribute.attrName);
                    $("." + indexedClass + " p.attribute-desc").text(attribute.attrDesc);
                    $("." + indexedClass + " div.rating").attr({
                        'aria-valuenow': attribute.attrRating,
                        'style': 'width: ' + attribute.attrRating + '%'
                    });
                })
            });
        });

        $("div#main div.main-references").load("/components/references.html", function() {
            $("p.references-content").text(data.main.references);
        });
    });
});