 var d = new Date();
    var ora = d.getHours();
    var min = d.getMinutes();

    if (ora < 10)
        ora = "0" + ora;


    if (min < 10)
        min = "0" + min;

    var orario = ("" + ora + min);
    var orario = parseInt(orario);
    console.log(orario);
    var arr = new Array();

    $(document).ready(function() {
        $.ajax({
            type: "POST",
            url: "./php/functions.php",
            timeout: 100000,
            dataType: "html",

            success: function(result) {
                $("#commmonname").html(result);
                $("#list0").prepend("<li> <h2> Rai 1 </h2></li>");
                $("#list1").prepend("<li> <h2> Rai 2 </h2></li>");
                $("#list2").prepend("<li> <h2> Rai 3 </h2></li>");
                $("#list3").prepend("<li> <h2> Rete 4 </h2></li>");
                $("#list4").prepend("<li> <h2> Canale 5 </h2></li>");
                $("#list5").prepend("<li> <h2> Italia 1 </h2></li>");
                $("#list6").prepend("<li> <h2> La 7 </h2></li>");


                $(".list-group > li").addClass("list-group-item");
                var rai1 = document.getElementById('list0');
                $("#1").append(rai1);


                var rai2 = document.getElementById('list1');
                $("#2").append(rai2);

                var rai3 = document.getElementById('list2');
                $("#3").append(rai3);

                var rete4 = document.getElementById('list3');
                $("#4").append(rete4);

                var canale5 = document.getElementById('list4');
                $("#5").append(canale5);

                var italia1 = document.getElementById('list5');
                $("#6").append(italia1);

                var la7 = document.getElementById('list6');
                $("#7").append(la7);

                //length programs by channel
                var count0 = $("#list0 li span b").length;
                var count1 = $("#list1 li span b").length;
                var count2 = $("#list2 li span b").length;
                var count3 = $("#list3 li span b").length;
                var count4 = $("#list4 li span b").length;
                var count5 = $("#list5 li span b").length;
                var count6 = $("#list6 li span b").length;

                //Rai1 program live
                for (var i = 0; i < count0; i++) {
                    arr[i] = $("#list0 li span b").get(i).textContent.replace(':', '');
                }

                var closest = arr.reduce(function(prev, curr) {
                    return (Math.abs(curr - orario) < Math.abs(prev - orario) ? curr : prev);
                },0);
                var n = arr.indexOf(closest);
                var n = n + 1;
                $("#list0 li:eq(" + n + ")").css("background-color", "#ff9999");




                //Rai2 program live
                for (i = 0; i < count1; i++) {
                    arr[i] = $("#list1 li span b").get(i).textContent.replace(':', '');
                }

                var closest = arr.reduce(function(prev, curr) {
                    return (Math.abs(curr - orario) < Math.abs(prev - orario) ? curr : prev);
                },0);
                var n = arr.indexOf(closest);
                var n = n + 1;
                $("#list1 li:eq(" + n + ")").css("background-color", "#ff9999");

                
                //Rai3 program live
                for (i = 0; i < count2; i++) {
                    arr[i] = $("#list2 li span b").get(i).textContent.replace(':', '');
                }

                var closest = arr.reduce(function(prev, curr) {
                    return (Math.abs(curr - orario) < Math.abs(prev - orario) ? curr : prev);
                },0);
                var n = arr.indexOf(closest);
                var n = n + 1;
                $("#list2 li:eq(" + n + ")").css("background-color", "#ff9999");
                
                
                //Rete4 program live
                for (i = 0; i < count3; i++) {
                    arr[i] = $("#list3 li span b").get(i).textContent.replace(':', '');
                }

                var closest = arr.reduce(function(prev, curr) {
                    return (Math.abs(curr - orario) < Math.abs(prev - orario) ? curr : prev);
                },0);
                var n = arr.indexOf(closest);
                var n = n + 1;
                $("#list3 li:eq(" + n + ")").css("background-color", "#ff9999");


                
                //Canale5 program live
                for (i = 0; i < count4; i++) {
                    arr[i] = $("#list4 li span b").get(i).textContent.replace(':', '');
                }

                var closest = arr.reduce(function(prev, curr) {
                    return (Math.abs(curr - orario) < Math.abs(prev - orario) ? curr : prev);
                },0);
                var n = arr.indexOf(closest);
                var n = n + 1;
                $("#list4 li:eq(" + n + ")").css("background-color", "#ff9999");
                
                //Italia1 program live
                for (i = 0; i < count5; i++) {
                    arr[i] = $("#list5 li span b").get(i).textContent.replace(':', '');
                }

                var closest = arr.reduce(function(prev, curr) {
                    return (Math.abs(curr - orario) < Math.abs(prev - orario) ? curr : prev);
                },0);
                var n = arr.indexOf(closest);
                var n = n + 1;
                $("#list5 li:eq(" + n + ")").css("background-color", "#ff9999");
                
                //La7 program live
                for (i = 0; i < count6; i++) {
                    arr[i] = $("#list6 li span b").get(i).textContent.replace(':', '');
                }

                var closest = arr.reduce(function(prev, curr) {
                    return (Math.abs(curr - orario) < Math.abs(prev - orario) ? curr : prev);
                },0);
                var n = arr.indexOf(closest);
                var n = n + 1;
                $("#list6 li:eq(" + n + ")").css("background-color", "#ff9999");

                



            },
            error: function() {
                $("#guidetv").hide();
                $("#commmonname").html("Not work!");
                $('#commmonname').css('display', 'inline-block');
            }

        });
    });

if ('serviceWorker' in navigator) { navigator.serviceWorker.register('sw.js') .then(function(registration) { console.log('Registration successful, scope is:', registration.scope); }) .catch(function(error) { console.log('Service worker registration failed, error:', error); }); } 