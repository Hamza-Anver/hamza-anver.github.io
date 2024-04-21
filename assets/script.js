// Written from scratch as a JS exercise, which is why it's bad

function show() {
    document.getElementById('contact-form').classList.remove('hide');
    document.getElementById('contact-form-button').classList.add('hide');
    clearTimeout(buttontimeout);
    typing_anim(0, 'contact-form', "", 1, -1, -1,4);
}
function submit_contact_form() {
    document.getElementById('contact-form').className = 'hide';
    document.getElementById('contact-form-dialog').innerHTML = "<div class='terminal-alert terminal-alert-primary'>You should be redirected to formsubmit.co now</div>";
}

var buttontimeout;

function typing_anim(i = 0, elem_id = "", text = "", elem_speed = 50, elem_counter = 0, manager_delay = 100, elem_step=0) {
    if (text === "") {
        text = document.getElementById(elem_id).innerHTML
    }

    if (i === text.length + 1) {
        if (elem_counter == -1) return;
        //if(elem_counter==0) setTimeout(progress_bar,100);
        setTimeout(typing_manager, manager_delay, elem_counter);
        return;
    }
    document.getElementById(elem_id).innerHTML = text.slice(0, i);
    i++;
    if(elem_step!=0){
        i+=elem_step;
        i=Math.min(i,text.length+1);
    }
    buttontimeout=setTimeout(typing_anim, elem_speed, i, elem_id, text, elem_speed, elem_counter, elem_delay, elem_step);
}

var elem_anims = [
    ['init-prompt', 60, 400, 0],
    ['text-block-1', 2, 100, 6],
    ['text-block-2', 2, 100, 6],
    ['contact-form-button',100,100,0]

]

function typing_manager(elem_counter = -1) {

    if (elem_counter === elem_anims.length - 1) {
        elem_id = elem_anims[elem_counter][0];
        document.getElementById(elem_id).classList.remove('cursor');
        setTimeout(after_typing, 100);
        return;
    }

    if (elem_counter != -1) {
        elem_id = elem_anims[elem_counter][0];
        document.getElementById(elem_id).classList.remove('cursor');
    }

    elem_counter++;

    elem_id = elem_anims[elem_counter][0];
    elem_speed = elem_anims[elem_counter][1];
    elem_delay = elem_anims[elem_counter][2];
    elem_step = elem_anims[elem_counter][3];

    text = document.getElementById(elem_id).innerHTML;
    document.getElementById(elem_id).classList.add('cursor');
    document.getElementById(elem_id).classList.remove('hide');

    typing_anim(0, elem_id, text, elem_speed, elem_counter, elem_delay, elem_step);
}

function progress_bar(curr_progress = 0) {

    elem = document.getElementById('mock-bar-data');

    if (curr_progress >= 100) {
        setTimeout(hide_bar,800);
        return;
    }
    if (curr_progress === 0) {
        document.getElementById('mock-bar').classList.remove('hide');
    }
    elem.style.width = curr_progress + "%";
    elem.setAttribute("data-filled", curr_progress + "%");

    setTimeout(progress_bar, 50, curr_progress+10);
}


function hide_bar(){
    document.getElementById('mock-bar').classList.add('hide');
}

function after_typing() {
    document.getElementById('contact-form-button').classList.remove('hide');
    document.getElementById('close-prompt').classList.remove('hide');
}


if(true){    
    // Set things up for animation and button pressing here
    // Don't want it to not work if js is disabled
    document.getElementById('contact-form').classList.add('hide');
    document.getElementById('close-prompt').classList.add('hide');
    
    for (i = 0; i < elem_anims.length; i++) {
        document.getElementById(elem_anims[i][0]).classList.add('hide');
    }
    
    typing_manager();
}

const form = document.getElementById('contact-form');
form.addEventListener("keyup",() => {
    if(form.checkValidity()){
        document.getElementById("contact-submit").classList.remove('btn-ghost');
        document.getElementById("contact-submit").classList.remove('btn-error');
        document.getElementById("contact-submit").classList.add('btn-primary');
    }else{
        document.getElementById("contact-submit").classList.add('btn-ghost');
        document.getElementById("contact-submit").classList.add('btn-error');
        document.getElementById("contact-submit").classList.remove('btn-primary');
    }
});



