import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "usuarios",
  timestamps: false,
})
export class Usuario extends Model {

  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  usuario!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;
}