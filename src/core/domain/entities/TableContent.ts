import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("_table_content", { schema: "makeshop" })
export class TableContent {
  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { primary: true, name: "table_name", length: 50 })
  tableName: string;

  @Column("varchar", { name: "simple_desc", nullable: true, length: 255 })
  simpleDesc: string | null;

  @Column("varchar", { name: "ip_address", nullable: true, length: 15 })
  ipAddress: string | null;

  @Column("datetime", { name: "update_time", nullable: true })
  updateTime: Date | null;
}
