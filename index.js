function resume(){
    let $intro = document.querySelector('.intro');
    let $one = $intro.querySelector('.viewOne');
    let $two = $intro.querySelector('viewTwo');
    let $demo = $intro.querySelector('.demo');
    let $four = $intro.querySelector('viewFour');
    let $edit = $intro.querySelector('.edit');

    $intro.addEventListener('click',function(event){
        let target = event.target;
        switch(true){
            case target.matches('.viewOne'):
                $edit.classList.add('show');
                break;
            case target.matches('.viewTwo'):
                $edit.classList.add('show');
                break;
            case target.matches('.demo'):
                $edit.classList.add('show');
                break;
            case target.matches('.viewFour'):
                $edit.classList.add('show');
                break;
            case target.matches('.fa-arrow-left'):
                $edit.classList.remove('show');
                break;
        }
    })
}

resume();