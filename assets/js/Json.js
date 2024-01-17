
function abrirpaginas(){
    window.open('/parte06-p2.html','_self')};


    $(function(){seta()})

        function seta(){
                var link = '<script src="https://cdn.lordicon.com/lordicon.js"></script><lord-icon '
                +'src="https://cdn.lordicon.com/vduvxizq.json" trigger="hover" style="width:250px;height:250px" '
                +'onclick="abrirpaginas()"></lord-icon>';
                
                $("#btao").append(link)
         }