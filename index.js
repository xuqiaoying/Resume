function resume(){
    let $intro = document.querySelector('.intro');
    let $editOne = $intro.querySelector('.editOne');
    let $editTwo = $intro.querySelector('.editTwo');
    let $editDemo = $intro.querySelector('.editDemo');
    let $editFour = $intro.querySelector('.editFour');
    let $editFive = $intro.querySelector('.editFive');

    $intro.addEventListener('click',function(event){
        let target = event.target;
        switch(true){
            case target.matches('.viewOne'):
                $editOne.classList.add('show');
                break;
            case target.matches('.viewTwo'):
                $editTwo.classList.add('show');
                break;
            case target.matches('.demo'):
                $editDemo.classList.add('show');
                break;
            case target.matches('.viewFour'):
                $editFour.classList.add('show');
                break;
            case target.matches('.viewFive'):
                $editFive.classList.add('show');
                break;
            case target.matches('.fa-arrow-left'):console.log(target);
                $editOne.classList.remove('show');
                $editTwo.classList.remove('show');
                $editDemo.classList.remove('show');
                $editFour.classList.remove('show');
                $editFive.classList.remove('show');
                break;
            default:
                break;
        }
    })
}

resume();