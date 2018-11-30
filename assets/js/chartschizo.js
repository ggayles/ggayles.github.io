



$(function() {

     var inView = false;
    // perform animations when chart comes into view. Source: Jsfiddle (http://jsfiddle.net/TSmDV/)
     function isScrolledIntoView(elem) {
         var docViewTop = $(window).scrollTop();
         var docViewBottom = docViewTop + $(window).height();

         var elemTop = $(elem).offset().top;
         var elemBottom = elemTop + $(elem).height();

         return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
     }

     $(window).scroll(function() {
         if (isScrolledIntoView('canvas')) {
             if (inView) {
                 return;
             }
             inView = true;
             var ctx = document.getElementById("chart4");
             var chart4 = new Chart(ctx, {
                 type: 'doughnut',
                 data: {
                     labels: ["", ""],
                     datasets: [{
                         label: '# of Votes',
                         data: [98.8, 1.2],
                         backgroundColor: [
                             'rgba(0, 0, 0, 1)',
                             'rgba(184, 233, 134, 1)',

                         ],
                         borderColor: [
                             'rgba(255, 255, 255, .5)',
                         ],
                         borderWidth: 1
                     }]
                 },
                 options: {
                     legend: {
                         display: false
                     }

                 }
             });

             var ctx = document.getElementById("chart5");
             var chart5 = new Chart(ctx, {
                 type: 'doughnut',
                 data: {
                     labels: ["", ""],
                     datasets: [{
                         label: '# of Votes',
                         data: [80, 20],
                         backgroundColor: [
                             'rgba(0, 0, 0, 1)',
                             'rgba(248, 231, 28, 1)',

                         ],
                         borderColor: [
                             'rgba(255, 255, 255, .5)',
                         ],
                         borderWidth: 1
                     }]
                 },
                 options: {
                     legend: {
                         display: false
                     }

                 }
             });

             var ctx = document.getElementById("chart6");
             var chart5 = new Chart(ctx, {
                 type: 'doughnut',
                 data: {
                     labels: ["", ""],
                     datasets: [{
                         label: '# of Votes',
                         data: [60, 40],
                         backgroundColor: [
                             'rgba(0, 0, 0, 1)',
                             'rgba(201, 73, 88, 1)',

                         ],
                         borderColor: [
                             'rgba(255, 255, 255, .5)',
                         ],
                         borderWidth: 1
                     }]
                 },
                 options: {
                     legend: {
                         display: false
                     }

                 }
             });
         } else {
             inView = false;
         }
     });

 });