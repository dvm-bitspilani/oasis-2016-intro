
function isChrome() {

	return navigator.userAgent.indexOf('Chrome')!=-1;

}

var clock;

        $(document).ready(function() {
            var currentDate = new Date();
            var futureDate = new Date(2016, 8, 15);
            var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
            clock = $('#clock').FlipClock(diff, {
                clockFace: 'DailyCounter',
                countdown: true
            });
        });

        setTimeout(function(){

        console.log('%c  Developers: Bhavesh Narra,Rajat Thakur  ','background: #4E250D; color: #fff');
        },2000);

        //Google analytics
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-9546354-1', 'auto');
        ga('send', 'pageview');