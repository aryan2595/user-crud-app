const { User, Sequelize } = require("../models/index");

exports.clearDeletedUser = async () => {
  try {
    const userCount = await User.destroy({
      force: true,
      where: {
        deletedAt: {
          [Sequelize.Op.not]: null,
        },
      },
    });

    if (userCount > 0) console.log(`${userCount} user(s) are deleted`);
    else console.log("No user found!");
  } catch (error) {
    console.log(error);
  }
};
