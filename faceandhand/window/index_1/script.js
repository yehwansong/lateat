
$(document).ready(function(){
//  setTimeout(function(){
//    window.location.reload(1);
// }, 500000);
})
var popup_1_1
var popup_1_2
var resized = false
         var popup_1_1_open = false
         var popup_1_1_shrink = false
         var popup_1_1_l = 10
         var popup_1_1_t = 10
         var popup_1_1_w = 10
         var popup_1_1_h = 10
         var popup_pre_1_l = 10
         var popup_pre_1_t = 10
         var popup_pre_1_w = 10
         var popup_pre_1_h = 10


         var popup_1_2_open = false
         var popup_1_2_shrink = false
         var popup_1_2_l = 10
         var popup_1_2_t = 10
         var popup_1_2_w = 10
         var popup_1_2_h = 10
         var popup_pre_2_l = 10
         var popup_pre_2_t = 10
         var popup_pre_2_w = 10
         var popup_pre_2_h = 10


         var popup_2_1_l = 0
         var popup_2_1_t = 0
         var popup_2_1_w = 0
         var popup_2_1_h = 0



         var popup_3_1_l = 0
         var popup_3_1_t = 0
         var popup_3_1_w = 0
         var popup_3_1_h = 0

         var popup_3_2_l = 0
         var popup_3_2_t = 0
         var popup_3_2_w = 0
         var popup_3_2_h = 0

        var standard
        var long_standard = 0
        var c_width 
        var counter_3 = 0
        var index_3 = 0

        var interaction_no = 0
var c_height

         var popup_3_1_open = false
         var popup_3_2_open = false

