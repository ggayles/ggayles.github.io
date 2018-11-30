
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
                var ctx = document.getElementById("chart1");
                var chart1 = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: ["", ""],
                        datasets: [{
                            label: '# of Votes',
                            data: [85, 15],
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

                var ctx = document.getElementById("chart2");
                var chart2 = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: ["", ""],
                        datasets: [{
                            label: '# of Votes',
                            data: [63, 37],
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

                var ctx = document.getElementById("chart3");
                var chart3 = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: ["", ""],
                        datasets: [{
                            label: '# of Votes',
                            data: [30, 70],
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
