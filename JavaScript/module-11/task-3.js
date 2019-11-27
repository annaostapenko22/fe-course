// class CountdownTimer {
//   constructor(options) {
//     this.selector = options.selector;
//     this.targetDate = options.targetDate;
//     this.refs = {
//       month: document.querySelector(`${this.selector} [data-value = month]`),
//       days: document.querySelector(`${this.selector} [data-value = days]`),
//       hours: document.querySelector(`${this.selector} [data-value = hours]`),
//       mins: document.querySelector(`${this.selector} [data-value = mins]`),
//       secs: document.querySelector(`${this.selector} [data-value = secs]`)
//     };
//     setInterval(this.howManyDaysLeft.bind(this), 1000);
//   }
// якщо стрелочна функція, то без bind
//   howManyDaysLeft() {
//     console.log(this);
//     const now = new Date();
//     const currentMilliSeconds = now.getTime();
//     const targetMilliSeconds = this.targetDate.getTime();
//     let milliSecondsDifference = targetMilliSeconds - currentMilliSeconds;

//     const seconds = 1000;
//     const minutes = seconds * 60;
//     const hours = minutes * 60;
//     const days = hours * 24;
//     const months = days * 30;
//     let monthLeft = 0;
//     let daysLeft = 0;
//     let hoursLeft = 0;
//     let minutesLeft = 0;
//     let secondsLeft = 0;
//     if (milliSecondsDifference > months) {
//       monthLeft = Math.floor(milliSecondsDifference / months);
//       milliSecondsDifference = milliSecondsDifference % months;
//     }
//     if (milliSecondsDifference > days) {
//       daysLeft = Math.floor(milliSecondsDifference / days);
//       milliSecondsDifference = milliSecondsDifference % days;
//     }

//     if (milliSecondsDifference > hours) {
//       hoursLeft = Math.floor(milliSecondsDifference / hours);
//       milliSecondsDifference = milliSecondsDifference % hours;
//     }
//     if (milliSecondsDifference > minutes) {
//       minutesLeft = Math.floor(milliSecondsDifference / minutes);
//       milliSecondsDifference = milliSecondsDifference % minutes;
//     }
//     if (milliSecondsDifference > seconds) {
//       secondsLeft = Math.floor(milliSecondsDifference / seconds);
//       milliSecondsDifference = milliSecondsDifference % seconds;
//     }
//     this.refs.month.textContent = monthLeft;
//     this.refs.days.textContent = daysLeft;
//     this.refs.hours.textContent = hoursLeft;
//     this.refs.mins.textContent = minutesLeft;
//     this.refs.secs.textContent = secondsLeft;
//   }
// }

// new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("Dec 20, 2019")
// });
