dayjs.extend(dayjsPluginUTC.default);
dayjs.extend(preciseDiff);

/*                       Countdown 5May-1Jun Section Start                          */
{
    var eventTime, currentTime, duration;
    eventTime = dayjs.utc('2020-06-01T23:59:59-08:00').format();

    // based on time set in user's computer time / OS

    var x = setInterval(function () {

        currentTime = dayjs.utc().format();
        // get duration between two times
        duration = dayjs.preciseDiff(currentTime, eventTime, true);

        var days = duration.days;
        var hours = duration.hours;
        var minutes = duration.minutes;
        var seconds = duration.seconds;
        

        // If the count down is over, write some text
        if (duration.firstDateWasLater == true) {
            clearInterval(x);
            document.querySelector("time").innerHTML = "Event Ended";
        } else {

            document.querySelector("time").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        }
    }, 1000);
}
/*                       Countdown 5May-1Jun Section End                          */

/*                       Countdown 8May-1Jun Section Start                          */
{
    var eventTime2, currentTime2, duration2;
    eventTime2 = dayjs.utc('2020-06-01T23:59:59-08:00').format();

    // based on time set in user's computer time / OS

    var x2 = setInterval(function () {

        currentTime2 = dayjs.utc().format();
        // get duration between two times
        duration2 = dayjs.preciseDiff(currentTime2, eventTime2, true);

        var days2 = duration2.days;
        var hours2 = duration2.hours;
        var minutes2 = duration2.minutes;
        var seconds2 = duration2.seconds;

        // If the count down is over, write some text
        if (duration2.firstDateWasLater == true) {
            clearInterval(x2);
            document.querySelector("time2").innerHTML = "Event Ended";
        } else {

            document.querySelector("time2").innerHTML = days2 + "d " + hours2 + "h " + minutes2 + "m " + seconds2 + "s ";
        }
    }, 1000);
}
/*                       Countdown 8May-1Jun Section End                          */

/*                       Countdown 12May-13May Section Start                          */
{
    var eventTime3, currentTime3, duration3;
    eventTime3 = dayjs.utc('2020-05-13T23:59:59-08:00').format();

    // based on time set in user's computer time / OS

    var x3 = setInterval(function () {

        currentTime3 = dayjs.utc().format();
        // get duration between two times
        duration3 = dayjs.preciseDiff(currentTime3, eventTime3, true);

        var days3 = duration3.days;
        var hours3 = duration3.hours;
        var minutes3 = duration3.minutes;
        var seconds3 = duration3.seconds;
        

        // If the count down is over, write some text
        if (duration3.firstDateWasLater == true) {
            clearInterval(x3);
            document.querySelector("time3").innerHTML = "Event Ended";
        } else {

            document.querySelector("time3").innerHTML = days3 + "d " + hours3 + "h " + minutes3 + "m " + seconds3 + "s ";
        }
    }, 1000);
}
/*                       Countdown 12May-13May Section End                          */

/*                       Countdown 8May-13May Section Start                          */
{
    var eventTime4, currentTime4, duration4;
    eventTime4 = dayjs.utc('2020-05-13T23:59:59-08:00').format();

    // based on time set in user's computer time / OS

    var  x4= setInterval(function () {

        currentTime4 = dayjs.utc().format();
        // get duration between two times
        duration4 = dayjs.preciseDiff(currentTime4, eventTime4, true);

        var days4 = duration4.days;
        var hours4 = duration4.hours;
        var minutes4 = duration4.minutes;
        var seconds4 = duration4.seconds;


        // If the count down is over, write some text
        if (duration4.firstDateWasLater == true) {
            clearInterval(x4);
            document.querySelector("time4").innerHTML = "Event Ended";
        } else {

            document.querySelector("time4").innerHTML = days4 + "d " + hours4 + "h " + minutes4 + "m " + seconds4 + "s ";
        }
    }, 1000);
}
/*                       Countdown 8May-13May Section End                          */


/*                       Countdown 8May-15May Section Start                          */
{
    var eventTime5, currentTime5, duration5;
    eventTime5 = dayjs.utc('2020-05-15T23:59:59-08:00').format();

    // based on time set in user's computer time / OS

    var  x5= setInterval(function () {

        currentTime5 = dayjs.utc().format();
        // get duration between two times
        duration5 = dayjs.preciseDiff(currentTime5, eventTime5, true);

        var days5 = duration5.days;
        var hours5 = duration5.hours;
        var minutes5 = duration5.minutes;
        var seconds5 = duration5.seconds;

        // If the count down is over, write some text
        if (duration5.firstDateWasLater == true) {
            clearInterval(x5);
            document.querySelector("time5").innerHTML = "Event Ended";
        } else {

            document.querySelector("time5").innerHTML = days5 + "d " + hours5 + "h " + minutes5 + "m " + seconds5 + "s ";
        }
    }, 1000);
}
/*                       Countdown 8May-15May Section End                          */


/*                       Countdown 28Aprik-25May Section Start                          */
{
    var eventTime6, currentTime6, duration6;
    eventTime6 = dayjs.utc('2020-05-25T23:59:59-08:00').format();

    // based on time set in user's computer time / OS

    var  x6= setInterval(function () {

        currentTime6 = dayjs.utc().format();
        // get duration between two times
        duration6 = dayjs.preciseDiff(currentTime6, eventTime6, true);

        var days6 = duration6.days;
        var hours6 = duration6.hours;
        var minutes6 = duration6.minutes;
        var seconds6 = duration6.seconds;


        // If the count down is over, write some text
        if (duration6.firstDateWasLater == true) {
            clearInterval(x6);
            document.querySelector("time6").innerHTML = "Event Ended";
        } else {

            document.querySelector("time6").innerHTML = days6 + "d " + hours6 + "h " + minutes6 + "m " + seconds6 + "s ";
        }
    }, 1000);
}
/*                       Countdown 28April-25May Section End                          */