const controls = window;
const mpHolistic = window;
const drawingUtils = window;
const config = { locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic@` +
            `${mpHolistic.VERSION}/${file}`;
    } };
// Our input frames will come from here.
const videoElement = document.getElementsByClassName('input_video')[0];
const canvasElement = document.getElementsByClassName('output_canvas')[0];
const controlsElement = document.getElementsByClassName('control-panel')[0];
const canvasCtx = canvasElement.getContext('2d');
// We'll add this to our control panel later, but we'll save it here so we can
// call tick() each time the graph runs.
const fpsControl = new controls.FPS();
// Optimization: Turn off animated spinner after its hiding animation is done.
const spinner = document.querySelector('.loading');
spinner.ontransitionend = () => {
    spinner.style.display = 'none';
};
function removeElements(landmarks, elements) {
    for (const element of elements) {
        delete landmarks[element];
    }
}
function removeLandmarks(results) {
    if (results.poseLandmarks) {
        removeElements(results.poseLandmarks, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 16, 17, 18, 19, 20, 21, 22]);
    }
}
function connect(ctx, connectors) {
    const canvas = ctx.canvas;
    for (const connector of connectors) {
        const from = connector[0];
        const to = connector[1];
        if (from && to) {
            if (from.visibility && to.visibility &&
                (from.visibility < 0.1 || to.visibility < 0.1)) {
                continue;
            }
            ctx.beginPath();
            ctx.moveTo(from.x * canvas.width, from.y * canvas.height);
            ctx.lineTo(to.x * canvas.width, to.y * canvas.height);
            ctx.stroke();
        }
    }
}
let activeEffect = 'mask';
function onResults(results) {

          if(results.faceLandmarks && resized){
             standard = get_dis(results.faceLandmarks[386].x, results.faceLandmarks[374].x, results.faceLandmarks[386].y, results.faceLandmarks[374].y)
             if(long_standard  == 0 ){
                long_standard = get_dis(results.faceLandmarks[10].x, results.faceLandmarks[152].x, results.faceLandmarks[10].y, results.faceLandmarks[152].y)
                $('.container').css({'transform':'translateX(-50%) translateY(-50%) scale('+(window.innerHeight/long_standard) / 1500+')'})
                
            }
                $('.dot_lefteye').css({'left':(results.faceLandmarks[390].x*c_width)+'px'})
                $('.dot_lefteye').css({'top':(results.faceLandmarks[390].y*c_height)+'px'})
                $('.dot_righteye').css({'left':(results.faceLandmarks[163].x*c_width)+'px'})
                $('.dot_righteye').css({'top':(results.faceLandmarks[163].y*c_height)+'px'})
                $('.dot_1').css({'left':(results.faceLandmarks[13].x*c_width)+'px'})
                $('.dot_1').css({'top':(results.faceLandmarks[13].y* c_height)+'px'})
                $('.dot_2').css({'left':(results.faceLandmarks[14].x*c_width)+'px'})
                $('.dot_2').css({'top':(results.faceLandmarks[14].y* c_height)+'px'})
                $('.dot_3').css({'left':(results.faceLandmarks[61].x*c_width)+'px'})
                $('.dot_3').css({'top':(results.faceLandmarks[61].y* c_height)+'px'})
                $('.dot_4').css({'left':(results.faceLandmarks[291].x*c_width)+'px'})
                $('.dot_4').css({'top':(results.faceLandmarks[291].y* c_height)+'px'})
                $('.dot_227').css({'left':(results.faceLandmarks[227].x*c_width)+'px'})
                $('.dot_227').css({'top':(results.faceLandmarks[227].y* c_height)+'px'})
                $('.dot_447').css({'left':(results.faceLandmarks[447].x*c_width)+'px'})
                $('.dot_447').css({'top':(results.faceLandmarks[447].y* c_height)+'px'})




                popup_2_1_l = $('.dot_3').offset().left
                popup_2_1_t = $('.dot_1').offset().top
                popup_2_1_w = $('.dot_4').offset().left - $('.dot_3').offset().left
                popup_2_1_h = Math.abs($('.dot_1').offset().top - $('.dot_2').offset().top)
                $('.output_canvas').css({'transform':'translate('+(0.5-results.faceLandmarks[1].x)*c_width+'px, '+(0.5-results.faceLandmarks[1].y)*c_height+'px)'})
                $('.dot_wrapper').css({'transform':'translate('+(0.5-results.faceLandmarks[1].x)*c_width+'px, '+(0.5-results.faceLandmarks[1].y)*c_height+'px)'})
          }else{
            $('.container').css({'transform':'translateX(-50%) translateY(-50%) scale(1)'})
            $('.output_canvas').css({'transform':'translate(0px,0px)'})
            $('.dot_wrapper').css({'transform':'translate(0px,0px)'})
            long_standard = 0
          }
          if(results.leftHandLandmarks){
                $('.dot_leftfinger').each(function(){
                    move_dots(parseInt($(this).attr('class').split('dot_leftfinger_')[1]),'left',results)
                })

                if(
                    $('.dot_leftfinger_5').offset().top>$('.dot_leftfinger_8').offset().top&&
                    ((get_dis_pre(5,6,'left')<get_dis_pre(5,7,'left'))&&(get_dis_pre(5,6,'left')<get_dis_pre(5,8,'left'))) &&
                    ((get_dis_pre(13,14,'left')<get_dis_pre(13,15,'left'))&&(get_dis_pre(13,14,'left')<get_dis_pre(13,16,'left'))) &&
                    ((get_dis($('.dot_447').offset().left,$('.dot_leftfinger_5').offset().left,$('.dot_447').offset().top,$('.dot_leftfinger_5').offset().top)<get_dis($('.dot_447').offset().left,$('.dot_leftfinger_9').offset().left,$('.dot_447').offset().top,$('.dot_leftfinger_9').offset().top))&&(get_dis($('.dot_447').offset().left,$('.dot_leftfinger_5').offset().left,$('.dot_447').offset().top,$('.dot_leftfinger_5').offset().top)<get_dis($('.dot_447').offset().left,$('.dot_leftfinger_13').offset().left,$('.dot_447').offset().top,$('.dot_leftfinger_13').offset().top))&&(get_dis($('.dot_447').offset().left,$('.dot_leftfinger_5').offset().left,$('.dot_447').offset().top,$('.dot_leftfinger_5').offset().top)<get_dis($('.dot_447').offset().left,$('.dot_leftfinger_17').offset().left,$('.dot_447').offset().top,$('.dot_leftfinger_17').offset().top)))&&
                    ($('.dot_leftfinger_5').offset().left+window.innerHeight*0.2<$('.dot_leftfinger_17').offset().left)&&
                !popup_3_1_open
                ){
                    if(!popup_3_1_open){
                        popup_3_1_open = true
                        index_3++
                        $('body').append('<div class="popup popup_3_'+index_3+'"></div>')
                        popup_3_1_l =$('.dot_447').offset().left + get_dis($('.dot_leftfinger_5').offset().left,$('.dot_leftfinger_8').offset().left,$('.dot_leftfinger_5').offset().top,$('.dot_leftfinger_8').offset().top)/4
                        popup_3_1_t = $('.dot_447').offset().top - get_dis($('.dot_leftfinger_5').offset().left,$('.dot_leftfinger_8').offset().left,$('.dot_leftfinger_5').offset().top,$('.dot_leftfinger_8').offset().top)/2
                        popup_3_1_h = get_dis($('.dot_leftfinger_5').offset().left,$('.dot_leftfinger_8').offset().left,$('.dot_leftfinger_5').offset().top,$('.dot_leftfinger_8').offset().top)
                        if(!popup_1_1_open && !popup_1_2_open){
                                                movewindow_3(popup_3_1_l , popup_3_1_t , popup_3_1_h , index_3, 'left',0)
                                            }
                    }else{
                        popup_3_1_open = false
                    }
                }
                if($('.dot_leftfinger_5').offset().top<$('.dot_leftfinger_8').offset().top){
                    console.log('hey_2')
                    popup_3_1_open = false
                }
          }else{
            console.log('hey_2')
            popup_3_1_open = false
        }
          if(results.rightHandLandmarks){
                $('.dot_rightfinger').each(function(){
                    move_dots(parseInt($(this).attr('class').split('dot_rightfinger_')[1]),'right',results)
                })
                if(
                    $('.dot_rightfinger_5').offset().top>$('.dot_rightfinger_8').offset().top&&
                ((get_dis_pre(5,6,'right')<get_dis_pre(5,7,'right'))&&(get_dis_pre(5,6,'right')<get_dis_pre(5,8,'right'))) &&
                ((get_dis_pre(13,14,'right')<get_dis_pre(13,15,'right'))&&(get_dis_pre(13,14,'right')<get_dis_pre(13,16,'right'))) &&
                ((get_dis($('.dot_227').offset().left,$('.dot_rightfinger_5').offset().left,$('.dot_227').offset().top,$('.dot_rightfinger_5').offset().top)<get_dis($('.dot_227').offset().left,$('.dot_rightfinger_9').offset().left,$('.dot_227').offset().top,$('.dot_rightfinger_9').offset().top))&&(get_dis($('.dot_227').offset().left,$('.dot_rightfinger_5').offset().left,$('.dot_227').offset().top,$('.dot_rightfinger_5').offset().top)<get_dis($('.dot_227').offset().left,$('.dot_rightfinger_13').offset().left,$('.dot_227').offset().top,$('.dot_rightfinger_13').offset().top))&&(get_dis($('.dot_227').offset().left,$('.dot_rightfinger_5').offset().left,$('.dot_227').offset().top,$('.dot_rightfinger_5').offset().top)<get_dis($('.dot_227').offset().left,$('.dot_rightfinger_17').offset().left,$('.dot_227').offset().top,$('.dot_rightfinger_17').offset().top)))&&
                ($('.dot_rightfinger_5').offset().left>$('.dot_rightfinger_17').offset().left+window.innerHeight*0.2)&&
                !popup_3_2_open
                ){
                    if(!popup_3_2_open){
                        console.log('hey_1')
                        popup_3_2_open = true
                        index_3++
                        $('body').append('<div class="popup popup_3_'+index_3+'"></div>')
                            popup_3_2_l =$('.dot_227').offset().left - get_dis($('.dot_rightfinger_5').offset().left,$('.dot_rightfinger_8').offset().left,$('.dot_rightfinger_5').offset().top,$('.dot_rightfinger_8').offset().top)/4
                            popup_3_2_t = $('.dot_227').offset().top - get_dis($('.dot_rightfinger_5').offset().left,$('.dot_rightfinger_8').offset().left,$('.dot_rightfinger_5').offset().top,$('.dot_rightfinger_8').offset().top)/2
                            popup_3_2_h = get_dis($('.dot_rightfinger_5').offset().left,$('.dot_rightfinger_8').offset().left,$('.dot_rightfinger_5').offset().top,$('.dot_rightfinger_8').offset().top)
                            movewindow_3(popup_3_2_l , popup_3_2_t , popup_3_2_h , index_3, 'right',0)
                    }else{
                        console.log('hey_2')
                        popup_3_2_open = false
                    }
                }
                if($('.dot_rightfinger_5').offset().top<$('.dot_rightfinger_8').offset().top){
                    console.log('hey_2')
                    popup_3_2_open = false
                }
        }else{
            console.log('hey_2')
            popup_3_2_open = false
        }

        if(results.faceLandmarks && results.leftHandLandmarks){
            if(get_dis(results.faceLandmarks[390].x, results.leftHandLandmarks[8].x, results.faceLandmarks[390].y,  results.leftHandLandmarks[8].y)<standard*1.5){
                if(!popup_1_1_open && !popup_3_1_open && !popup_3_2_open){
                    popup_1_1_open = true
                    movewindow_1(1)
                }else{

                }
            }
        }
        if(results.faceLandmarks && results.rightHandLandmarks){
            if(get_dis(results.faceLandmarks[163].x,results.rightHandLandmarks[8].x, results.faceLandmarks[163].y, results.rightHandLandmarks[8].y)<standard*1.5){
                if(!popup_1_2_open && !popup_3_1_open && !popup_3_2_open){
                    popup_1_2_open = true
                    movewindow_1(2)
                }
            }
        }
        if(results.faceLandmarks){
            if(get_dis(results.faceLandmarks[13].x,results.faceLandmarks[14].x, results.faceLandmarks[13].y, results.faceLandmarks[14].y)<standard){
                shrink_window_2()
            }else{
                movewindow_2()
            }
            }


    document.body.classList.add('loaded');
    removeLandmarks(results);
    fpsControl.tick();
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    if (results.segmentationMask) {
        canvasCtx.drawImage(results.segmentationMask, 0, 0, canvasElement.width, canvasElement.height);
        // Only overwrite existing pixels.
        if (activeEffect === 'mask' || activeEffect === 'both') {
            canvasCtx.globalCompositeOperation = 'source-in';
            // This can be a color or a texture or whatever...
            canvasCtx.fillStyle = '#00FF007F';
            canvasCtx.fillRect(0, 0, canvasElement.width, canvasElement.height);
        }
        else {
            canvasCtx.globalCompositeOperation = 'source-out';
            canvasCtx.fillStyle = '#0000FF7F';
            canvasCtx.fillRect(0, 0, canvasElement.width, canvasElement.height);
        }
        // Only overwrite missing pixels.
        canvasCtx.globalCompositeOperation = 'destination-atop';
        canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);
        canvasCtx.globalCompositeOperation = 'source-over';
    }
    else {
        canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);
    }
    canvasCtx.lineWidth = 5;
    if (results.poseLandmarks) {
        if (results.rightHandLandmarks) {
            canvasCtx.strokeStyle = 'white';
            connect(canvasCtx, [[
                    results.poseLandmarks[mpHolistic.POSE_LANDMARKS.RIGHT_ELBOW],
                    results.rightHandLandmarks[0]
                ]]);
        }
        if (results.leftHandLandmarks) {
            canvasCtx.strokeStyle = 'white';
            connect(canvasCtx, [[
                    results.poseLandmarks[mpHolistic.POSE_LANDMARKS.LEFT_ELBOW],
                    results.leftHandLandmarks[0]
                ]]);
        }
    }
    canvasCtx.restore();
}



function movewindow_1(index){
        if(index == 1){
            if(popup_pre_1_w>99){
                popup_1_1_l = (Math.min($('.dot_lefteye').offset().left,$('.dot_leftfinger_8').offset().left)+popup_pre_1_l)/2
                popup_1_1_t = (Math.min($('.dot_lefteye').offset().top,$('.dot_leftfinger_8').offset().top)+popup_pre_1_t)/2
                popup_1_1_w = (Math.abs($('.dot_lefteye').offset().left - $('.dot_leftfinger_8').offset().left)+popup_pre_1_w)/2
                popup_1_1_h = (Math.abs($('.dot_lefteye').offset().top - $('.dot_leftfinger_8').offset().top)+popup_pre_1_h)/2
            }else{
                popup_1_1_l = Math.min($('.dot_lefteye').offset().left,$('.dot_leftfinger_8').offset().left)
                popup_1_1_t = Math.min($('.dot_lefteye').offset().top,$('.dot_leftfinger_8').offset().top)
                popup_1_1_w = Math.abs($('.dot_lefteye').offset().left - $('.dot_leftfinger_8').offset().left)
                popup_1_1_h = Math.abs($('.dot_lefteye').offset().top - $('.dot_leftfinger_8').offset().top)
            }
        popup_1_1_w = Math.min(Math.max(popup_1_1_w,100),600)
    
        popup_pre_1_l = popup_1_1_l
        popup_pre_1_t = popup_1_1_t
        popup_pre_1_w = popup_1_1_w
        popup_pre_1_h = popup_1_1_h
    
          $('.popup_1_1').css({'left':popup_1_1_l + 'px'})
          $('.popup_1_1').css({'top':popup_1_1_t + 'px'})
          $('.popup_1_1').css({'width':popup_1_1_w + 'px'})
          $('.popup_1_1').css({'height':popup_1_1_h + 'px'})
        }
        if(index == 2){
        if(popup_pre_2_w>99){
            popup_1_2_l = (Math.min($('.dot_righteye').offset().left,$('.dot_rightfinger_8').offset().left)+popup_pre_2_l)/2
            popup_1_2_t = (Math.min($('.dot_righteye').offset().top,$('.dot_rightfinger_8').offset().top)+popup_pre_2_t)/2
            popup_1_2_w = (Math.abs($('.dot_righteye').offset().left - $('.dot_rightfinger_8').offset().left)+popup_pre_2_w)/2
            popup_1_2_h = (Math.abs($('.dot_righteye').offset().top - $('.dot_rightfinger_8').offset().top)+popup_pre_2_h)/2
        }else{
            popup_1_2_l = Math.min($('.dot_righteye').offset().left,$('.dot_rightfinger_8').offset().left)
            popup_1_2_t = Math.min($('.dot_righteye').offset().top,$('.dot_rightfinger_8').offset().top)
            popup_1_2_w = Math.abs($('.dot_righteye').offset().left - $('.dot_rightfinger_8').offset().left)
            popup_1_2_h = Math.abs($('.dot_righteye').offset().top - $('.dot_rightfinger_8').offset().top)
        }
        popup_1_2_w = Math.min(Math.max(popup_1_2_w,100),600)
    
        popup_pre_2_l = popup_1_2_l
        popup_pre_2_t = popup_1_2_t
        popup_pre_2_w = popup_1_2_w
        popup_pre_2_h = popup_1_2_h
    
          $('.popup_1_2').css({'left':popup_1_2_l + 'px'})
          $('.popup_1_2').css({'top':popup_1_2_t + 'px'})
          $('.popup_1_2').css({'width':popup_1_2_w + 'px'})
          $('.popup_1_2').css({'height':popup_1_2_h + 'px'})
        }
      setTimeout(function(){
        if(index == 1 && popup_1_1_open){
            if(popup_1_1_h<(long_standard*window.innerHeight*0.85)){
                movewindow_1(index)
            }else{
                shrink_window_1(index)
            }
        }
        if(index == 2 && popup_1_2_open){
            if(popup_1_2_h<(long_standard*window.innerHeight*0.85)){
                movewindow_1(index)
            }else{
                shrink_window_1(index)
            }
        }
    },50)
}
function shrink_window_1(index){
        if(index == 1 && popup_1_1_open){
            popup_1_1_shrink = true
            $('.popup_1_1').addClass('animate')
            $('.popup_1_1').css({'height':'0px'})
            popup_pre_1_l = 10
            popup_pre_1_t = 10
            popup_pre_1_w = 10
            popup_pre_1_h = 10
            setTimeout(function(){ 
                popup_1_1_shrink = false
                popup_1_1_open = false
                $('.popup_1_1').removeClass('animate')
             },1000)
        }
        if(index == 2 && popup_1_2_open){
            popup_1_2_shrink = true
            $('.popup_1_2').addClass('animate')
            $('.popup_1_2').css({'height':'0px'})
            popup_pre_2_l = 10
            popup_pre_2_t = 10
            popup_pre_2_w = 10
            popup_pre_2_h = 10
            setTimeout(function(){ 
                popup_1_2_shrink = false
                popup_1_2_open = false
            $('.popup_1_2').removeClass('animate')
             },1000)
        }
}
function shrink_window_2(){
            $('.popup_2_1').addClass('animate')
            $('.popup_2_1').css({'height':'0px'})
            popup_2_1_l = 0
            popup_2_1_t = 0
            popup_2_1_w = 0
            popup_2_1_h = 0
            setTimeout(function(){ 
                $('.popup_2_1').removeClass('animate')
             },1000)
}
function movewindow_2(){
      $('.popup_2_1').css({'left':popup_2_1_l + 'px'})
      $('.popup_2_1').css({'top':popup_2_1_t + 'px'})
      $('.popup_2_1').css({'width':popup_2_1_w + 'px'})
      $('.popup_2_1').css({'height':popup_2_1_h + 'px'})
}

            function movewindow_3(popup_l , popup_t , popup_h , index_3 , side , counter){
                counter = counter+25

                    if(side === 'left'){
                  $('.popup_3_'+index_3).css({'left':popup_l + 'px'})
                  $('.popup_3_'+index_3).css({'top':popup_t + 'px'})
                  $('.popup_3_'+index_3).css({'width':counter + 'px'})
                  $('.popup_3_'+index_3).css({'height':popup_h + 'px'})
                    }else{
                  $('.popup_3_'+index_3).css({'left':(popup_l-counter) + 'px'})
                  $('.popup_3_'+index_3).css({'top':popup_t + 'px'})
                  $('.popup_3_'+index_3).css({'width':counter + 'px'})
                  $('.popup_3_'+index_3).css({'height':popup_h + 'px'})
                    }
                  setTimeout(function(){
                    if(side === 'left'){
                        if(popup_3_1_open){
                            movewindow_3(popup_l , popup_t , popup_h , index_3,side,counter)
                        }else{
                            shrink_window_3(popup_l , popup_t , popup_h , index_3,side,0)
                        }
                    }
                    if(side === 'right'){
                        if(popup_3_2_open){
                            movewindow_3(popup_l , popup_t , popup_h , index_3,side,counter)
                        }else{
                            shrink_window_3(popup_l-counter , popup_t , popup_h , index_3,side,0)
                        }
                    }
                },50)
            }
            function shrink_window_3(popup_l , popup_t , popup_h , index_3 , side , counter){
                counter = counter+25
                    if(side === 'left'){
                          $('.popup_3_'+index_3).css({'left':(popup_l+counter) + 'px'})
                          $('.popup_3_'+index_3).css({'top':popup_t + 'px'})
                          $('.popup_3_'+index_3).css({'height':popup_h + 'px'})
                    }else{
                          $('.popup_3_'+index_3).css({'left':(popup_l-counter) + 'px'})
                          $('.popup_3_'+index_3).css({'top':popup_t + 'px'})
                          $('.popup_3_'+index_3).css({'height':popup_h + 'px'})
                    }
                  setTimeout(function(){
                    if(counter < 3000){
                        shrink_window_3(popup_l , popup_t , popup_h , index_3 , side , counter)
                    }else{

                    }
                },50)
            }
            function move_dots(num,side,results){
                if(side === 'left'){
                    $('.dot_leftfinger_'+num).css({'left':(results.leftHandLandmarks[num].x*c_width)+'px'})
                    $('.dot_leftfinger_'+num).css({'top': (results.leftHandLandmarks[num].y*c_height)+'px'})
                }else{
                    $('.dot_rightfinger_'+num).css({'left':(results.rightHandLandmarks[num].x*c_width)+'px'})
                    $('.dot_rightfinger_'+num).css({'top': (results.rightHandLandmarks[num].y*c_height)+'px'})
                }
            }


            function get_dis_pre(num1,num2,side){
                return get_dis($('.dot_'+side+'finger_'+num1).offset().left,$('.dot_'+side+'finger_'+num2).offset().left,$('.dot_'+side+'finger_'+num1).offset().top,$('.dot_'+side+'finger_'+num2).offset().top)
            }

function get_dis(x1, x2, y1, y2){
    var a = x1 - x2;
    var b = y1 - y2;

    return Math.abs(Math.sqrt( a*a + b*b ));
}












$(document).ready(function(){
    resize()
    // setTimeout(function(){
    //     $('.whole').css({'transform': 'scaleX(-1)'})
    // },3000)
})
function resize(){
    c_width =$('.output_canvas').outerWidth()
    c_height =$('.output_canvas').outerHeight()
        $('.dot_wrapper').css({'width':c_width+'px'})
        $('.dot_wrapper').css({'height':c_height+'px'})
        $('.dot_wrapper').css({'left':$('canvas').offset().left+'px'})
        $('.dot_wrapper').css({'top':$('canvas').offset().top+'px'})
        if(c_width == 1280){
            setTimeout(function(){
                resize()
            },1000)
        }else{
            resized = true
        }
}





const holistic = new mpHolistic.Holistic(config);
holistic.onResults(onResults);
// Present a control panel through which the user can manipulate the solution
// options.
new controls
    .ControlPanel(controlsElement, {
    selfieMode: true,
    modelComplexity: 1,
    smoothLandmarks: true,
    enableSegmentation: false,
    smoothSegmentation: true,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5,
    effect: 'background',
})
    .add([
    new controls.StaticText({ title: 'MediaPipe Holistic' }),
    fpsControl,
    new controls.Toggle({ title: 'Selfie Mode', field: 'selfieMode' }),
    new controls.SourcePicker({
        onSourceChanged: () => {
            // Resets because the pose gives better results when reset between
            // source changes.
            holistic.reset();
        },
        onFrame: async (input, size) => {
            const aspect = size.height / size.width;
            let width, height;
            if (window.innerWidth > window.innerHeight) {
                height = window.innerHeight;
                width = height / aspect;
            }
            else {
                width = window.innerWidth;
                height = width * aspect;
            }
            canvasElement.width = width;
            canvasElement.height = height;
            await holistic.send({ image: input });
        },
    }),
    new controls.Slider({
        title: 'Model Complexity',
        field: 'modelComplexity',
        discrete: ['Lite', 'Full', 'Heavy'],
    }),
    new controls.Toggle({ title: 'Smooth Landmarks', field: 'smoothLandmarks' }),
    new controls.Toggle({ title: 'Enable Segmentation', field: 'enableSegmentation' }),
    new controls.Toggle({ title: 'Smooth Segmentation', field: 'smoothSegmentation' }),
    new controls.Slider({
        title: 'Min Detection Confidence',
        field: 'minDetectionConfidence',
        range: [0, 1],
        step: 0.01
    }),
    new controls.Slider({
        title: 'Min Tracking Confidence',
        field: 'minTrackingConfidence',
        range: [0, 1],
        step: 0.01
    }),
    new controls.Slider({
        title: 'Effect',
        field: 'effect',
        discrete: { 'background': 'Background', 'mask': 'Foreground' },
    }),
])
    .on(x => {
    const options = x;
    videoElement.classList.toggle('selfie', options.selfieMode);
    activeEffect = x['effect'];
    holistic.setOptions(options);
});




