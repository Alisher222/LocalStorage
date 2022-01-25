// Отправляем в локал сторедж
// localStorage.setItem('student1','Aruuke')
// localStorage.setItem('student2','Sheradil')
// localStorage.setItem('count',21)

// // Получаем из локал стореджа

// let user = localStorage.getItem('student1')
// // alert(user)

// // Удаляем свойство
// localStorage.removeItem('count')

// // Очистка всего локал стореджа
// localStorage.clear()

// let input = document.getElementById('input')
// let btn = document.getElementById('btn')
// let output = document.getElementById('output')

// let h1 = document.createElement('h1')

// btn.addEventListener('click',()=>{
    // Получили значение инпута и отобразили в консоли==================
//     console.log(input.value)
// Значение инпута отправили в локал сторедж================
//     localStorage.setItem('name',input.value)
// а затем получили значение из локал сторедж========================================
//     let name = localStorage.getItem('name')
// и отобразили в h1======================
//     h1.innerHTML= name
//     output.append(h1)
//     input.value=''
// })

// let light = document.getElementById('button1')
// let dark = document.getElementById('button2')

// if(localStorage.getItem('color1')){
//     document.body.style.backgroundColor='black'
// }else{
//     document.body.style.backgroundColor='silver'
// }


// dark.addEventListener('click', ()=>{
//     if(localStorage.getItem('color2')=='light'){
//         document.body.style.backgroundColor='black'     
//     }
//     localStorage.removeItem('color2')
//   localStorage.setItem('color1', 'dark')
// })

// light.addEventListener('click', ()=>{
//     if(localStorage.getItem('color1')=='dark'){
//         document.body.style.backgroundColor='silver'     
//     }
//     localStorage.removeItem('color1')
//     localStorage.setItem('color2', 'light')
// })