/*                       Countdown 5May-28May Section Start                          */
{
    var eventTime7, currentTime7, duration7;
    eventTime7 = dayjs.utc('2020-05-28T23:59:59-08:00').format();

    // based on time set in user's computer time / OS

    var  x7= setInterval(function () {

        currentTime7 = dayjs.utc().format();
        // get duration between two times
        duration7 = dayjs.preciseDiff(currentTime7, eventTime7, true);

        var days7 = duration7.days;
        var hours7 = duration7.hours;
        var minutes7 = duration7.minutes;
        var seconds7 = duration7.seconds;

        // If the count down is over, write some text
        if (duration7.firstDateWasLater == true) {
            clearInterval(x7);
            document.querySelector("time7").innerHTML = "Event Ended";
        } else {

            document.querySelector("time7").innerHTML = days7 + "d " + hours7 + "h " + minutes7 + "m " + seconds7 + "s ";
        }
    }, 1000);
}
/*                       Countdown 5May-28May Section End                          */


/*                       Countdown 5May-22May Section Start                          */
{
    var eventTime8, currentTime8, duration8;
    eventTime8 = dayjs.utc('2020-05-22T23:59:59-08:00').format();

    // based on time set in user's computer time / OS

    var  x8= setInterval(function () {

        currentTime8 = dayjs.utc().format();
        // get duration between two times
        duration8 = dayjs.preciseDiff(currentTime8, eventTime8, true);

        var days8 = duration8.days;
        var hours8 = duration8.hours;
        var minutes8 = duration8.minutes;
        var seconds8 = duration8.seconds;

        // If the count down is over, write some text
        if (duration8.firstDateWasLater == true) {
            clearInterval(x8);
            document.querySelector("time8").innerHTML = "Event Ended";
        } else {

            document.querySelector("time8").innerHTML = days8 + "d " + hours8 + "h " + minutes8 + "m " + seconds8 + "s ";
        }
    }, 1000);
}
/*                       Countdown 5May-22May Section End                          */


/*                       Countdown 8May-14May Section Start                          */
{
    var eventTime9, currentTime9, duration9;
    eventTime9 = dayjs.utc('2020-05-14T23:59:59-08:00').format();

    // based on time set in user's computer time / OS

    var  x9= setInterval(function () {

        currentTime9 = dayjs.utc().format();
        // get duration between two times
        duration9 = dayjs.preciseDiff(currentTime9, eventTime9, true);

        var days9 = duration9.days;
        var hours9 = duration9.hours;
        var minutes9 = duration9.minutes;
        var seconds9 = duration9.seconds;

        // If the count down is over, write some text
        if (duration9.firstDateWasLater == true) {
            clearInterval(x9);
            document.querySelector("time9").innerHTML = "Event Ended";
        } else {

            document.querySelector("time9").innerHTML = days9 + "d " + hours9 + "h " + minutes9 + "m " + seconds9 + "s ";
        }
    }, 1000);
}
/*                       Countdown 5May-14(21)May Section End                          */


/*                       Countdown 8May-14May Section Start                          */
{
    var eventTime9a, currentTime9a, duration9a;
    eventTime9a = dayjs.utc('2020-05-21T23:59:59-08:00').format();

    // based on time set in user's computer time / OS

    var  x9a= setInterval(function () {

        currentTime9a = dayjs.utc().format();
        // get duration between two times
        duration9a = dayjs.preciseDiff(currentTime9a, eventTime9a, true);

        var days9a = duration9a.days;
        var hours9a = duration9a.hours;
        var minutes9a = duration9a.minutes;
        var seconds9a = duration9a.seconds;

        // If the count down is over, write some text
        if (duration9a.firstDateWasLater == true) {
            clearInterval(x9a);
            document.querySelector("time9a").innerHTML = "Event Ended";
        } else {

            document.querySelector("time9a").innerHTML = days9a + "d " + hours9a + "h " + minutes9a + "m " + seconds9a + "s ";
        }
    }, 1000);
}
/*                       Countdown 5May-14(21)May Section End                          */


/*                       Countdown 8May-14May Section Start                          */
{
    var eventTime10, currentTime10, duration10;
    eventTime10 = dayjs.utc('2020-06-01T23:59:59-08:00').format();

    // based on time set in user's computer time / OS

    var  x10= setInterval(function () {

        currentTime10 = dayjs.utc().format();
        // get duration between two times
        duration10 = dayjs.preciseDiff(currentTime10, eventTime10, true);

        var days10 = duration10.days;
        var hours10 = duration10.hours;
        var minutes10 = duration10.minutes;
        var seconds10 = duration10.seconds;

        // If the count down is over, write some text
        if (duration10.firstDateWasLater == true) {
            clearInterval(x10);
            document.querySelector("time10").innerHTML = "Event Ended";
        } else {

            document.querySelector("time10").innerHTML = days10 + "d " + hours10 + "h " + minutes10 + "m " + seconds10 + "s ";
        }
    }, 1000);
}
/*                       Countdown 5May-14(21)May Section End                          */

