import Sequelize from "sequelize";
import sequelize from "../../config/db/database.js";
import flowerShops from "./flowershops.models.js";

// CREATE TABLE Users (
//   userID SERIAL PRIMARY KEY,
//   username VARCHAR(50) NOT NULL,
//   password VARCHAR(255) NOT NULL,
//   fullName VARCHAR(255) NOT NULL,
//   phone VARCHAR(15) NOT NULL,
//   role VARCHAR(10) NOT NULL CHECK (role IN ('admin', 'owner', 'employee')),
//   idflowerShops INT,
//   FOREIGN KEY (idflowerShops) REFERENCES flowerShops(idflowerShops)
// );

const Users = sequelize.define
("users", {
  userid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  password: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  fullname: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING(15),
    allowNull: false
  },
  role: {
    type: Sequelize.STRING(10),
    allowNull: false
  },
  idflowershops: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: flowerShops,
      key: "idflowershops"
    }
  },
  state: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
}, {
  timestamps: false,
  freezeTableName: true,
});

export default Users;