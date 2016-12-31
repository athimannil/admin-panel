angular
    .module('app')
    .controller('scheduleDayController', scheduleDayController);

function scheduleDayController($stateParams, scheduleService) {
    var $ctrl = this;
    console.clear();
    console.log("Schedule controller");
    console.log($stateParams);
    $ctrl.register = {};
    var thisDay = $stateParams.scheduleday;
    // console.log(moment(thisDay, "YYYY-MM-DD", true).isValid());

    if (moment(thisDay, "YYYY-MM-DD", true).isValid()) {
        console.log("it is valid date");

        $ctrl.register.doc_id = 1;
        $ctrl.register.date = thisDay;
        // $ctrl.register.db = {
        //     day: null,
        //     month: null,
        //     year: null
        // };

    } else {
        console.log("go back and choose valid date");
    }

    $ctrl.registerMe = function () {
        $ctrl.register.dob = moment(new Date($ctrl.register.db.day + ' ' + $ctrl.register.db.month + ' ' + $ctrl.register.db.year)).utc().format("YYYY-MM-DD");
        // var kooy = moment(new Date($ctrl.register.db.day + ' ' + $ctrl.register.db.month + ' ' + $ctrl.register.db.year)).utc().format("YYYY-MM-DD");
        // console.log(moment(kooy).isValid());

        // delete $ctrl.register.db;
        console.log("from controller");
        console.log($ctrl.register);
        update($ctrl.register);
    }

    function update(theData) {
        return updateSchedule(theData).then(function() {
            // logger.info('Activated Avengers View');
            console.log('update schedule');
        });
        function updateSchedule() {
            return scheduleService.updateSchedule(theData)
                .then(function(data) {
                  console.log(data);
                    // $ctrl.schedules = data;
                    // return $ctrl.schedules;
                });
        }
    }
// console.log("Validation => " + moment(thisDay, "YYYY-MM-DD", true).isAfter(moment(), 'day'));
// var yesterday = moment().subtract(1, 'day').format("YYYY-MM-DD");
// console.log("--------");
// console.log(yesterday);
// console.log("--------");
// console.log("Validation => " + moment(thisDay, "YYYY-MM-DD", true).isAfter( yesterday ) );  // Yesterday at 5:41 PM
// console.log( moment(thisDay).isAfter(new Date()) );
// console.log(moment().format("YYYY-MM-DD"));

}
