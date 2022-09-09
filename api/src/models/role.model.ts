import { Model, DataTypes } from "sequelize";
import sequelize from "../sequelize";

export enum RoleName {
  adminRole = "adminRole",
  moderatorRole = "moderatorRole",
  userRole = "userRole",
}

export interface RoleModelProps extends Model {
  readonly id: number;
  roleName: RoleName;
}

const RoleModel = sequelize.define<RoleModelProps>("role", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  roleName: {
    type: DataTypes.ENUM,
    values: Object.values(RoleName),
    allowNull: false,
  },
});

export default RoleModel;
