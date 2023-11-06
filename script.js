//TO DO LIST//

let number = 0, text
$(function(){
    $('body').addClass(localStorage.getItem('themebody'))
    $('#icon').addClass(localStorage.getItem('themeIcon'))
    $('.themeItemDark').addClass(localStorage.getItem('themeItemDiv'))
    $('.themeIconDark').click(function(){
        $(this).toggleClass('themeIconLight')
        $('body').toggleClass('bodyLight')
        $('.themeItemDark').toggleClass('themeItemLight')
        localStorage.setItem('themeIcon', this.className)
        localStorage.setItem('themebody', $('body').attr('class'))
        localStorage.setItem('themeItemDiv', $('.themeItemDark').attr('class'))
    })
    $('#userText').focus(function(){
        $('#userText').css('boxShadow', '0 0 20px 5px rgba(128, 236, 207, 0.407')
    })
    $('#userText').blur(function(){
        $('#userText').css('boxShadow', 'none')
    })
    $('#btn').click(function(){
        number++
        text = $('#userText').val()
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Your work has been saved new item: <br> (${text})`,
            showConfirmButton: false,
            timer: 2000        
  })    
  localStorage.setItem(`item${number}`, text)  
        $('#userText').val('')
        $('<div>')
            .appendTo('#userItem')
            .attr('id', `div_${number}`)
        $('<input>')
            .appendTo(`#div_${number}`)
            .attr('type', 'checkbox')
            .attr('class', `${number}`)
        $('<p>')
            .appendTo(`#div_${number}`)
            .text(text)
            .attr('class', `${number}`)
        $('<img>')
            .appendTo(`#div_${number}`)
            .attr('src', './icon/delete_remove_trash_icon_245874 (1).png')
            .attr('class', `${number}`)
        $(`img`).click(function(){
            $(`div#div_${this.className}`).slideUp(400, function(){ $(this).remove();})
        })

        $('p').dblclick(function(){
            $('textarea').remove()
            $('#save').remove()
            let numberText = this.className
            $(this).hide()
            $(this).after(`<textarea>`)
            $('textarea')
                .after(`<input type=button value='Save' id='save'>`)
                .trigger('focus')   
            $('textarea').val($(this).text())
            $(`#save`).click(function(){
                console.log($('textarea').val())
                $('textarea').slideUp(100, function(){ $(this).remove();})
                $(this).slideUp(100, function(){ 
                    $(this).remove();
                    $('p').slideDown(400, function(){ $(this).show();})
                }) 
                $(`p.${numberText}`).text($('textarea').val())
            })

            // $('textarea').blur(function(){
            //     $(this).remove()
            //     $('#save').remove()
            //     $('p').slideDown(400, function(){ $(this).show();})
            //     $(`p.${numberText}`).text(itemText)
            // })     
        })

        $('input[type=checkbox]').click(function(){
            if($(this).is(':checked')) {
                $(`p.${this.className}`).addClass('done')
                $(`img.${this.className}`).addClass('imgDone')
            } else {
                $(`p.${this.className}`).removeClass('done')
                $(`img.${this.className}`).removeClass('imgDone')
            }
        })
        })     
})



