let items = document.getElementsByClassName('item')
    let points = document.getElementsByClassName('point')
    let preBtn = document.getElementById('left')
    let nextBtn = document.getElementById('right')
    let index = 0
    let time = 0
    // 清除原有的active样式
    function clearActive() {
      for(let i = 0;i < items.length;i++){
        items[i].className = 'item'
      }
      for(let i = 0;i < points.length;i++){
        points[i].className = 'point'
      }
    }
    function activeIndex() {
      clearActive()
      // console.log(index);
      points[index].className = 'point active'
      items[index].className = 'item active'
    }
    function goNext() {
      if(index < 2){
        index ++
      }else{
        index = 0
      }
      activeIndex()
    }
    function goPre() {
      if(index == 0){
        index = 2
      }else{
        index--
      }
      activeIndex()
    }
    preBtn.addEventListener('click',function() {
      goPre()
    })
    nextBtn.addEventListener('click',function() {
      goNext()
    })
    for (let i = 0; i < points.length; i++) {
      points[i].addEventListener('click',function(){
        let pointIndex = this.getAttribute('data-index')
        index = pointIndex
        activeIndex()
        time = 0
      })
      
    }
    setInterval(() => {
      time++
      if(time == 20){
        goNext();
        time = 0
      }
    }, 100);