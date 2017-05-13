
var start_stop = document.getElementById('start');
var reset = document.getElementById('reset');
var outResult = document.getElementById('outResult');
var split = document.getElementById('split');
var outTime = document.getElementById('outTime');

//----------------------------------------------------------------------------------------------------------

function Timer(){
    var s = 0;
    var ml = 0;
    var h = 0;
    var m = 0;
    var numberResult = 1;
    var timer;
    var visible = false;
    
    function updateButton(button, Nfunc, Sfunc){
            button.removeEventListener('click', Sfunc);
            button.addEventListener('click', Nfunc);
    }
    
    function startWatch(){
        ml++;
        console.log('use');
        if(ml == 100){
            s++;
            ml = 0;
        }else if(s == 60){
            m++;
            s = 0;
        }else if(m == 60){
            h++;
        }
        update();
    }
    
    function addToResult(info){
        outResult.innerHTML += numberResult + info + ' - ' + outTime.innerHTML + '<br>';
        numberResult++;
    }
    
    
    this.split = function(){
        addToResult(' Split') ;
    }
    
    function update(){
        outTime.innerHTML =  formatTime(); 
    }
    
    function formatTime(){
       var  seconds = s.toString() ;
        var milliseconds = ml.toString() ;
        var hours = h.toString() ;
        var minutes = m.toString() ;
            if(seconds.length < 2){
                seconds = '0' + seconds;
            }
            
            if(minutes.length < 2){
                minutes = '0' + minutes;
            }if(milliseconds.length < 2){
                milliseconds = '0' + milliseconds;
            }
        return hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
        
    }
    
    this.stopWatch = function(){
        clearInterval(timer);
        if(visible){
            addToResult(' Stop');
        }
        updateButton(start_stop, watch.start);
        visible = false;
        start_stop.innerHTML = 'Start';
        formatTime();
    }
    this.start = function(){
        if(!visible){
                visible = true;
                timer = setInterval(startWatch, 10);
                updateButton(start_stop, watch.stopWatch, watch.start);
                start_stop.innerHTML = 'Stop';
                console.log(visible);
        }
    }
    
    this.reset = function(){
        clearInterval(timer);
        visible = false;
        updateButton(start_stop, watch.start, watch.stopWatch);
        start_stop.innerHTML = 'Start';
        s = 0;
        ml = 0;
        h = 0;
        m = 0;
        numberResult = 1;
        outResult.innerHTML = '';
        update();
    }
};

var watch = new Timer;


//----------------------------------------------------------------------------------------------------------
var switchColor = {
    colorChoose: function(color){
        document.body.style.background = color;
    },
    
    button_1: document.getElementById('color1').addEventListener('click', function(){
        switchColor.colorChoose('silver');
    })
}



start_stop.addEventListener('click', watch.start);
reset.addEventListener('click', watch.reset);
split.addEventListener('click', watch.split);
