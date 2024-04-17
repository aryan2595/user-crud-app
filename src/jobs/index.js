const cron = require("node-cron");

const { clearDeletedUser } = require("../controllers/jobController");

exports.initJob = () => {
  // * * * * * 1 MIN
  // 0 0 * * * 24 HOURS
  // 0 */2 * * * * 2 MIN
  // 30 0 * * * 12.30 AM (Midnight  )

  const schedule = cron.schedule("30 0 * * *", async () => {
    try {
      await clearDeletedUser();
    } catch (error) {
      console.log("Job error ", error);
    }
  });

  schedule.start();
};
